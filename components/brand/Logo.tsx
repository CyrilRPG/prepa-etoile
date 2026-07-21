import { Star } from "./Star";
import { cn } from "@/lib/cn";

/* ---------------------------------------------------------------------------
   Verrouillage du logo, calé sur la maquette (référence 1622 px) :
     étoile        x 56..107, y 16..69      -> 52 × 54
     PRÉPA ÉTOILE  x 121..284, capitale 16, ligne de base y=45
     DEPUIS 2007   x 165..239, capitale 7,  ligne de base y=61, centré
   Les proportions sont exprimées en em pour que le verrouillage se mette à
   l'échelle d'un bloc : `text-[13px]` reproduit exactement la maquette.
--------------------------------------------------------------------------- */

type Props = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: Props) {
  const light = tone === "light";

  return (
    /* Le centrage flex aligne les boîtes de ligne, pas l'encre : sans ce
       rattrapage optique le verrouillage monte de 4.8 (relevé sur la maquette,
       étoile attendue en y 16..69). Exprimé en em pour rester proportionnel. */
    <span
      className={cn("inline-flex items-center gap-[1.077em]", className)}
      style={{ transform: "translateY(0.369em)" }}
    >
      <Star
        className="w-[4em] h-[4.154em] shrink-0"
        coreColor={light ? "#071F3D" : "#FDFAF4"}
      />
      <span className="flex flex-col items-center">
        <span
          className={cn(
            "font-serif font-medium leading-none",
            light ? "text-cream" : "text-navy",
          )}
          style={{ fontSize: "1.769em", letterSpacing: "0.018em" }}
        >
          PRÉPA ÉTOILE
        </span>
        <span
          className={cn(
            "font-sans font-medium uppercase leading-none",
            light ? "text-gold-light" : "text-gold",
          )}
          style={{
            fontSize: "0.769em",
            letterSpacing: "0.125em",
            marginTop: "0.55em",
            marginRight: "-0.125em",
          }}
        >
          Depuis 2007
        </span>
      </span>
    </span>
  );
}
