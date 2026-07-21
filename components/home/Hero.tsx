import Image from "next/image";
import { bookingHref } from "@/lib/data/navigation";
import { Button } from "@/components/ui/Button";
import {
  IconGroup,
  IconProgress,
  IconShield,
  IconStarFilled,
  IconTeacher,
} from "@/components/ui/Icons";

/* ---------------------------------------------------------------------------
   Hero, reproduction au pixel de public/images/hero-final-prepa-etoile.png.
   Toutes les cotes en `calc(N * var(--u))` sont les valeurs relevées sur la
   maquette (canvas 1622 × 970, hero de y=88 à y=970, soit 882 de haut).
   Relevé complet et méthode : reference/DESIGN.md.

   La maquette porte deux gouttières différentes, reproduites telles quelles :
   84 px pour le texte et les boutons, 56 px pour la rangée d'icônes et les
   étoiles (dont les colonnes sont centrées sur 129 / 275 / 421 / 567).
--------------------------------------------------------------------------- */

const features = [
  { Icon: IconGroup, label: "Petits groupes", note: "8 élèves en moyenne" },
  { Icon: IconTeacher, label: "Professeurs", note: "expérimentés et investis" },
  { Icon: IconShield, label: "Méthode claire", note: "et suivi personnalisé" },
  { Icon: IconProgress, label: "Progression", note: "régulière et durable" },
];

/* Alpha du voile crème relevé sur la maquette, converti en pourcentages du
   panneau photo (x de 640 à 1622, largeur 982). Ce n'est pas un simple bord :
   le dégradé traverse toute la photo. */
const photoVeil =
  "linear-gradient(to right," +
  "rgba(253,250,244,0.99) 0%," +
  "rgba(253,250,244,0.98) 2%," +
  "rgba(253,250,244,0.93) 4.6%," +
  "rgba(253,250,244,0.84) 7.1%," +
  "rgba(253,250,244,0.69) 9.7%," +
  "rgba(253,250,244,0.56) 12.2%," +
  "rgba(253,250,244,0.45) 14.8%," +
  "rgba(253,250,244,0.38) 17.3%," +
  "rgba(253,250,244,0.32) 22.4%," +
  "rgba(253,250,244,0.31) 27.5%," +
  "rgba(253,250,244,0.28) 35.1%," +
  "rgba(253,250,244,0.22) 42.8%," +
  "rgba(253,250,244,0.18) 50.4%," +
  "rgba(253,250,244,0.17) 58.0%," +
  "rgba(253,250,244,0.07) 65.7%," +
  "rgba(253,250,244,0.03) 73.3%," +
  "rgba(253,250,244,0) 88.6%)";

