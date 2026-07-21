import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ContactDetails } from "@/components/sections/ContactSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Prépa Étoile, 3 rue Rosa Bonheur, 75015 Paris. Téléphone 01 47 34 35 71, contact@prepa-etoile.fr.",
};

/* TODO : horaires À VÉRIFIER. Ils ne figuraient pas dans la maquette d'origine
   et sont ici de simples valeurs d'attente. Corrigez-les avant la mise en ligne,
   ou supprimez le bloc « Horaires du secrétariat » ci-dessous. */
const horaires = [
  { d: "Lundi au vendredi", h: "14h00 à 20h00" },
  { d: "Samedi", h: "9h00 à 18h00" },
  { d: "Dimanche", h: "Fermé" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons du niveau de votre enfant."
        intro="Un appel de dix minutes suffit souvent à y voir clair. Nous vous orienterons vers le groupe le plus adapté, ou vous dirons si nous ne sommes pas la bonne solution."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          <div>
            <SectionIntro eyebrow="Nous joindre" title="Le centre" />

            <div className="mt-10 border-t border-hairline pt-10">
              <ContactDetails />
            </div>

            <div className="mt-10 border-t border-hairline pt-10">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold">
                Horaires du secrétariat
              </p>
              <dl className="mt-6 space-y-3.5 text-[0.9375rem]">
                {horaires.map((item) => (
                  <div key={item.d} className="flex justify-between gap-6">
                    <dt className="text-ink-muted">{item.d}</dt>
                    <dd className="text-navy">{item.h}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 border-t border-hairline pt-10">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold">
                Venir au centre
              </p>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-ink-muted">
                Le centre se trouve au {site.address.display}, dans un secteur
                calme du 15e arrondissement, accessible en métro et en bus.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=3+rue+Rosa+Bonheur+75015+Paris"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-block border-b border-gold/40 pb-1 text-[0.9375rem] font-medium text-navy transition-colors hover:border-gold hover:text-gold"
              >
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Écrire"
              title="Être rappelé"
              intro="Laissez-nous quelques informations : nous revenons vers vous rapidement."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <FaqSection />
    </>
  );
}
