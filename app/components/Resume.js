function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7,10 12,15 17,10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 md:px-6 bg-background">
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
              Download my resume to get a full overview of my experience,
              education, and skills.
            </p>
            <div className="mt-auto pt-7">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <DownloadIcon />
                Download Resume
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
                href="mailto:odunifa.temi@gmail.com"
                className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 text-sm text-foreground hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <span className="text-accent"><MailIcon /></span>
                odunifa.temi@gmail.com
              </a>
              {/* GitHub + LinkedIn side by side */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/tizreal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center gap-3 border border-border rounded-xl px-4 py-3 text-sm text-foreground hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  <GithubIcon />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/temiloluwa-odunfa-60a9a21a6/"
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
          <div className="flex flex-col md:flex-row md:items-center">
            <div>
              <span className="text-muted text-xs uppercase tracking-widest block mb-1">Location</span>
              <span className="text-foreground text-sm font-medium">Toronto, Canada</span>
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
          <p className="text-muted text-xs md:text-right">
            Designed &amp; built by Temiloluwa Odunfa &middot; {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </section>
  );
}
