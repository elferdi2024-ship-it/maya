import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Player {
  Name: string;
  cLevel: number;
  resets: number;
  Class: number; // ID numérico de la clase desde la DB
  countryFlag: string;
  OnlineStatus: number;
}

export const Ranking: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  // Función para mapear el ID de clase a tus archivos en public/RANKING
  const getClassImage = (classId: number): string => {
    const classMap: { [key: number]: string } = {
      0: 'DW.png', 1: 'DARK_WIZARD.png', 2: 'DARK_WIZARD.png',   // Dark Wizard
      16: 'BK.png', 17: 'BK.png', 18: 'BK.png',                 // Dark Knight
      32: 'ELF.png', 33: 'ELF.png', 34: 'ELF.png',              // Elf
      48: 'MG.png', 49: 'MG.png',                               // Magic Gladiator
      64: 'DL.png', 65: 'DL.png',                               // Dark Lord
      80: 'SUMM.png', 81: 'SUMM.png',                           // Summoner
      96: 'RAGE_FIGTHER.png', 97: 'RAGE_FIGTHER.png',           // Rage Fighter
      112: 'GROW_LANCER.png', 114: 'GROW_LANCER.png',           // Grow Lancer
      128: 'RUNE.png', 129: 'RUNE.png',                         // Rune Wizard
      144: 'SLAYER.png', 145: 'SLAYER.png',                     // Slayer
      160: 'GUN_CRUSHER.png', 161: 'GUN_CRUSHER.png',           // Gun Crusher
      176: 'KUNDUM.png',                                        // Kundun/Lemuria
      192: 'ALCHE.png',                                         // Illusion Knight
    };

    // Si el ID no está en la lista, usa DW.png por defecto
    const imageName = classMap[classId] || 'DW.png';
    return `/RANKING/${imageName}`;
  };

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
                    
                    <td className="p-4 text-center">
                      <img src={player.countryFlag || '/RANKING/ALCHE.png'} className="w-6 h-4 inline-block shadow-sm" alt="flag" />
                    </td>

                    {/* Columna Clase Actualizada con la nueva lógica */}
                    <td className="p-4 text-center">
                      <img 
                        src={getClassImage(player.Class)} 
                        className="w-10 h-10 rounded-full border border-mu-gold/20 inline-block object-cover" 
                        alt="class" 
                        onError={(e) => (e.currentTarget.src = '/RANKING/DW.png')}
                      />
                    </td>

                    <td className="p-4 font-semibold flex items-center gap-2 mt-2">
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