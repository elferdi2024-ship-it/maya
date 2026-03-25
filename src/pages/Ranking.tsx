import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Player {
  Name: string;
  cLevel: number;
  resets: number;
  Class: number; 
  countryFlag?: string;
  OnlineStatus: number;
}

export const Ranking: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  // Mapeo exhaustivo de todas las clases y evoluciones extraído de tu xteam.tables.php
  const getClassImage = (classId: number): string => {
    const classMap: { [key: number]: string } = {
      // Dark Wizard
      0: 'DW.png', 1: 'DW.png', 2: 'DW.png', 3: 'DW.png', 4: 'DW.png',
      // Dark Knight
      16: 'BK.png', 17: 'BK.png', 18: 'BK.png', 19: 'BK.png', 20: 'BK.png',
      // Elf
      32: 'ELF.png', 33: 'ELF.png', 34: 'ELF.png', 35: 'ELF.png', 36: 'ELF.png',
      // Magic Gladiator
      48: 'MG.png', 50: 'MG.png', 51: 'MG.png', 52: 'MG.png',
      // Dark Lord
      64: 'DL.png', 66: 'DL.png', 67: 'DL.png', 68: 'DL.png',
      // Summoner
      80: 'SUMM.png', 81: 'SUMM.png', 82: 'SUMM.png', 83: 'SUMM.png', 84: 'SUMM.png',
      // Rage Fighter
      96: 'RAGE_FIGTHER.png', 98: 'RAGE_FIGTHER.png', 99: 'RAGE_FIGTHER.png', 100: 'RAGE_FIGTHER.png',
      // Grow Lancer
      112: 'GROW_LANCER.png', 114: 'GROW_LANCER.png', 115: 'GROW_LANCER.png', 116: 'GROW_LANCER.png',
      // Rune Wizard
      128: 'RUNE.png', 129: 'RUNE.png', 130: 'RUNE.png', 131: 'RUNE.png', 132: 'RUNE.png',
      // Slayer
      144: 'SLAYER.png', 145: 'SLAYER.png', 146: 'SLAYER.png', 147: 'SLAYER.png', 148: 'SLAYER.png',
      // Gun Crusher
      160: 'GUN_CRUSHER.png', 161: 'GUN_CRUSHER.png', 162: 'GUN_CRUSHER.png', 163: 'GUN_CRUSHER.png', 164: 'GUN_CRUSHER.png',
      // Light Wizard / Kundun
      176: 'KUNDUM.png', 177: 'KUNDUM.png', 178: 'KUNDUM.png', 179: 'KUNDUM.png', 180: 'KUNDUM.png',
      // Lemuria (Usando Kundum.png como base si no tienes el archivo LEMURIA.png)
      192: 'KUNDUM.png', 193: 'KUNDUM.png', 194: 'KUNDUM.png', 195: 'KUNDUM.png', 196: 'KUNDUM.png',
      // Illusion Knight
      208: 'ALCHE.png', 209: 'ALCHE.png', 210: 'ALCHE.png', 211: 'ALCHE.png', 212: 'ALCHE.png',
      // Alchemist
      224: 'ALCHE.png', 225: 'ALCHE.png', 226: 'ALCHE.png', 227: 'ALCHE.png', 228: 'ALCHE.png',
    };

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
            RANKING <span className="text-mu-gold">TOP 50</span>
          </h2>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden">
          <div className="overflow-x-auto max-h-[800px] scrollbar-thin scrollbar-thumb-mu-gold">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="bg-black/80 sticky top-0 z-10 shadow-xl">
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
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                    <td className="p-4 text-center font-cinzel text-gray-400">{idx + 1}</td>
                    
                    {/* Banderas: Solución temporal segura */}
                    <td className="p-4 text-center">
                      {player.countryFlag ? (
                        <img src={player.countryFlag} className="w-6 h-4 inline-block shadow-sm" alt="flag" />
                      ) : (
                        <span className="text-xs text-gray-600 font-bold">N/A</span>
                      )}
                    </td>

                    <td className="p-4 text-center">
                      <img 
                        src={getClassImage(player.Class)} 
                        className="w-10 h-10 rounded-full border border-mu-gold/30 inline-block object-cover bg-black/50" 
                        alt="class" 
                        onError={(e) => (e.currentTarget.src = '/RANKING/DW.png')}
                      />
                    </td>

                    <td className="p-4 font-semibold">
                      <div className="flex items-center gap-2">
                        {player.Name}
                        {/* Indicador de estado online usando la BD real */}
                        <div className={`w-2 h-2 rounded-full ${player.OnlineStatus === 1 ? 'bg-green-500 shadow-[0_0_5px_#22c55e]' : 'bg-red-500'}`} />
                      </div>
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