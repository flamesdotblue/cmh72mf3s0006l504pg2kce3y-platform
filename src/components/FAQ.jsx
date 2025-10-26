import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What does your typical project process look like?',
    a: 'I start with a discovery call, followed by a short strategy sprint to align on scope, outcomes, and timelines. Then we iterate in weekly cycles with clear milestones and demos.',
  },
  {
    q: 'How do you price your work?',
    a: 'Fixed-scope engagements for websites and well-defined features; weekly retainers for ongoing product work. Transparent estimates and no surprise costs.',
  },
  {
    q: 'Do you work with startups or larger teams?',
    a: 'Both. I collaborate with early-stage founders to ship fast, and with product/design teams to scale systems and ship confidently.',
  },
  {
    q: 'What is the typical timeline?',
    a: 'Marketing sites: 2–6 weeks depending on scope. Product features/systems: ongoing sprints with agreed milestones.',
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40">
      <button onClick={() => setOpen((s) => !s)} className="w-full flex items-center justify-between text-left p-5">
        <span className="font-medium">{q}</span>
        {open ? <Minus size={18} className="text-zinc-400" /> : <Plus size={18} className="text-zinc-400" />}
      </button>
      {open && <div className="px-5 pb-5 text-zinc-300">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">FAQ</h2>
          <p className="text-zinc-300 mt-3">Answers to common questions to save you time.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
