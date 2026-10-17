import { site, resumeHref } from "../data/site";
import ContactLinks from "./ContactLinks";
import { DownloadIcon, GithubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Resume() {
  return (
    <section id="resume" className="py-28 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2 text-center">
          Let&apos;s connect
        </p>
        <h2 className="font-display text-[2rem] font-bold text-foreground mb-6 text-center">
          Resume & Contact
        </h2>
        <p className="text-muted max-w-xl mb-12 leading-relaxed text-center mx-auto">
          I&apos;m currently open to new opportunities. Whether you have a
          question, a project idea, or just want to say hi — my inbox is always
          open.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-stretch">

          {/* Resume card */}
          <div className="bg-surface border border-border rounded-2xl p-10 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 h-full flex flex-col">
            <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">Resume</p>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-3">My Resume</h3>
            <p className="text-muted text-sm leading-relaxed flex-1">
              {site.resume
                ? "Download my resume for a full overview of my experience, education, and skills."
                : "Email me and I'll send you my current resume."}
            </p>
            <div className="mt-auto pt-7">
              <a
                href={resumeHref}
                {...(site.resume ? { download: true } : {})}
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                {site.resume ? <DownloadIcon /> : <MailIcon />}
                {site.resume ? "Download Resume" : "Request Resume"}
              </a>
            </div>
          </div>

          {/* Contact card */}
          <div className="bg-surface border border-border rounded-2xl p-10 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 h-full flex flex-col">
            <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">Contact</p>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-3">Get In Touch</h3>
            <p className="text-muted text-sm leading-relaxed flex-1">
              Reach out directly and I&apos;ll get back to you as soon as
              possible.
            </p>
            <div className="mt-auto pt-7 flex flex-col gap-3">
              {/* Email — full width */}
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 text-sm text-foreground hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <span className="text-accent"><MailIcon /></span>
                <span className="break-all">{site.email}</span>
              </a>
              {/* GitHub + LinkedIn side by side */}
              <div className="flex gap-3">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center gap-3 border border-border rounded-xl px-4 py-3 text-sm text-foreground hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  <GithubIcon />
                  GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center gap-3 border border-border rounded-xl px-4 py-3 text-sm text-foreground hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  <span className="text-[#0A66C2]"><LinkedInIcon /></span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bar */}
        <div className="bg-surface border border-border rounded-2xl px-6 md:px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-center">
            <div>
              <span className="text-muted text-xs uppercase tracking-widest block mb-1">Location</span>
              <span className="text-foreground text-sm font-medium">{site.location}</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-border mx-6" />
            <div>
              <span className="text-muted text-xs uppercase tracking-widest block mb-1">Availability</span>
              <span className="text-secondary text-sm font-medium flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse" />
                Open to opportunities
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <ContactLinks className="md:justify-end" />
            <p className="text-muted text-xs md:text-right">
              Designed &amp; built by {site.name} &middot; {new Date().getFullYear()}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
