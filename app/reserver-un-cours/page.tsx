import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { BookingForm } from "@/components/forms/BookingForm";
import { ContactDetails } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Réserver un cours",
  description:
    "Réservez un premier cours en petit groupe chez Prépa Étoile. Mathématiques, physique-chimie, français ou anglais, du collège au lycée.",
};

const etapes = [
  {
    title: "Vous nous écrivez",
    body: "Le formulaire ci-contre, un appel ou un courriel. Dites-nous simplement où en est votre enfant.",
  },
  {
    title: "Nous en parlons",
    body: "Un échange de quelques minutes pour situer son niveau, ses difficultés et ce qu'il vise cette année.",
  },
  {
    title: "Il rejoint un groupe",
    body: "Nous lui proposons le groupe le plus adapté parmi ceux qui ont encore de la place, et il commence.",
  },
];

export default function ReserverPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réserver un cours"
        title="La première séance décide souvent du reste de l'année."
        intro="Dites-nous où en est votre enfant. Nous vous rappelons pour convenir du groupe qui lui convient, et nous vous le dirons franchement si nous ne sommes pas la bonne solution."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1fr] lg:gap-20">
          <div>
            <SectionIntro eyebrow="Comment ça se passe" title="Trois étapes." />

            <ol className="mt-10 border-t border-hairline">
              {etapes.map((etape, i) => (
                <li key={etape.title} className="border-b border-hairline py-7">
                  <span className="font-serif text-[0.8125rem] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[1.1875rem]">{etape.title}</h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {etape.body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold">
                Ou directement
              </p>
              <div className="mt-6">
                <ContactDetails />
              </div>
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Votre demande"
              title="Parlez-nous de votre enfant"
              intro="Plus vous nous en dites, plus notre réponse sera utile."
            />
            <div className="mt-10">
              <BookingForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
