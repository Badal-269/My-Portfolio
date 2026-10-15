import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="relative py-12 px-6 lg:px-12 border-t border-base">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-secondary">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-secondary">
          Designed & built with intention
        </p>
      </div>
    </footer>
  );
}
