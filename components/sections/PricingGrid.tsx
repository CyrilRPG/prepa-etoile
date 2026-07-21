import { cn } from "@/lib/cn";
import { plans } from "@/lib/data/pricing";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/Icons";

export function PricingGrid() {
  return (
    <div className="mt-16 grid items-start gap-8 lg:grid-cols-3">
      {plans.map((plan) => {
        const featured = plan.featured;
        return (
          <article
            key={plan.id}
            id={plan.id}
            className={cn(
              "flex h-full flex-col border p-8 md:p-10 scroll-mt-28",
              featured
                ? "border-navy bg-navy text-cream/70"
                : "border-hairline bg-cream",
            )}
          >
            {plan.badge && (
              <p className="mb-6 self-start border border-gold-light/40 px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-gold-light">
                {plan.badge}
              </p>
            )}

            <p
              className={cn(
                "text-[0.6875rem] font-medium uppercase tracking-[0.18em]",
                featured ? "text-gold-light" : "text-gold",
              )}
            >
              {plan.label}
            </p>

            <p className="mt-5 flex items-baseline gap-2">
              <span
                className={cn(
                  "font-serif text-[2.5rem] leading-none",
                  featured ? "text-cream" : "text-navy",
                )}
              >
                {plan.price}
              </span>
              {plan.unit && (
                <span
                  className={cn(
                    "text-[0.9375rem]",
                    featured ? "text-cream/60" : "text-ink-muted",
                  )}
                >
                  {plan.unit}
                </span>
              )}
            </p>

            <p
              className={cn(
                "mt-3 text-[0.875rem]",
                featured ? "text-cream/60" : "text-ink-muted",
              )}
            >
              {plan.note}
            </p>

            <ul
              className={cn(
                "mt-8 flex-1 space-y-3.5 border-t pt-8 text-[0.9375rem]",
                featured ? "border-hairline-dark" : "border-hairline",
              )}
            >
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3.5">
                  <IconCheck
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      featured ? "text-gold-light" : "text-gold",
                    )}
                  />
                  <span className={featured ? "text-cream/75" : "text-ink-muted"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              href={plan.href}
              size="lg"
              variant={featured ? "white" : "secondary"}
              className="mt-9 w-full"
            >
              {plan.cta}
            </Button>
          </article>
        );
      })}
    </div>
  );
}
