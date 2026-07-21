import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Quote } from "@/components/ui/Quote";
import { ValueGrid } from "@/components/sections/ValueGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Notre philosophie",
  description:
    "Depuis 2007, Prépa Étoile privilégie des groupes d'environ huit élèves : assez restreints pour permettre un véritable accompagnement, assez vivants pour l'émulation du collectif.",
};

export default function PhilosophiePage() {
  return (
    <>
      <PageHeader
        eyebrow="Notre philosophie"
        title="Parce qu'un élève ne progresse pas seulement en travaillant davantage."
        intro="Il progresse lorsqu'il comprend. Lorsqu'il ose poser ses questions. Lorsqu'il retrouve confiance en lui."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:gap-20">
          <SectionIntro
            eyebrow="Le format"
            title="Ni le cours particulier, ni la classe entière."
          />
          <div className="text-[1.0625rem] leading-relaxed text-ink-muted">
            <p>
              En cours particulier, l&apos;élève reçoit toute l&apos;attention du
              professeur, mais il travaille seul. Rien ne le confronte au
              raisonnement d&apos;un autre, rien ne l&apos;oblige à formuler ce
              qu&apos;il croit avoir compris.
            </p>
            <p className="mt-5">
              En classe entière, l&apos;émulation existe, mais la parole devient
              rare. Un élève discret peut traverser un trimestre sans jamais dire
              qu&apos;il n&apos;a pas compris.
            </p>
            <p className="mt-5">
              Le groupe d&apos;environ huit élèves se tient exactement entre les
              deux. Chacun a le temps de poser ses questions, et personne ne peut
              se cacher. C&apos;est le format que nous avons choisi il y a près de
              vingt ans, et que nous n&apos;avons pas changé depuis.
            </p>
            <Quote className="mt-10">
              « Assez petit pour être suivi. Assez collectif pour être stimulé. »
            </Quote>
          </div>
        </div>
      </Section>

      <Section tone="shade">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:gap-20">
          <SectionIntro
            eyebrow="Notre conviction"
            title="Comprendre avant de mémoriser."
          />
          <div className="text-[1.0625rem] leading-relaxed text-ink-muted">
            <p>
              Un élève qui apprend une formule sans savoir d&apos;où elle vient
              l&apos;oubliera après le contrôle. Un élève qui a compris comment
              elle se construit la retrouvera même s&apos;il l&apos;oublie.
            </p>
            <p className="mt-5">
              C&apos;est pour cela que nos séances ne commencent jamais par un
              exercice, mais par une notion reprise à sa racine. Le travail
              d&apos;entraînement vient ensuite, quand il peut enfin s&apos;appuyer
              sur quelque chose de solide.
            </p>
            <p className="mt-5">
              Ce détour paraît lent les premières semaines. Il fait gagner un
              trimestre entier sur l&apos;année.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <SectionIntro
          tone="light"
          eyebrow="Pourquoi Prépa Étoile"
          title="Les conditions qui permettent de progresser durablement."
        />
        <ValueGrid />
      </Section>

      <CtaBanner
        title="Venez voir à quoi ressemble un groupe de huit."
        intro="Le plus simple reste encore d'en parler. Nous prenons le temps d'échanger sur le niveau et les objectifs de votre enfant."
      />
    </>
  );
}
