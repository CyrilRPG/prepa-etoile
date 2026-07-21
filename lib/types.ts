export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; note?: string }[];
};

export type Stat = {
  value: string;
  label: string;
  /** Chiffre non vérifié, à remplacer avant mise en ligne. */
  placeholder?: boolean;
};

export type Subject = {
  index: string;
  slug: string;
  name: string;
  blurb: string;
  image: string;
  alt: string;
  points: string[];
};

export type Value = {
  index: string;
  title: string;
  body: string;
};

export type MethodStep = {
  index: string;
  title: string;
  body: string;
  detail: string;
};

export type Plan = {
  id: string;
  label: string;
  price: string;
  unit?: string;
  note: string;
  features: string[];
  cta: string;
  href: string;
  badge?: string;
  featured?: boolean;
};

export type FaqItem = {
  q: string;
  a: string;
};
