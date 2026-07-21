import type { CSSProperties, ReactNode } from "react";

/* Icônes maison : 24 × 24, stroke 1.5, pas de bibliothèque, pas d'emoji. */

type IconProps = { className?: string; style?: CSSProperties };

function Icon({ className, style, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {children}
    </svg>
  );
}

/** Rangée du hero : petits groupes. */
export function IconGroup(p: IconProps) {
  return (
    <Icon {...p}>
      <circle cx="9" cy="8.5" r="2.6" />
      <path d="M4.4 17.5a4.8 4.8 0 0 1 9.2 0" />
      <circle cx="17" cy="9.5" r="2" />
      <path d="M15.2 15.2a4 4 0 0 1 4.6 2.3" />
    </Icon>
  );
}

/** Rangée du hero : professeurs. */
export function IconTeacher(p: IconProps) {
  return (
    <Icon {...p}>
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
    </Icon>
  );
}

/** Rangée du hero : méthode claire. */
export function IconShield(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M12 3.5 5.5 6v5.4c0 3.9 2.6 7.4 6.5 9.1 3.9-1.7 6.5-5.2 6.5-9.1V6z" />
      <path d="m9.2 11.8 2 2 3.6-3.9" />
    </Icon>
  );
}

/** Rangée du hero : progression. */
export function IconProgress(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M5 19V13" />
      <path d="M10 19V9" />
      <path d="M15 19v-4" />
      <path d="M20 19V5" />
    </Icon>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M4.5 12h15" />
      <path d="m13 5.5 6.5 6.5-6.5 6.5" />
    </Icon>
  );
}

export function IconChevronDown(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="m6 9.5 6 6 6-6" />
    </Icon>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M6.8 4h-.9A2 2 0 0 0 4 6.2C4.4 13 11 19.6 17.8 20a2 2 0 0 0 2.2-1.9v-.9a1 1 0 0 0-.7-1l-2.9-1a1 1 0 0 0-1.1.3l-1 1.2a13.4 13.4 0 0 1-5-5l1.2-1a1 1 0 0 0 .3-1.1l-1-2.9a1 1 0 0 0-1-.7Z" />
    </Icon>
  );
}

export function IconMail(p: IconProps) {
  return (
    <Icon {...p}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.8 6.6 8.2 6 8.2-6" />
    </Icon>
  );
}

export function IconPin(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M12 21c4.2-4.4 6.3-7.7 6.3-10.2A6.3 6.3 0 0 0 5.7 10.8C5.7 13.3 7.8 16.6 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </Icon>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="m4.5 12.5 4.5 4.5 10.5-11" />
    </Icon>
  );
}

/** Étoile pleine des cinq étoiles du hero. */
export function IconStarFilled({ className, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95z" />
    </svg>
  );
}
