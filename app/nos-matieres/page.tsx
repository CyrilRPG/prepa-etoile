import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { IconCheck } from "@/components/ui/Icons";
import { subjects } from "@/lib/data/subjects";
import { bookingHref } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Nos matières",
  description:
    "Mathématiques, physique-chimie, français et anglais. Du collège au lycée, nos cours suivent les programmes officiels et préparent au brevet et au baccalauréat.",
};

export default function MatieresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos matières"
        title="Quatre matières essentielles."
        intro="Du collège au lycée, nos cours suivent les programmes officiels et préparent aux contrôles, au brevet et au baccalauréat."
      />

      <Section width="wide">
        <ul className="space-y-(--spacing-section)">
          {subjects.map((subject, i) => (
            <li
              key={subject.slug}
              id={subject.slug}
              className="grid items-center gap-12 scroll-mt-28 lg:grid-cols-2 lg:gap-20"
            >
              <div
                className={
                  i % 2 === 1
                    ? "relative aspect-[4/3] overflow-hidden bg-cream-shade lg:order-last"
                    : "relative aspect-[4/3] overflow-hidden bg-cream-shade"
                }
              >
                <Image
                  src={subject.image}
                  alt={subject.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div>
                <SectionIntro
                  eyebrow={`Matière ${subject.index}`}
                  title={subject.name}
                  intro={subject.blurb}
                />
                <ul className="mt-9 space-y-3.5 border-t border-hairline pt-8">
                  {subject.points.map((point) => (
                    <li key={point} className="flex gap-3.5 text-[0.9375rem]">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className="text-ink-muted">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={bookingHref}
                  variant="secondary"
                  size="lg"
                  arrow
                  className="mt-9"
                >
                  Réserver un cours de {subject.name.toLowerCase()}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="shade" width="narrow">
        <SectionIntro
          align="center"
          eyebrow="Bon à savoir"
          title="Une matière, ou plusieurs."
          intro="Un élève peut suivre une seule matière ou en combiner plusieurs. Nous construisons l'emploi du temps avec vous, en fonction de son niveau et de ses priorités de l'année."
        />
      </Section>

      <CtaBanner
        title="Quelle matière pose le plus de difficultés ?"
        intro="Dites-nous où en est votre enfant : nous vous orienterons vers le groupe et la matière les plus utiles pour lui."
      />
    </>
  );
}
