import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { navigation } from "@/lib/data/navigation";
import { subjects } from "@/lib/data/subjects";
import { site } from "@/lib/data/site";

const currentYear = 2026;

export function Footer() {
  const columns = navigation.filter((item) => item.label !== "Contact");

  return (
    <footer className="border-t border-hairline-dark bg-navy text-cream/70">
      <div className="mx-auto max-w-[var(--container-content)] gutter py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="light" className="text-[11px]" />
            <p className="mt-6 text-[0.9375rem] leading-relaxed">
              Depuis 2007, accompagner les collégiens et les lycéens vers la
              réussite avec méthode, régularité et confiance.
            </p>
          </div>

          <div>
            <p className="font-medium text-cream">Navigation</p>
            <ul className="mt-5 space-y-2.5 text-[0.9375rem]">
              {columns.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-cream">Matières</p>
            <ul className="mt-5 space-y-2.5 text-[0.9375rem]">
              {subjects.map((subject) => (
                <li key={subject.slug}>
                  <Link
                    href={`/nos-matieres#${subject.slug}`}
                    className="transition-colors hover:text-gold-light"
                  >
                    {subject.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-cream">Contact</p>
            <ul className="mt-5 space-y-2.5 text-[0.9375rem]">
              <li>
                <a
                  href={site.phone.href}
                  className="transition-colors hover:text-gold-light"
                >
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.address.short}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-hairline-dark pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {site.foundingYear}-{currentYear} {site.name}. Tous droits réservés.
          </span>
          {/* TODO (obligation légale) : créer les pages Mentions légales et
              Confidentialité (raison sociale, SIRET, hébergeur, directeur de
              publication, traitement des données du formulaire), puis
              transformer ces deux libellés en liens. */}
          <span className="flex items-center gap-2">
            <span>Mentions légales</span>
            <span aria-hidden="true" className="text-cream/30">·</span>
            <span>Confidentialité</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
