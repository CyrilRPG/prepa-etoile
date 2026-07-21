import { cn } from "@/lib/cn";
import type { Stat as StatType } from "@/lib/types";

type Props = {
  items: StatType[];
  tone?: "dark" | "light";
  className?: string;
};

/** Bandeau de chiffres. Un `placeholder` est signalé, jamais présenté comme un fait. */
export function StatRow({ items, tone = "dark", className }: Props) {
  const light = tone === "light";
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-px lg:grid-cols-4",
        light ? "bg-hairline-dark" : "bg-hairline",
        className,
      )}
    >
      {/* `dl > div` ne peut contenir que des dt/dd : le libellé est donc le dt
          lui-même, remis sous la valeur par l'ordre flex plutôt que par un p. */}
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "flex flex-col items-center gap-2 px-5 py-9 text-center",
            light ? "bg-navy" : "bg-cream",
          )}
        >
          <dt
            className={cn(
              "order-2 text-[0.8125rem]",
              light ? "text-cream/60" : "text-ink-muted",
            )}
          >
            {item.label}
          </dt>
          <dd
            className={cn(
              "order-1 font-serif leading-none",
              light ? "text-cream" : "text-navy",
              item.placeholder
                ? "border border-dashed border-gold px-2.5 py-1.5 font-sans text-[0.8125rem] whitespace-nowrap text-gold"
                : "text-[clamp(1.75rem,1.2rem+1.4vw,2.25rem)]",
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
