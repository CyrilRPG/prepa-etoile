import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { TextLink } from "@/components/ui/TextLink";
import { stageStats } from "@/lib/data/stats";

export function StagesSection() {
  return (
    <Section id="stages" tone="navy">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <SectionIntro
            tone="light"
            eyebrow="Stages de vacances"
            title="Reprendre les bases. Consolider les acquis. Repartir avec confiance."
            intro="Les vacances sont souvent le meilleur moment pour combler les lacunes sans la pression du rythme scolaire quotidien."
          />
          <TextLink href="/stages-intensifs" tone="light" className="mt-9">
            Découvrir les stages intensifs
          </TextLink>
        </div>

        <dl className="grid grid-cols-2 gap-px self-start bg-hairline-dark">
          {stageStats.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-navy px-6 py-8">
              <dt className="order-2 mt-2.5 text-[0.8125rem] text-cream/60">
                {stat.label}
              </dt>
              <dd className="order-1 font-serif text-[1.75rem] leading-none text-cream">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
