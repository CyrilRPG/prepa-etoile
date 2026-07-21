import type { FaqItem } from "@/lib/types";

/** <details> natifs : ouverture au clavier et recherche dans la page, zéro JS. */
export function Accordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-hairline">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-hairline">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 font-serif text-[1.1875rem] text-navy">
            {item.q}
            <span
              aria-hidden="true"
              className="relative h-3 w-3 shrink-0 text-gold"
            >
              <span className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-current" />
              <span className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 rotate-90 bg-current transition-transform duration-200 group-open:rotate-0" />
            </span>
          </summary>
          <p className="max-w-2xl pb-7 text-[1.0625rem] leading-relaxed text-ink-muted">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
