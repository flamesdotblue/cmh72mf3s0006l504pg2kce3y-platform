import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cipher UI — Dark Design System',
    desc: 'Token-driven, accessible components with neon theming and CLI docs.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tags: ['React', 'Tokens', 'A11y'],
  },
  {
    title: 'BlackHat Analytics',
    desc: 'Realtime dashboards with streaming charts, auth, and role controls.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tags: ['Vite', 'Realtime', 'Tailwind'],
  },
  {
    title: 'GhostNet Site',
    desc: 'High-performance product site with MDX blog and structured data.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tags: ['Next.js', 'SEO', 'MDX'],
  },
  {
    title: 'ShadowCommerce',
    desc: 'Headless storefront: instant product pages, edge caching, and SSR.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tags: ['Headless', 'SSR', 'Perf'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 border-t border-emerald-900/40">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-emerald-100">Featured Work</h2>
            <p className="text-emerald-300/80 mt-3">Projects tuned for performance, security, and style.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">Start a project <ExternalLink size={16} /></a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group overflow-hidden rounded-sm border border-emerald-900/50 bg-gradient-to-b from-black/60 to-black/80 hover:border-emerald-600/70 transition-colors">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider text-emerald-300/90 border border-emerald-900/50 rounded-sm px-2 py-0.5">{t}</span>
                  ))}
                </div>
                <h3 className="text-lg font-medium text-emerald-100">{p.title}</h3>
                <p className="text-sm text-emerald-300/80 mt-1">{p.desc}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-emerald-400">View project <ExternalLink size={16} /></div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
