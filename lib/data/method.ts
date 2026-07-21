import type { MethodStep } from "@/lib/types";

export const methodSteps: MethodStep[] = [
  {
    index: "01",
    title: "Comprendre",
    body: "Reprendre les notions en profondeur et identifier les points fragiles.",
    detail:
      "Chaque séance commence par les questions des élèves. La notion est reprise à sa racine, jusqu'à ce que le mécanisme soit clair pour chacun.",
  },
  {
    index: "02",
    title: "S'entraîner",
    body: "Travailler sur des exercices progressifs et ciblés.",
    detail:
      "Les exercices montent en difficulté par paliers. L'élève travaille seul, le professeur circule et intervient au moment où le blocage apparaît.",
  },
  {
    index: "03",
    title: "Corriger",
    body: "Analyser les erreurs et acquérir les bons réflexes.",
    detail:
      "L'erreur est expliquée plutôt que barrée. On remonte à sa cause pour qu'elle ne se reproduise pas, et on note le réflexe à retenir.",
  },
  {
    index: "04",
    title: "Progresser",
    body: "Consolider durablement les acquis grâce à la régularité.",
    detail:
      "Les notions travaillées reviennent quelques séances plus tard. Ce retour espacé transforme la compréhension du moment en acquis durable.",
  },
  {
    index: "05",
    title: "Réussir",
    body: "Retrouver autonomie, confiance et maîtrise.",
    detail:
      "L'élève sait quoi faire devant un exercice inconnu. C'est à ce moment que les notes suivent, et que l'envie revient.",
  },
];
