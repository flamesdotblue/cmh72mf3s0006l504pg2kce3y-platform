import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[82vh] min-h-[540px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-[#0b0e13]/40 to-[#0b0e13]" />
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300 mb-4">
              <Star size={14} className="text-emerald-400" /> Available for new projects
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Building fast, elegant, and powerful web experiences
            </h1>
            <p className="mt-4 text-zinc-300 max-w-2xl">
              I craft performant interfaces with a design-first approach. From concept to launch, I help teams ship with clarity and speed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 rounded-md transition-colors">
                See Portfolio <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-5 py-3 rounded-md transition-colors">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
