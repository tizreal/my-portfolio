"use client";

import useReveal from "../hooks/useReveal";

// 4RHD content is limited to what the founder approved: product names, what
// the products publicly do, and my contributions. Features not shown on the
// products' public pages are left out.
const roles = [
  {
    title: "Full Stack Software Developer (Contract)",
    company: "4RHD Solutions Inc.",
    period: "Apr 2026 – Present",
    location: "Remote",
    summary:
      "I work on AIGuardium, an enterprise AI-security platform, and a hotel property-management system.",
    products: [
      {
        name: "AIGuardium",
        href: "https://www.aiguardium.com/",
        description: "Enterprise AI-security platform",
        bullets: [
          "Resolved a race condition in the browser extension's real-time redaction flow, from reproduction through regression verification.",
          "Delivered EU AI Act, NIST AI RMF, and ISO 42001 report templates spanning PostgreSQL migrations, backend logic, React selectors, and shared HTML/PDF report data.",
          "Standardized detection confidence thresholds and added regression coverage, including a CI-runnable test harness that mocks browser APIs.",
        ],
      },
      {
        name: "Hotel property-management system",
        description: "Client platform",
        bullets: [
          "Built reservation and deposit flows with role-based access, using atomic booking logic with in-transaction availability checks to prevent double-booking.",
          "Added tiered front-desk permissions and fixed guest folio, room-transfer, and payment workflows, verifying each fix with regression testing.",
        ],
      },
    ],
  },
  {
    title: "Junior Software Developer",
    company: "TAGOPUS LTD",
    period: "Apr – Aug 2023",
    location: "Remote Contract",
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
          {roles.map(({ title, company, period, location, summary, products }, index) => (
            <div
              key={company}
              className={`border border-border rounded-2xl relative overflow-hidden shadow-sm transition-all duration-300 ease-out ${products ? "p-8 bg-accent/5 border-t-2 border-t-accent hover:border-accent/60" : "px-8 py-5 bg-surface hover:border-accent/40"} ${STAGGER[index]} ${listRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
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

              {summary && (
                <p className="mt-3 text-foreground/80 text-sm leading-relaxed">{summary}</p>
              )}

              {products?.map(({ name, href, description, bullets }) => (
                <div key={name} className="mt-6 pt-5 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground">
                    {href ? (
                      <a
                        href={href}
                        data-track={`Experience: ${name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                      >
                        {name}
                      </a>
                    ) : (
                      name
                    )}
                    <span className="font-normal text-muted"> — {description}</span>
                  </h4>
                  <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-accent">
                    {bullets.map((b) => (
                      <li key={b} className="text-muted text-sm leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
