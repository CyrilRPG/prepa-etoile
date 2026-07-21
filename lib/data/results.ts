import type { Stat } from "@/lib/types";

/* ---------------------------------------------------------------------------
   ATTENTION : ces chiffres sont des ESPACES RÉSERVÉS, pas des données réelles.
   Aucune de ces valeurs n'a été vérifiée. Elles s'affichent avec un liseré
   d'avertissement tant que `placeholder` vaut true.

   Avant la mise en ligne : remplacer chaque `value` par le chiffre réel et
   supprimer la ligne `placeholder: true`. L'encart d'alerte de la page
   /resultats disparaît automatiquement quand plus aucun placeholder ne reste.
--------------------------------------------------------------------------- */
export const resultStats: Stat[] = [
  { value: "__À REMPLIR__", label: "de réussite au baccalauréat", placeholder: true },
  { value: "__À REMPLIR__", label: "de mentions bien ou très bien", placeholder: true },
  { value: "__À REMPLIR__", label: "de réussite au brevet", placeholder: true },
  { value: "__À REMPLIR__", label: "d'élèves en progression sur l'année", placeholder: true },
];

/** Chiffres vérifiables, tirés de l'histoire de l'établissement. */
export const factualStats: Stat[] = [
  { value: "2007", label: "année de création" },
  { value: "≈ 8", label: "élèves par groupe" },
  { value: "4", label: "matières fondamentales" },
  { value: "18 ans", label: "au contact des familles" },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  placeholder?: boolean;
};

/* Gabarits à remplacer par de véritables témoignages recueillis auprès des familles. */
export const testimonials: Testimonial[] = [
  {
    quote: "__À REMPLIR__ : témoignage d'un parent sur la progression constatée.",
    author: "__Prénom, initiale du nom__",
    role: "parent d'élève de Terminale",
    placeholder: true,
  },
  {
    quote: "__À REMPLIR__ : témoignage d'un élève sur le format en petit groupe.",
    author: "__Prénom, initiale du nom__",
    role: "élève de Première",
    placeholder: true,
  },
  {
    quote: "__À REMPLIR__ : témoignage sur un stage intensif de vacances.",
    author: "__Prénom, initiale du nom__",
    role: "parent d'élève de Troisième",
    placeholder: true,
  },
];

export const hasPlaceholders =
  resultStats.some((s) => s.placeholder) || testimonials.some((t) => t.placeholder);
