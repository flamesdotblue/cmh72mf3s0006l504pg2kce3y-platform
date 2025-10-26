import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#intro', label: 'Intro' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/70 border-b border-emerald-900/40">
      <div className="container mx-auto px-6 py-3 max-w-6xl flex items-center justify-between">
        <a href="#intro" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-emerald-500/20 text-emerald-400 border border-emerald-700/40">
            <Rocket size={18} />
          </span>
          <span className="font-semibold tracking-tight text-emerald-200 group-hover:text-emerald-400 transition-colors">YourName</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-emerald-300/80 hover:text-emerald-200 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center gap-2 bg-emerald-500 text-black hover:bg-emerald-400 font-medium px-4 py-2 rounded-sm transition-colors">Hire Me</a>
        </nav>
        <button onClick={() => setOpen((s) => !s)} className="md:hidden p-2 rounded-sm border border-emerald-900/50 text-emerald-200 hover:border-emerald-700/70">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-emerald-900/40">
          <div className="px-6 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-emerald-300/90 hover:text-emerald-200">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 bg-emerald-500 text-black hover:bg-emerald-400 font-medium px-4 py-2 rounded-sm transition-colors">Hire Me</a>
          </div>
        </div>
      )}
    </header>
  );
}
