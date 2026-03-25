import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Download, Users, Shield, Sword, Zap, ChevronRight, Play, Trophy, Sun, Moon, Flame, MessageCircle } from 'lucide-react';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-mu-black/80 via-mu-black/50 to-mu-black z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,216,107,0.15)_0%,transparent_70%)] z-10"></div>
          <img 
            src="/mu-malla-wallpaper.png" 
            alt="MU Online Heroes" 
            className="w-full h-full object-cover object-top opacity-70 scale-105 animate-[pulse_15s_ease-in-out_infinite]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 flex flex-col items-center"
          >
            <img 
              src="/logo.png" 
              alt="MU MAYA" 
              className="w-full max-w-3xl h-auto object-contain drop-shadow-[0_0_30px_rgba(255,216,107,0.5)] mb-6"
              referrerPolicy="no-referrer"
            />
            <p className="font-marcellus text-xl md:text-2xl text-mu-gold tracking-[0.3em] uppercase text-glow-gold">
              LA NUEVA ERA COMIENZA <span className="text-mu-blue mx-2">•</span> SEASON 21 EP 3
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 mt-12"
          >
            <Link to="/evento" className="mmorpg-button-jade clip-angled px-8 py-4 flex items-center justify-center gap-3">
              <Play size={24} className="text-white fill-white relative z-10" />
              <span className="font-cinzel font-bold text-lg text-white tracking-wider relative z-10">
                SPEED SERVER
              </span>
            </Link>
            
            <a href="#descargar" className="mmorpg-button clip-angled px-8 py-4 flex items-center justify-center gap-3">
              <Download size={24} className="text-mu-blue relative z-10" />
              <span className="font-cinzel font-bold text-lg text-white tracking-wider relative z-10">
                DESCARGAR
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Server Status Panel */}
      <section className="relative z-30 -mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mmorpg-panel-gold p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 clip-angled-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-mayan-pattern opacity-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-mu-gold/5 via-transparent to-mu-gold/5 pointer-events-none"></div>
          <div className="flex items-center gap-6 relative z-10">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse box-shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
              <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-50"></div>
            </div>
            <div>
              <h3 className="font-marcellus font-bold text-2xl text-white tracking-wider">REINO PRINCIPAL</h3>
              <p className="font-inter text-gray-400 text-sm uppercase tracking-widest">Servidor Online</p>
            </div>
          </div>
          
          <div className="h-12 w-px bg-white/10 hidden md:block relative z-10"></div>
          
          <div className="flex items-center gap-4 relative z-10">
            <Users size={32} className="text-mu-gold" />
            <div>
              <h3 className="font-marcellus font-bold text-3xl text-mu-gold text-glow-gold">1,250</h3>
              <p className="font-inter text-gray-400 text-sm uppercase tracking-widest">Guerreros Activos</p>
            </div>
          </div>
          
          <div className="h-12 w-px bg-white/10 hidden md:block relative z-10"></div>
          
          <div className="flex items-center gap-4 relative z-10">
            <Shield size={32} className="text-mu-blue" />
            <div>
              <h3 className="font-marcellus font-bold text-xl text-white">S21 EP3</h3>
              <p className="font-inter text-gray-400 text-sm uppercase tracking-widest">Era Actual</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative z-20 bg-mu-darker border-t-2 border-mu-gold/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/mayafondo.png" 
            alt="Features Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mu-darker/90 via-mu-darker/60 to-mu-darker/90 z-10"></div>
        </div>
        <div className="absolute inset-0 bg-mayan-pattern opacity-5 mix-blend-overlay z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,216,107,0.05)_0%,transparent_60%)] z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-4">
              CARACTERÍSTICAS DEL <span className="text-mu-gold text-glow-gold">SERVIDOR</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mu-gold to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Sun size={40} />, title: "EXPERIENCIA Y DROP", desc: "Experiencia x999\nMaster Experience x999\nServer PVP", color: "gold" },
              { icon: <Moon size={40} />, title: "SISTEMA DE RESET", desc: "Sistema de Reset y Grand Reset. Mantén tus stats y consigue recompensas exclusivas por tu dedicación.", color: "blue" },
              { icon: <Flame size={40} />, title: "EVENTOS ACTIVOS", desc: "Blood Castle, Devil Square, Chaos Castle y eventos custom cada hora. Compite por la gloria del continente.", color: "red" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="inventory-slot p-8 group hover:-translate-y-2 transition-transform duration-300 clip-angled-sm"
              >
                <div className={`w-16 h-16 flex items-center justify-center mb-6 bg-white/5 group-hover:bg-white/10 transition-colors clip-angled-sm
                  ${feature.color === 'gold' ? 'text-mu-gold box-glow-gold' : 
                    feature.color === 'blue' ? 'text-mu-blue box-glow-blue' : 
                    'text-mu-red box-shadow-[0_0_15px_rgba(230,57,70,0.4)]'}`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-marcellus font-bold text-xl text-white mb-3 tracking-wider">{feature.title}</h3>
                <p className="text-gray-400 font-inter leading-relaxed whitespace-pre-line">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section (Hidden Temporarily) */}
      {/* 
      <section className="py-24 relative z-20 bg-mu-darker border-t-2 border-mu-gold/10">
        <div className="absolute inset-0 bg-mayan-pattern opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mu-black/50 to-mu-black pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-white">
                ÚLTIMAS <span className="text-mu-gold text-glow-gold">NOTICIAS</span>
              </h2>
            </div>
            <Link to="/news" className="font-marcellus text-sm text-mu-gold hover:text-white transition-colors flex items-center gap-1">
              VER TODAS <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { date: "24 MAR", title: "Apertura Oficial Season 21", tag: "ANUNCIO", img: "/noticias.png" },
              { date: "22 MAR", title: "Notas del Parche v1.0.2", tag: "UPDATE", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop" }
            ].map((news, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => window.location.href = '/news'}
              >
                <div className="relative h-64 overflow-hidden clip-angled-sm">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 z-20 bg-mu-gold text-mu-black font-cinzel font-bold text-xs px-3 py-1 clip-angled-sm">
                    {news.tag}
                  </div>
                </div>
                <div className="mmorpg-panel p-6 border-t-0 clip-angled-sm mt-1">
                  <p className="text-mu-blue font-marcellus text-sm mb-2">{news.date}</p>
                  <h3 className="font-cinzel font-bold text-2xl text-white group-hover:text-mu-gold transition-colors">{news.title}</h3>
                  <p className="text-gray-400 font-inter mt-3 line-clamp-2">
                    Descubre todas las novedades que trae esta nueva actualización. Nuevos mapas, items y corrección de errores para mejorar tu experiencia.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}
      {/* Ranking Section */}
      <section id="ranking" className="py-24 relative z-20 bg-mu-black border-t-2 border-mu-gold/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-mu-black/70 z-10"></div>
          <img 
            src="/rankfondo.jpg" 
            alt="Ranking Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-mayan-pattern opacity-5 mix-blend-overlay z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-4">
              SALÓN DE LA <span className="text-mu-gold text-glow-gold">FAMA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mu-gold to-transparent mx-auto"></div>
            <p className="mt-4 text-gray-400 font-inter max-w-2xl mx-auto">Los guerreros más formidables del continente. ¿Tienes lo necesario para grabar tu nombre en la historia?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { rank: 1, name: "Kukulkan", class: "Dark Lord", level: "400", resets: "150", color: "gold" },
              { rank: 2, name: "Balam", class: "Dark Knight", level: "400", resets: "148", color: "gray-300" },
              { rank: 3, name: "Ixchel", class: "Fairy Elf", level: "400", resets: "145", color: "amber-700" }
            ].map((player, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`mmorpg-panel p-6 flex flex-col items-center text-center relative overflow-hidden clip-angled-sm ${idx === 0 ? 'border-mu-gold/50 box-shadow-[0_0_15px_rgba(255,216,107,0.2)] scale-105 z-10' : 'border-white/10'}`}
              >
                {idx === 0 && <div className="absolute inset-0 bg-gradient-to-b from-mu-gold/10 to-transparent pointer-events-none"></div>}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-cinzel font-bold border-2
                  ${idx === 0 ? 'bg-mu-gold/20 text-mu-gold border-mu-gold' : 
                    idx === 1 ? 'bg-gray-500/20 text-gray-300 border-gray-400' : 
                    'bg-amber-900/20 text-amber-600 border-amber-700'}`}
                >
                  #{player.rank}
                </div>
                <h3 className="font-marcellus font-bold text-xl text-white mb-1">{player.name}</h3>
                <p className="text-mu-blue font-inter text-sm mb-4">{player.class}</p>
                <div className="w-full flex justify-between border-t border-white/10 pt-4 mt-auto">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Nivel</p>
                    <p className="font-marcellus text-white">{player.level}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Resets</p>
                    <p className="font-marcellus text-mu-gold">{player.resets}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/ranking" className="inline-flex items-center gap-2 text-mu-gold hover:text-white font-marcellus transition-colors">
              VER RANKING COMPLETO <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="descargar" className="py-24 relative z-20 bg-mu-darker border-t-2 border-mu-blue/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/dowloadfondo.jpeg" 
            alt="Download Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mu-darker/90 via-mu-darker/60 to-mu-darker/20 z-10"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,211,255,0.05)_0%,transparent_70%)] z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="mmorpg-panel-blue p-8 md:p-12 clip-angled flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-white mb-4">
                DESCARGA EL <span className="text-mu-blue text-glow-blue">CLIENTE</span>
              </h2>
              <p className="text-gray-400 font-inter mb-8 max-w-xl">
                Prepárate para la batalla. Descarga el cliente completo de MU MAYA Season 21 Episode 3 y únete a la aventura hoy mismo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="https://drive.google.com/file/d/1eFXWhLxLXogphev4JQ8KzZGJntqn4Mhn/view" target="_blank" rel="noopener noreferrer" className="mmorpg-button clip-angled px-8 py-4 flex items-center justify-center gap-3">
                  <Download size={24} className="text-mu-blue relative z-10" />
                  <div className="text-left relative z-10">
                    <span className="block font-cinzel font-bold text-white tracking-wider leading-none mb-1">GOOGLE DRIVE</span>
                    <span className="block text-xs text-gray-400 font-inter">Maya Mu Online S21.rar</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-md bg-black/40 border border-white/10 p-6 clip-angled-sm">
              <h3 className="font-marcellus text-mu-gold mb-4 border-b border-white/10 pb-2">Requisitos del Sistema</h3>
              <ul className="space-y-3 font-inter text-sm text-gray-400">
                <li className="flex justify-between"><span className="text-gray-500">SO:</span> <span className="text-white">Windows 10 / 11</span></li>
                <li className="flex justify-between"><span className="text-gray-500">CPU:</span> <span className="text-white">Intel Core i3 o superior</span></li>
                <li className="flex justify-between"><span className="text-gray-500">RAM:</span> <span className="text-white">4 GB RAM</span></li>
                <li className="flex justify-between"><span className="text-gray-500">GPU:</span> <span className="text-white">NVIDIA GTX 750 / AMD R7 260X</span></li>
                <li className="flex justify-between"><span className="text-gray-500">Almacenamiento:</span> <span className="text-white">3 GB espacio disponible</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="comunidad" className="py-24 relative z-20 bg-mu-black border-t-2 border-mu-gold/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/comunidad.png" 
            alt="Community Background" 
            className="w-full h-full object-cover opacity-50 brightness-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mu-black/80 via-mu-black/40 to-mu-black/80 z-10"></div>
        </div>
        <div className="absolute inset-0 bg-mayan-pattern opacity-10 mix-blend-overlay pointer-events-none z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <Users size={64} className="mx-auto text-mu-gold mb-6 opacity-80" />
          <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-6">
            ÚNETE A LA <span className="text-mu-gold text-glow-gold">COMUNIDAD</span>
          </h2>
          <p className="text-gray-400 font-inter text-lg mb-10 max-w-2xl mx-auto">
            Conéctate con otros guerreros, forma alianzas, participa en sorteos exclusivos y mantente al tanto de todos los eventos del servidor en nuestro Discord oficial.
          </p>
          <a href="https://discord.gg/FvnKRYX8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-10 rounded-sm transition-colors duration-300 shadow-[0_0_20px_rgba(88,101,242,0.4)] hover:shadow-[0_0_30px_rgba(88,101,242,0.6)]">
            <MessageCircle size={24} />
            <span className="font-inter tracking-wider">UNIRSE AL DISCORD</span>
          </a>
        </div>
      </section>
    </div>
  );
};
