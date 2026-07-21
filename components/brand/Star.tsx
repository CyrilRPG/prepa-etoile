import { useId } from "react";

/* ---------------------------------------------------------------------------
   Étoile à 16 branches de Prépa Étoile, redessinée d'après public/images/logo.png.
   Relevé sur l'original (bbox 424 × 413, centre 360.5/379) :
     rayons cardinaux    r ≈ 208   (100 %)
     rayons diagonaux    r ≈ 180   (86.5 %)
     aigrettes fines     r ≈ 65    (31 %) à 22.5° des cardinaux
     disque central      r ≈ 28    (13.5 %)
     or : #E1C6A0 près du centre, #C58F4E aux pointes
   viewBox 0 0 100 100, centre 50/50, rayon cardinal 48.
--------------------------------------------------------------------------- */

type Props = {
  className?: string;
  /** Couleur du disque central : celle du fond sur lequel l'étoile est posée. */
  coreColor?: string;
};

const CARDINAL = "M50 2 Q51.5 26 52.5 38 L50 50 L47.5 38 Q48.5 26 50 2 Z";
const DIAGONAL = "M50 8.5 Q51.2 29 52 39.5 L50 50 L48 39.5 Q48.8 29 50 8.5 Z";
const SPARKLE = "M50 34.5 L50.9 44 L50 50 L49.1 44 Z";

export function Star({ className, coreColor = "#FDFAF4" }: Props) {
  const id = useId();
  const gradientId = `star-gold-${id}`;

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          <stop offset="12%" stopColor="#E4CBA6" />
          <stop offset="45%" stopColor="#D3AE7B" />
          <stop offset="92%" stopColor="#C58F4E" />
        </radialGradient>
      </defs>

      <g fill={`url(#${gradientId})`}>
        {/* aigrettes fines, à 22.5° des cardinaux */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((a) => (
          <path key={a} d={SPARKLE} transform={`rotate(${a} 50 50)`} opacity="0.75" />
        ))}
        {/* rayons diagonaux */}
        {[45, 135, 225, 315].map((a) => (
          <path key={a} d={DIAGONAL} transform={`rotate(${a} 50 50)`} />
        ))}
        {/* rayons cardinaux */}
        {[0, 90, 180, 270].map((a) => (
          <path key={a} d={CARDINAL} transform={`rotate(${a} 50 50)`} />
        ))}
      </g>

      {/* disque central : masque la convergence des rayons */}
      <circle cx="50" cy="50" r="6.5" fill={coreColor} />
    </svg>
  );
}
