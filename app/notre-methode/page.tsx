import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { MethodSteps } from "@/components/sections/MethodSteps";
import { VideoSection } from "@/components/sections/VideoSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Notre méthode",
  description:
    "Comprendre, s'entraîner, corriger, progresser, réussir : chaque séance suit une progression claire qui transforme les difficultés en connaissances solides.",
};

const seance = [
  {
    time: "Les 20 premières minutes",
    body: "Les questions des élèves. Ce qui n'a pas été compris en classe, ce qui a bloqué dans les devoirs. C'est ce qui détermine la suite de la séance.",
  },
  {
    time: "Le cœur de la séance",
    body: "La notion est reprise, puis travaillée sur des exercices qui montent en difficulté. Le professeur circule et intervient au moment du blocage, pas après.",
  },
  {
    time: "La fin de séance",
    body: "Les erreurs sont reprises collectivement. Chaque élève repart avec le réflexe à retenir et le travail à faire d'ici la prochaine fois.",
  },
];

export default function MethodePage() {
  return (
    <>
      <PageHeader
        eyebrow="Notre méthode"
        title="Comprendre. S'entraîner. Corriger. Progresser. Réussir."
        intro="Chaque séance suit une progression claire afin de transformer les difficultés en connaissances solides, puis les connaissances en confiance."
      />

      <Section>
        <SectionIntro
          eyebrow="Les cinq temps"
          title="Une progression que l'élève finit par mener seul."
          intro="Ces cinq étapes ne sont pas un slogan : c'est le déroulé réel de nos séances, dans cet ordre, semaine après semaine."
        />
        <MethodSteps detailed />
      </Section>

      <Section tone="shade">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
          <SectionIntro
            eyebrow="Une séance type"
            title="Deux heures, huit élèves, un professeur."
            intro="Nos séances durent deux heures. Voici comment elles s'organisent."
          />
          <ol className="border-t border-hairline">
            {seance.map((item) => (
              <li key={item.time} className="border-b border-hairline py-7">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-gold">
                  {item.time}
                </p>
                <p className="mt-3.5 text-[1.0625rem] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <VideoSection />

      <CtaBanner
        title="La meilleure façon de juger une méthode, c'est de la voir à l'œuvre."
        intro="Réservez un premier cours : votre enfant rejoint un groupe adapté à son niveau et vous en reparlez ensuite avec nous."
      />
    </>
  );
}
