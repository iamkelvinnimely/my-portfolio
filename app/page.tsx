import Image from "next/image";
import { ContactForm } from "../components/ContactForm";
import { FadeIn } from "../components/FadeIn";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProjectGrid } from "../components/ProjectGrid";
import { Section } from "../components/Section";
import { SkillsMarquee } from "../components/SkillsMarquee";
import { content } from "../lib/content";

export default function Home() {
  const stackSpeeds = [68, 80, 72, 76, 70];
  /** Longer duration = slower crawl (Frontend has many items). */
  const frontendStackDurationSeconds = 100;

  return (
    <div className="flex flex-1 flex-col">
      <Navbar />

      <main className="flex-1">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-border focus:bg-background focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <section className="py-20">
          <div className="mx-auto w-full max-w-5xl px-6">
            <FadeIn>
              <p className="text-sm font-medium tracking-wide text-muted">
                {content.owner.title}
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {content.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                {content.hero.subtext}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={content.hero.ctas.primary.href}
                  className="inline-flex h-11 items-center justify-center border border-foreground bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90"
                >
                  {content.hero.ctas.primary.label}
                </a>
                <a
                  href={content.hero.ctas.secondary.href}
                  className="inline-flex h-11 items-center justify-center border border-border bg-background px-5 text-sm font-medium hover:bg-foreground/[0.02]"
                >
                  {content.hero.ctas.secondary.label}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <Section id="about" title="About">
          <FadeIn>
            <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16 md:items-start">
              <div className="w-full">
                <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-muted/30">
                  <Image
                    src="/kelvin.png"
                    alt="Portrait of Kelvin Nimely"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 280px, 100vw"
                  />
                </div>
                <p className="mt-3 text-xs text-muted">Kelvin Nimely</p>
              </div>

              <div className="space-y-10">
                <div className="max-w-prose space-y-4 text-base leading-7 text-muted">
                  {content.about.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                <div className="border-t border-border pt-8">
                  <div className="grid gap-10">
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight">
                        {content.coreAreas.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {content.coreAreas.items.map((i) => (
                          <span
                            key={i}
                            className="inline-flex items-center border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted"
                          >
                            {i}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8">
                        <p className="text-xs font-semibold tracking-wide text-foreground">
                          My Favorite Stack
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {content.favoriteStack.map((i) => (
                            <span
                              key={i}
                              className="inline-flex items-center border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted"
                            >
                              {i}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        <Section id="stack" title="Tech Stack">
          <FadeIn>
            <div className="grid gap-2">
              {content.skills.groups.map((group, idx) => (
                <div key={group.title}>
                  <div className="mt-2">
                    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
                      <SkillsMarquee
                        categoryTitle={group.title}
                        items={group.items.map((label) => ({ label }))}
                        speedSeconds={
                          group.title === "Frontend Development"
                            ? frontendStackDurationSeconds
                            : stackSpeeds[idx % stackSpeeds.length]
                        }
                        direction={idx % 2 === 0 ? "right" : "left"}
                        edgeFade={false}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Section>

        <Section id="work" title={content.projects.title}>
          <FadeIn>
            <ProjectGrid projects={content.projects.featured} />
            <div className="mt-10 border-t border-border pt-8">
              <h3 className="text-sm font-semibold tracking-tight">
                {content.projects.otherTitle}
              </h3>
              <ul className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2">
                {content.projects.other.map((o) => (
                  <li key={o.name} className="flex items-baseline gap-2">
                    <span className="font-medium text-foreground">{o.name}</span>
                    {o.description && <span className="text-muted">— {o.description}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </Section>

        <Section id="services" title={content.services.title}>
          <FadeIn>
            <ul className="grid gap-3 text-sm text-muted sm:grid-cols-2">
              {content.services.items.map((s) => (
                <li key={s} className="border border-border px-4 py-3">
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>
        </Section>

        <Section id="contact" title={content.contact.title}>
          <FadeIn>
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm leading-7 text-muted">
                  {content.contact.blurb}
                </p>
                <div className="mt-6 text-sm">
                  <a
                    className="block text-muted hover:text-foreground"
                    href={`mailto:${content.contact.email}`}
                  >
                    {content.contact.email}
                  </a>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {content.contact.socials.map((social) => (
                      <a
                        key={social.label}
                        className="text-muted hover:text-foreground"
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border border-border p-6">
                <ContactForm endpoint={content.contact.formspreeEndpoint} />
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
