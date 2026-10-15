import { useEffect, useRef, useState } from 'react';
import { profile } from '@/data/portfolio';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain"
    >
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Animated gradient orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px] bg-accent transition-transform duration-300"
        style={{
          transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.1}px)`,
          top: '10%',
          right: '5%',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px] bg-accent"
        style={{
          transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.2}px)`,
          bottom: '5%',
          left: '10%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-secondary mb-8">
            {profile.location}
          </p>
        </div>

        <h1
          className={`font-display font-extrabold tracking-tighter leading-[0.9] text-balance transition-all duration-1000 delay-150 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontSize: 'clamp(2.75rem, 12vw, 9rem)',
          }}
        >
          {profile.name.split(' ')[0]}
          <br />
          <span className="text-secondary font-light italic">{profile.name.split(' ')[1]}</span>
        </h1>

        <div
          className={`mt-8 flex items-center justify-center gap-4 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="h-px w-12 bg-accent" />
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-accent">
            {profile.role}
          </p>
          <span className="h-px w-12 bg-accent" />
        </div>

        <p
          className={`mt-10 max-w-xl mx-auto text-lg md:text-xl text-secondary font-light leading-relaxed text-balance transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {profile.tagline}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-secondary">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent overflow-hidden">
            <div className="w-full h-1/2 bg-accent animate-[marquee_2s_ease-in-out_infinite] animate-fade-in" style={{ animation: 'scrollLine 2s ease-in-out infinite' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
