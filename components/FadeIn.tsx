"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

export function FadeIn({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) setShown(true);
      },
      { threshold: 0.12, rootMargin: "80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "transition-opacity duration-700",
        shown ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

