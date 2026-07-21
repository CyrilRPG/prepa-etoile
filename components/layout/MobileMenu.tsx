"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { navigation, bookingHref } from "@/lib/data/navigation";
import { site } from "@/lib/data/site";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  /* Refermer à la navigation. Ajustement pendant le rendu plutôt que dans un
     effet : un setState dans un effet déclencherait un rendu en cascade. */
  const [openedAt, setOpenedAt] = useState(pathname);
  if (openedAt !== pathname) {
    setOpenedAt(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;

      /* Piège à focus : le panneau couvre l'écran, la tabulation ne doit pas
         partir dans la page en dessous. */
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-[7px] xl:hidden"
      >
        <span
          className={cn(
            "block h-px w-6 bg-navy transition-transform duration-200",
            open && "translate-y-[4px] rotate-45",
          )}
        />
        <span
          className={cn(
            "block h-px w-6 bg-navy transition-transform duration-200",
            open && "-translate-y-[4px] -rotate-45",
          )}
        />
      </button>

      <div
        id="menu-mobile"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-0 z-[60] flex flex-col bg-cream xl:hidden"
      >
        <div className="flex h-[72px] shrink-0 items-center gutter">
          <Link href="/" aria-label={`${site.name}, accueil`}>
            <Logo className="text-[10px]" />
          </Link>
        </div>

        <nav
          aria-label="Navigation principale"
          className="flex-1 overflow-y-auto gutter pb-10"
        >
          <ul className="border-t border-hairline">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="border-b border-hairline">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between py-4 font-serif text-xl",
                      active ? "text-gold" : "text-navy",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="pb-4 -mt-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="flex items-baseline justify-between gap-4 py-1.5 text-[0.9375rem] text-ink-muted"
                          >
                            <span>{child.label}</span>
                            {child.note && (
                              <span className="text-ink-soft">{child.note}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <Button href={bookingHref} size="lg" arrow>
              Réserver un cours
            </Button>
            <a
              href={site.phone.href}
              className="py-2 text-center text-[0.9375rem] text-ink-muted"
            >
              {site.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
