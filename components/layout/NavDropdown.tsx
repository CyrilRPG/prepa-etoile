"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/lib/types";
import { IconChevronDown } from "@/components/ui/Icons";

type Props = {
  item: NavItem;
  active: boolean;
  linkClass: string;
};

export function NavDropdown({ item, active, linkClass }: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  /* Fermeture au clic extérieur et à Échap : le survol seul ne suffit pas,
     le panneau doit aussi se piloter au clavier. */
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        wrapRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        href={item.href}
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(linkClass, "inline-flex items-center gap-[0.3em]")}
      >
        <span className={cn(active && "underline decoration-gold decoration-1 underline-offset-[0.42em]")}>
          {item.label}
        </span>
        <IconChevronDown
          className={cn(
            "w-[0.72em] h-[0.72em] shrink-0 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </Link>

      <div
        id={panelId}
        hidden={!open}
        className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-[calc(21*var(--u))]"
      >
        <ul className="min-w-[calc(240*var(--u))] border border-hairline bg-cream py-[calc(8*var(--u))]">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between gap-[calc(20*var(--u))] px-[calc(20*var(--u))] py-[calc(10*var(--u))] transition-colors hover:bg-cream-shade"
              >
                <span className="text-ink">{child.label}</span>
                {child.note && (
                  <span className="text-[0.85em] text-ink-soft">{child.note}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
