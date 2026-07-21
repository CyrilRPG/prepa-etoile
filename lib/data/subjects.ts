import type { Subject } from "@/lib/types";

export const subjects: Subject[] = [
  {
    index: "01",
    slug: "mathematiques",
    name: "Mathématiques",
    blurb:
      "Développer le raisonnement, maîtriser les méthodes et reprendre confiance face aux exercices.",
    image: "/images/cours-mathematiques.webp",
    alt: "Cours de mathématiques en petit groupe",
    points: [
      "Calcul, fonctions, géométrie et probabilités",
      "Méthodes de rédaction et de démonstration",
      "Préparation au brevet et au baccalauréat",
    ],
  },
  {
    index: "02",
    slug: "physique-chimie",
    name: "Physique-Chimie",
    blurb:
      "Comprendre les phénomènes, maîtriser les raisonnements scientifiques et progresser avec rigueur.",
    image: "/images/cours-physique-chimie.webp",
    alt: "Cours de physique-chimie avec un professeur et un élève",
    points: [
      "Mécanique, énergie, ondes et électricité",
      "Chimie des solutions et transformations",
      "Analyse d'expériences et exploitation de résultats",
    ],
  },
  {
    index: "03",
    slug: "francais",
    name: "Français",
    blurb:
      "Renforcer l'expression écrite et orale, consolider la grammaire et préparer efficacement les examens.",
    image: "/images/cours-francais.webp",
    alt: "Professeure expliquant le passé composé au tableau",
    points: [
      "Grammaire, orthographe et conjugaison",
      "Commentaire, dissertation et écriture d'invention",
      "Préparation aux épreuves écrites et orales",
    ],
  },
  {
    index: "04",
    slug: "anglais",
    name: "Anglais",
    blurb:
      "Développer l'aisance à l'oral, enrichir le vocabulaire et consolider les bases grammaticales.",
    image: "/images/cours-anglais.webp",
    alt: "Cours d'anglais en groupe avec une enseignante",
    points: [
      "Prise de parole et compréhension orale",
      "Vocabulaire thématique et grammaire",
      "Entraînement aux épreuves du brevet et du bac",
    ],
  },
];
