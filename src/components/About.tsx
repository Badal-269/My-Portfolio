import { profile } from '@/data/portfolio';
import { Check } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 px-6 lg:px-12 grain">
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
            01 — About
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Portrait */}
          <div className="reveal-scale lg:col-span-5">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-sm" />
              <div
                className="absolute inset-0 bg-secondary rounded-sm overflow-hidden"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, rgba(232, 176, 75, 0.15) 0%, transparent 50%), linear-gradient(135deg, var(--bg-secondary) 0%, var(--card) 100%)',
                }}
              >
                <img src="/Badal.jpg" alt="Profile" className="w-full h-full object-cover"
/>
              </div>
              {/* Frame border */}
              <div className="absolute inset-0 border border-base rounded-sm pointer-events-none" />
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-accent" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-accent" />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight leading-tight text-balance">
                I edit stories that{' '}
                <span className="italic font-normal text-accent">breathe</span> —
                where every cut has a reason.
              </h2>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <p className="text-lg text-secondary leading-relaxed max-w-xl">
                {profile.bio}
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <p className="text-sm text-secondary leading-relaxed max-w-xl">
                Based in Noida, India, I collaborate with content creators, and brands to shape
                raw footage into stories that feel effortless — like they could only have
                been paced one way.
              </p>
            </div>

            {/* Specialties */}
            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="pt-6 border-t border-base">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-secondary mb-5">
                  Specialties
                </p>
                <div className="flex flex-wrap gap-3">
                  {profile.specialties.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-base text-sm text-primary hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                    >
                      <Check className="w-3.5 h-3.5 text-accent" strokeWidth={2.5} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
