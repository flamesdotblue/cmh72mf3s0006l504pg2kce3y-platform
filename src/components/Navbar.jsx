import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#blog', label: 'Blog' },
    { href: '#faq', label: 'FAQ' },
    { href: '#press', label: 'Press' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b0e13]/70 bg-[#0b0e13]/60 border-b border-zinc-800">
      <div className="container mx-auto px-6 py-3 max-w-6xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-emerald-500 text-black">
            <Rocket size={18} />
          </span>
          <span className="font-semibold tracking-tight group-hover:text-emerald-400 transition-colors">YourName</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-md transition-colors">Hire Me</a>
        </nav>
        <button onClick={() => setOpen((s) => !s)} className="md:hidden p-2 rounded-md border border-zinc-700 hover:border-zinc-500">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-800">
          <div className="px-6 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-zinc-300 hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-md transition-colors">Hire Me</a>
          </div>
        </div>
      )}
    </header>
  );
}
