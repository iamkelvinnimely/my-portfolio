import { content } from "../lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">{content.owner.fullName}</p>
        <div className="flex gap-6 text-sm">
          <a
            href={`mailto:${content.contact.email}`}
            className="text-muted hover:text-foreground"
          >
            {content.contact.email}
          </a>
          {content.contact.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

