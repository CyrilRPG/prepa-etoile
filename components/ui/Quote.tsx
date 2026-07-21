import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  author?: string;
  role?: string;
  tone?: "dark" | "light";
  className?: string;
};

export function Quote({ children, author, role, tone = "dark", className }: Props) {
  const light = tone === "light";
  return (
    <figure className={cn("border-l border-gold pl-7", className)}>
      <blockquote
        className={cn(
          "font-serif text-[clamp(1.25rem,1rem+0.9vw,1.625rem)] leading-[1.45] text-balance",
          light ? "text-cream" : "text-navy",
        )}
      >
        {children}
      </blockquote>
      {author && (
        <figcaption
          className={cn(
            "mt-5 text-[0.875rem]",
            light ? "text-cream/60" : "text-ink-muted",
          )}
        >
          <span className="font-medium">{author}</span>
          {role && <span>, {role}</span>}
        </figcaption>
      )}
    </figure>
  );
}
