"use client";

import {
  SiReact, SiNextdotjs, SiHtml5, SiTailwindcss, SiJavascript, SiTypescript,
  SiSpringboot, SiSpringsecurity, SiJsonwebtokens, SiHibernate,
  SiNodedotjs, SiExpress, SiPostgresql,
  SiGit, SiGithub, SiDocker, SiVercel, SiPostman,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import useReveal from "../hooks/useReveal";

const skillGroups = [
  {
    category: "Backend",
    description: "APIs, security, and server-side logic",
    skills: [
      { name: "Java",            icon: <FaJava className="text-[#ED8B00]" /> },
      { name: "Spring Boot",     icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "Spring Security", icon: <SiSpringsecurity className="text-[#6DB33F]" /> },
      { name: "REST APIs",       icon: <TbApi className="text-accent" /> },
      { name: "JWT",             icon: <SiJsonwebtokens /> },
      { name: "JPA / Hibernate", icon: <SiHibernate className="text-[#BCAE79]" /> },
      { name: "Node.js",         icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express",         icon: <SiExpress /> },
    ],
  },
  {
    category: "Database",
    description: "Relational data modelling and queries",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "SQL",        icon: <FaDatabase className="text-muted" /> },
    ],
  },
  {
    category: "Frontend",
    description: "User interfaces that talk to those APIs",
    skills: [
      { name: "React",        icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "TypeScript",   icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "JavaScript",   icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "HTML / CSS",   icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "Next.js",      icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ],
  },
  {
    category: "Tools",
    description: "Version control, containers, testing, and deployment",
    skills: [
      { name: "Git",     icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub",  icon: <SiGithub /> },
      { name: "Docker",  icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Vercel",  icon: <SiVercel /> },
    ],
  },
];

const STAGGER = ["", "delay-100", "delay-200", "delay-300"];

export default function Skills() {
  const [gridRef, gridRevealed] = useReveal();

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-[2rem] md:text-5xl font-bold text-foreground mb-4 text-center">
          Skills
        </h2>
        <p className="text-muted text-base leading-relaxed mb-16 max-w-xl text-center mx-auto">
          Technologies and tools I use to build things.
        </p>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map(({ category, description, skills }, index) => (
            <div
              key={category}
              className={`bg-surface border border-border rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 ease-out flex flex-col ${STAGGER[index]} ${gridRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h3 className="text-xs uppercase tracking-widest text-accent font-semibold pb-4 mb-4 border-b border-border">
                {category}
              </h3>
              <p className="text-xs text-muted mb-4 leading-relaxed">{description}</p>
              <ul className="space-y-3 flex-1">
                {skills.map(({ name, icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    <span className="text-base w-5 flex items-center justify-center shrink-0" aria-hidden="true">
                      {icon}
                    </span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
