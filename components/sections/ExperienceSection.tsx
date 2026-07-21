import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { TextLink } from "@/components/ui/TextLink";

export function ExperienceSection() {
  return (
    <Section width="wide">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* TODO : remplacer par une vraie photo des locaux du 15e. En attendant,
            la photo de cours est recadrée sur la salle. */}
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-shade">
          <Image
            src="/images/cours-mathematiques.webp"
            alt="Salle de cours lumineuse du centre Prépa Étoile"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover object-[30%_35%]"
          />
        </div>

        <div>
          <SectionIntro
            eyebrow="Notre environnement"
            title="Un cadre pensé pour la concentration et la réussite."
            intro={
              <>
                <p>
                  Nos locaux, situés dans le 15e arrondissement de Paris, offrent
                  un environnement calme, studieux et chaleureux.
                </p>
                <p className="mt-4">
                  Chaque salle favorise les échanges en petit groupe tout en
                  permettant à chaque élève de travailler dans les meilleures
                  conditions.
                </p>
              </>
            }
          />
          <TextLink href="/contact" className="mt-9">
            Venir découvrir le centre
          </TextLink>
        </div>
      </div>
    </Section>
  );
}
