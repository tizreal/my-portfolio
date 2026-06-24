"use client";

import useReveal from "../hooks/useReveal";

const timeline = [
  {
    label: "Past",
    num: "01",
    heading: "Where I started",
    body: "York University is where it all clicked, computer science fundamentals, Java, and the slow realization that I actually enjoyed this. The problem-solving felt less like coursework and more like puzzles I didn't want to put down. I also learned pretty quickly that writing code others can read matters just as much as code that runs.",
  },
  {
    label: "Present",
    num: "02",
    heading: "Where I am now",
    body: "I'm a software developer based in Toronto, working across the full stack, Spring Boot APIs to React frontends. I care about clean architecture and shipping things that actually work, not just things that technically run.\n\nThese days I also lean on AI tools to move faster and think sharper, but I've learned the hard way that AI is only as useful as your ability to question what it gives you. The fundamentals still matter. Maybe more than ever.",
  },
  {
    label: "Future",
    num: "03",
    heading: "Where I'm headed",
    body: "I want to work on systems that actually scale, where the decisions you make early show up months later in ways you didn't expect. I'm planting my roots in Toronto but I'm not putting myself in a box. Distributed systems, products that matter, teams that give a damn, that's where I'm headed.",
  },
];

const STAGGER = ["", "delay-100", "delay-200", "delay-300"];

export default function About() {
  const [gridRef, gridRevealed] = useReveal();

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="font-display text-[2rem] md:text-5xl font-bold text-foreground mb-4 text-center">
          About Me
        </h2>
        <p className="text-muted text-base leading-relaxed mb-16 max-w-xl text-center mx-auto">
          A quick look at my journey — where I came from, what I do today, and
          where I&apos;m going.
        </p>

        {/* Past / Present / Future cards */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-6 mb-6">
          {timeline.map(({ label, num, heading, body }, index) => (
            <div
              key={label}
              className={`bg-surface border border-border rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 ease-out ${STAGGER[index]} ${gridRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
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
