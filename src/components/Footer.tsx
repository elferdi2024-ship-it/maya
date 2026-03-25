import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mmorpg-panel border-t-2 border-mu-gold/20 pt-16 pb-8 mt-auto overflow-hidden">
      <div className="absolute inset-0 bg-mayan-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src="/logo.png" alt="MU MAYA" className="h-12 object-contain drop-shadow-[0_0_10px_rgba(255,216,107,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(255,216,107,0.6)] transition-all duration-300" referrerPolicy="no-referrer" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md font-inter">
              El servidor definitivo de Mu Online Season 21. Únete a miles de jugadores en una aventura épica con características únicas, eventos diarios y una comunidad activa.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-mu-black border border-mu-gold/20 flex items-center justify-center text-mu-gold hover:text-white hover:bg-mu-gold/20 hover:border-mu-gold transition-all clip-angled-sm">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-mu-black border border-mu-gold/20 flex items-center justify-center text-mu-gold hover:text-white hover:bg-mu-gold/20 hover:border-mu-gold transition-all clip-angled-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-mu-black border border-mu-gold/20 flex items-center justify-center text-mu-gold hover:text-white hover:bg-mu-gold/20 hover:border-mu-gold transition-all clip-angled-sm">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-mu-black border border-mu-blue/20 flex items-center justify-center text-mu-blue hover:text-white hover:bg-mu-blue/20 hover:border-mu-blue transition-all clip-angled-sm">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2 flex flex-col md:items-end justify-center">
            <a 
              href="https://rnt-creative-studio.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mmorpg-panel-gold p-6 clip-angled flex flex-col items-center text-center max-w-sm w-full group hover:scale-105 transition-transform duration-300"
            >
              <span className="text-gray-400 font-inter text-sm mb-2">Creado y Diseñado por</span>
              <span className="font-cinzel font-bold text-mu-gold text-xl group-hover:text-white transition-colors duration-300">RNT Creative Studio</span>
              <div className="w-12 h-0.5 bg-mu-gold/50 mt-4 group-hover:w-24 group-hover:bg-mu-gold transition-all duration-300"></div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-inter">
            &copy; {new Date().getFullYear()} MU MAYA Network. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs font-inter">
            Mu Online es una marca registrada de Webzen Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
