import React from 'react';
import { Rocket, Code2, Palette, Gauge } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Product Websites',
    desc: 'High-converting marketing sites with crisp visuals, strong messaging, and SEO baked-in.',
    pill: 'From concept to launch',
  },
  {
    icon: Code2,
    title: 'Frontend Engineering',
    desc: 'Robust React + TypeScript builds, component libraries, and scalable architectures.',
    pill: 'Performance first',
  },
  {
    icon: Palette,
    title: 'Design Systems',
    desc: 'Accessible, consistent UI kits and tokens that empower teams to move faster.',
    pill: 'Consistency by design',
  },
  {
    icon: Gauge,
    title: 'Speed Optimization',
    desc: 'Lighthouse-tuned performance, image pipelines, and core web vitals improvements.',
    pill: '95+ scores',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 border-t border-zinc-900 bg-gradient-to-b from-[#0b0e13] to-[#0b0e13]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Services</h2>
          <p className="text-zinc-300 mt-3">Clear deliverables, transparent process, measurable outcomes.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, pill }) => (
            <div key={title} className="group relative rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition-colors">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-emerald-500/10 text-emerald-400">
                  <Icon size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 border border-zinc-700 rounded-full px-2 py-0.5">
                  {pill}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 rounded-md transition-colors">Request a Quote</a>
        </div>
      </div>
    </section>
  );
}
