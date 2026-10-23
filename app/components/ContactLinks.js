import { site } from "../data/site";
import { GithubIcon, LinkedInIcon, MailIcon } from "./icons";

const links = [
  { label: "GitHub", href: site.github, icon: <GithubIcon size={14} />, external: true },
  { label: "LinkedIn", href: site.linkedin, icon: <LinkedInIcon size={14} />, external: true },
  { label: "Email", href: `mailto:${site.email}`, icon: <MailIcon size={14} />, external: false },
];

// Compact one-click row of profile and email links (hero).
export default function ContactLinks({ className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(({ label, href, icon, external }) => (
        <li key={label}>
          <a
            href={href}
            data-track={label}
            data-track-from="hero"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-1.5 min-h-9 text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted hover:border-accent hover:text-accent hover:bg-accent/8 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {icon}
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
