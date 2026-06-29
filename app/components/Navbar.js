"use client";

import { useState, useEffect, startTransition } from "react";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#resume" },
  { label: "Resume",   href: "#resume" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [theme,     setTheme]     = useState("dark");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    startTransition(() => setTheme(current));
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className={`font-black text-accent tracking-tight text-xl font-display rounded ${focusRing}`}
        >
          T
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ label, href }, index) => (
            <li key={label}>
              {index === navLinks.length - 1 ? (
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`bg-accent text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-accent-hover transition-colors duration-200 ${focusRing}`}
                >
                  {label}
                </a>
              ) : (
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`text-muted hover:text-accent text-sm font-medium transition-colors duration-200 rounded ${focusRing}`}
                >
                  {label}
                </a>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className={`flex items-center gap-2 text-xs font-medium transition-colors duration-200 rounded-full ${focusRing} ${
                theme === "dark" ? "text-muted hover:text-foreground" : "text-foreground"
              }`}
            >
              <span className="text-sm" aria-hidden="true">☀️</span>
              {/* Track */}
              <span className={`relative inline-flex h-5 w-9 shrink-0 rounded-full border transition-colors duration-300 ${
                theme === "dark" ? "bg-muted/10 border-border" : "bg-accent border-transparent"
              }`}>
                <span className={`absolute top-0.5 left-0.5 h-3.5 w-3.5 rounded-full shadow-sm transition-transform duration-300 ${
                  theme === "light" ? "translate-x-4 bg-white" : "translate-x-0 bg-foreground/60"
                }`} />
              </span>
              <span className="text-sm" aria-hidden="true">🌙</span>
            </button>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={`min-h-10 min-w-10 flex items-center justify-center rounded-full border transition-all duration-200 ${focusRing} ${
              theme === "dark"
                ? "border-border text-muted hover:border-accent/60 hover:text-accent"
                : "border-accent/40 bg-accent/10 text-accent"
            }`}
          >
            <span className="text-base">{theme === "dark" ? "🌙" : "☀️"}</span>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`min-h-11 min-w-11 flex items-center justify-center text-muted hover:text-accent transition-colors duration-200 rounded ${focusRing}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map(({ label, href }, index) => (
              <li key={label}>
                {index === navLinks.length - 1 ? (
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`inline-flex items-center min-h-11 bg-accent text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-accent-hover transition-colors duration-200 ${focusRing}`}
                  >
                    {label}
                  </a>
                ) : (
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`flex items-center min-h-11 py-2 text-muted hover:text-accent text-sm font-medium transition-colors duration-200 rounded ${focusRing}`}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
