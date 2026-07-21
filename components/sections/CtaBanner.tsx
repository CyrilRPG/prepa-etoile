import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button } from "@/components/ui/Button";
import { bookingHref } from "@/lib/data/navigation";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

/** Bloc de fin des pages internes. */
export function CtaBanner({
  eyebrow = "Commencez dès aujourd'hui",
  title,
  intro,
  primary = { label: "Réserver un premier cours", href: bookingHref },
  secondary = { label: "Nous contacter", href: "/contact" },
}: Props) {
  return (
    <Section tone="navy">
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro eyebrow={eyebrow} title={title} intro={intro} tone="light" />
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button href={primary.href} size="lg" variant="white" arrow>
            {primary.label}
          </Button>
          {secondary && (
            <Button href={secondary.href} size="lg" variant="outline-light">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
