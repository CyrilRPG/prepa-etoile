import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { IconArrowRight } from "./Icons";

type Variant = "primary" | "secondary" | "white" | "outline-light" | "ghost";
type Size = "md" | "lg";

/* Un variant par apparence, jamais de surcharge via className : sans
   tailwind-merge, `className="bg-transparent"` ne l'emporte pas sur le
   `bg-navy` du variant (c'est l'ordre dans la feuille CSS qui tranche, pas
   celui de la chaîne). */
const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-cream border border-navy hover:bg-navy-soft hover:border-navy-soft",
  secondary:
    "bg-transparent text-navy border border-gold/45 hover:border-gold hover:bg-gold/[0.06]",
  white:
    "bg-cream text-navy border border-cream hover:bg-white hover:border-white",
  "outline-light":
    "bg-transparent text-cream border border-cream/35 hover:border-gold-light hover:text-gold-light",
  ghost:
    "bg-transparent text-navy border border-transparent hover:text-gold px-0",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-[3.3125rem] px-8 text-[0.9375rem]",
};

type Props = {
  variant?: Variant;
  size?: Size | "none";
  href?: string;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  arrow = false,
  className,
  children,
  ...rest
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-[2px] font-medium",
    "transition-colors duration-200",
    variants[variant],
    size !== "none" && sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {arrow && <IconArrowRight className="w-[1.05em] h-[1.05em] shrink-0" />}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (external) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
