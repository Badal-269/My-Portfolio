import { useState } from 'react';
import { works, type WorkItem } from '@/data/portfolio';
import { Play, X, ArrowUpRight } from 'lucide-react';

function getEmbedUrl(work: WorkItem) {
  // Google Drive: accepts either the file ID or the full share link
  if (work.platform === 'drive' || work.videoId.includes('drive.google.com')) {
    const match = work.videoId.match(/\/d\/([^/?]+)/);
    const id = match ? match[1] : work.videoId;
    return `https://drive.google.com/file/d/${id}/preview`;
  }
  if (work.platform === 'vimeo') {
    const [id, hash] = work.videoId.split('/');
    return `https://player.vimeo.com/video/${id}?${hash ? `h=${hash}&` : ''}autoplay=1`;
  }
  return `https://www.youtube.com/embed/${work.videoId}?autoplay=1&rel=0`;
}

export function Work() {
  const [activeVideo, setActiveVideo] = useState<WorkItem | null>(null);

  return (
    <section id="work" className="relative py-32 md:py-48 px-6 lg:px-12 bg-secondary grain">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
              02 — Work
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight">
              Selected <span className="italic font-normal">projects</span>
            </h2>
          </div>
          <p className="hidden md:block text-sm text-secondary max-w-xs">
            A collection of recent edits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {works.map((work, i) => (
            <button
              key={work.id}
              onClick={() => work.videoId && setActiveVideo(work)}
              className="reveal group text-left"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="relative aspect-video overflow-hidden rounded-sm bg-card border border-base">
                {/* Thumbnail placeholder */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(${135 + i * 30}deg, var(--bg-secondary) 0%, var(--card) 100%)`,
                  }}
                >
                  {/* Abstract film frame */}
                  <svg
                    viewBox="0 0 400 225"
                    className="w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    fill="none"
                  >
                    <rect x="20" y="20" width="360" height="185" stroke="var(--border)" strokeWidth="1" rx="2" />
                    <circle cx="200" cy="112" r="30" stroke="var(--text-secondary)" strokeWidth="1" opacity="0.5" />
                    <circle cx="200" cy="112" r="50" stroke="var(--text-secondary)" strokeWidth="0.5" opacity="0.3" />
                    <line x1="20" y1="112" x2="170" y2="112" stroke="var(--border)" strokeWidth="1" />
                    <line x1="230" y1="112" x2="380" y2="112" stroke="var(--border)" strokeWidth="1" />
                    <line x1="200" y1="20" x2="200" y2="82" stroke="var(--border)" strokeWidth="1" />
                    <line x1="200" y1="142" x2="200" y2="205" stroke="var(--border)" strokeWidth="1" />
                    {[...Array(8)].map((_, j) => (
                      <rect key={j} x={30 + j * 45} y={195} width="3" height="10" fill="var(--border)" />
                    ))}
                  </svg>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-white/0 group-hover:border-white/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <Play
                      className="w-5 h-5 text-white/0 group-hover:text-white fill-white transition-all duration-500 ml-0.5"
                    />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-white font-mono text-[10px] tracking-wider">
                  {work.duration}
                </div>

                {/* Category tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-white font-mono text-[10px] tracking-wider uppercase">
                  {work.category}
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-medium tracking-tight group-hover:text-accent transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-sm text-secondary mt-0.5">
                    {work.client} · {work.year}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-accent transition-colors duration-300 mt-1 shrink-0" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setActiveVideo(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" />
          <div
            className="relative w-full max-w-4xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              Close <X className="w-4 h-4" />
            </button>
            <div className="relative aspect-video rounded-sm overflow-hidden bg-black border border-white/10">
              <iframe
                src={getEmbedUrl(activeVideo)}
                title={activeVideo.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <h3 className="font-display text-2xl font-medium text-white">{activeVideo.title}</h3>
                <p className="text-white/50 text-sm mt-1">
                  {activeVideo.client} · {activeVideo.category} · {activeVideo.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
