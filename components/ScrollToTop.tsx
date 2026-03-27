"use client";

import { useCallback, useEffect, useState } from "react";

const SCROLL_THRESHOLD_PX = 400;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = useCallback(() => {
    const instant =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: instant ? "instant" : "smooth",
    });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-6 right-6 z-40 inline-flex h-10 items-center justify-center border border-border bg-background/90 px-4 text-sm font-medium text-foreground backdrop-blur transition-opacity duration-200 hover:bg-foreground/[0.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      Top
    </button>
  );
}
