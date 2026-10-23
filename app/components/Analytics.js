"use client";

import { useEffect } from "react";
import Script from "next/script";
import { site } from "../data/site";

// Sections whose first appearance on screen is recorded as an event.
const SECTIONS = [
  ["experience", "Experience"],
  ["projects", "Selected Work"],
  ["skills", "Skills"],
  ["about", "About"],
  ["contact", "Contact"],
];

function track(name, data) {
  window.umami?.track(name, data);
}

// Loads Umami (cookieless) on the production domain only, records clicks on
// any element with `data-track="Event name"` (optional `data-track-from`),
// and records each section the first time a visitor scrolls to it.
// Uses its own listener instead of Umami's data-umami-event attributes,
// which would stop the elements' existing click handlers from running.
export default function Analytics() {
  const enabled = Boolean(site.umamiWebsiteId);

  useEffect(() => {
    if (!enabled) return;

    const onClick = (e) => {
      const el = e.target.closest("[data-track]");
      if (!el) return;
      const from = el.getAttribute("data-track-from");
      track(el.getAttribute("data-track"), from ? { from } : undefined);
    };
    document.addEventListener("click", onClick);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const label = SECTIONS.find(([id]) => id === entry.target.id)?.[1];
          if (label) track(`Section: ${label}`);
          observer.unobserve(entry.target);
        });
      },
      // Fires once a section reaches the upper 60% of the viewport; works for
      // sections taller than the screen, unlike a visibility-ratio threshold.
      { rootMargin: "0px 0px -40% 0px" },
    );
    SECTIONS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      document.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <Script
      src="https://cloud.umami.is/script.js"
      strategy="afterInteractive"
      data-website-id={site.umamiWebsiteId}
      data-domains={new URL(site.url).hostname}
      data-do-not-track="true"
    />
  );
}
