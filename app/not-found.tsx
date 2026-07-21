import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionIntro";
import { navigation } from "@/lib/data/navigation";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section width="narrow" className="text-center">
      <Eyebrow>Erreur 404</Eyebrow>
      <h1 className="mt-5 text-[clamp(2rem,1.4rem+2.4vw,3rem)] leading-[1.1]">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-ink-muted">
        Le lien est peut-être ancien, ou l&apos;adresse comporte une erreur.
        Voici par où reprendre.
      </p>

      <div className="mt-10 flex justify-center">
        <Button href="/" size="lg" arrow>
          Retour à l&apos;accueil
        </Button>
      </div>

      <ul className="mx-auto mt-14 flex max-w-xl flex-wrap justify-center gap-x-7 gap-y-3 border-t border-hairline pt-10 text-[0.9375rem]">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-ink-muted transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
