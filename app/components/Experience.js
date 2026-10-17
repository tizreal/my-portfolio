"use client";

import useReveal from "../hooks/useReveal";

const roles = [
  {
    title: "Full Stack Software Developer (Contract)",
    company: "4RHD Solutions",
    period: "April 2026 – Present",
    location: "Remote",
    bullets: [
      "Build and maintain features across backend APIs, PostgreSQL databases, and React/TypeScript frontends for client software products.",
      "Investigate and resolve defects through root-cause analysis, and validate fixes with regression testing.",
      "Implement role-based access control and database-backed workflows.",
      "Collaborate with the founder and team on requirements, QA, and releases.",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "TAGOPUS LTD",
    period: "Apr – Aug 2023",
    location: "Remote Contract",
    bullets: [],
  },
];

const STAGGER = ["", "delay-100", "delay-200", "delay-300"];

export default function Experience() {
  const [listRef, listRevealed] = useReveal();

  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-[2rem] md:text-5xl font-bold text-foreground mb-16 text-center">
          Experience
        </h2>

        <div ref={listRef} className="grid gap-6">
          {roles.map(({ title, company, period, location, bullets }, index) => (
            <div
              key={company}
              className={`border border-border rounded-2xl relative overflow-hidden shadow-sm transition-all duration-300 ease-out ${bullets.length ? "p-8 bg-accent/5 border-t-2 border-t-accent hover:border-accent/60" : "px-8 py-5 bg-surface hover:border-accent/40"} ${STAGGER[index]} ${listRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                <h3 className="font-display text-foreground font-semibold text-lg leading-snug">
                  {title}
                  <span className="text-accent"> · {company}</span>
                </h3>
                <p className="text-xs uppercase tracking-widest text-muted font-medium shrink-0">
                  {period} · {location}
                </p>
              </div>

              {bullets.length > 0 && (
                <ul className="mt-5 space-y-2 list-disc pl-5 marker:text-accent">
                  {bullets.map((b) => (
                    <li key={b} className="text-muted text-sm leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
