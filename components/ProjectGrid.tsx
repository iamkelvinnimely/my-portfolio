import Image from "next/image";
import type { Project } from "../lib/content";

export function ProjectGrid({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <article key={p.name}>
          {p.href ? (
            <a
              href={p.href}
              className="group block h-full overflow-hidden border border-border bg-background transition-colors hover:bg-foreground/[0.02] focus:outline-none focus:ring-2 focus:ring-foreground/30"
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {p.image && (
                <div className="relative aspect-[16/9] w-full border-b border-border bg-muted/30">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={false}
                  />

                  <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                    <span className="inline-flex h-10 items-center justify-center border border-foreground bg-foreground px-4 text-sm font-medium text-background">
                      View Project
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <header className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted">{p.roleOrType}</p>
                  </div>
                  <span className="text-sm text-muted group-hover:text-foreground">
                    View
                  </span>
                </header>

                <p className="mt-4 text-sm leading-7 text-muted">{p.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-foreground" />
                      <span className="text-muted">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ) : (
            <div className="group h-full overflow-hidden border border-border bg-background">
              {p.image && (
                <div className="relative aspect-[16/9] w-full border-b border-border bg-muted/30">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={false}
                  />

                  <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="inline-flex h-10 items-center justify-center border border-foreground bg-foreground px-4 text-sm font-medium text-background">
                      View Project
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted">{p.roleOrType}</p>
                </div>
              </header>

              <p className="mt-4 text-sm leading-7 text-muted">{p.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted">{b}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

