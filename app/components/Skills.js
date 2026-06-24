"use client";

import {
  SiReact, SiNextdotjs, SiHtml5, SiTailwindcss, SiJavascript,
  SiSpringboot, SiNodedotjs, SiExpress, SiPostgresql,
  SiGit, SiGithub, SiFigma, SiVercel, SiPostman,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { TbApi, TbBrandVscode } from "react-icons/tb";
import useReveal from "../hooks/useReveal";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React",        icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js",      icon: <SiNextdotjs /> },
      { name: "HTML / CSS",   icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "JavaScript",   icon: <SiJavascript className="text-[#F7DF1E]" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "Java",        icon: <FaJava className="text-[#ED8B00]" /> },
      { name: "Node.js",     icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express",     icon: <SiExpress /> },
      { name: "REST APIs",   icon: <TbApi className="text-accent" /> },
      { name: "SQL",         icon: <FaDatabase className="text-muted" /> },
      { name: "PostgreSQL",  icon: <SiPostgresql className="text-[#4169E1]" /> },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git",      icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub",   icon: <SiGithub /> },
      { name: "VS Code",  icon: <TbBrandVscode className="text-[#007ACC]" /> },
      { name: "Figma",    icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: "Vercel",   icon: <SiVercel /> },
      { name: "Postman",  icon: <SiPostman className="text-[#FF6C37]" /> },
    ],
  },
];

const STAGGER = ["", "delay-100", "delay-200", "delay-300"];

export default function Skills() {
  const [gridRef, gridRevealed] = useReveal();

  return (
    <section id="skills" className="py-20 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-[2rem] md:text-5xl font-bold text-foreground mb-4 text-center">
          Skills
        </h2>
        <p className="text-muted text-base leading-relaxed mb-16 max-w-xl text-center mx-auto">
          Technologies and tools I use to build things.
        </p>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {skillGroups.map(({ category, skills }, index) => (
            <div
              key={category}
              className={`bg-surface border border-border rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 ease-out ${STAGGER[index]} ${gridRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h3 className="text-xs uppercase tracking-widest text-accent font-semibold pb-4 mb-6 border-b border-border">
                {category}
              </h3>
              <ul className="space-y-3">
                {skills.map(({ name, icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    <span className="text-base w-5 flex items-center justify-center shrink-0">
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