export function Hero() {
  return (
    <section aria-labelledby="hero-titre">
      {/* ---------------- Large : calque pixel de la maquette ---------------- */}
      <div className="pixel-scale relative hidden overflow-hidden bg-cream xl:block">
        <div style={{ height: "calc(882*var(--u))" }} />

        {/* Photo. Recalage par corrélation avec cours-mathematiques.png :
            hero(x,y) = source((x-327)/1.0629, (y-92)/1.0629). Dans le panneau
            x[640..1622] (largeur 982) cela donne width 166.3%, left -31.9%. */}
        <div className="absolute inset-y-0 left-[calc(640*var(--u))] right-0 overflow-hidden">
          <Image
            src="/images/cours-mathematiques.webp"
            alt="Un professeur au tableau devant un groupe d'élèves en cours de mathématiques"
            width={1536}
            height={1024}
            priority
            className="absolute top-0 h-auto max-w-none"
            style={{ width: "166.3%", left: "-31.9%" }}
          />
          <div className="absolute inset-0" style={{ background: photoVeil }} />
        </div>

        {/* Colonne de texte */}
        <div className="absolute inset-0">
          <p
            className="absolute font-medium uppercase text-gold"
            style={{
              left: "calc(84*var(--u))",
              top: "calc(76.7*var(--u))",
              fontSize: "calc(10.5*var(--u))",
              letterSpacing: "calc(2.07*var(--u))",
            }}
          >
            Établissement d&apos;excellence · Depuis 2007
          </p>

          {/* Le titre de la maquette n'a pas un corps unique : les deux lignes
              or sont à 85 % des deux lignes navy (hauteur d'x relevée 34 contre
              40, largeurs d'encre dans le même rapport). Crénage -0.04em sur
              les quatre lignes. */}
          <h1
            id="hero-titre"
            className="absolute font-serif font-medium"
            style={{ left: "calc(84*var(--u))", top: "calc(106*var(--u))" }}
          >
            <span
              className="block text-navy"
              style={{
                fontSize: "calc(77*var(--u))",
                lineHeight: "calc(77*var(--u))",
                letterSpacing: "-0.04em",
              }}
            >
              Des cours en
              <br />
              petits groupes
            </span>
            <span
              className="block text-gold"
              style={{
                marginTop: "calc(4.3*var(--u))",
                fontSize: "calc(65.5*var(--u))",
                lineHeight: "calc(69*var(--u))",
                letterSpacing: "-0.04em",
              }}
            >
              de 8 élèves en
              <br />
              moyenne.
            </span>
          </h1>

          <p
            className="absolute text-ink-muted"
            style={{
              left: "calc(84*var(--u))",
              top: "calc(425.1*var(--u))",
              width: "calc(418*var(--u))",
              fontSize: "calc(17*var(--u))",
              lineHeight: "calc(26*var(--u))",
            }}
          >
            Mathématiques, physique-chimie, français et anglais, du collège au
            lycée. Un accompagnement exigeant et bienveillant pour mieux
            comprendre, reprendre confiance et progresser durablement.
          </p>

          {/* Rangée d'icônes : 4 colonnes de 146 depuis x=56, centres
              129/275/421/567. Les séparateurs ne suivent pas la hauteur du
              contenu (cercle 643..699, sous-libellé jusqu'à 758) mais courent
              de 655 à 743 : ce sont donc des éléments à part, pas une bordure. */}
          <ul
            className="absolute flex"
            style={{ left: "calc(56*var(--u))", top: "calc(555*var(--u))" }}
          >
            {features.map(({ Icon, label, note }) => (
              <li
                key={label}
                className="flex flex-col items-center text-center"
                style={{ width: "calc(146*var(--u))" }}
              >
                <span
                  className="flex items-center justify-center rounded-full border border-gold/55 text-gold"
                  style={{
                    width: "calc(57*var(--u))",
                    height: "calc(57*var(--u))",
                  }}
                >
                  <Icon className="w-[calc(25*var(--u))] h-[calc(25*var(--u))]" />
                </span>
                <span
                  className="font-semibold text-ink"
                  style={{
                    marginTop: "calc(10.5*var(--u))",
                    fontSize: "calc(13.5*var(--u))",
                    letterSpacing: "-0.057em",
                  }}
                >
                  {label}
                </span>
                <span
                  className="text-ink-soft"
                  style={{
                    marginTop: "calc(1.6*var(--u))",
                    fontSize: "calc(11.5*var(--u))",
                    letterSpacing: "-0.027em",
                  }}
                >
                  {note}
                </span>
              </li>
            ))}
          </ul>

          {[202, 348, 494].map((x) => (
            <span
              key={x}
              aria-hidden="true"
              className="absolute bg-hairline"
              style={{
                left: `calc(${x}*var(--u))`,
                top: "calc(567*var(--u))",
                width: "1px",
                height: "calc(88*var(--u))",
              }}
            />
          ))}

          {/* Boutons : primaire 285 × 53 à x=84, secondaire 254 × 53 à x=386. */}
          <div
            className="absolute flex"
            style={{
              left: "calc(84*var(--u))",
              top: "calc(695*var(--u))",
              gap: "calc(17*var(--u))",
            }}
          >
            <Button
              href={bookingHref}
              size="none"
              arrow
              className="h-[calc(53*var(--u))] w-[calc(285*var(--u))] gap-[calc(14*var(--u))] text-[calc(15*var(--u))]"
            >
              Réserver un premier cours
            </Button>
            <Button
              href="/notre-methode"
              size="none"
              variant="secondary"
              className="h-[calc(53*var(--u))] w-[calc(254*var(--u))] text-[calc(15*var(--u))]"
            >
              Découvrir notre méthode
            </Button>
          </div>

          {/* Étoiles : centrées sur la boîte 56..640, donc centre x=348. */}
          <div
            className="absolute flex items-center justify-center text-gold"
            style={{
              left: "calc(57.5*var(--u))",
              top: "calc(786*var(--u))",
              width: "calc(584*var(--u))",
              gap: "calc(5*var(--u))",
            }}
            aria-hidden="true"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <IconStarFilled
                key={i}
                className="w-[calc(15*var(--u))] h-[calc(15*var(--u))]"
              />
            ))}
          </div>

          <p
            className="absolute text-ink-soft"
            style={{
              left: "calc(84*var(--u))",
              top: "calc(812.5*var(--u))",
              fontSize: "calc(14.2*var(--u))",
            }}
          >
            Depuis 2007
            <span aria-hidden="true" className="mx-[0.5em] text-gold">•</span>
            Près de 20 ans d&apos;expérience
            <span aria-hidden="true" className="mx-[0.5em] text-gold">•</span>
            Des milliers d&apos;élèves accompagnés
          </p>
        </div>
      </div>

      {/* ---------------- Compact : même dessin, empilé ---------------- */}
      <div className="xl:hidden">
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
          <Image
            src="/images/cours-mathematiques.webp"
            alt="Un professeur au tableau devant un groupe d'élèves en cours de mathématiques"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_20%]"
          />
        </div>

        <div className="gutter pt-10 pb-14">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-gold">
            Établissement d&apos;excellence · Depuis 2007
          </p>

          <h1 className="mt-5 font-serif text-[clamp(2.25rem,8vw,3.5rem)] leading-[1.06]">
            <span className="text-navy">Des cours en petits groupes </span>
            <span className="text-gold">de 8 élèves en moyenne.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted">
            Mathématiques, physique-chimie, français et anglais, du collège au
            lycée. Un accompagnement exigeant et bienveillant pour mieux
            comprendre, reprendre confiance et progresser durablement.
          </p>

          <ul className="mt-9 grid grid-cols-2 gap-y-8 border-y border-hairline py-8 sm:grid-cols-4">
            {features.map(({ Icon, label, note }, i) => (
              <li
                key={label}
                className={
                  i % 2 === 1
                    ? "flex flex-col items-center border-l border-hairline text-center sm:border-l"
                    : "flex flex-col items-center text-center sm:border-l sm:first:border-l-0"
                }
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/55 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mt-3.5 text-[0.8125rem] font-semibold text-ink">
                  {label}
                </span>
                <span className="mt-1 text-[0.6875rem] text-ink-soft">{note}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={bookingHref} size="lg" arrow>
              Réserver un premier cours
            </Button>
            <Button href="/notre-methode" size="lg" variant="secondary">
              Découvrir notre méthode
            </Button>
          </div>

          <div className="mt-9 flex flex-col items-center gap-2.5">
            <div className="flex gap-1 text-gold" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <IconStarFilled key={i} className="h-3.5 w-3.5" />
              ))}
            </div>
            <p className="text-center text-[0.8125rem] text-ink-soft">
              Depuis 2007
              <span aria-hidden="true" className="mx-2 text-gold">•</span>
              Près de 20 ans d&apos;expérience
              <span aria-hidden="true" className="mx-2 text-gold">•</span>
              Des milliers d&apos;élèves accompagnés
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
