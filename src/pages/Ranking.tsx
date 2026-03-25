import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Player {
  Name: string;
  cLevel: number;
  resets: number;
  className: string;
  classImg: string;
  countryFlag: string;
  OnlineStatus: number;
}

export const Ranking: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('https://arkamuonlines20.com/data_fetch_77.php')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPlayers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-mu-black pt-32 pb-24 relative z-20 overflow-hidden text-white">
      {/* Fondo del Ranking */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mu-black/70 z-10"></div>
        <img src="/rankfondo.jpg" className="w-full h-full object-cover opacity-40" alt="bg" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-30">
        <div className="text-center mb-12">
          <img src="/rank.png" className="mx-auto h-32 mb-4 drop-shadow-lg" alt="trophy" />
          <h2 className="font-cinzel font-bold text-4xl md:text-5xl">
            RANKING <span className="text-mu-gold">GLOBAL</span>
          </h2>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden">
          <div className="overflow-x-auto max-h-[700px]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="bg-black/60 sticky top-0 z-10">
                <tr className="text-gray-400 text-xs uppercase">
                  <th className="p-4 text-center">#</th>
                  <th className="p-4 text-center">Country</th>
                  <th className="p-4 text-center">Class</th>
                  <th className="p-4">Character</th>
                  <th className="p-4 text-center">Level</th>
                  <th className="p-4 text-center text-mu-gold">Resets</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-4 text-center font-cinzel text-gray-500">{idx + 1}</td>
                    
                    {/* Columna Bandera */}
                    <td className="p-4 text-center">
                      <img src={player.countryFlag} className="w-6 h-4 inline-block shadow-sm" alt="flag" />
                    </td>

                    {/* Columna Clase (Imagen Circular) */}
                    <td className="p-4 text-center">
                      <img src={player.classImg} className="w-10 h-10 rounded-full border border-mu-gold/20 inline-block" alt="class" />
                    </td>

                    {/* Columna Nombre + Punto Online */}
                    <td className="p-4 font-semibold flex items-center gap-2">
                      {player.Name}
                      <div className={`w-2 h-2 rounded-full ${player.OnlineStatus === 1 ? 'bg-green-500 shadow-[0_0_5px_#22c55e]' : 'bg-red-500'}`} />
                    </td>

                    <td className="p-4 text-center">{player.cLevel}</td>
                    <td className="p-4 text-center font-bold text-mu-gold">{player.resets.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};