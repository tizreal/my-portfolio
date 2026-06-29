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
    description: "Crafting responsive, accessible user interfaces",
    skills: [
      { name: "React",        icon: <SiReact className="text-[#61DAFB]" />,       tier: "proficient" },
      { name: "Next.js",      icon: <SiNextdotjs />,                              tier: "familiar"   },
      { name: "HTML / CSS",   icon: <SiHtml5 className="text-[#E34F26]" />,       tier: "proficient" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, tier: "proficient" },
      { name: "JavaScript",   icon: <SiJavascript className="text-[#F7DF1E]" />,  tier: "proficient" },
    ],
  },
  {
    category: "Backend",
    description: "Building reliable APIs and server-side logic",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" />, tier: "proficient" },
      { name: "Java",        icon: <FaJava className="text-[#ED8B00]" />,        tier: "proficient" },
      { name: "Node.js",     icon: <SiNodedotjs className="text-[#339933]" />,  tier: "familiar"   },
      { name: "Express",     icon: <SiExpress />,                                tier: "familiar"   },
      { name: "REST APIs",   icon: <TbApi className="text-accent" />,            tier: "proficient" },
      { name: "SQL",         icon: <FaDatabase className="text-muted" />,        tier: "familiar"   },
      { name: "PostgreSQL",  icon: <SiPostgresql className="text-[#4169E1]" />,  tier: "proficient" },
    ],
  },
  {
    category: "Tools & Others",
    description: "Workflow, version control, and design tooling",
    skills: [
      { name: "Git",      icon: <SiGit className="text-[#F05032]" />,        tier: "proficient" },
      { name: "GitHub",   icon: <SiGithub />,                                 tier: "proficient" },
      { name: "VS Code",  icon: <TbBrandVscode className="text-[#007ACC]" />, tier: "proficient" },
      { name: "Figma",    icon: <SiFigma className="text-[#F24E1E]" />,       tier: "familiar"   },
      { name: "Vercel",   icon: <SiVercel />,                                  tier: "familiar"   },
      { name: "Postman",  icon: <SiPostman className="text-[#FF6C37]" />,     tier: "proficient" },
    ],
  },
];

const STAGGER = ["", "delay-100", "delay-200", "delay-300"];

const TIER_DOT = {
  proficient: "bg-accent",
  familiar: "border border-accent bg-transparent",
  learning: "bg-muted/30",
};

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

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
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
                {skills.map(({ name, icon, tier }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    <span className="text-base w-5 flex items-center justify-center shrink-0">
                      {icon}
                    </span>
                    {name}
                    <span className={`ml-auto w-1.5 h-1.5 rounded-full shrink-0 ${TIER_DOT[tier]}`} />
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                <span className="flex items-center gap-1.5 text-xs text-muted/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Proficient
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted/50">
                  <span className="w-1.5 h-1.5 rounded-full border border-accent bg-transparent" />
                  Familiar
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted/30" />
                  Learning
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
