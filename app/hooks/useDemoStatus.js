"use client";

import { useEffect, useState } from "react";

// The demo backends sleep on a free hosting tier. Checking their health on page load wakes
// them up early, and the result tells visitors whether a demo is ready to open.
const ATTEMPT_TIMEOUT_MS = 8000;
const RETRY_DELAY_MS = 10000;
const MAX_ATTEMPTS = 18; // about three minutes, longer than a typical cold start

/** Returns "checking" | "waking" | "ready" | "unavailable", or null without a health URL. */
export default function useDemoStatus(healthUrl) {
  const [status, setStatus] = useState(healthUrl ? "checking" : null);

  useEffect(() => {
    if (!healthUrl) return undefined;
    let cancelled = false;
    let retryTimer;

    async function attempt(n) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), ATTEMPT_TIMEOUT_MS);
      let ok = false;
      try {
        // A real CORS request: only a 2xx response the browser lets us read counts as ready.
        const res = await fetch(healthUrl, { signal: controller.signal, cache: "no-store" });
        ok = res.ok;
      } catch {
        // Timeout, network error or CORS rejection: treated as not ready yet.
      } finally {
        clearTimeout(timeout);
      }
      if (cancelled) return;
      if (ok) {
        setStatus("ready");
      } else if (n >= MAX_ATTEMPTS) {
        setStatus("unavailable");
      } else {
        setStatus("waking");
        retryTimer = setTimeout(() => attempt(n + 1), RETRY_DELAY_MS);
      }
    }

    attempt(1);
    return () => {
      cancelled = true;
      clearTimeout(retryTimer);
    };
  }, [healthUrl]);

  return status;
}
