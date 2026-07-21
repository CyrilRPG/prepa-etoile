import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StatRow } from "@/components/ui/Stat";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { IconCheck } from "@/components/ui/Icons";
import { stageStats } from "@/lib/data/stats";
import { subjects } from "@/lib/data/subjects";
import { bookingHref } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Stages intensifs",
  description:
    "Cinq jours, dix heures de cours, environ 8 élèves par groupe. Les stages de vacances de Prépa Étoile pour reprendre les bases et consolider les acquis. 285 € TTC, supports inclus.",
};

const deroule = [
  {
    day: "Jour 1",
    title: "Faire le point",
    body: "Un diagnostic rapide pour situer chaque élève et cibler ce qui doit être repris en priorité.",
  },
  {
    day: "Jours 2 à 4",
    title: "Reprendre et travailler",
    body: "Les notions clés du programme sont revues puis mises en pratique sur des exercices progressifs.",
  },
  {
    day: "Jour 5",
    title: "Vérifier et repartir",
    body: "Un travail de synthèse, puis un bilan écrit remis à la famille avec les points acquis et ceux à entretenir.",
  },
];

const inclus = [
  "10 heures de cours réparties sur 5 jours",
  "Groupes d'environ 8 élèves",
  "Tous les supports et polycopiés fournis",
  "En présentiel dans le 15e ou en visioconférence",
  "Bilan pédagogique écrit en fin de stage",
];

export default function StagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stages de vacances"
        title="Reprendre les bases. Consolider les acquis. Repartir avec confiance."
        intro="Les vacances sont souvent le meilleur moment pour combler les lacunes sans la pression du rythme scolaire quotidien."
      />

      <Section>
        <StatRow items={stageStats} />
      </Section>

      <Section tone="shade">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
          <SectionIntro
            eyebrow="Le déroulé"
            title="Cinq jours qui suivent une trajectoire."
            intro="Un stage n'est pas une semaine de cours en accéléré. C'est une remise à niveau qui suit un fil du premier au dernier jour."
          />
          <ol className="border-t border-hairline">
            {deroule.map((item) => (
              <li key={item.day} className="border-b border-hairline py-7">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-gold">
                  {item.day}
                </p>
                <h3 className="mt-3 text-[1.1875rem]">{item.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionIntro
              eyebrow="Ce qui est compris"
              title="285 € TTC le stage, tout inclus."
              intro="Aucun supplément : les supports de cours et le bilan de fin de stage sont compris dans le tarif."
            />
            <ul className="mt-9 space-y-3.5 border-t border-hairline pt-8">
              {inclus.map((item) => (
                <li key={item} className="flex gap-3.5 text-[0.9375rem]">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-hairline bg-cream-shade p-8 md:p-10">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold">
              Matières proposées
            </p>
            <ul className="mt-7 space-y-px">
              {subjects.map((subject) => (
                <li
                  key={subject.slug}
                  className="flex items-baseline gap-4 border-b border-hairline py-4 last:border-b-0"
                >
                  <span className="font-serif text-[0.8125rem] text-gold">
                    {subject.index}
                  </span>
                  <span className="font-serif text-[1.1875rem] text-navy">
                    {subject.name}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[0.875rem] leading-relaxed text-ink-muted">
              Un stage porte sur une seule matière, afin d&apos;y consacrer les dix
              heures entières.
            </p>
            <Button href={bookingHref} size="lg" arrow className="mt-8 w-full">
              Réserver un stage
            </Button>
          </div>
        </div>
      </Section>

      <CtaBanner
        eyebrow="Prochaines vacances"
        title="Les places partent vite, les groupes sont à huit."
        intro="Contactez-nous pour connaître les dates des prochains stages et réserver la place de votre enfant."
        primary={{ label: "Réserver un stage", href: bookingHref }}
      />
    </>
  );
}
