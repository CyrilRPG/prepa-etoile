import type { Plan } from "@/lib/types";

export const plans: Plan[] = [
  {
    id: "suivi-trimestriel",
    label: "Suivi trimestriel",
    price: "225 €",
    unit: "/ mois",
    note: "3 mensualités, soit 675 € le trimestre",
    features: [
      "8 heures de cours par mois",
      "Groupes d'environ 8 élèves",
      "Engagement sur un trimestre",
      "Suivi pédagogique régulier",
    ],
    cta: "Choisir cette formule",
    href: "/reserver-un-cours",
  },
  {
    id: "stage-intensif",
    label: "Stage intensif",
    price: "285 €",
    unit: "/ stage",
    note: "5 jours, 10 heures de cours",
    badge: "Vacances scolaires",
    featured: true,
    features: [
      "Mathématiques, physique-chimie, français ou anglais",
      "Groupes d'environ 8 élèves",
      "En présentiel ou en visioconférence",
      "Bilan pédagogique en fin de stage",
    ],
    cta: "Réserver un stage",
    href: "/reserver-un-cours",
  },
  {
    id: "sur-devis",
    label: "Besoin spécifique",
    price: "Sur devis",
    note: "Une formule construite avec la famille",
    features: [
      "Volume horaire flexible",
      "Choix des matières",
      "Accompagnement ponctuel",
      "Échange préalable avec l'équipe",
    ],
    cta: "Demander un devis",
    href: "/contact",
  },
];
