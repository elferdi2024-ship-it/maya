import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Camera, CheckCircle, AlertTriangle, RefreshCw, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { validateImageWithGemini, ValidationResult } from '../../lib/gemini';
import { savePhotoLocally, PendingPhoto } from '../../lib/db';
import { syncPendingPhotos } from '../../lib/sync';

interface CameraCaptureProps {
  tourId: string;
  userId: string;
  onCaptureSuccess?: () => void;
}

export const CameraCapture: React.FC<CameraCaptureProps> = ({ tourId, userId, onCaptureSuccess }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [orientation, setOrientation] = useState({ alpha: 0, beta: 0, gamma: 0 });
  const [isLevel, setIsLevel] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  // Start Camera
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } }
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  // Device Orientation Listener
  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    const { alpha, beta, gamma } = event;
    if (beta !== null && gamma !== null) {
      setOrientation({ alpha: alpha || 0, beta, gamma });
      
      // Check if device is held vertically (portrait) and leveled at 90 degrees
      // Beta is front-to-back tilt (-180 to 180). 90 is straight up.
      // Gamma is left-to-right tilt (-90 to 90). 0 is straight up.
      const isBetaLevel = Math.abs(beta - 90) < 5 || Math.abs(beta + 90) < 5;
      const isGammaLevel = Math.abs(gamma) < 5;
      
      setIsLevel(isBetaLevel && isGammaLevel);
    }
  }, []);

  const requestOrientationPermission = async () => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permissionState = await (DeviceOrientationEvent as any).requestPermission();
        if (permissionState === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation);
          setPermissionGranted(true);
        }
      } catch (error) {
        console.error("Orientation permission error:", error);
      }
    } else {
      // Non-iOS 13+ devices
      window.addEventListener('deviceorientation', handleOrientation);
      setPermissionGranted(true);
    }
    startCamera();
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [stream, handleOrientation]);

  const capturePhoto = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setCapturing(true);
    setValidation(null);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Get Base64 for Gemini
    const base64Image = canvas.toDataURL('image/jpeg', 0.8);
    
    // Get Blob for IndexedDB/Storage
    canvas.toBlob(async (blob) => {
      if (!blob) return;

      try {
        // 1. Validate with Gemini
        const result = await validateImageWithGemini(base64Image);
        setValidation(result);

        // 2. Save locally
        const photoId = `photo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const pendingPhoto: PendingPhoto = {
          id: photoId,
          tourId,
          userId,
          blob,
          metadata: {
            room: result.detectedRoom,
            sharpness: result.sharpnessScore,
            timestamp: Date.now(),
            orientation
          },
          status: 'pending'
        };

        await savePhotoLocally(pendingPhoto);
        
        // 3. Attempt Sync
        syncPendingPhotos();

        if (onCaptureSuccess) {
          onCaptureSuccess();
        }
      } catch (error) {
        console.error("Capture process failed:", error);
      } finally {
        setCapturing(false);
      }
    }, 'image/jpeg', 0.8);
  };

  return (
    <div className="relative w-full h-[600px] bg-black rounded-xl overflow-hidden flex flex-col items-center justify-center">
      {!permissionGranted ? (
        <div className="text-center p-6">
          <Smartphone className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Permisos de Cámara y Sensores</h3>
          <p className="text-gray-400 mb-6 max-w-sm">
            Barrio 360 requiere acceso a tu cámara y giroscopio para asegurar capturas perfectamente niveladas.
          </p>
          <button 
            onClick={requestOrientationPermission}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Conceder Permisos
          </button>
        </div>
      ) : (
        <>
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            muted 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <canvas ref={canvasRef} className="hidden" />

          {/* Leveling UI */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Crosshair */}
            <div className="relative w-32 h-32">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/30 -translate-y-1/2" />
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white/30 -translate-x-1/2" />
              
              {/* Dynamic Level Indicator */}
              <motion.div 
                className={`absolute top-1/2 left-1/2 w-8 h-8 rounded-full border-2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ${isLevel ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20'}`}
                animate={{
                  x: `${(orientation.gamma || 0) * 2}px`,
                  y: `${((orientation.beta || 90) - 90) * 2}px`
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center">
            {validation && (
              <div className={`mb-4 p-3 rounded-lg backdrop-blur-md flex items-center gap-3 ${validation.isSharp ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                {validation.isSharp ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                <div className="text-sm">
                  <p className="font-bold">{validation.detectedRoom} ({validation.sharpnessScore}%)</p>
                  {!validation.isSharp && <p className="text-xs opacity-80">{validation.feedback}</p>}
                </div>
              </div>
            )}

            <button
              onClick={capturePhoto}
              disabled={!isLevel || capturing}
              className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all ${
                !isLevel ? 'border-gray-500 bg-gray-500/50 cursor-not-allowed' : 
                capturing ? 'border-blue-500 bg-blue-500/50 animate-pulse' : 
                'border-white bg-white/20 hover:bg-white/40'
              }`}
            >
              {capturing ? <RefreshCw className="w-8 h-8 text-white animate-spin" /> : <Camera className="w-8 h-8 text-white" />}
            </button>
            <p className="text-white/70 text-sm mt-3 font-medium">
              {!isLevel ? 'Nivela el dispositivo para capturar' : 'Listo para capturar'}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
