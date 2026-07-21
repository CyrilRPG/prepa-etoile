import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Accordion } from "@/components/ui/Accordion";
import { faq } from "@/lib/data/faq";

export function FaqSection() {
  return (
    <Section width="narrow">
      <SectionIntro
        align="center"
        eyebrow="Questions fréquentes"
        title="Tout ce que vous devez savoir."
      />
      <div className="mt-14">
        <Accordion items={faq} />
      </div>
    </Section>
  );
}
