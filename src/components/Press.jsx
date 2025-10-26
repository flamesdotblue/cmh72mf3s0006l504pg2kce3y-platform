import React from 'react';

const features = [
  { name: 'Smashing Magazine', url: '#', blurb: 'Case study on design systems at scale.' },
  { name: 'Frontend Weekly', url: '#', blurb: 'Performance-first React architectures.' },
  { name: 'CSS Tricks', url: '#', blurb: 'Practical tips for token-based theming.' },
];

export default function Press() {
  return (
    <section id="press" className="relative py-20 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Press & Features</h2>
          <p className="text-zinc-300 mt-3">Selected publications and recognition.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <a key={f.name} href={f.url} className="group rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors p-6">
              <div className="text-xl font-medium group-hover:text-white">{f.name}</div>
              <div className="mt-2 text-sm text-zinc-300">{f.blurb}</div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
