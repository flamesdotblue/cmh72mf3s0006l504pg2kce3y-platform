import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const posts = [
  {
    title: 'Designing for performance: lessons from 95+ Lighthouse scores',
    date: 'Sep 15, 2025',
    excerpt: 'Tactics and tools to consistently ship fast experiences without sacrificing design.',
    link: '#',
    tags: ['Performance', 'UX'],
  },
  {
    title: 'Building resilient component APIs in React',
    date: 'Aug 30, 2025',
    excerpt: 'Patterns for ergonomics, accessibility, and long-term maintainability.',
    link: '#',
    tags: ['React', 'Design Systems'],
  },
  {
    title: 'SEO for product sites: a pragmatic checklist',
    date: 'Aug 10, 2025',
    excerpt: 'Prioritize what matters: structure, semantics, speed, and content strategy.',
    link: '#',
    tags: ['SEO', 'Content'],
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-20 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Insights</h2>
            <p className="text-zinc-300 mt-3">Notes on building great products and experiences.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">All posts <ExternalLink size={16} /></a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a key={post.title} href={post.link} className="group rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors p-5">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Calendar size={14} /> {post.date}
              </div>
              <h3 className="mt-3 text-lg font-medium group-hover:text-white">{post.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{post.excerpt}</p>
              <div className="mt-3 inline-flex items-center gap-2 text-emerald-400">Read more <ExternalLink size={16} /></div>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider text-zinc-300 border border-zinc-700 rounded-full px-2 py-0.5">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
