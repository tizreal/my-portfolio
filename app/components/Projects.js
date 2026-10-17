"use client";

import Image from "next/image";
import useReveal from "../hooks/useReveal";

const projects = [
  {
    title: "User Manager App",
    image: "/usermanager.png",
    imagePosition: "object-center",
    description:
      "Most apps need authentication, this one does it properly. Users can sign up, verify their email, log in securely, and reset their password if they forget it. Admins can oversee and manage the full user base. Features JWT authentication, email verification, and role-protected endpoints — built end to end.",
    tags: ["Spring Boot", "React", "PostgreSQL", "JWT"],
    links: {
      github: "https://github.com/tizreal/usermanager-frontend",
      live: "https://usermanager-frontend.vercel.app/",
    },
    notice:
      "⚠️ Backend hosted on Render free tier — may take 30–50s to wake up on first request.",
  },
  {
    title: "Library Management System",
    image: "/libraryapp.png",
    description:
      "Managing a library means keeping track of books and the people borrowing them, this app handles both. Full CRUD operations for books and members, with a clean interface that makes the data easy to work with. The interesting part: the backend was built twice, once in Spring Boot, once in Express.js — same functionality, different stacks. Two backends, one project, twice the learning.",
    tags: ["Spring Boot", "React", "Vite", "PostgreSQL"],
    links: {
      github: "https://github.com/tizreal/LibraryApp",
      live: "https://library-app-hazel-psi.vercel.app/",
    },
    notice:
      "⚠️ Backend hosted on Render free tier — may take 30–50s to wake up on first request.",
  },
  {
    title: "TODO App",
    description:
      "A task management app for organizing work and actually getting things done. Create tasks, set priorities, track progress, and mark completions — built with a clean UI and fast interactions that stay out of your way.",
    tags: [],
    links: {
      github: "#",
      live: "#",
    },
    comingSoon: true,
  },
];

const STAGGER = ["", "delay-100", "delay-200", "delay-300"];

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  const [gridRef, gridRevealed] = useReveal();

  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-[2rem] md:text-5xl font-bold text-foreground mb-4 text-center">
          Projects
        </h2>
        <p className="text-muted text-base leading-relaxed mb-16 max-w-xl text-center mx-auto">
          Things I&apos;ve designed, built, and shipped.
        </p>

        <div ref={gridRef} className="grid gap-6">
          {/* Featured card — full width */}
          {(() => {
            const project = projects[0];
            const index = 0;
            return (
              <div
                key={project.title}
                className={`bg-surface border border-border rounded-2xl overflow-hidden flex flex-col relative shadow-sm hover:shadow-lg hover:border-accent hover:-translate-y-1.5 transition-all duration-300 ease-out group ${STAGGER[index]} ${gridRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <div className="absolute inset-0 card-hover-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

                <div className="relative w-full aspect-16/7 overflow-hidden rounded-t-2xl bg-surface">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    quality={100}
                    priority
                    className={`object-cover ${project.imagePosition ?? "object-top"}`}
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-foreground/20 tracking-widest font-medium mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/30 shrink-0">
                      Featured
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-accent">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-accent/8 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-all duration-200 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted hover:border-accent hover:text-accent hover:bg-accent/8 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                      >
                        <GithubIcon /> GitHub
                      </a>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-accent text-white hover:bg-accent-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                      >
                        <ExternalIcon /> Live Demo
                      </a>
                    </div>
                    {project.notice && (
                      <p className="text-xs text-muted italic">
                        {project.notice}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Two secondary cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.slice(1).map((project, i) => {
              const index = i + 1;
              return (
                <div
                  key={project.title}
                  className={`bg-surface border border-border rounded-2xl overflow-hidden flex flex-col relative shadow-sm hover:shadow-lg hover:border-accent hover:-translate-y-1.5 transition-all duration-300 ease-out group ${STAGGER[index]} ${gridRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                  <div className="absolute inset-0 card-hover-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

                  {project.image ? (
                    <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl bg-surface">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        quality={100}
                        className={`object-cover ${project.imagePosition ?? "object-top"}`}
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-video bg-surface flex flex-col items-center justify-center gap-2 border-b border-border">
                      {project.comingSoon ? (
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30 tracking-wide">
                          Coming Soon
                        </span>
                      ) : (
                        <span className="text-muted text-sm">
                          Screenshot coming soon
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs text-foreground/20 tracking-widest font-medium mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold tracking-tight text-accent">
                        {project.title}
                      </h3>
                      {project.comingSoon && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30 shrink-0">
                          Soon
                        </span>
                      )}
                    </div>

                    <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-accent/8 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-all duration-200 cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-col gap-2">
                      {project.comingSoon ? (
                        <p className="text-xs text-muted italic">
                          In progress — check back soon.
                        </p>
                      ) : (
                        <div className="flex gap-3">
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted hover:border-accent hover:text-accent hover:bg-accent/8 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                          >
                            <GithubIcon /> GitHub
                          </a>
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-accent text-white hover:bg-accent-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                          >
                            <ExternalIcon /> Live Demo
                          </a>
                        </div>
                      )}
                      {project.notice && (
                        <p className="text-xs text-muted italic">
                          {project.notice}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
