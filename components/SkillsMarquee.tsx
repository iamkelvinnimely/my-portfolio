export type SkillsMarqueeItem = {
  label: string;
};

export function SkillsMarquee({
  items,
  speedSeconds = 28,
  direction = "left",
  edgeFade = true,
  categoryTitle,
}: {
  items: readonly SkillsMarqueeItem[];
  speedSeconds?: number;
  direction?: "left" | "right";
  edgeFade?: boolean;
  /** News-ticker style: sticky category block on the edge the marquee appears to flow from. */
  categoryTitle?: string;
}) {
  const animationClass = direction === "right" ? "animate-marquee-right" : "animate-marquee-left";
  const copies = Math.max(8, Math.ceil(24 / Math.max(items.length, 1)));
  const base = Array.from({ length: copies }, () => items).flat();
  const belt = [...base, ...base];

  // marquee-right: belt moves toward +x — chips read as emerging from the left.
  // marquee-left: belt moves toward -x — chips read as emerging from the right.
  const labelOnLeft = direction === "right";
  const showLeftFade = categoryTitle ? !labelOnLeft : edgeFade;
  const showRightFade = categoryTitle ? labelOnLeft : edgeFade;

  const track = (
    <div
      className="relative min-h-0 min-w-0 flex-1 overflow-hidden bg-background"
      style={
        {
          ["--marquee-duration" as never]: `${speedSeconds}s`,
          contain: "paint",
        } as React.CSSProperties
      }
    >
      {showLeftFade && (
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-background to-transparent" />
      )}
      {showRightFade && (
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-background to-transparent" />
      )}

      <div className="group flex w-full items-center overflow-hidden py-2">
        <div
          className={`flex w-max shrink-0 items-center gap-4 whitespace-nowrap pr-4 pl-4 ${animationClass} motion-reduce:animate-none group-hover:[animation-play-state:paused]`}
          style={{ willChange: "transform" }}
        >
          {belt.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="shrink-0 border border-border bg-background px-5 py-2.5 text-base font-medium tracking-wide text-foreground"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (categoryTitle) {
    const categoryBlock = (
      <div
        className={`flex max-w-[min(12rem,38vw)] shrink-0 items-center justify-center border-border bg-foreground px-3 py-2.5 text-center sm:max-w-[14rem] sm:px-4 ${
          labelOnLeft ? "border-r" : "border-l"
        }`}
      >
        <span className="text-[0.65rem] font-semibold uppercase leading-snug tracking-wider text-background sm:text-xs">
          {categoryTitle}
        </span>
      </div>
    );

    return (
      <div className="flex w-full max-w-full items-stretch overflow-hidden border border-border bg-background">
        {labelOnLeft ? (
          <>
            {categoryBlock}
            {track}
          </>
        ) : (
          <>
            {track}
            {categoryBlock}
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative w-full max-w-full overflow-hidden border border-border bg-background"
      style={
        {
          ["--marquee-duration" as never]: `${speedSeconds}s`,
          contain: "paint",
        } as React.CSSProperties
      }
    >
      {edgeFade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-background to-transparent" />
        </>
      )}

      <div className="group flex w-full items-center overflow-hidden py-2">
        <div
          className={`flex w-max shrink-0 items-center gap-4 whitespace-nowrap pr-4 ${animationClass} motion-reduce:animate-none group-hover:[animation-play-state:paused]`}
          style={{ willChange: "transform" }}
        >
          {belt.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="shrink-0 border border-border bg-background px-5 py-2.5 text-base font-medium tracking-wide text-foreground"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

