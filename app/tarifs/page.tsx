import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { PricingGrid } from "@/components/sections/PricingGrid";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Suivi trimestriel à 225 € par mois, stage intensif à 285 €, ou formule sur devis. Les tarifs de Prépa Étoile, en groupes d'environ 8 élèves.",
};

const tarifsFaq = [
  {
    q: "Y a-t-il des frais d'inscription ?",
    a: "Non. Le tarif annoncé est celui que vous payez, supports de cours compris.",
  },
  {
    q: "Comment se règle le suivi trimestriel ?",
    a: "En trois mensualités de 225 €, soit 675 € pour le trimestre. Le règlement peut être échelonné sur les trois mois.",
  },
  {
    q: "Que se passe-t-il si mon enfant manque une séance ?",
    a: "Prévenez-nous : selon les disponibilités, la séance peut être rattrapée avec un autre groupe du même niveau.",
  },
  {
    q: "Les cours ouvrent-ils droit à un avantage fiscal ?",
    a: "Les cours en petit groupe dispensés dans nos locaux ne relèvent pas du crédit d'impôt pour services à la personne, qui concerne les cours à domicile. Nous vous remettons une facture détaillée pour toute démarche.",
  },
  {
    q: "Peut-on commencer en cours d'année ?",
    a: "Oui, sous réserve de disponibilité. Le trimestre est alors calculé au prorata des séances restantes.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos formules"
        title="Un accompagnement adapté à chaque besoin."
        intro="Trois formules, un seul principe : des groupes d'environ huit élèves et aucun frais caché."
      />

      <Section>
        <PricingGrid />
      </Section>

      <Section tone="shade" width="narrow">
        <SectionIntro
          align="center"
          eyebrow="Questions sur les tarifs"
          title="Ce que les familles nous demandent."
        />
        <div className="mt-14">
          <Accordion items={tarifsFaq} />
        </div>
      </Section>

      <CtaBanner
        title="Un doute sur la formule la plus adaptée ?"
        intro="Décrivez-nous la situation de votre enfant : nous vous dirons franchement ce qui nous semble le plus utile, quitte à proposer moins d'heures."
      />
    </>
  );
}
