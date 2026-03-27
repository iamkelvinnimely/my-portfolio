"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribeToNothing = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

  const isLight = mounted && resolvedTheme === "light";
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div
      className="ml-2 flex items-center gap-2 border-l border-border pl-4"
      aria-label="Theme selector"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={isLight}
        className={`text-sm transition-colors ${
          isLight ? "text-foreground" : "text-muted hover:text-foreground"
        }`}
      >
        Light
      </button>
      <span className="text-muted" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={isDark}
        className={`text-sm transition-colors ${
          isDark ? "text-foreground" : "text-muted hover:text-foreground"
        }`}
      >
        Dark
      </button>
    </div>
  );
}
