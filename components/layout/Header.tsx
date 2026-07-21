"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { navigation, bookingHref } from "@/lib/data/navigation";
import { site } from "@/lib/data/site";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { NavDropdown } from "./NavDropdown";
import { MobileMenu } from "./MobileMenu";

/* ---------------------------------------------------------------------------
   Cotes relevées sur la maquette (référence 1622 px), voir reference/DESIGN.md :
     hauteur 88, filet bas 1 px
     étoile du logo    x 56..107  -> gouttière gauche 56
     bouton CTA        x 1327..1543 (217 × 50) -> gouttière droite 78
     liens de nav      capitale 11 (≈ 15.5 px), écart 36, ligne de base y≈47.5
--------------------------------------------------------------------------- */

export function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const linkClass =
    "text-ink transition-colors duration-200 hover:text-gold";

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-cream/95 backdrop-blur-none">
      {/* Barre large : reproduction au pixel de la maquette. */}
      <div className="pixel-scale hidden xl:block">
        {/* Le contenu de la maquette n'est pas centré sur la hauteur du header :
            étoile, capitales de la nav et bouton se centrent tous sur y≈41.5,
            pas sur 43.5. D'où le retrait bas de 4. */}
        <div
          className="flex items-center pl-[calc(56*var(--u))] pr-[calc(78*var(--u))] pb-[calc(4*var(--u))]"
          style={{ height: "calc(87*var(--u))" }}
        >
          <Link href="/" aria-label={`${site.name}, accueil`} className="shrink-0">
            <Logo className="text-[calc(13*var(--u))]" />
          </Link>

          <nav
            aria-label="Navigation principale"
            className="ml-auto flex items-center gap-[calc(36*var(--u))] text-[calc(15.5*var(--u))]"
          >
            {navigation.map((item) =>
              item.children ? (
                <NavDropdown
                  key={item.href}
                  item={item}
                  active={isActive(item.href)}
                  linkClass={linkClass}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    linkClass,
                    isActive(item.href) &&
                      "underline decoration-gold decoration-1 underline-offset-[0.42em]",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}

            <Button
              href={bookingHref}
              arrow
              className={cn(
                "ml-[calc(5*var(--u))] shrink-0",
                "h-[calc(50*var(--u))] w-[calc(217*var(--u))] px-0",
                "text-[calc(14.5*var(--u))] gap-[calc(10*var(--u))]",
              )}
            >
              Réserver un cours
            </Button>
          </nav>
        </div>
      </div>

      {/* Barre compacte. */}
      <div className="flex h-[72px] items-center justify-between gutter xl:hidden">
        <Link href="/" aria-label={`${site.name}, accueil`}>
          <Logo className="text-[10px]" />
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
