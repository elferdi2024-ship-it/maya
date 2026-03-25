import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowLeft, Shield, Sword, Crown, Zap, Star, FastForward, BookOpen, Gift } from 'lucide-react';

export const Evento: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-mu-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-mu-black/90 via-mu-black/60 to-mu-black z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)] z-10"></div>
          <img 
            src="/speedfondo2.jpg" 
            alt="Speed Server Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen scale-105 animate-[pulse_10s_ease-in-out_infinite]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
          {/* Speed Hero Image - Unobscured */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-full flex justify-center mb-8 mt-8"
          >
            <img 
              src="/speedhero.png" 
              alt="Speed Server Hero" 
              className="max-w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(255,100,0,0.5)]"
              style={{ maxHeight: '50vh' }}
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl mx-auto mt-8"
          >
            <Link to="/#descargar" className="mmorpg-button-jade clip-angled flex-1 px-8 py-5 flex items-center justify-center gap-3">
              <Play size={24} className="text-white fill-white relative z-10" />
              <span className="font-cinzel font-bold text-lg text-white tracking-wider relative z-10">
                JUGAR AHORA
              </span>
            </Link>
            
            <Link to="/" className="mmorpg-button clip-angled flex-1 px-8 py-5 flex items-center justify-center gap-3">
              <ArrowLeft size={24} className="text-white relative z-10 group-hover:-translate-x-1 transition-transform" />
              <span className="font-cinzel font-bold text-lg text-white tracking-wider relative z-10">
                VOLVER AL INICIO
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 relative z-20 bg-mu-darker border-y-2 border-mu-jade/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/speedcru.png" 
            alt="Speed Server Intro Background" 
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mu-darker/95 via-mu-darker/70 to-mu-darker/95 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 mix-blend-overlay z-20"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
          <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-8">
            ¿QUÉ ES EL <span className="text-mu-jade text-glow-jade">SPEED SERVER</span>?
          </h2>
          <div className="space-y-6 font-inter text-lg text-gray-300 leading-relaxed text-left md:text-center">
            <p>
              El Speed Server es un evento por tiempo limitado diseñado para brindar una experiencia de progresión mucho más rápida y accesible.
            </p>
            <p>
              Durante el evento, los jugadores podrán desarrollar sus personajes con mayor facilidad, beneficiándose de varios sistemas exclusivos y facilitadores de progresión.
            </p>
            <p>
              Durante el evento MU MAYA ofrece mayor EXP y bonificaciones de botín, así como equipo disponible a través de LVL, Reset y la Tienda X, entre otras características que aceleran significativamente el progreso y la preparación para el contenido final del juego.
            </p>
          </div>
        </div>
      </section>

      {/* Fast Progression Section */}
      <section className="py-24 relative z-20 bg-mu-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/subir rapido.jpg" 
            alt="Progresión Acelerada Background" 
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-mu-black/90 via-mu-black/60 to-mu-black/20 z-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <img 
                src="/panda.png" 
                alt="Progresión Rápida" 
                className="w-full max-w-lg mx-auto object-contain drop-shadow-[0_0_20px_rgba(255,216,107,0.3)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-mu-gold/30 bg-mu-gold/10 text-mu-gold font-marcellus text-sm">
                <FastForward size={16} /> PROGRESIÓN ACELERADA
              </div>
              <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white leading-tight">
                LLEGA RÁPIDO DE <br/>
                <span className="text-mu-gold text-glow-gold">1 A 1750</span>
              </h2>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-mu-dark border border-mu-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap size={24} className="text-mu-gold" />
                  </div>
                  <div>
                    <h3 className="font-marcellus font-bold text-xl text-white mb-1">ITEMS POR NIVEL</h3>
                    <p className="text-gray-400 font-inter">Recibe equipamiento y recompensas automáticamente al alcanzar niveles clave.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-mu-dark border border-mu-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Crown size={24} className="text-mu-gold" />
                  </div>
                  <div>
                    <h3 className="font-marcellus font-bold text-xl text-white mb-1">RUUD, WC & JEWELS</h3>
                    <p className="text-gray-400 font-inter">Farmea las monedas más importantes del juego con tasas aumentadas para armarte rápidamente.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Starter Pack Section */}
      <section className="py-24 relative z-20 bg-mu-darker border-t-2 border-mu-jade/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/MANTICORESET.jpg" 
            alt="Manticore Set Background" 
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mu-darker/90 via-mu-darker/60 to-mu-darker/20 z-10"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)] z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <img 
                src="/pack-inicio.png" 
                alt="Pack de Inicio" 
                className="w-full max-w-lg mx-auto object-contain drop-shadow-[0_0_30px_rgba(230,57,70,0.4)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-mu-jade/30 bg-mu-jade/10 text-mu-jade font-marcellus text-sm">
                <Gift size={16} /> RECOMPENSAS DE BIENVENIDA
              </div>
              <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white leading-tight">
                INICIA CON <br/>
                <span className="text-mu-jade text-glow-jade">SET MANTICORE</span>
              </h2>
              
              <div className="mmorpg-panel-jade p-6 clip-angled-sm">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white font-inter text-lg">
                    <Shield size={20} className="text-mu-jade" />
                    <span>Set Manticore Completo</span>
                  </li>
                  <li className="flex items-center gap-3 text-white font-inter text-lg">
                    <Sword size={20} className="text-mu-jade" />
                    <span>Armas Blessed</span>
                  </li>
                  <li className="flex items-center gap-3 text-white font-inter text-lg">
                    <Star size={20} className="text-mu-jade" />
                    <span>Panda Pet + Ring</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 font-inter">
                Todo lo que necesitas para empezar a dominar el servidor desde el primer minuto. ¡No pierdas tiempo y lánzate a la batalla!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative z-20 bg-mu-darker overflow-hidden border-t-2 border-mu-jade/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-cinzel font-black text-5xl md:text-7xl text-white mb-12 text-glow-jade">
            EL PORTAL SE ABRE
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link 
              to="/#descargar" 
              className="mmorpg-button-jade clip-angled inline-flex items-center justify-center gap-4 px-12 py-6 font-cinzel font-bold text-2xl tracking-widest transition-all duration-300"
            >
              <Play size={32} className="fill-white" />
              INGRESAR AL SPEED SERVER
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
