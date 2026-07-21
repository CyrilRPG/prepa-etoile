import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  tone = "gold",
  className,
}: {
  children: ReactNode;
  tone?: "gold" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.6875rem] font-medium uppercase tracking-[0.18em]",
        tone === "light" ? "text-gold-light" : "text-gold",
        className,
      )}
    >
      {children}
    </p>
  );
}

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: Props) {
  const light = tone === "light";
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={light ? "light" : "gold"}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-5 text-[clamp(1.875rem,1.2rem+2vw,2.75rem)] leading-[1.14] text-balance",
          light && "text-cream",
        )}
      >
        {title}
      </h2>
      {intro && (
        <div
          className={cn(
            "mt-6 max-w-2xl text-[1.0625rem] leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-cream/70" : "text-ink-muted",
          )}
        >
          {intro}
        </div>
      )}
    </div>
  );
}
