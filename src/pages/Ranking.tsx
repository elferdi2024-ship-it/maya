import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Asegúrate de que sea framer-motion o motion/react según tu package.json

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
    fetch('https://arkamuonlines20.com/api-test.php')
      .then((res) => res.json())
      .then((data) => {
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
        />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="text-center mb-12">
          <img src="/rank.png" alt="Ranking Trophy" className="mx-auto h-32 object-contain mb-4 drop-shadow-[0_0_15px_rgba(255,216,107,0.4)]" />
          <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-4">
            RANKING <span className="text-mu-gold text-glow-gold">GLOBAL</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mu-gold to-transparent mx-auto"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mmorpg-panel p-1 clip-angled-sm overflow-hidden bg-black/40 backdrop-blur-md border border-white/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-black/60 border-b border-white/10">
                  <th className="p-4 font-marcellus text-mu-gold text-center w-16">#</th>
                  <th className="p-4 font-marcellus text-gray-300">Nombre</th>
                  <th className="p-4 font-marcellus text-gray-300 text-center">Nivel</th>
                  <th className="p-4 font-marcellus text-mu-gold text-center">Resets</th>
                </tr>
              </thead>
              <tbody>
                {players.length > 0 ? (
                  players.map((player, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-cinzel font-bold ${idx < 3 ? 'text-mu-gold' : 'text-gray-500'}`}>
                          {idx + 1}
                        </span>
                      </td>
                      <td className="p-4 font-marcellus text-white text-lg">{player.Name}</td>
                      <td className="p-4 font-marcellus text-white text-center">{player.cLevel}</td>
                      <td className="p-4 font-marcellus text-mu-gold text-center font-bold">{player.resets}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-10 text-center text-gray-500">
                      {loading ? "Sincronizando con el servidor..." : "No se encontraron datos."}
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