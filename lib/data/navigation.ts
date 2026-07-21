import type { NavItem } from "@/lib/types";

/** Source unique du header, du menu mobile, du pied de page et du sitemap. */
export const navigation: NavItem[] = [
  { label: "Notre philosophie", href: "/notre-philosophie" },
  { label: "Notre méthode", href: "/notre-methode" },
  { label: "Nos matières", href: "/nos-matieres" },
  { label: "Stages intensifs", href: "/stages-intensifs" },
  { label: "Résultats", href: "/resultats" },
  {
    label: "Tarifs",
    href: "/tarifs",
    children: [
      { label: "Suivi trimestriel", href: "/tarifs#suivi-trimestriel", note: "225 € / mois" },
      { label: "Stage intensif", href: "/tarifs#stage-intensif", note: "285 € / stage" },
      { label: "Besoin spécifique", href: "/tarifs#sur-devis", note: "sur devis" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const bookingHref = "/reserver-un-cours";

export const allRoutes = [
  "/",
  ...navigation.map((item) => item.href),
  bookingHref,
];
