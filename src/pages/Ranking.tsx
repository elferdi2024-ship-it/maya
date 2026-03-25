import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

// Definimos la estructura de los datos que vienen del PHP
interface Player {
  Name: string;
  cLevel: number;
  resets: number;
}

export const Ranking: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Llamada a tu API en cPanel
    fetch('https://arkamuonlines20.com/api-test.php')
      .then((res) => res.json())
      .then((data) => {
        // Si la data es un array, la guardamos
        if (Array.isArray(data)) {
          setPlayers(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando ranking:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-mu-black pt-32 pb-24 relative z-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mu-black/70 z-10"></div>
        <img 
          src="/rankfondo.jpg" 
          alt="Ranking Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-mayan-pattern opacity-5 mix-blend-overlay pointer-events-none z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,216,107,0.05)_0%,transparent_70%)] pointer-events-none z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="text-center mb-12">
          <img src="/rank.png" alt="Ranking Trophy" className="mx-auto h-32 object-contain mb-4 drop-shadow-[0_0_15px_rgba(255,216,107,0.4)]" />
          <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-4">
            RANKING <span className="text-mu-gold text-glow-gold">GLOBAL</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mu-gold to-transparent mx-auto"></div>
          <p className="mt-4 text-gray-400 font-inter max-w-2xl mx-auto">
            {loading ? "Sincronizando guerreros..." : "Los guerreros más formidables del continente."}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mmorpg-panel p-1 clip-angled-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-black/60 border-b border-white/10">
                  <th className="p-4 font-marcellus text-mu-gold text-center w-16">#</th>
                  <th className="p-4 font-marcellus text-gray-300">Nombre</th>
                  <th className="p-4 font-marcellus text-gray-300">Clase</th>
                  <th className="p-4 font-marcellus text-gray-300 text-center">Nivel</th>
                  <th className="p-4 font-marcellus text-mu-gold text-center">Resets</th>
                </tr>
              </thead>
              <tbody>
                {players.length > 0 ? (
                  players.map((player, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-white/5 hover:bg-white/5 transition-colors ${idx < 3 ? 'bg-mu-gold/5' : 'bg-black/40'}`}
                    >
                      <td className="p-4 text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-cinzel font-bold
                          ${idx === 0 ? 'bg-mu-gold/20 text-mu-gold border border-mu-gold' : 
                            idx === 1 ? 'bg-gray-500/20 text-gray-300 border border-gray-400' : 
                            idx === 2 ? 'bg-amber-900/20 text-amber-600 border border-amber-700' : 
                            'text-gray-500'}`}
                        >
                          {idx + 1}
                        </span>
                      </td>
                      <td className="p-4 font-marcellus text-white text-lg">{player.Name}</td>
                      <td className="p-4 font-inter text-mu-blue text-sm">Online</td>
                      <td className="p-4 font-marcellus text-white text-center">{player.cLevel}</td>
                      <td className="p-4 font-marcellus text-mu-gold text-center font-bold">{player.resets}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-10 text-center text-gray-500 font-marcellus">
                      {loading ? "Cargando datos del servidor..." : "No se encontraron personajes."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};