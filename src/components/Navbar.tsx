import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Trophy, Users, Home, Sparkles, Newspaper, UserPlus, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Inicio', path: '/', icon: <Home size={18} /> },
    // { name: 'Noticias', path: '/news', icon: <Newspaper size={18} /> },
    { name: 'Ranking', path: '/ranking', icon: <Trophy size={18} /> },
    { name: 'VIP', path: '/vip', icon: <Crown size={18} /> },
    { name: 'Descargar', path: '/#descargar', icon: <Download size={18} /> },
    { name: 'Comunidad', path: '/#comunidad', icon: <Users size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mmorpg-panel border-b-2 border-mu-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img src="/logo.png" alt="MU MAYA" className="h-16 object-contain drop-shadow-[0_0_15px_rgba(255,216,107,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(255,216,107,0.8)] transition-all duration-300" referrerPolicy="no-referrer" />
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 group relative
                    ${(location.pathname + location.hash) === link.path || (location.pathname === '/' && link.path === '/' && !location.hash)
                    ? 'text-mu-gold text-glow-gold'
                    : 'text-gray-300 hover:text-mu-gold'}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.icon}
                  <span className="font-marcellus tracking-wider">{link.name}</span>
                </span>
                <div className="absolute inset-0 bg-mu-gold/5 opacity-0 group-hover:opacity-100 transition-opacity clip-angled-sm"></div>
              </Link>
            ))}

            <div className="pl-4 ml-4 border-l border-mu-jade/20 flex items-center gap-4">
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 group relative text-gray-300 hover:text-mu-gold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <UserPlus size={18} />
                  <span className="font-marcellus tracking-wider">REGISTRARSE</span>
                </span>
                <div className="absolute inset-0 bg-mu-gold/5 opacity-0 group-hover:opacity-100 transition-opacity clip-angled-sm"></div>
              </Link>

              <Link
                to="/evento"
                className="mmorpg-button-jade clip-angled px-6 py-2.5 font-marcellus font-bold tracking-wider text-sm flex items-center gap-2"
              >
                <span className="relative z-10 text-white group-hover:text-white transition-colors flex items-center gap-2">
                  <Sparkles size={16} />
                  SPEED SERVER
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mmorpg-panel border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-mu-gold hover:bg-mu-gold/5 block px-3 py-2 rounded-md text-base font-medium font-marcellus flex items-center gap-3"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-mu-gold hover:bg-mu-gold/5 block px-3 py-2 rounded-md text-base font-medium font-marcellus flex items-center gap-3"
              >
                <UserPlus size={18} />
                Registrarse
              </Link>
              <Link
                to="/evento"
                onClick={() => setIsOpen(false)}
                className="mmorpg-button-jade clip-angled mt-4 w-full px-3 py-3 text-base font-bold font-marcellus text-center flex items-center justify-center gap-2"
              >
                <Sparkles size={18} className="relative z-10 text-white" />
                <span className="relative z-10 text-white">SPEED SERVER</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
