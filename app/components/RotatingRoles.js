"use client";

import { useEffect, useState } from "react";

const roles = ["Backend-focused", "Full-stack", "REST APIs & PostgreSQL"];

// Typewriter that cycles through `roles`. With reduced motion it swaps whole
// phrases instead of typing them out.
export default function RotatingRoles({ className = "", style }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let timeout;

    if (reduceMotion) {
      timeout = setTimeout(
        () => {
          if (displayed === current) {
            setRoleIndex((prev) => (prev + 1) % roles.length);
          } else {
            setDisplayed(current);
          }
        },
        displayed === current ? 2500 : 0,
      );
    } else if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <p className={className} style={style}>
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true">
        {displayed}
        <span className="animate-pulse text-accent">|</span>
      </span>
    </p>
  );
}
