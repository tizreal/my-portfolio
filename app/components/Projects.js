"use client";

import { useState } from "react";
import Image from "next/image";
import useReveal from "../hooks/useReveal";
import useDemoStatus from "../hooks/useDemoStatus";
import { site } from "../data/site";
import { ExternalIcon, GithubIcon, WarningIcon } from "./icons";

// To re-enable a live demo, set `demoAvailable: true` on that project.
// `freeTierBackend` shows a note that the first request may be slow.
// `healthUrl` is checked on page load to wake the backend and show whether the demo is ready.
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
    role: "Solo project. Designed and built the Spring Boot API and the React/TypeScript UI.",
    // Each detail reflects a rule enforced in the tracklo-api service layer.
    stages: [
      {
        name: "Submit",
        detail: "A requester submits a request to their workspace. Requesters only see their own tickets; agents and admins see every ticket in the workspace.",
      },
      {
        name: "Triage",
        detail: "An agent or admin marks the request Valid, Needs info, or Decline. Valid moves it to Scope, and only the original requester can resubmit a Needs info ticket.",
      },
      {
        name: "Scope",
        detail: "Opens claimable BA and Designer pools. The API blocks the move to Build until the requester has signed off the scope.",
      },
      {
        name: "Build",
        detail: "Opens a Dev Team pool. Sending the ticket back to Scope requires a reason and clears the earlier scope sign-off.",
      },
      {
        name: "Test",
        detail: "Opens a QA pool. Deploy stays blocked until every item on the requester's UAT checklist is submitted as Pass; reopening to Build requires failing or blocked results.",
      },
      {
        name: "Deploy",
        detail: "The final stage, with no transitions out of it. Every stage change is recorded in the ticket's activity log.",
      },
    ],
    // Repositories are private, so link to the GitHub profile.
    source: [{ label: "GitHub Profile", href: site.github }],
    demoUrl: "https://tracklo-ui.vercel.app/",
    healthUrl: "https://tracklo-api.onrender.com/health",
    demoAvailable: true,
    // Backend runs on Render's free tier, which sleeps when idle.
    freeTierBackend: true,
  },
  {
    title: "UserManager",
    image: "/usermanager.png",
    imagePosition: "object-center",
    role: "Solo project. Built the Spring Boot backend and the React frontend.",
    problem:
      "Accounts plus a small social feed: sign up, verify email, log in, recover a password, post and comment, with admin tools for managing users.",
    highlights: [
      "Authorization is enforced on the server: USER and ADMIN roles, owner-or-admin checks on deletes, and request/response DTOs so roles and password hashes can't be set or read through the API.",
      "Password-reset tokens are stored hashed, expire after 10 minutes and are consumed atomically, so each link works once. Changing a password signs out every existing session.",
      "141 tests, most against real PostgreSQL through Testcontainers, cover authentication, authorization and the Flyway migrations, and run in GitHub Actions on every push.",
    ],
    tags: ["Spring Boot", "Spring Security", "PostgreSQL", "Flyway", "JWT", "Testcontainers", "React"],
    source: [
      { label: "Frontend", href: "https://github.com/tizreal/usermanager-frontend" },
      { label: "Backend", href: "https://github.com/tizreal/UserManager-Backend" },
    ],
    demoUrl: "https://usermanager-frontend.vercel.app/",
    healthUrl: "https://usermanager-secure-api.onrender.com/api/health",
    demoAvailable: true,
    // Backend runs on Render's free tier, which sleeps when idle.
    freeTierBackend: true,
  },
  {
    title: "Library Management System",
    image: "/libraryapp.png",
    role: "Solo project. Built the React frontend and both backends.",
    problem: "Keep track of a library's books and members from one interface.",
    highlights: [
      "Similar REST endpoints (CRUD for books and members) built twice: Spring Boot with Spring Data JPA, and Node.js/Express with parameterized SQL via node-postgres. The member payloads differ (the username field is named differently), and the frontend uses the Spring Boot API.",
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
    healthUrl: "https://libraryappbackend-wok5.onrender.com/api/books",
    demoAvailable: true,
    // Backend runs on Render's free tier, which sleeps when idle.
    freeTierBackend: true,
  },
];

const STAGGER = ["", "delay-100", "delay-200", "delay-300"];

const linkFocus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50";

