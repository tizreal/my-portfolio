import { site, resumeHref } from "../data/site";
import { DownloadIcon, GithubIcon, LinkedInIcon, MailIcon } from "./icons";

const links = [
  { label: "Resume", href: resumeHref, icon: <DownloadIcon size={14} />, external: Boolean(site.resume) },
  { label: "GitHub", href: site.github, icon: <GithubIcon size={14} />, external: true },
  { label: "LinkedIn", href: site.linkedin, icon: <LinkedInIcon size={14} />, external: true },
  { label: "Email", href: `mailto:${site.email}`, icon: <MailIcon size={14} />, external: false },
];

// Compact one-click row of resume / profile / email links (hero and footer).
export default function ContactLinks({ className = "", omit = [] }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {links.filter(({ label }) => !omit.includes(label)).map(({ label, href, icon, external }) => (
        <li key={label}>
          <a
            href={href}
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
