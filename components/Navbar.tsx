import Link from "next/link";

import { content } from "../lib/content";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {content.owner.name}
        </Link>
        <div className="flex items-center">
          <nav aria-label="Primary" className="flex items-center gap-6">
            {content.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

