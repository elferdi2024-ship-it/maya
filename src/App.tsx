/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Particles } from './components/Particles';
import { Home } from './pages/Home';
import { Evento } from './pages/Evento';
import { News } from './pages/News';
import { Register } from './pages/Register';
import { Ranking } from './pages/Ranking';
import { Vip } from './pages/Vip';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-mu-black text-white relative overflow-hidden flex flex-col">
        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-50 pointer-events-none z-0"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-0"></div>
        <Particles />
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evento" element={<Evento />} />
            <Route path="/news" element={<News />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/vip" element={<Vip />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
