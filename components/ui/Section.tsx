import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "cream" | "shade" | "navy";
type Width = "content" | "narrow" | "wide";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-ink",
  shade: "bg-cream-shade text-ink",
  navy: "bg-navy text-cream/75",
};

const widths: Record<Width, string> = {
  narrow: "max-w-3xl",
  content: "max-w-[var(--container-content)]",
  wide: "max-w-[88rem]",
};

type Props = {
  id?: string;
  tone?: Tone;
  width?: Width;
  className?: string;
  children: ReactNode;
};

/** Rythme vertical et gouttières de toutes les sections du site. */
export function Section({
  id,
  tone = "cream",
  width = "content",
  className,
  children,
}: Props) {
  return (
    <section id={id} className={cn(tones[tone], "py-(--spacing-section)", className)}>
      <div className={cn("mx-auto gutter", widths[width])}>{children}</div>
    </section>
  );
}
