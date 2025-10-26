import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Press from './components/Press';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0b0e13] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About Me</h2>
                <p className="text-zinc-300 leading-relaxed">
                  I craft performant, elegant digital experiences. My focus is on creating fast, accessible, and
                  visually distinctive web apps and brand websites. My toolkit blends modern frameworks with a
                  product mindset—prioritizing clarity, velocity, and results.
                </p>
                <ul className="text-zinc-300 space-y-2">
                  <li>• Frontend engineering (React, TypeScript, Tailwind, Framer Motion)</li>
                  <li>• Design systems, UI/UX strategy, and component architectures</li>
                  <li>• JAMStack, headless CMS, and SEO-forward site builds</li>
                </ul>
                <div className="flex gap-4">
                  <a href="#portfolio" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 rounded-md transition-colors">View Projects</a>
                  <a href="#contact" className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-5 py-3 rounded-md transition-colors">Get In Touch</a>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 border border-zinc-800 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-zinc-400">Years experience</p>
                      <p className="text-3xl font-semibold">5+</p>
                    </div>
                    <div>
                      <p className="text-zinc-400">Projects shipped</p>
                      <p className="text-3xl font-semibold">40+</p>
                    </div>
                    <div>
                      <p className="text-zinc-400">Avg. Lighthouse</p>
                      <p className="text-3xl font-semibold">95+</p>
                    </div>
                    <div>
                      <p className="text-zinc-400">Clients served</p>
                      <p className="text-3xl font-semibold">25+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Services />
        <Portfolio />
        <Blog />
        <FAQ />
        <Press />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
