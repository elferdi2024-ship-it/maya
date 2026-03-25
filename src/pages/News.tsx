import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export const News: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#141414] pt-24 pb-12 relative z-20 text-gray-300 font-inter">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl text-white font-marcellus mb-6 border-b border-white/10 pb-4">Imperial First Origin</h1>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>Se ha introducido en el juego el segundo Equipamiento Legendario, conocido como Imperial of the First Origin.</p>
              <p>Esta nueva generación de objetos legendarios representa la evolución directa del equipamiento <strong className="text-white">Temple Guard</strong>, aportando no solo valores mejorados, sino también nuevos atributos escalables, opciones refinadas y un sistema propio de refuerzo, diseñado para satisfacer las exigencias del contenido de alto nivel.</p>
              <p>El equipamiento Imperial of the First Origin está enfocado en la progresión avanzada, ofreciendo bonificaciones consistentes tanto para PvE como para PvP, además de sinergias exclusivas entre armaduras, armas y escudos, consolidándose como uno de los pilares del endgame actual.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img src="/noticias.png" alt="Imperial Armor" className="w-full h-auto border border-white/10 rounded-sm" />
          </div>
        </div>

        {/* Evolución Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl text-white font-marcellus mb-6 border-b border-white/10 pb-4">Evolución</h2>
          <p className="text-sm mb-4">Los equipos <strong className="text-white">Imperial</strong> siguen el mismo sistema de evolución introducido con <strong className="text-white">Temple Guard</strong>, basado en <strong className="text-white">niveles</strong> y <strong className="text-white">stages</strong>.</p>
          <ul className="list-disc pl-5 space-y-2 text-sm mb-8">
            <li>El equipamiento comienza en <strong className="text-white">+0 / Stage 1</strong></li>
            <li>Cada nivel contiene <strong className="text-white">5 stages</strong></li>
            <li>Al alcanzar el <strong className="text-white">Stage 5</strong>, el objeto puede evolucionar al siguiente nivel</li>
            <li>Los fallos pueden provocar la regresión de stage, pero el objeto nunca se destruye</li>
          </ul>

          <h3 className="text-xl text-white font-marcellus mb-4 flex items-center gap-2">
            <span className="text-mu-gold">--</span> Probabilidades de Éxito
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm mb-4">
            <li><strong className="text-white">Probabilidad base:</strong> 50%</li>
            <li><strong className="text-white">Con Luck:</strong> +10%</li>
            <li><strong className="text-white">Con Luck + Talisman of Luck:</strong> hasta 70%</li>
          </ul>
          <p className="text-sm mb-8">No es necesario utilizar <strong className="text-white">Talisman of Chaos Assembly</strong>, ya que los fallos no destruyen el objeto.</p>

          {/* Combinación Armas y Escudos */}
          <h3 className="text-xl text-white font-marcellus mb-4 flex items-center gap-2">
            <span className="text-mu-gold">--</span> Combinación – Armas y Escudos
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse border border-[#2a2a2a]">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Ingrediente Principal</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Material Imperial</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Joyas Necesarias</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Zen</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Éxito</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#141414]">
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">
                    Legendary Weapon / Shield<br/>+15 Level, Stage 5
                  </td>
                  <td className="border border-[#2a2a2a] p-4 text-center">
                    <div className="flex flex-col items-center justify-center bg-[#0a0a0a] p-4 rounded border border-[#222]">
                      <img src="/imperial-moru.png" alt="Imperial Moru" className="w-16 h-16 object-contain mb-2" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/moru/64/64'; }} />
                      <span className="text-gray-400">Imperial Moru</span>
                    </div>
                  </td>
                  <td className="border border-[#2a2a2a] p-4 text-gray-400">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>30x Jewel of Bless</li>
                      <li>30x Jewel of Soul</li>
                      <li>1x Jewel of Chaos</li>
                      <li>1x Jewel of Creation</li>
                    </ul>
                  </td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">500.000.000 Zen</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">100%</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">
                    Imperial Weapon / Shield<br/>+0 Level, Stage 1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Combinación Armaduras */}
          <h3 className="text-xl text-white font-marcellus mb-4 flex items-center gap-2">
            <span className="text-mu-gold">--</span> Combinación – Armaduras
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse border border-[#2a2a2a]">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Ingrediente Principal</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Material Imperial</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Joyas Necesarias</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Zen</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Éxito</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center">Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#141414]">
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">
                    Legendary Set Armor<br/>+15 Level, Stage 5
                  </td>
                  <td className="border border-[#2a2a2a] p-4 text-center">
                    <div className="flex flex-col items-center justify-center bg-[#0a0a0a] p-4 rounded border border-[#222]">
                      <img src="/imperial-soul.png" alt="Imperial Soul" className="w-16 h-16 object-contain mb-2" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/soul/64/64'; }} />
                      <span className="text-gray-400">Imperial Soul</span>
                    </div>
                  </td>
                  <td className="border border-[#2a2a2a] p-4 text-gray-400">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>30x Jewel of Bless</li>
                      <li>30x Jewel of Soul</li>
                      <li>1x Jewel of Chaos</li>
                      <li>1x Jewel of Creation</li>
                    </ul>
                  </td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">200.000.000 Zen</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">100%</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">
                    Imperial Set Armor<br/>+0 Level, Stage 1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Nota */}
          <div className="border border-[#2a2a2a] bg-[#111] p-4 rounded-sm mb-12 text-sm">
            <strong className="text-white block mb-2">Nota</strong>
            <ul className="space-y-1 text-gray-400">
              <li>• Las <strong className="text-white">Stat Options</strong> y <strong className="text-white">Luck Options</strong> se conservan durante el upgrade.</li>
              <li>• Las opciones adicionales de JOL y <strong className="text-white">Jewel of Harmony</strong> se eliminan.</li>
            </ul>
          </div>
        </div>

        {/* Refinamiento Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl text-white font-marcellus mb-6 border-b border-white/10 pb-4">Refinamiento</h2>
          <p className="text-sm mb-8">Para mejorar el equipamiento Imperial, es necesario utilizar <strong className="text-white">Imperial Reinforcement Stones</strong>.</p>

          {/* Refinamiento Común */}
          <h3 className="text-xl text-white font-marcellus mb-4 flex items-center gap-2">
            <span className="text-mu-gold">--</span> Refinamiento Común
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse border border-[#2a2a2a]">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center w-1/4">Objeto</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center w-1/4">Material</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center w-1/4">Joyas</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center w-1/8">Zen</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center w-1/8">Probabilidad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#141414]">
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">
                    Imperial Weapon / Armor
                  </td>
                  <td className="border border-[#2a2a2a] p-4 text-center">
                    <div className="flex flex-col items-center justify-center bg-[#0a0a0a] p-4 rounded border border-[#222]">
                      <img src="/imperial-reinforcement.png" alt="Imperial Reinforcement Stone" className="w-12 h-12 object-contain mb-2" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/stone1/48/48'; }} />
                    </div>
                    <div className="mt-2 text-gray-400">x12 [Bound] Imperial Reinforcement Stone</div>
                  </td>
                  <td className="border border-[#2a2a2a] p-4 text-gray-400 flex justify-center">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>1x Jewel of Bless</li>
                      <li>1x Jewel of Soul</li>
                      <li>2x Jewel of Life</li>
                    </ul>
                  </td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">10.000.000</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">
                    50%<br/>(hasta 70% con Luck)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Refinamiento Élite */}
          <h3 className="text-xl text-white font-marcellus mb-4 flex items-center gap-2">
            <span className="text-mu-gold">--</span> Refinamiento Élite
          </h3>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse border border-[#2a2a2a]">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center w-1/3">Objeto</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center w-1/3">Material</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center w-1/3">Probabilidad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#141414]">
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">
                    Imperial Weapon / Armor
                  </td>
                  <td className="border border-[#2a2a2a] p-4 text-center">
                    <div className="flex flex-col items-center justify-center bg-[#0a0a0a] p-4 rounded border border-[#222]">
                      <img src="/shining-imperial.png" alt="Shining Imperial Reinforcement Stone" className="w-12 h-12 object-contain mb-2" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/stone2/48/48'; }} />
                    </div>
                    <div className="mt-2 text-gray-400">x12 [Bound] Shining Imperial Reinforcement Stone</div>
                  </td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">
                    60%<br/>(hasta 80% con Luck)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Opciones del Equipamiento Imperial */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl text-white font-marcellus mb-6 border-b border-white/10 pb-4">Opciones del Equipamiento Imperial</h2>
          
          {/* Armas */}
          <h3 className="text-xl text-white font-marcellus mb-4 flex items-center gap-2">
            <span className="text-mu-gold">--</span> Armas
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse border border-[#2a2a2a]">
              <tbody>
                {[
                  "Probabilidad de Daño Excelente aumentada en 10%",
                  "Velocidad de Ataque (Magic) aumentada en 7",
                  "Al matar un monstruo, recupera +8 de Vida",
                  "Al matar un monstruo, recupera (Mana) y Ataque",
                  "Poder (Magic o Curse) aumentado en 3.6 por cada 20 niveles",
                  "Poder de Ataque (Magic o Curse) aumentado en 102"
                ].map((opt, i) => (
                  <tr key={i} className="bg-[#141414]">
                    <td className="border border-[#2a2a2a] p-3 text-center text-gray-400">{opt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Escudos */}
          <h3 className="text-xl text-white font-marcellus mb-4 flex items-center gap-2">
            <span className="text-mu-gold">--</span> Escudos
          </h3>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse border border-[#2a2a2a]">
              <tbody>
                {[
                  "Mejora del Poder de Defensa del atributo, reforzado en 57% (Elf)",
                  "Defensa aumentada en 3.6 por cada 20 niveles",
                  "Daño aumentado en 5%, reflejo",
                  "Tasa de Éxito de Defensa aumentada en 10%",
                  "Vida Máxima aumentada en 396",
                  "Mana Máximo aumentado en 396",
                  "Daño recibido reducido en 108"
                ].map((opt, i) => (
                  <tr key={i} className="bg-[#141414]">
                    <td className="border border-[#2a2a2a] p-3 text-center text-gray-400">{opt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Materiales Imperial */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl text-white font-marcellus mb-6 border-b border-white/10 pb-4">Materiales Imperial</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-[#2a2a2a]">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center w-1/3">Material</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center w-1/3">Imagen</th>
                  <th className="border border-[#2a2a2a] p-3 font-medium text-center w-1/3">Dónde obtener</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#141414]">
                  <td className="border border-[#2a2a2a] p-6 text-center font-bold text-gray-300">Imperial Moru</td>
                  <td className="border border-[#2a2a2a] p-4 text-center">
                    <div className="flex justify-center">
                      <div className="bg-[#0a0a0a] p-4 rounded border border-[#222]">
                        <img src="/imperial-moru.png" alt="Imperial Moru" className="w-12 h-12 object-contain" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/moru/48/48'; }} />
                      </div>
                    </div>
                  </td>
                  <td className="border border-[#2a2a2a] p-6 text-center text-gray-400">
                    NPC <strong className="text-white">Priest James</strong><br/>
                    Precio: <strong className="text-white">1.000.000 Ruud</strong>
                  </td>
                </tr>
                <tr className="bg-[#141414]">
                  <td className="border border-[#2a2a2a] p-6 text-center font-bold text-gray-300">Imperial Soul</td>
                  <td className="border border-[#2a2a2a] p-4 text-center">
                    <div className="flex justify-center">
                      <div className="bg-[#0a0a0a] p-4 rounded border border-[#222]">
                        <img src="/imperial-soul.png" alt="Imperial Soul" className="w-12 h-12 object-contain" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/soul/48/48'; }} />
                      </div>
                    </div>
                  </td>
                  <td className="border border-[#2a2a2a] p-6 text-center text-gray-400">
                    NPC <strong className="text-white">Priest James</strong><br/>
                    Precio: <strong className="text-white">1000.000 Ruud</strong>
                  </td>
                </tr>
                <tr className="bg-[#141414]">
                  <td className="border border-[#2a2a2a] p-6 text-center font-bold text-gray-300">Imperial Reinforcement Stone</td>
                  <td className="border border-[#2a2a2a] p-4 text-center">
                    <div className="flex justify-center">
                      <div className="bg-[#0a0a0a] p-4 rounded border border-[#222]">
                        <img src="/imperial-reinforcement.png" alt="Imperial Reinforcement Stone" className="w-12 h-12 object-contain" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/stone1/48/48'; }} />
                      </div>
                    </div>
                  </td>
                  <td className="border border-[#2a2a2a] p-6 text-center text-gray-400">
                    Drop de monstruos en el mapa<br/>
                    <strong className="text-white">Aquilas Temple</strong>
                  </td>
                </tr>
                <tr className="bg-[#141414]">
                  <td className="border border-[#2a2a2a] p-6 text-center font-bold text-gray-300">Shining Imperial Reinforcement Stone</td>
                  <td className="border border-[#2a2a2a] p-4 text-center">
                    <div className="flex justify-center">
                      <div className="bg-[#0a0a0a] p-4 rounded border border-[#222]">
                        <img src="/shining-imperial.png" alt="Shining Imperial Reinforcement Stone" className="w-12 h-12 object-contain" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/stone2/48/48'; }} />
                      </div>
                    </div>
                  </td>
                  <td className="border border-[#2a2a2a] p-6 text-center text-gray-400">
                    Eventos y Promociones
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
