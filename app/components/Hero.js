import ContactLinks from "./ContactLinks";
import { resumeHref, site } from "../data/site";

const stats = [
  { value: "2024", label: "BSc CS, York University" },
  { value: "2026", label: "BFN Top Performer, SWE cohort" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col px-4 md:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none hero-glow" />
      <div className="absolute inset-0 pointer-events-none hero-light-grid" />

      <div className="flex-1 flex items-center py-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 w-full">
            {/* Text content */}
            <div className="w-full max-w-2xl">
              <div className="animate-fade-up flex items-center gap-2 text-accent text-xs uppercase tracking-widest font-medium mb-6" style={{ "--delay": "0ms" }}>
                <span className="w-6 h-px bg-accent" />
                Hello, World!
              </div>

              <h1 className="animate-fade-up font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4" style={{ "--delay": "80ms" }}>
                <span className="text-foreground">I&apos;m </span>
                <span className="gradient-text">Temiloluwa Odunfa</span>
              </h1>

              <p className="animate-fade-up font-display text-lg md:text-xl text-foreground/90 font-semibold mb-3" style={{ "--delay": "160ms" }}>
                Software Engineer — Java, Spring Boot, PostgreSQL &amp; React.
              </p>

              <p className="animate-fade-up text-muted text-sm md:text-base max-w-xl mb-10 leading-relaxed" style={{ "--delay": "220ms" }}>
                I build backend services, REST APIs, and the React frontends
                that use them.
              </p>

              <div className="animate-fade-up flex flex-col sm:flex-row gap-4" style={{ "--delay": "300ms" }}>
                <a
                  href="#projects"
                  className="w-full sm:w-auto text-center px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  View Selected Work
                </a>
                <a
                  href={resumeHref}
                  {...(site.resume ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-full sm:w-auto text-center px-8 py-3 border border-border text-foreground/80 font-semibold rounded-full hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  {site.resume ? "Resume" : "Request Resume"}
                </a>
              </div>

              <div className="animate-fade-up" style={{ "--delay": "360ms" }}>
                <ContactLinks className="mt-6" omit={["Resume"]} />
              </div>
            </div>

            {/* Right column: terminal (desktop only) + stat cards */}
            <div className="animate-fade-up lg:flex lg:flex-col lg:items-center lg:gap-3 lg:shrink-0 lg:w-72" style={{ "--delay": "420ms" }}>
              {/* Terminal — desktop only */}
              <div className="hidden lg:block bg-surface border border-border rounded-2xl overflow-hidden shadow-md w-72">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface">
                  <span className="w-3 h-3 rounded-full bg-red-400/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <span className="w-3 h-3 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-xs text-muted/50 font-mono">terminal</span>
                </div>
                <div className="p-4 font-mono text-xs leading-snug space-y-1">
                  <p><span className="text-accent">$</span> <span className="text-muted">cat profile.json</span></p>
                  <p className="text-foreground/80">{"{"}</p>
                  <p className="pl-4"><span className="text-secondary">&quot;name&quot;</span><span className="text-muted">: </span><span className="text-accent/80">&quot;Temi&quot;</span><span className="text-muted">,</span></p>
                  <p className="pl-4"><span className="text-secondary">&quot;role&quot;</span><span className="text-muted">: </span><span className="text-accent/80">&quot;Software Engineer&quot;</span><span className="text-muted">,</span></p>
                  <p className="pl-4"><span className="text-secondary">&quot;stack&quot;</span><span className="text-muted">: [</span></p>
                  <p className="pl-8"><span className="text-accent/80">&quot;Java&quot;</span><span className="text-muted">, </span><span className="text-accent/80">&quot;Spring Boot&quot;</span><span className="text-muted">,</span></p>
                  <p className="pl-8"><span className="text-accent/80">&quot;PostgreSQL&quot;</span><span className="text-muted">, </span><span className="text-accent/80">&quot;React&quot;</span></p>
                  <p className="pl-4"><span className="text-muted">],</span></p>
                  <p className="pl-4"><span className="text-secondary">&quot;location&quot;</span><span className="text-muted">: </span><span className="text-accent/80">&quot;Mississauga, ON&quot;</span><span className="text-muted">,</span></p>
                  <p className="pl-4"><span className="text-secondary">&quot;status&quot;</span><span className="text-muted">: </span><span className="text-secondary">&quot;open to opportunities&quot;</span></p>
                  <p className="text-foreground/80">{"}"}</p>
                  <p className="pt-1"><span className="text-accent">$</span> <span className="animate-pulse text-muted">▋</span></p>
                </div>
              </div>

              {/* Stat cards — 2-column grid on mobile, side-by-side row on desktop */}
              <div className="grid grid-cols-2 gap-3 w-full lg:flex lg:flex-row lg:gap-3 lg:w-72">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-surface border border-border rounded-2xl px-2 py-3 lg:px-5 lg:py-3 text-center relative overflow-hidden flex-1"
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent rounded-t-2xl" />
                    <p className="text-2xl font-bold text-accent">
                      {value}
                    </p>
                    <p className="text-[10px] uppercase tracking-normal text-muted mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-foreground/20 pb-10">
        <span className="w-px h-10 bg-linear-to-b from-accent to-transparent animate-pulse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
