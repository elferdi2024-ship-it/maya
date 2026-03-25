import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseSize: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
  type: 'orb' | 'dust' | 'spark';
  depth: number;
  angle: number;
  spin: number;
}

export const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 250 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let targetParticles = 200;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Calculate target particles based on screen area (approx 1 particle per 8000 pixels)
      // Clamp between 50 (mobile) and 400 (ultrawide/4k) for performance and visual consistency
      targetParticles = Math.min(Math.max(Math.floor((canvas.width * canvas.height) / 8000), 50), 400);
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const colors = ['#ffd86b', '#b8922e', '#10b981', '#047857', '#ffffff', '#e63946'];
    const types: ('orb' | 'dust' | 'spark')[] = ['orb', 'dust', 'dust', 'spark', 'dust'];

    const createParticle = (startY?: number): Particle => {
      const depth = Math.random(); // 0 to 1
      const type = types[Math.floor(Math.random() * types.length)];
      
      let baseSize = 1;
      if (type === 'orb') baseSize = Math.random() * 3 + 2;
      if (type === 'dust') baseSize = Math.random() * 1.5 + 0.5;
      if (type === 'spark') baseSize = Math.random() * 2 + 1;

      // Depth affects size and speed
      const size = baseSize * (depth * 0.6 + 0.4);
      
      return {
        x: Math.random() * canvas.width,
        y: startY !== undefined ? startY : canvas.height + Math.random() * 100,
        baseSize,
        size,
        speedX: (Math.random() - 0.5) * (depth * 1.5 + 0.5),
        speedY: -(Math.random() * 1.5 + 0.5) * (depth * 1.5 + 0.5),
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: type === 'dust' ? Math.random() * 0.3 + 0.1 : Math.random() * 0.6 + 0.3,
        life: 0,
        maxLife: Math.random() * 400 + 200,
        type,
        depth,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.05
      };
    };

    // Initial particles spread across the screen
    for (let i = 0; i < targetParticles; i++) {
      particles.push(createParticle(Math.random() * canvas.height));
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new particles to maintain density
      if (particles.length < targetParticles) {
        // Add up to 3 particles per frame to quickly catch up if resized larger
        const particlesToAdd = Math.min(targetParticles - particles.length, 3);
        for (let i = 0; i < particlesToAdd; i++) {
          particles.push(createParticle());
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Mouse interaction
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRef.current.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // Smooth easing for the force
          const force = Math.pow((mouseRef.current.radius - distance) / mouseRef.current.radius, 1.2);
          
          const repulsion = 1.5; // Lowered intensity for smoother push
          const swirl = 2.0;     // Pronounced swirl effect
          
          // Repulsion (push away from mouse)
          p.x -= forceDirectionX * force * repulsion * p.depth;
          p.y -= forceDirectionY * force * repulsion * p.depth;
          
          // Swirl (perpendicular to mouse direction)
          p.x += forceDirectionY * force * swirl * p.depth;
          p.y -= forceDirectionX * force * swirl * p.depth;
        }

        p.x += p.speedX;
        p.y += p.speedY;
        p.angle += p.spin;
        p.life++;

        // Fade out near end of life
        const currentOpacity = p.life > p.maxLife - 50 
          ? p.opacity * ((p.maxLife - p.life) / 50)
          : p.opacity;

        ctx.globalAlpha = Math.max(0, currentOpacity);
        ctx.fillStyle = p.color;
        
        // Add glow based on type
        if (p.type === 'orb' || p.type === 'spark') {
          ctx.shadowBlur = p.type === 'orb' ? 15 : 10;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        if (p.type === 'orb' || p.type === 'dust') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'spark') {
          // Draw a 4-point star/diamond
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 2);
          ctx.lineTo(p.size * 0.5, -p.size * 0.5);
          ctx.lineTo(p.size * 2, 0);
          ctx.lineTo(p.size * 0.5, p.size * 0.5);
          ctx.lineTo(0, p.size * 2);
          ctx.lineTo(-p.size * 0.5, p.size * 0.5);
          ctx.lineTo(-p.size * 2, 0);
          ctx.lineTo(-p.size * 0.5, -p.size * 0.5);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();

        // Remove dead particles
        if (p.life >= p.maxLife || p.y < -20 || p.x < -20 || p.x > canvas.width + 20) {
          particles.splice(i, 1);
          i--;
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-100 mix-blend-screen"
      />
    </div>
  );
};
