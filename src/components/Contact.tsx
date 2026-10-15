import { useState } from 'react';
import { profile } from '@/data/portfolio';
import { Mail, ArrowUpRight, Send } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 3000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 px-6 lg:px-12 bg-secondary grain overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
            04 — Contact
          </p>
          <h2 className="font-display text-4xl md:text-7xl font-light tracking-tighter leading-[0.95] text-balance">
            Let's work
            <br />
            <span className="italic font-normal text-accent">together</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact info */}
          <div className="reveal space-y-10">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-secondary mb-3">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-accent" />
                {profile.email}
              </a>
            </div>

            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-secondary mb-3">
                Socials
              </p>
              <div className="flex flex-col gap-3">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-lg font-medium hover:text-accent transition-colors duration-300 w-fit"
                  >
                    {social.label}
                    <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-secondary mb-3">
                Based in
              </p>
              <p className="text-lg font-medium">{profile.location}</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="block font-mono text-xs tracking-[0.2em] uppercase text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-base py-3 text-primary placeholder:text-secondary/50 focus:border-accent outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-[0.2em] uppercase text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-base py-3 text-primary placeholder:text-secondary/50 focus:border-accent outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-[0.2em] uppercase text-secondary mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-base py-3 text-primary placeholder:text-secondary/50 focus:border-accent outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className="group w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-accent text-black font-medium text-sm tracking-wide hover:bg-accent-dark transition-all duration-300 disabled:opacity-70"
              >
                {formState === 'idle' && (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {formState === 'sending' && 'Sending...'}
                {formState === 'sent' && 'Message sent!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
