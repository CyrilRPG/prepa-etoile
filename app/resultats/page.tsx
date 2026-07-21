import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StatRow } from "@/components/ui/Stat";
import { Quote } from "@/components/ui/Quote";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  resultStats,
  factualStats,
  testimonials,
  hasPlaceholders,
} from "@/lib/data/results";

export const metadata: Metadata = {
  title: "Résultats",
  description:
    "Ce que la régularité en petit groupe produit chez nos élèves, du collège au lycée, depuis 2007.",
};

const signaux = [
  {
    title: "L'élève pose des questions",
    body: "C'est presque toujours le premier signe. Avant que les notes ne bougent, l'élève ose dire ce qu'il n'a pas compris. En groupe de huit, cela prend quelques semaines.",
  },
  {
    title: "Les erreurs changent de nature",
    body: "Les fautes d'inattention remplacent les blocages de fond. C'est un bien meilleur indicateur qu'une moyenne, et cela se voit dès les premières copies.",
  },
  {
    title: "Le travail devient autonome",
    body: "L'élève sait par où commencer devant un exercice inconnu. C'est l'objectif réel : qu'il puisse se passer de nous.",
  },
];

export default function ResultatsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Résultats"
        title="Ce que la régularité en petit groupe finit par produire."
        intro="Depuis 2007, notre travail se mesure moins à une moyenne qu'à ce qui change chez l'élève : la compréhension, l'autonomie et la confiance."
      />

      {hasPlaceholders && (
        <div className="border-b border-gold/40 bg-gold/[0.07]">
          <div className="mx-auto max-w-[var(--container-content)] gutter py-6">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold">
              À compléter avant la mise en ligne
            </p>
            <p className="mt-3 max-w-3xl text-[0.9375rem] leading-relaxed text-ink-muted">
              Les valeurs marquées <code className="text-gold">__À REMPLIR__</code>{" "}
              ci-dessous sont des espaces réservés : aucun chiffre de réussite
              n&apos;a été inventé. Renseignez vos vrais résultats et vos vrais
              témoignages dans{" "}
              <code className="text-navy">lib/data/results.ts</code>, puis retirez
              la mention <code className="text-navy">placeholder: true</code>. Cet
              encart disparaîtra automatiquement.
            </p>
            <p className="mt-3 max-w-3xl text-[0.9375rem] leading-relaxed text-ink-muted">
              Rappel : un taux de réussite affiché engage l&apos;établissement et
              doit pouvoir être justifié.
            </p>
          </div>
        </div>
      )}

      <Section>
        <SectionIntro
          eyebrow="Nos chiffres"
          title="Les résultats de nos élèves."
          intro="Taux de réussite et de mentions constatés sur nos effectifs."
        />
        <div className="mt-14">
          <StatRow items={resultStats} />
        </div>
      </Section>

      <Section tone="shade">
        <SectionIntro
          eyebrow="Ce qui est vérifiable"
          title="Ce que nous pouvons affirmer sans réserve."
          intro="Ces chiffres-là ne dépendent pas d'une cohorte : ils décrivent la maison."
        />
        <div className="mt-14">
          <StatRow items={factualStats} />
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Les signes qui comptent"
          title="Trois choses qui bougent avant les notes."
          intro="Une moyenne met un trimestre à réagir. Ces trois signaux, eux, apparaissent bien plus tôt et annoncent la suite."
        />
        <ol className="mt-16 grid gap-px bg-hairline lg:grid-cols-3">
          {signaux.map((item, i) => (
            <li key={item.title} className="bg-cream px-8 py-10">
              <span className="font-serif text-[0.9375rem] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[1.1875rem]">{item.title}</h3>
              <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="shade">
        <SectionIntro
          eyebrow="Témoignages"
          title="Ce que disent les familles."
        />
        <ul className="mt-16 grid gap-10 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <li key={i}>
              <Quote
                author={item.author}
                role={item.role}
                className={item.placeholder ? "border-dashed" : undefined}
              >
                {item.quote}
              </Quote>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title="Le meilleur résultat, c'est un élève qui n'a plus besoin de nous."
        intro="Parlons du niveau de votre enfant et de ce qu'il est réaliste de viser cette année."
      />
    </>
  );
}
