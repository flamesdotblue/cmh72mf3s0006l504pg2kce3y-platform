import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent('Project inquiry from ' + form.name);
    const body = encodeURIComponent(form.message + '\n\n' + '— ' + form.name + ' (' + form.email + ')');
    window.location.href = `mailto:hello@yoursite.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-20 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Let’s build something great</h2>
            <p className="text-zinc-300 mt-3">Have a project in mind? I’d love to hear about it. Prefer email or a quick call? Choose what works for you.</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-zinc-300"><Mail className="text-emerald-400" size={18} /> hello@yoursite.com</div>
              <div className="flex items-center gap-3 text-zinc-300"><Phone className="text-emerald-400" size={18} /> +1 (555) 000-1234</div>
              <div className="flex items-center gap-3 text-zinc-300"><MapPin className="text-emerald-400" size={18} /> Remote • Worldwide</div>
            </div>
            <div className="mt-6 flex gap-3">
              <a aria-label="GitHub" href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-700 hover:border-zinc-500"><Github size={18} /></a>
              <a aria-label="LinkedIn" href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-700 hover:border-zinc-500"><Linkedin size={18} /></a>
              <a aria-label="Twitter" href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-700 hover:border-zinc-500"><Twitter size={18} /></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 rounded-md transition-colors">Hire Me</a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-5 py-3 rounded-md transition-colors">Schedule Consultation</a>
            </div>
          </div>
          <div>
            <form onSubmit={onSubmit} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-300">Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-md bg-zinc-950 border border-zinc-800 focus:border-zinc-600 outline-none px-3 py-2" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-sm text-zinc-300">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-md bg-zinc-950 border border-zinc-800 focus:border-zinc-600 outline-none px-3 py-2" placeholder="jane@company.com" />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm text-zinc-300">Message</label>
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={6} className="mt-1 w-full rounded-md bg-zinc-950 border border-zinc-800 focus:border-zinc-600 outline-none px-3 py-2" placeholder="Tell me about your project, scope, and timeline." />
              </div>
              <button type="submit" className="mt-5 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 rounded-md transition-colors">
                Send Message <Send size={18} />
              </button>
              {sent && <p className="mt-3 text-sm text-emerald-400">Thanks! Your email client should open shortly.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
