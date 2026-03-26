import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Shield,
  TrendingUp,
  Users,
  Package,
  Star,
  Sparkles,
  Check,
  X,
  ChevronRight,
  MessageCircle,
  Lock,
  Smartphone
} from 'lucide-react';

export const Vip: React.FC = () => {
  const location = useLocation();

  const whatsappNumber = "+51994913004";
  const whatsappMessage = "Hola ADMIN, quiero activar mi membresía VIP en MU MAYA";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const vipPlans = [
    {
      name: "NORMAL",
      price: "FREE",
      duration: "",
      color: "gray",
      borderColor: "border-gray-600/30",
      glow: "box-shadow-[0_0_15px_rgba(100,100,100,0.2)]",
      benefits: [
        { text: "1 Mapa Especial No PVP", included: true },
        { text: "Reset Normal: 400", included: true },
        { text: "Reset Master: 1750", included: true },
        { text: "Chaos Machine +10 ~ +15: Normal Rate", included: true },
        { text: "Invasiones Drop: x1", included: true },
        { text: "Baules Extra: 5", included: true },
        { text: "EXP Normal: 2500", included: true },
        { text: "EXP Master: 2500", included: true },
        { text: "Sorteos Semanales", included: false },
        { text: "Tinka por WC", included: false }
      ]
    },
    {
      name: "VIP",
      price: "",
      duration: "",
      color: "gold",
      borderColor: "border-mu-gold/50",
      glow: "box-glow-gold",
      popular: true,
      benefits: [
        { text: "3 Mapas Especiales No PVP", included: true },
        { text: "Reset Normal: 350", included: true },
        { text: "Reset Master: 1700", included: true },
        { text: "Chaos Machine +10 ~ +15: 90%", included: true },
        { text: "Invasiones Drop: x2", included: true },
        { text: "Baules Extra: 15", included: true },
        { text: "EXP Normal: 5000", included: true },
        { text: "EXP Master: 5000", included: true },
        { text: "Sorteos Semanales", included: true },
        { text: "Tinka por WC", included: true }
      ]
    },
    {
      name: "VIP 2",
      price: "???",
      duration: "",
      color: "red",
      borderColor: "border-mu-red/30",
      glow: "box-shadow-[0_0_20px_rgba(0,0,0,0.5)]",
      locked: true,
      benefits: [
        { text: "???", included: false },
        { text: "???", included: false },
        { text: "???", included: false },
        { text: "???", included: false },
        { text: "???", included: false },
        { text: "???", included: false },
        { text: "???", included: false },
        { text: "???", included: false },
        { text: "???", included: false },
        { text: "???", included: false }
      ]
    }
  ];

  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-mu-black/90 via-mu-black/60 to-mu-black z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,216,107,0.2)_0%,transparent_75%)] z-10"></div>
          <img
            src="/mayafondo.png"
            alt="VIP Background"
            className="w-full h-full object-cover opacity-75 scale-110"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <img src="/vip.png" alt="VIP" className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_20px_rgba(255,216,107,0.6)]" />
              <h1 className="font-cinzel font-bold text-5xl md:text-7xl text-white">
                MEMBRESÍA <span className="text-mu-gold text-glow-gold">VIP</span>
              </h1>
              <img src="/vip.png" alt="VIP" className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_20px_rgba(255,216,107,0.6)]" />
            </div>
            <p className="font-marcellus text-xl md:text-2xl text-gray-300 tracking-[0.2em] uppercase max-w-3xl mx-auto">
              Domina el continente con ventajas exclusivas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mmorpg-button-gold clip-angled px-10 py-5 inline-flex items-center justify-center gap-3"
            >
              <Smartphone size={24} className="text-white relative z-10" />
              <span className="font-cinzel font-bold text-xl text-white tracking-wider relative z-10">
                ACTIVAR VIP POR WHATSAPP
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 relative z-20 bg-mu-black border-t-2 border-mu-gold/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-mu-black/80 z-10"></div>
          <img
            src="/rankfondo.jpg"
            alt="Plans Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-mayan-pattern opacity-5 mix-blend-overlay z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,216,107,0.08)_0%,transparent_60%)] z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-4">
                PLANES <span className="text-mu-gold text-glow-gold">VIP</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mu-gold to-transparent mx-auto"></div>
              <p className="mt-4 text-gray-400 font-inter max-w-2xl mx-auto">
                Elige el plan que mejor se adapte a tu estilo de juego
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start pt-8">
            {vipPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`relative ${plan.popular ? 'scale-110 z-20' : plan.locked ? 'opacity-50 scale-95' : 'scale-100 opacity-70'}`}
                style={{
                  filter: plan.popular ? 'drop-shadow(0 0 40px rgba(255, 216, 107, 0.6))' : 'none'
                }}
              >
                {/* Animated Glow Background for VIP */}
                {plan.popular && (
                  <div className="absolute -inset-1 bg-gradient-to-b from-mu-gold via-mu-gold/50 to-transparent rounded-t-lg blur-xl opacity-70 animate-pulse"></div>
                )}

                {/* Badge */}
                {plan.popular && (
                  <div className="relative z-30 flex justify-center mb-2">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mu-gold via-yellow-300 to-mu-gold text-mu-black font-cinzel font-bold text-xs px-8 py-3 clip-angled-sm shadow-[0_0_30px_rgba(255,216,107,0.9)] border-2 border-white/30">
                      <Sparkles size={14} className="animate-pulse" />
                      <span className="tracking-widest">★ RECOMENDADO ★</span>
                      <Sparkles size={14} className="animate-pulse" />
                    </div>
                  </div>
                )}

                {plan.locked && (
                  <div className="relative z-30 flex justify-center mb-2">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mu-red via-red-500 to-mu-red text-white font-cinzel font-bold text-xs px-8 py-3 clip-angled-sm shadow-[0_0_25px_rgba(230,57,70,0.7)] border-2 border-white/20">
                      <Lock size={14} />
                      <span className="tracking-widest">PRÓXIMAMENTE</span>
                      <Lock size={14} />
                    </div>
                  </div>
                )}

                {/* Main Card */}
                <div className={`mmorpg-panel relative clip-angled-sm flex flex-col overflow-hidden transition-all duration-500
                  ${plan.popular ? 'border-4 border-mu-gold shadow-[0_0_60px_rgba(255,216,107,0.4)]' :
                    plan.locked ? 'border-2 border-gray-700' :
                      'border-2 border-gray-600'}`}
                  style={{
                    background: plan.popular
                      ? 'linear-gradient(180deg, rgba(255,216,107,0.08) 0%, rgba(20,15,5,0.95) 50%, rgba(5,5,5,1) 100%)'
                      : undefined
                  }}
                >
                  {/* Decorative Elements for VIP */}
                  {plan.popular && (
                    <>
                      {/* Corner ornaments */}
                      <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-mu-gold/40 rounded-tl-lg pointer-events-none"></div>
                      <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-mu-gold/40 rounded-tr-lg pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-mu-gold/40 rounded-bl-lg pointer-events-none"></div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-mu-gold/40 rounded-br-lg pointer-events-none"></div>

                      {/* Animated particles */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-mu-gold rounded-full animate-ping"></div>
                        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-mu-gold rounded-full animate-ping delay-300"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-mu-gold rounded-full animate-ping delay-700"></div>
                      </div>

                      {/* Inner glow border */}
                      <div className="absolute inset-0 border-2 border-mu-gold/20 rounded-lg pointer-events-none"></div>
                    </>
                  )}

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-6">
                      {/* Icon Circle with Ring */}
                      <div className="relative inline-block mb-4">
                        {plan.popular && (
                          <div className="absolute inset-0 rounded-full border-4 border-mu-gold/30 animate-[spin_10s_linear_infinite]"></div>
                        )}
                        <div className={`relative w-28 h-28 mx-auto rounded-full flex items-center justify-center text-5xl font-cinzel font-bold transition-all duration-500
                          ${plan.locked
                            ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-gray-500 border-4 border-gray-600'
                            : plan.color === 'gold'
                              ? 'bg-gradient-to-br from-mu-gold/40 via-mu-gold/20 to-transparent text-mu-gold border-4 border-mu-gold shadow-[0_0_40px_rgba(255,216,107,0.6),inset_0_0_20px_rgba(255,216,107,0.3)]'
                              : 'bg-gradient-to-br from-gray-700/30 to-gray-800/30 text-gray-400 border-4 border-gray-600'}`}
                        >
                          {plan.locked
                            ? <Lock size={48} className="drop-shadow-lg" />
                            : plan.name.replace('VIP ', '').replace('NORMAL', '⚔')}
                        </div>
                        {plan.popular && (
                          <div className="absolute -inset-2 rounded-full border-2 border-dashed border-mu-gold/40 animate-[spin_15s_linear_infinite_reverse]"></div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className={`font-marcellus font-bold mb-2 tracking-wider transition-all duration-300
                        ${plan.popular ? 'text-4xl text-white' : plan.locked ? 'text-2xl text-gray-500' : 'text-2xl text-gray-300'}`}>
                        {plan.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-baseline justify-center gap-2">
                        <span className={`font-cinzel font-bold transition-all duration-300
                          ${plan.locked
                            ? 'text-4xl text-gray-500'
                            : plan.popular
                              ? 'text-6xl text-mu-gold text-glow-gold drop-shadow-[0_0_20px_rgba(255,216,107,0.8)]'
                              : 'text-4xl text-gray-400'}`}>
                          {plan.price}
                        </span>
                        {plan.duration && (
                          <span className="text-gray-500 font-inter text-sm">{plan.duration}</span>
                        )}
                      </div>
                    </div>

                    {/* Divider Line */}
                    <div className={`w-full h-px mb-6 ${plan.popular ? 'bg-gradient-to-r from-transparent via-mu-gold/50 to-transparent' : 'bg-gray-700'}`}></div>

                    {/* Benefits List */}
                    <div className="flex-grow space-y-3">
                      {plan.locked ? (
                        <div className="flex flex-col items-center justify-center h-48">
                          <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-gray-900 to-black border-4 border-gray-700 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                            <Lock size={48} className="text-gray-600 drop-shadow-lg" />
                          </div>
                          <p className="text-gray-400 font-marcellus text-center text-lg mb-2 tracking-wider">
                            CONTENIDO MISTERIOSO
                          </p>
                          <p className="text-mu-gold/70 font-inter text-sm italic">
                            Disponible próximamente...
                          </p>
                        </div>
                      ) : (
                        plan.benefits.map((benefit, bIdx) => (
                          <motion.div
                            key={bIdx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: bIdx * 0.05 }}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group
                              ${benefit.included ? 'hover:bg-mu-gold/10' : ''}`}
                          >
                            {benefit.included ? (
                              <div className="relative">
                                <Check size={20} className="text-mu-jade flex-shrink-0 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                                {plan.popular && (
                                  <div className="absolute inset-0 rounded-full bg-mu-jade/20 blur-sm"></div>
                                )}
                              </div>
                            ) : (
                              <X size={20} className="text-gray-600 flex-shrink-0" />
                            )}
                            <span className={`font-inter text-sm transition-all duration-300
                              ${benefit.included
                                ? plan.popular ? 'text-gray-100 group-hover:text-mu-gold' : 'text-gray-300'
                                : 'text-gray-600 line-through'}`}>
                              {benefit.text}
                            </span>
                          </motion.div>
                        ))
                      )}
                    </div>

                    {/* Divider Line */}
                    <div className={`w-full h-px my-6 ${plan.popular ? 'bg-gradient-to-r from-transparent via-mu-gold/50 to-transparent' : 'bg-gray-700'}`}></div>

                    {/* CTA Button */}
                    <div className="mt-2">
                      {plan.locked ? (
                        <div className="w-full clip-angled px-6 py-4 flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-2 border-gray-600 text-gray-500 font-marcellus font-bold tracking-widest cursor-not-allowed shadow-inner">
                          <Lock size={20} />
                          BLOQUEADO
                          <Lock size={20} />
                        </div>
                      ) : (
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full clip-angled px-6 py-4 flex items-center justify-center gap-3 transition-all duration-300 font-marcellus font-bold tracking-wider text-lg group relative overflow-hidden
                            ${plan.popular
                              ? 'bg-gradient-to-r from-mu-gold via-yellow-400 to-mu-gold text-mu-black shadow-[0_0_30px_rgba(255,216,107,0.6)] hover:shadow-[0_0_50px_rgba(255,216,107,0.9)] hover:scale-105'
                              : 'mmorpg-button'}`}
                        >
                          {/* Shine effect for VIP */}
                          {plan.popular && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          )}
                          <span className="relative z-10 flex items-center gap-3">
                            {plan.name === 'NORMAL' ? <Users size={22} /> : <Smartphone size={22} />}
                            {plan.name === 'NORMAL' ? 'JUGAR GRATIS' : plan.name === 'VIP' ? 'ACTIVAR VIP AHORA' : `ACTIVAR ${plan.name.toUpperCase()}`}
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 relative z-20 bg-mu-darker border-t-2 border-mu-gold/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/dowloadfondo.jpeg"
            alt="Comparison Background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mu-darker/95 via-mu-darker/80 to-mu-darker/95 z-10"></div>
        </div>
        <div className="absolute inset-0 bg-mayan-pattern opacity-5 mix-blend-overlay z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-4">
                COMPARATIVA <span className="text-mu-gold text-glow-gold">VIP</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mu-gold to-transparent mx-auto"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mmorpg-panel-gold p-8 clip-angled-sm overflow-x-auto"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-mu-gold/30">
                  <th className="pb-4 font-cinzel font-bold text-white text-lg">Característica</th>
                  <th className="pb-4 font-cinzel font-bold text-gray-400 text-lg text-center">NORMAL</th>
                  <th className="pb-4 font-cinzel font-bold text-mu-gold text-lg text-center">VIP</th>
                  <th className="pb-4 font-cinzel font-bold text-gray-600 text-lg text-center">
                    <Lock size={16} className="inline mr-1" />
                    VIP 2
                  </th>
                </tr>
              </thead>
              <tbody className="font-inter text-sm">
                {[
                  { feature: "Mapa Especial No PVP", normal: "1 Mapa", vip: "3 Mapas", vip2: "???" },
                  { feature: "Reset Normal", normal: "400", vip: "350", vip2: "???" },
                  { feature: "Reset Master", normal: "1750", vip: "1700", vip2: "???" },
                  { feature: "Chaos Machine +10 ~ +15", normal: "Normal Rate", vip: "90%", vip2: "???" },
                  { feature: "Invasiones Drop", normal: "x1", vip: "x2", vip2: "???" },
                  { feature: "Baules Extra", normal: "5", vip: "15", vip2: "???" },
                  { feature: "EXP Normal", normal: "2500", vip: "5000", vip2: "???" },
                  { feature: "EXP Master", normal: "2500", vip: "5000", vip2: "???" },
                  { feature: "Sorteos Semanales", normal: false, vip: true, vip2: "???" },
                  { feature: "Tinka por WC", normal: false, vip: true, vip2: "???" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 last:border-0">
                    <td className="py-4 text-gray-300 font-marcellus">{row.feature}</td>
                    <td className="py-4 text-center text-gray-500">{row.normal === true ? <Check size={18} className="inline text-mu-jade" /> : row.normal === false ? <X size={18} className="inline text-gray-600" /> : row.normal}</td>
                    <td className="py-4 text-center text-mu-gold">{row.vip === true ? <Check size={18} className="inline text-mu-jade" /> : row.vip === false ? <X size={18} className="inline text-gray-600" /> : row.vip}</td>
                    <td className="py-4 text-center text-gray-600 font-bold">???</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-20 bg-mu-black border-t-2 border-mu-gold/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-mu-black/90 via-mu-black/70 to-mu-black/90 z-10"></div>
          <img
            src="/comunidad.png"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-40 brightness-75"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-mayan-pattern opacity-10 mix-blend-overlay pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,216,107,0.1)_0%,transparent_70%)] z-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/vip.png" alt="VIP" className="w-20 h-20 mx-auto mb-6 object-contain drop-shadow-[0_0_20px_rgba(255,216,107,0.6)]" />
            <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-6">
              ¿LISTO PARA EL <span className="text-mu-gold text-glow-gold">SIGUIENTE NIVEL</span>?
            </h2>
            <p className="text-gray-400 font-inter text-lg mb-10 max-w-2xl mx-auto">
              Únete a la élite de MU MAYA. Adquiere tu membresía VIP hoy mismo y domina el continente como nunca antes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mmorpg-button-gold clip-angled px-10 py-5 inline-flex items-center justify-center gap-3"
              >
                <Smartphone size={24} className="text-white relative z-10" />
                <span className="font-cinzel font-bold text-xl text-white tracking-wider relative z-10">
                  ACTIVAR VIP POR WHATSAPP
                </span>
              </a>
              <Link
                to="/register"
                className="mmorpg-button clip-angled px-10 py-5 inline-flex items-center justify-center gap-3"
              >
                <Sparkles size={24} className="text-mu-blue relative z-10" />
                <span className="font-cinzel font-bold text-xl text-white tracking-wider relative z-10">
                  CREAR CUENTA
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Features Teaser Section */}
      <section className="py-24 relative z-20 bg-mu-black border-t-2 border-mu-gold/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-mu-black/90 via-mu-black/70 to-mu-black/90 z-10"></div>
          <img
            src="/mayafondo.png"
            alt="Future Features"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-mayan-pattern opacity-10 mix-blend-overlay pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,216,107,0.08)_0%,transparent_60%)] z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles size={40} className="text-mu-gold box-glow-gold" />
                <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white">
                  PRÓXIMAMENTE <span className="text-mu-gold text-glow-gold">MÁS PODER</span>
                </h2>
                <Sparkles size={40} className="text-mu-gold box-glow-gold" />
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mu-gold to-transparent mx-auto"></div>
              <p className="mt-4 text-gray-400 font-inter max-w-2xl mx-auto italic">
                El continente está por expanderse... nuevas aventuras te esperan
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="mmorpg-panel p-8 clip-angled-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mu-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-6 rounded-full bg-gray-900/50 border-2 border-gray-700 flex items-center justify-center">
                    <Lock size={32} className="text-gray-600" />
                  </div>
                  <h3 className="font-marcellus font-bold text-xl text-gray-500 mb-3 tracking-wider">
                    MISTERIO {idx + 1}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-4"></div>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    Contenido exclusivo en desarrollo.<br />
                    <span className="text-mu-gold/60 text-xs mt-2 block">Pronto revelado...</span>
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-mu-gold/10 to-transparent clip-angled-sm"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 mmorpg-panel-gold clip-angled-sm">
              <MessageCircle size={18} className="text-mu-gold" />
              <span className="font-marcellus text-gray-400 text-sm">
                Sigue conectado en Discord para anuncios exclusivos
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative z-20 bg-mu-darker border-t-2 border-mu-gold/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/mayafondo.png"
            alt="FAQ Background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mu-darker/95 via-mu-darker/80 to-mu-darker/95 z-10"></div>
        </div>
        <div className="absolute inset-0 bg-mayan-pattern opacity-5 mix-blend-overlay z-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-4">
                PREGUNTAS <span className="text-mu-gold text-glow-gold">FRECUENTES</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mu-gold to-transparent mx-auto"></div>
            </motion.div>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿Cómo activo mi membresía VIP?",
                a: "Haz clic en el botón 'ACTIVAR VIP' y serás redirigido a WhatsApp directamente con el ADMIN (+51 994 913 004). Envía tu comprobante de pago y tu cuenta será activada en menos de 24 horas."
              },
              {
                q: "¿Los beneficios son acumulables?",
                a: "No, los beneficios no son acumulables. Si ya tienes VIP y adquieres una membresía superior, se aplicarán únicamente los beneficios del plan más alto."
              },
              {
                q: "¿Qué métodos de pago aceptan?",
                a: "Aceptamos Yape, Plin, transferencias BCP, Interbank y Binance. Al contactar por WhatsApp, el ADMIN te proporcionará los datos de pago disponibles."
              },
              {
                q: "¿Cuánto tiempo tarda en activarse mi VIP?",
                a: "Una vez enviado el comprobante por WhatsApp, tu membresía se activa generalmente en menos de 24 horas. En horarios de mayor actividad podría tomar hasta 48 horas."
              },
              {
                q: "¿La membresía es renovable automáticamente?",
                a: "No, la membresía VIP no tiene renovación automática. Deberás contactarte nuevamente por WhatsApp cuando desees renovar tu período."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="mmorpg-panel p-6 clip-angled-sm"
              >
                <h3 className="font-marcellus font-bold text-lg text-mu-gold mb-3 flex items-center gap-2">
                  <Star size={20} />
                  {faq.q}
                </h3>
                <p className="text-gray-400 font-inter leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-110 group"
      >
        <Smartphone size={32} className="text-white" />
        <span className="absolute right-full mr-3 bg-mu-gold text-mu-black font-cinzel font-bold text-xs px-3 py-2 clip-angled-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Activar VIP
        </span>
      </a>
    </div>
  );
};
