import { experiences } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-48 px-6 lg:px-12 grain">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
            03 — Experience
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight">
            A timeline of <span className="italic font-normal">craft</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-base md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`reveal relative flex flex-col md:flex-row gap-6 md:gap-12 mb-16 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-accent md:-translate-x-1/2 ring-4 ring-base z-10" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content */}
              <div className="pl-8 md:pl-0 md:w-1/2 md:px-12">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-3">
                  {exp.year}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-secondary mb-3 font-medium">{exp.client}</p>
                <p className="text-sm text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
