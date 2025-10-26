import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-900 py-10">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">© {year} YourName. All rights reserved.</p>
        <div className="text-xs text-zinc-500">Built with React, Tailwind, and a dash of motion.</div>
      </div>
    </footer>
  );
}
