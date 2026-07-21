export const site = {
  name: "Prépa Étoile",
  tagline: "Cours en petits groupes depuis 2007",
  foundingYear: 2007,
  phone: { href: "tel:+33147343571", display: "01 47 34 35 71" },
  email: "contact@prepa-etoile.fr",
  address: {
    street: "3 rue Rosa Bonheur",
    postalCode: "75015",
    city: "Paris",
    display: "3 rue Rosa Bonheur, 75015 Paris",
    short: "Paris 15e",
  },
  videoId: "cPWQZW8N298",
  groupSize: "environ 8 élèves",
  /* Domaine canonique, utilisé par le sitemap, les URL canoniques et OpenGraph.
     Ordre de résolution :
       1. NEXT_PUBLIC_SITE_URL, à définir dans Vercel une fois le vrai domaine
          branché (Settings > Environment Variables) ;
       2. l'URL de production Vercel, pour que les déploiements avant achat du
          domaine s'annoncent sous leur propre adresse et non sous une adresse
          qui n'existe pas encore ;
       3. le domaine cible, valeur de repli en local. */
  url: siteUrl(),
} as const;

function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "https://www.prepa-etoile.fr";
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  foundingDate: String(site.foundingYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: "FR",
  },
  telephone: "+33147343571",
  email: site.email,
};
