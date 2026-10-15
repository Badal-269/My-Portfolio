import { useEffect, useState } from 'react';
import { profile } from '@/data/portfolio';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-base/80 backdrop-blur-xl border-b border-base'
          : 'py-6 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-primary hover:text-accent transition-colors duration-300"
        >
          {profile.name.split(' ')[0]}<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-secondary hover:text-primary transition-colors duration-300"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-sm font-medium px-5 py-2 rounded-full border border-base text-primary hover:border-accent hover:text-accent transition-all duration-300"
        >
          Let's talk
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block h-px bg-primary transition-all duration-300 ${menuOpen ? 'w-5 rotate-45 translate-y-[3px]' : 'w-6'}`} />
          <span className={`block h-px bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-4'}`} />
          <span className={`block h-px bg-primary transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-[3px]' : 'w-6'}`} />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 bg-base border-b border-base">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-primary hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
