import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CameraCapture } from '../components/barrio360/CameraCapture';
import { getPendingPhotos, PendingPhoto } from '../lib/db';
import { syncPendingPhotos, setupAutoSync } from '../lib/sync';
import { CloudOff, CloudUpload, CheckCircle, AlertCircle, Lock } from 'lucide-react';

export const Barrio360 = () => {
  const [isPremium, setIsPremium] = useState(true); // Mock premium status
  const [pendingPhotos, setPendingPhotos] = useState<PendingPhoto[]>([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const loadPhotos = async () => {
    const photos = await getPendingPhotos();
    setPendingPhotos(photos);
  };

  useEffect(() => {
    loadPhotos();
    setupAutoSync();

    const handleOnline = () => {
      setIsOnline(true);
      syncPendingPhotos().then(loadPhotos);
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial sync attempt
    if (navigator.onLine) {
      syncPendingPhotos().then(loadPhotos);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isPremium) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-[#111] border border-yellow-500/30 rounded-2xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-yellow-500" />
          </div>
          <h2 className="text-3xl font-cinzel font-bold text-white mb-4">Acceso Premium</h2>
          <p className="text-gray-400 font-marcellus mb-8">
            El módulo Barrio 360 es una herramienta exclusiva para usuarios del plan Premium. Actualiza tu plan para crear tours virtuales inmersivos.
          </p>
          <button 
            onClick={() => setIsPremium(true)}
            className="w-full py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]"
          >
            Desbloquear Barrio 360
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-cinzel font-bold text-white mb-2">Barrio 360</h1>
            <p className="text-gray-400 font-marcellus">
              Captura tours virtuales profesionales. Nivelación automática y validación por IA.
            </p>
          </div>
          
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isOnline ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-orange-500/10 border-orange-500/30 text-orange-400'}`}>
            {isOnline ? <CloudUpload className="w-5 h-5" /> : <CloudOff className="w-5 h-5" />}
            <span className="text-sm font-medium">{isOnline ? 'Sincronización Activa' : 'Modo Offline'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Camera Section */}
          <div className="lg:col-span-2">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-1">
              <CameraCapture 
                tourId="tour_demo_123" 
                userId="user_demo_456" 
                onCaptureSuccess={loadPhotos} 
              />
            </div>
          </div>

          {/* Sync Queue Section */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 flex flex-col h-[600px]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-cinzel font-bold text-white">Cola de Subida</h3>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                {pendingPhotos.length} Pendientes
              </span>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              {pendingPhotos.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500">
                  <CheckCircle className="w-12 h-12 mb-3 opacity-20" />
                  <p className="text-sm">Todo sincronizado</p>
                </div>
              ) : (
                pendingPhotos.map((photo) => (
                  <motion.div 
                    key={photo.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-black/50 border border-white/5 rounded-xl p-4 flex items-center gap-4"
                  >
                    <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden shrink-0">
                      <img 
                        src={URL.createObjectURL(photo.blob)} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate">{photo.metadata.room}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">
                          Nitidez: {photo.metadata.sharpness}%
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          photo.status === 'syncing' ? 'bg-blue-500/20 text-blue-400' :
                          photo.status === 'failed' ? 'bg-red-500/20 text-red-400' :
                          'bg-orange-500/20 text-orange-400'
                        }`}>
                          {photo.status === 'syncing' ? 'Subiendo...' :
                           photo.status === 'failed' ? 'Error' : 'En cola'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
