import { useEffect, useState } from 'react';

interface Player {
  Name: string;
  cLevel: number;
  resets: number;
}

export const RankingMu = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // RECUERDA: Usa la URL de tu api-test.php
    const API_URL = 'https://arkamuonlines20.com/api-test.php';

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error en el puente de datos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{color: '#aaa', textAlign: 'center', padding: '20px'}}>Conectando al servidor...</div>;

  return (
    <div style={{
      background: 'linear-gradient(180deg, #121212 0%, #000 100%)',
      border: '1px solid #333',
      borderRadius: '8px',
      overflow: 'hidden',
      maxWidth: '600px',
      margin: '20px auto',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    }}>
      <div style={{
        background: 'rgba(255, 215, 0, 0.1)',
        padding: '15px',
        borderBottom: '2px solid #ffd700',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#ffd700', margin: 0, fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Top 10 Guerreros
        </h2>
      </div>

      <table style={{ width: '100%', color: '#ccc', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr style={{ background: '#1a1a1a', textTransform: 'uppercase', fontSize: '12px', color: '#888' }}>
            <th style={{ padding: '12px' }}>Pos</th>
            <th style={{ textAlign: 'left' }}>Personaje</th>
            <th>Nivel</th>
            <th>Resets</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index} style={{ 
              borderBottom: '1px solid #222',
              background: index < 3 ? 'rgba(255,215,0,0.03)' : 'transparent'
            }}>
              <td style={{ 
                padding: '12px', 
                textAlign: 'center',
                color: index === 0 ? '#ffd700' : index === 1 ? '#c0c0c0' : index === 2 ? '#cd7f32' : '#666',
                fontWeight: 'bold'
              }}>
                {index + 1}
              </td>
              <td style={{ textAlign: 'left', color: '#fff', fontWeight: 500 }}>{player.Name}</td>
              <td style={{ textAlign: 'center' }}>{player.cLevel}</td>
              <td style={{ textAlign: 'center', color: '#ffd700', fontWeight: 'bold' }}>{player.resets}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={{ padding: '10px', textAlign: 'right', fontSize: '10px', color: '#444' }}>
        Actualizado en tiempo real desde el servidor
      </div>
    </div>
  );
};