"use client";

import {
  SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiReact, SiReactrouter, SiVite, SiAxios, SiFormik,
  SiSpringboot, SiSpringsecurity, SiNestjs, SiNodedotjs, SiJsonwebtokens, SiSocketdotio,
  SiPostgresql, SiJunit5, SiGit, SiGithubactions, SiDocker,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { TbApi, TbArrowsExchange, TbChecklist, TbDatabaseImport } from "react-icons/tb";
import useReveal from "../hooks/useReveal";

// Mirrors the Technical Skills section of the resume; keep the two in sync.
const skillGroups = [
  {
    category: "Languages",
    description: "What I write day to day",
    skills: [
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Java",       icon: <FaJava className="text-[#ED8B00]" /> },
      { name: "SQL",        icon: <FaDatabase className="text-muted" /> },
      { name: "HTML",       icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS",        icon: <SiCss className="text-[#663399]" /> },
    ],
  },
  {
    category: "Frontend",
    description: "User interfaces, routing, and forms",
    skills: [
      { name: "React",        icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
      { name: "Vite",         icon: <SiVite className="text-[#646CFF]" /> },
      { name: "Axios",        icon: <SiAxios className="text-[#5A29E4]" /> },
      { name: "Formik",       icon: <SiFormik className="text-[#2563EB]" /> },
      { name: "Yup",          icon: <TbChecklist className="text-accent" /> },
    ],
  },
  {
    category: "Backend",
    description: "APIs, security, and real-time services",
    skills: [
      { name: "Spring Boot",     icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "Spring Security", icon: <SiSpringsecurity className="text-[#6DB33F]" /> },
      { name: "NestJS",          icon: <SiNestjs className="text-[#E0234E]" /> },
      { name: "Node.js",         icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "REST APIs",       icon: <TbApi className="text-accent" /> },
      { name: "JWT",             icon: <SiJsonwebtokens /> },
      { name: "Socket.io",       icon: <SiSocketdotio /> },
    ],
  },
  {
    category: "Database & Tools",
    description: "Data, testing, CI, and containers",
    skills: [
      { name: "PostgreSQL",     icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "Transactions",   icon: <TbArrowsExchange className="text-accent" /> },
      { name: "Migrations",     icon: <TbDatabaseImport className="text-accent" /> },
      { name: "JUnit",          icon: <SiJunit5 className="text-[#25A162]" /> },
      { name: "Git",            icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" /> },
      { name: "Docker",         icon: <SiDocker className="text-[#2496ED]" /> },
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
