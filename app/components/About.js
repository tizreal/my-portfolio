"use client";

import useReveal from "../hooks/useReveal";

const timeline = [
  {
    label: "Education",
    num: "01",
    heading: "York University",
    body: "I graduated from York University in 2024 with a BSc in Computer Science.",
  },
  {
    label: "Now",
    num: "02",
    heading: "Current role",
    body: "I'm currently a Full Stack Software Developer on contract, working across backend services, databases, and frontend features.",
  },
  {
    label: "Focus",
    num: "03",
    heading: "What I care about",
    body: "I care about APIs, data integrity, authentication and authorization, and reliable software, and while I use AI tools in development, I review, test, and understand the code before I ship it.",
  },
];

const STAGGER = ["", "delay-100", "delay-200", "delay-300"];

export default function About() {
  const [gridRef, gridRevealed] = useReveal();

  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="font-display text-[2rem] md:text-5xl font-bold text-foreground mb-4 text-center">
          About Me
        </h2>
        <p className="text-muted text-base leading-relaxed mb-16 max-w-xl text-center mx-auto">
          I&apos;m a software engineer focused on backend work in Java, Spring Boot, PostgreSQL, and REST APIs, and I also build frontends with React and TypeScript.
        </p>

        {/* Past / Present / Future cards */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {timeline.map(({ label, num, heading, body }, index) => (
            <div
              key={label}
              className={`border border-border rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out ${index === 1 ? "bg-accent/5 border-t-2 border-t-accent hover:border-accent/60" : "bg-surface hover:border-accent/40"} ${STAGGER[index]} ${gridRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {/* Decorative number */}
              <span className="absolute top-4 right-5 text-5xl font-black text-foreground/5 leading-none select-none">
                {num}
              </span>

              <span className="text-xs uppercase tracking-widest text-accent font-medium mb-2 block">
                {label}
              </span>
              <h3 className="font-display text-foreground font-semibold text-xl leading-snug mb-3">
                {heading}
              </h3>
              {body.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-muted text-sm leading-relaxed mb-2 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
