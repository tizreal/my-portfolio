"use client";

import { useState, useEffect, startTransition } from "react";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
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
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
        <ul className="hidden md:flex gap-5 lg:gap-8 items-center">
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

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Side drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-surface border-l border-border z-50 md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <span className="font-display font-black text-accent text-xl">T</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className={`min-h-9 min-w-9 flex items-center justify-center rounded-full text-muted hover:text-foreground transition-colors duration-200 ${focusRing}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map(({ label, href }, index) => (
            <li key={label}>
              {index === navLinks.length - 1 ? (
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`inline-flex items-center min-h-11 bg-accent text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-accent-hover transition-colors duration-200 ${focusRing}`}
                >
                  {label}
                </a>
              ) : (
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`flex items-center min-h-11 px-2 text-foreground/80 hover:text-accent text-base font-medium transition-colors duration-200 rounded-lg hover:bg-accent/5 ${focusRing}`}
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Theme toggle pinned to drawer bottom */}
        <div className="px-6 py-5 border-t border-border">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={`flex items-center gap-3 w-full text-sm font-medium transition-colors duration-200 rounded ${focusRing} ${
              theme === "dark" ? "text-muted hover:text-foreground" : "text-foreground"
            }`}
          >
            <span aria-hidden="true">☀️</span>
            <span className={`relative inline-flex h-5 w-9 shrink-0 rounded-full border transition-colors duration-300 ${
              theme === "dark" ? "bg-muted/10 border-border" : "bg-accent border-transparent"
            }`}>
              <span className={`absolute top-0.5 left-0.5 h-3.5 w-3.5 rounded-full shadow-sm transition-transform duration-300 ${
                theme === "light" ? "translate-x-4 bg-white" : "translate-x-0 bg-foreground/60"
              }`} />
            </span>
            <span aria-hidden="true">🌙</span>
            <span className="ml-1 text-xs text-muted">{theme === "dark" ? "Dark" : "Light"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
