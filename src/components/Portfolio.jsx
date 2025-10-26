import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Aurora UI — Design System',
    desc: 'Multi-brand component library with tokens, docs site, and theming.',
    image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tags: ['React', 'Tokens', 'Accessibility'],
  },
  {
    title: 'Pulse Analytics',
    desc: 'Real-time analytics dashboard with streaming charts and alerts.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tags: ['Vite', 'Tailwind', 'Realtime'],
  },
  {
    title: 'Nimbus Site',
    desc: 'Launch website for a developer tool with MDX blog and SEO.',
    image: 'https://images.unsplash.com/photo-1502880195258-0f245a7708a6?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tags: ['Next.js', 'SEO', 'MDX'],
  },
  {
    title: 'Flow Commerce',
    desc: 'Headless storefront with lightning-fast product pages.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tags: ['Headless', 'SSR', 'Performance'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Featured Work</h2>
            <p className="text-zinc-300 mt-3">Selected projects that marry speed, craft, and clarity.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">Start a project <ExternalLink size={16} /></a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider text-zinc-300 border border-zinc-700 rounded-full px-2 py-0.5">{t}</span>
                  ))}
                </div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-zinc-300 mt-1">{p.desc}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-emerald-400">View project <ExternalLink size={16} /></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
