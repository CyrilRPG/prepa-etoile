import type { ReactNode } from "react";
import { Eyebrow } from "./SectionIntro";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
};

/** Bandeau haut des huit pages internes. L'accueil a le hero à la place. */
export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <div className="border-b border-hairline bg-cream-shade">
      <div className="mx-auto max-w-[var(--container-content)] gutter pt-16 pb-14 md:pt-24 md:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.25rem,1.4rem+3.2vw,3.75rem)] leading-[1.06] text-balance">
          {title}
        </h1>
        {intro && (
          <p className="mt-7 max-w-2xl text-[1.125rem] leading-relaxed text-ink-muted">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
