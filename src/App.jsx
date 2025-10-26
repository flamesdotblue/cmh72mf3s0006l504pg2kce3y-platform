import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-black text-emerald-200 antialiased min-h-screen selection:bg-emerald-500/20 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>
      <footer className="border-t border-emerald-900/40 py-10">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-300/70">© {new Date().getFullYear()} YourName. All rights reserved.</p>
          <div className="text-xs text-emerald-300/60">Theme: Hacker Matrix • Built with React + Tailwind</div>
        </div>
      </footer>
    </div>
  );
}
