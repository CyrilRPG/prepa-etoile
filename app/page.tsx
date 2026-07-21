import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StatRow } from "@/components/ui/Stat";
import { Quote } from "@/components/ui/Quote";
import { TextLink } from "@/components/ui/TextLink";
import { ValueGrid } from "@/components/sections/ValueGrid";
import { MethodSteps } from "@/components/sections/MethodSteps";
import { SubjectGrid } from "@/components/sections/SubjectGrid";
import { VideoSection } from "@/components/sections/VideoSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { StagesSection } from "@/components/sections/StagesSection";
import { PricingGrid } from "@/components/sections/PricingGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { homeStats } from "@/lib/data/stats";

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="border-y border-hairline bg-cream">
        <div className="mx-auto max-w-[var(--container-content)] gutter">
          <StatRow items={homeStats} />
        </div>
      </div>

      <Section id="philosophie">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:gap-20">
          <SectionIntro
            eyebrow="Notre philosophie"
            title="Parce qu'un élève ne progresse pas seulement en travaillant davantage."
          />
          <div>
            <p className="text-[1.125rem] leading-relaxed text-ink-muted">
              Il progresse lorsqu&apos;il comprend. Lorsqu&apos;il ose poser ses
              questions. Lorsqu&apos;il retrouve confiance en lui.
            </p>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-muted">
              Depuis 2007, Prépa Étoile privilégie des groupes d&apos;environ huit
              élèves : assez restreints pour permettre un véritable
              accompagnement, assez vivants pour bénéficier de l&apos;émulation du
              collectif.
            </p>
            <Quote className="mt-10">
              « Assez petit pour être suivi. Assez collectif pour être stimulé. »
            </Quote>
            <TextLink href="/notre-philosophie" className="mt-10">
              Lire notre philosophie
            </TextLink>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <SectionIntro
          tone="light"
          eyebrow="Pourquoi Prépa Étoile"
          title="Les conditions qui permettent de progresser durablement."
        />
        <ValueGrid />
      </Section>

      <Section id="methode">
        <SectionIntro
          align="center"
          eyebrow="Notre méthode"
          title="Comprendre. S'entraîner. Corriger. Progresser. Réussir."
          intro="Chaque séance suit une progression claire afin de transformer les difficultés en connaissances solides, puis les connaissances en confiance."
        />
        <MethodSteps />
        <div className="mt-14 flex justify-center">
          <TextLink href="/notre-methode">Voir la méthode en détail</TextLink>
        </div>
      </Section>

      <VideoSection />

      <Section id="matieres">
        <SectionIntro
          eyebrow="Nos matières"
          title="Quatre matières essentielles."
          intro="Du collège au lycée, nos cours suivent les programmes officiels et préparent aux contrôles, au brevet et au baccalauréat."
        />
        <SubjectGrid />
      </Section>

      <ExperienceSection />
      <StagesSection />

      <Section id="tarifs" tone="shade">
        <SectionIntro
          align="center"
          eyebrow="Nos formules"
          title="Un accompagnement adapté à chaque besoin."
        />
        <PricingGrid />
        <p className="mt-10 text-center text-[0.875rem] text-ink-muted">
          Besoin d&apos;y voir plus clair ?{" "}
          <Link
            href="/tarifs"
            className="border-b border-gold/40 text-navy transition-colors hover:border-gold hover:text-gold"
          >
            Comparer les formules en détail
          </Link>
        </p>
      </Section>

      <FaqSection />
      <ContactSection />
    </>
  );
}
