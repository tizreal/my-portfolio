"use client";

import { useEffect, useState } from "react";

const roles = ["Software Developer", "Backend Engineer", "Problem Solver"];

const stats = [
  { value: "3+", label: "Years Exp" },
  { value: "8+", label: "Projects" },
  { value: "8+", label: "Technologies" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col px-4 md:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none hero-glow" />
      <div className="absolute inset-0 pointer-events-none hero-light-grid" />

      <div className="flex-1 flex items-center py-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 w-full">

            {/* Text content */}
            <div className="w-full max-w-2xl">
              <div className="flex items-center gap-2 text-accent text-xs uppercase tracking-widest font-medium mb-6">
                <span className="w-6 h-px bg-accent" />
                Hello, World!
              </div>

              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                <span className="text-foreground">I&apos;m </span><span className="gradient-text">Temiloluwa Odunfa</span>
              </h1>

              <h2 className="font-display text-xl md:text-[2rem] text-muted font-semibold mb-8 h-9 md:h-10">
                <span>{displayed}</span>
                <span className="animate-pulse text-accent">|</span>
              </h2>

              <p className="text-muted text-base max-w-xl mb-10 leading-relaxed">
                I build thoughtful digital experiences — clean code, elegant
                interfaces, and products that make an impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const projects = document.querySelector("#projects");
                    if (projects) projects.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  View My Work
                </button>
                <button
                  onClick={() => {
                    const contact = document.querySelector("#resume");
                    if (contact) contact.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto px-8 py-3 border border-border text-foreground/80 font-semibold rounded-full hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Stat cards — horizontal row on mobile, vertical column on desktop */}
            <div className="grid grid-cols-3 gap-3 w-full lg:flex lg:flex-col lg:gap-4 lg:w-auto lg:shrink-0">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-surface border border-border rounded-2xl px-4 lg:px-6 py-4 lg:py-5 text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent rounded-t-2xl" />
                  <p className="text-2xl lg:text-[2rem] font-bold text-accent">{value}</p>
                  <p className="text-xs uppercase tracking-widest text-muted/60 mt-1">{label}</p>
                </div>
              ))}
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
