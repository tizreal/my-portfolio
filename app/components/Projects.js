"use client";

import Image from "next/image";
import useReveal from "../hooks/useReveal";
import { site } from "../data/site";
import { ExternalIcon, GithubIcon } from "./icons";

// To re-enable a live demo, set `demoAvailable: true` on that project.
const projects = [
  {
    title: "TrackLo",
    problem:
      "Teams need one place to submit, triage, and track requests through a defined workflow, with each organization's data kept separate.",
    highlights: [
      "Workspace isolation and auth: Spring Security with stateless JWTs in httpOnly cookies. The workspace ID is part of the token, and every ticket lookup is scoped by it.",
      "Server-enforced workflow: tickets move Submit → Triage → Scope → Build → Test → Deploy, and the API rejects invalid stage transitions and actions outside a user's role.",
      "Safe concurrent claiming: claims use a conditional UPDATE (WHERE claimed_by IS NULL), so only one agent can claim a work pool. The second request gets a 409 Conflict.",
    ],
    tags: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "React", "TypeScript"],
    stages: ["Submit", "Triage", "Scope", "Build", "Test", "Deploy"],
    // Repositories are private, so link to the GitHub profile.
    source: [{ label: "GitHub Profile", href: site.github }],
    demoUrl: "https://tracklo-ui.vercel.app/",
    demoAvailable: false,
  },
  {
    title: "UserManager",
    image: "/usermanager.png",
    imagePosition: "object-center",
    problem:
      "A complete account flow: sign up, verify email, log in, and recover a forgotten password.",
    highlights: [
      "A Spring Security filter validates the JWT on each request, with a configurable list of public endpoints.",
      "Email verification and password reset use tokenized links sent with Spring Mail and Thymeleaf templates.",
      "The React frontend has protected routes, Formik/Yup validation, and a user-management page.",
    ],
    tags: ["Spring Boot", "PostgreSQL", "JWT", "React", "React Router", "Formik", "Yup"],
    source: [
      { label: "Frontend", href: "https://github.com/tizreal/usermanager-frontend" },
      { label: "Backend", href: "https://github.com/tizreal/UserManager-Backend" },
    ],
    demoUrl: "https://usermanager-frontend.vercel.app/",
    demoAvailable: false,
  },
  {
    title: "Library Management System",
    image: "/libraryapp.png",
    problem: "Keep track of a library's books and members from one interface.",
    highlights: [
      "The same REST API (CRUD for books and members) built twice: Spring Boot with Spring Data JPA, and Node.js/Express with parameterized SQL via node-postgres.",
      "Both backends use PostgreSQL and the same layered structure: routes, services, and repositories.",
      "A React and Vite frontend uses the API through a shared Axios client and React context.",
    ],
    tags: ["Spring Boot", "Node.js", "Express", "PostgreSQL", "React", "Vite"],
    source: [
      { label: "Frontend", href: "https://github.com/tizreal/LibraryApp" },
      { label: "Spring Boot API", href: "https://github.com/tizreal/LibraryAppBackend" },
      { label: "Express API", href: "https://github.com/tizreal/LibraryAppExpressBackend" },
    ],
    demoUrl: "https://library-app-hazel-psi.vercel.app/",
    demoAvailable: false,
  },
];

const STAGGER = ["", "delay-100", "delay-200", "delay-300"];

const linkFocus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50";

function ProjectCard({ project, index, featured, revealed }) {
  return (
    <div
      className={`bg-surface border border-border rounded-2xl overflow-hidden flex flex-col relative shadow-sm hover:shadow-lg hover:border-accent hover:-translate-y-1.5 transition-all duration-300 ease-out group ${STAGGER[index]} ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="absolute inset-0 card-hover-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

      {project.image ? (
        <div className={`relative w-full ${featured ? "aspect-16/7" : "aspect-video"} overflow-hidden rounded-t-2xl bg-surface`}>
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.title} app`}
            fill
            sizes={featured ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
            quality={100}
            priority={featured}
            className={`object-cover ${project.imagePosition ?? "object-top"}`}
          />
        </div>
      ) : (
        <div
          role="img"
          aria-label={`${project.title} workflow stages: ${project.stages.join(", ")}`}
          className={`w-full ${featured ? "aspect-16/7" : "aspect-video"} rounded-t-2xl bg-surface border-b border-border hero-light-grid flex flex-wrap items-center justify-center content-center gap-2 px-6`}
        >
          {project.stages.map((stage, i) => (
            <span key={stage} className="flex items-center gap-2">
              <span className="text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/30">
                {stage}
              </span>
              {i < project.stages.length - 1 && (
                <span className="text-muted/60 text-xs" aria-hidden="true">→</span>
              )}
            </span>
          ))}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-foreground/40 tracking-widest font-medium mb-4">
          {String(index + 1).padStart(2, "0")}
        </p>
        <div className="flex items-center gap-2 mb-3">
          {featured && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/30 shrink-0">
              Featured
            </span>
          )}
          <h3 className="text-xl font-semibold tracking-tight text-accent">
            {project.title}
          </h3>
        </div>

        <p className="text-foreground/80 text-sm leading-relaxed mb-3">
          {project.problem}
        </p>

        <ul className="list-disc pl-5 marker:text-accent space-y-1.5 mb-4 flex-1">
          {project.highlights.map((h) => (
            <li key={h} className="text-muted text-sm leading-relaxed">
              {h}
            </li>
          ))}
        </ul>

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

        <div className="flex flex-wrap items-center gap-3">
          {project.source.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}: ${label} (GitHub)`}
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted hover:border-accent hover:text-accent hover:bg-accent/8 transition-all duration-200 ${linkFocus}`}
            >
              <GithubIcon size={14} /> {label}
            </a>
          ))}
          {project.demoAvailable ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-accent text-white hover:bg-accent-hover transition-all duration-200 ${linkFocus}`}
            >
              <ExternalIcon /> Live Demo
            </a>
          ) : (
            <span className="text-xs text-muted italic">
              Demo temporarily offline
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [gridRef, gridRevealed] = useReveal();
  const [featured, ...rest] = projects;

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
          <ProjectCard project={featured} index={0} featured revealed={gridRevealed} />

          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i + 1}
                revealed={gridRevealed}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
