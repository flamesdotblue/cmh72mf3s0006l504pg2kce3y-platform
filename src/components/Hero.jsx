import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';

function useMatrix(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight * 0.82);

    const density = Math.max(10, Math.floor(width / 18));
    const fontSize = Math.max(12, Math.floor(width / 110));
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(1);
    const charset = '01-01$#@*+;:{}[]<>/\\|';

    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        if (i % Math.floor(columns / density || 1) !== 0) continue;
        const text = charset.charAt(Math.floor(Math.random() * charset.length));
        ctx.fillStyle = `rgba(16, 185, 129, ${0.8 + Math.random() * 0.2})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    }

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight * 0.82;
    }

    draw();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [canvasRef]);
}

export default function Hero() {
  const canvasRef = useRef(null);
  useMatrix(canvasRef);

  return (
    <section id="intro" className="relative h-[82vh] min-h-[540px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-sm border border-emerald-900/50 bg-black/50 px-3 py-1 text-xs text-emerald-300/90 mb-4">
              <Star size={14} className="text-emerald-400" /> Available for new projects
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-emerald-100">
              Hacker-grade web experiences with speed, clarity, and craft
            </h1>
            <p className="mt-4 text-emerald-200/80 max-w-2xl">
              I design and engineer fast, secure, and elegant interfaces. Focused on performance, accessibility, and 
              a distinctive hacker aesthetic.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 rounded-sm transition-colors">
                See Portfolio <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-emerald-900/50 hover:border-emerald-600/70 text-emerald-200 px-5 py-3 rounded-sm transition-colors">
                Schedule Consultation
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="rounded-sm border border-emerald-900/40 bg-black/40 p-3">
                <div className="text-2xl font-semibold text-emerald-300">5+</div>
                <div className="text-xs text-emerald-300/70">Years experience</div>
              </div>
              <div className="rounded-sm border border-emerald-900/40 bg-black/40 p-3">
                <div className="text-2xl font-semibold text-emerald-300">40+</div>
                <div className="text-xs text-emerald-300/70">Projects shipped</div>
              </div>
              <div className="rounded-sm border border-emerald-900/40 bg-black/40 p-3">
                <div className="text-2xl font-semibold text-emerald-300">95+</div>
                <div className="text-xs text-emerald-300/70">Avg. Lighthouse</div>
              </div>
              <div className="rounded-sm border border-emerald-900/40 bg-black/40 p-3">
                <div className="text-2xl font-semibold text-emerald-300">25+</div>
                <div className="text-xs text-emerald-300/70">Clients served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
