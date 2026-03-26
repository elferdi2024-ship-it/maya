import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, User, Lock, Mail, CheckCircle, AlertCircle } from 'lucide-react';

export const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    agreeTerms: false
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | null }>({ text: '', type: null });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ text: '', type: null });

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: 'Las contraseñas no coinciden.', type: 'error' });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://arkamuonlines20.com/api_registro.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          email: formData.email
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ text: result.message, type: 'success' });
        // Limpiar el formulario si fue exitoso
        setFormData({
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
          agreeTerms: false
        });
      } else {
        setMessage({ text: result.message, type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Error al conectar con el servidor. Intenta de nuevo más tarde.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-mu-black pt-32 pb-24 relative z-20 flex items-center justify-center">
      <div className="absolute inset-0 bg-mayan-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,216,107,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="w-full max-w-md px-4 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mmorpg-panel p-8 clip-angled relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mu-gold to-transparent"></div>
          
          <div className="text-center mb-8">
            <Shield size={48} className="mx-auto text-mu-gold mb-4 opacity-80" />
            <h2 className="font-cinzel font-bold text-3xl text-white mb-2">
              REGISTRAR <span className="text-mu-gold text-glow-gold">CUENTA</span>
            </h2>
            <p className="text-gray-400 font-inter text-sm">
              Únete a la batalla en el continente de MU
            </p>
          </div>

          {/* Mensajes de Alerta */}
          {message.type && (
            <div className={`mb-6 p-4 border rounded-sm flex items-start gap-3 ${
              message.type === 'error' ? 'bg-red-900/20 border-red-500/50 text-red-200' : 'bg-green-900/20 border-green-500/50 text-green-200'
            }`}>
              {message.type === 'error' ? <AlertCircle size={20} className="text-red-400 mt-0.5" /> : <CheckCircle size={20} className="text-green-400 mt-0.5" />}
              <span className="font-inter text-sm">{message.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-marcellus text-gray-300 text-sm mb-2 uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  minLength={4}
                  maxLength={10}
                  pattern="[a-zA-Z0-9]+"
                  className="w-full bg-black/50 border border-white/10 text-white font-inter text-sm rounded-none focus:ring-1 focus:ring-mu-gold focus:border-mu-gold block pl-10 p-3 transition-colors"
                  placeholder="4 a 10 caracteres (letras y números)"
                />
              </div>
            </div>

            <div>
              <label className="block font-marcellus text-gray-300 text-sm mb-2 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500" />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={4}
                  maxLength={20}
                  className="w-full bg-black/50 border border-white/10 text-white font-inter text-sm rounded-none focus:ring-1 focus:ring-mu-gold focus:border-mu-gold block pl-10 p-3 transition-colors"
                  placeholder="4 a 20 caracteres"
                />
              </div>
            </div>

            <div>
              <label className="block font-marcellus text-gray-300 text-sm mb-2 uppercase tracking-wider">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CheckCircle size={18} className="text-gray-500" />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={4}
                  maxLength={20}
                  className="w-full bg-black/50 border border-white/10 text-white font-inter text-sm rounded-none focus:ring-1 focus:ring-mu-gold focus:border-mu-gold block pl-10 p-3 transition-colors"
                  placeholder="repite tu contraseña"
                />
              </div>
            </div>

            <div>
              <label className="block font-marcellus text-gray-300 text-sm mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 text-white font-inter text-sm rounded-none focus:ring-1 focus:ring-mu-gold focus:border-mu-gold block pl-10 p-3 transition-colors"
                  placeholder="correo electrónico válido"
                />
              </div>
            </div>

            <div className="flex items-start mt-4">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 bg-black/50 border-white/20 rounded-none text-mu-gold focus:ring-mu-gold focus:ring-offset-mu-black"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-inter text-gray-400">
                  Al registrarte aceptas nuestros <a href="#" className="text-mu-gold hover:underline">Términos de Servicio</a>.
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full mmorpg-button-gold clip-angled py-4 mt-6 flex items-center justify-center gap-2 group ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="font-cinzel font-bold text-lg text-mu-black tracking-wider group-hover:text-black transition-colors">
                {loading ? 'CREANDO...' : 'CREAR CUENTA'}
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};