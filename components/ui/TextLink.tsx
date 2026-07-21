import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { IconArrowRight } from "./Icons";

type Props = {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

export function TextLink({ href, children, tone = "dark", className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 border-b pb-1 text-[0.9375rem] font-medium transition-colors",
        tone === "light"
          ? "border-cream/25 text-cream hover:border-gold-light hover:text-gold-light"
          : "border-gold/40 text-navy hover:border-gold hover:text-gold",
        className,
      )}
    >
      {children}
      <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
