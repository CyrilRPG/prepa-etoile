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
  /* TODO: remplacer par le domaine définitif avant mise en ligne. */
  url: "https://www.prepa-etoile.fr",
} as const;

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