function StageExplorer({ title, stages }) {
  const [selected, setSelected] = useState(0);
  const panelId = `${title.toLowerCase()}-stage-detail`;

  return (
    <div className="w-full rounded-t-2xl bg-accent/5 border-b border-border px-6 py-8 md:py-12">
      <p className="text-xs text-muted text-center mb-4">
        Select a stage to see what the API enforces
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {stages.map(({ name }, i) => (
          <li key={name} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSelected(i)}
              data-track={`TrackLo stage: ${name}`}
              aria-pressed={selected === i}
              aria-controls={panelId}
              className={`relative z-20 text-xs md:text-base font-semibold px-3 md:px-5 py-1.5 md:py-2 rounded-full border transition-all duration-200 ${linkFocus} ${
                selected === i
                  ? "bg-accent text-white border-accent"
                  : "bg-accent/10 text-accent border-accent/30 hover:bg-accent/20"
              }`}
            >
              {name}
            </button>
            {i < stages.length - 1 && (
              <span className="text-muted/60 text-xs" aria-hidden="true">→</span>
            )}
          </li>
        ))}
      </ul>
      <p
        id={panelId}
        aria-live="polite"
        className="mt-5 max-w-xl mx-auto text-center text-sm text-foreground/80 leading-relaxed min-h-22 sm:min-h-16"
      >
        <span className="font-semibold text-accent">{stages[selected].name}: </span>
        {stages[selected].detail}
      </p>
    </div>
  );
}

const DEMO_STATUS = {
  checking: { label: "Checking demo…", dot: "bg-muted" },
  waking: { label: "Waking up, about 1–2 min", dot: "bg-amber-500 animate-pulse" },
  ready: { label: "Demo ready", dot: "bg-emerald-500" },
  unavailable: { label: "Demo unavailable right now; screenshots and source are still here", dot: "bg-red-500" },
};

function DemoStatusBadge({ status }) {
  const info = status && DEMO_STATUS[status];
  if (!info) return null;
  return (
    <span role="status" aria-live="polite" className="inline-flex items-center gap-1.5 text-xs text-muted">
      <span aria-hidden="true" className={`h-2 w-2 rounded-full ${info.dot}`} />
      {info.label}
    </span>
  );
}

function ProjectCard({ project, index, featured, revealed }) {
  const demoStatus = useDemoStatus(project.demoAvailable ? project.healthUrl : null);
  return (
    <div
      className={`bg-surface border border-border rounded-2xl overflow-hidden flex flex-col relative shadow-sm hover:shadow-lg hover:border-accent focus-within:border-accent hover:-translate-y-1 transition-all duration-300 ease-out group ${STAGGER[index]} ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
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
            className={`object-cover ${project.imagePosition ?? "object-top"} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
          />
        </div>
      ) : (
        <StageExplorer title={project.title} stages={project.stages} />
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

        <p className="text-foreground/80 text-sm leading-relaxed mb-2">
          {project.problem}
        </p>
        <p className="text-muted text-sm leading-relaxed mb-3">
          <span className="text-foreground/80 font-medium">Role: </span>
          {project.role}
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
              data-track={`Source: ${project.title} ${label}`.slice(0, 50)}
              className={`group/link inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted hover:border-accent hover:text-accent hover:bg-accent/8 transition-all duration-200 ${linkFocus}`}
            >
              <GithubIcon size={14} /> {label}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          ))}
          {project.demoAvailable ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}: Live Demo`}
              data-track={`Demo: ${project.title}`}
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-accent text-white hover:bg-accent-hover transition-all duration-200 ${linkFocus}`}
            >
              <ExternalIcon /> Live Demo
            </a>
          ) : (
            <span className="text-xs text-muted italic">
              Demo temporarily offline
            </span>
          )}
          <DemoStatusBadge status={demoStatus} />
        </div>
        {project.demoAvailable && project.freeTierBackend && demoStatus !== "ready" && (
          <p className="mt-3 flex items-start gap-2 text-xs text-muted leading-relaxed">
            <span className="text-amber-500 mt-0.5">
              <WarningIcon />
            </span>
            <span>
            The demo&apos;s backend runs on a free hosting tier and sleeps when
            idle, so the first load can take two to three minutes. It isn&apos;t
            broken; give it a moment to wake up.
            </span>
          </p>
        )}
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
          Selected Work
        </h2>
        <p className="text-muted text-base leading-relaxed mb-16 max-w-xl text-center mx-auto">
          Personal projects I designed and built end to end.
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
