# Prépa Étoile — direction artistique

Toutes les valeurs ci-dessous sont **mesurées** sur `public/images/hero-final-prepa-etoile.png`
(canvas 1622 × 970) en décodant le PNG pixel par pixel. Elles font foi.

## Couleurs

| Rôle | Valeur | Origine de la mesure |
|---|---|---|
| `cream` | `#FDFAF4` | fond du header et du hero |
| `cream-shade` | `#F5F1E8` | sections alternées (déduit, hors maquette) |
| `navy` | `#071F3D` | remplissage des boutons, encre du H1 (mesuré `rgb(6,28,59)`) |
| `gold` | `#B8894C` | encre or du H1 et de l'eyebrow |
| `gold-light` | `#C9A16E` | « DEPUIS 2007 », branches claires de l'étoile |
| `ink` | `#0B0B0C` | liens de nav, libellés, texte des boutons (mesuré quasi noir) |
| `ink-muted` | `#6A6C6E` | paragraphe du hero |
| `ink-soft` | `#9A9A9C` | sous-libellés de la rangée d'icônes, ligne de bas de hero |
| `hairline` | `#E8E4DA` | filet sous le header, séparateurs verticaux |

## Géométrie du hero (référence 1622 × 970)

### Header — hauteur 88 px, filet bas 1 px à y=87

- Étoile du logo : bbox x 56..107 (52 × 54), centre (81.5, 42.5)
- « PRÉPA ÉTOILE » : x 121..284, hauteur de capitale 16, ligne de base y=45 → Playfair ≈ 23 px
- « DEPUIS 2007 » : x 165..239, capitale 7, ligne de base y=61, **centré** sous le wordmark
- Liens de nav (ligne de base y≈47.5, capitale 11 → ≈ 15.5 px), **écart constant de 38 px** :
  `447..572` philosophie · `609..716` méthode (souligné, actif) · `753..846` matières ·
  `884..998` stages · `1036..1101` résultats · `1139..1190` tarifs · `1229..1286` contact
- Bouton CTA : x 1327..1543, y 17..66 (217 × 50)

### Hero — y 88..970

- **Deux gouttières coexistent dans la maquette** (irrégularité du rendu d'origine, reproduite telle quelle) :
  - `84 px` pour l'eyebrow, le H1, le paragraphe, les boutons et la ligne de bas
  - `56 px` pour la rangée d'icônes et les étoiles de notation
- Eyebrow : x 84..392, bande y 166..176. Corps 10.5, interlettrage 2.07
- H1 : **le titre n'a pas un corps unique.** Les deux lignes or sont à 85 % des
  deux lignes navy. Constaté sur la hauteur d'x (40 pour les navy, 34 pour les
  or) et confirmé par les largeurs d'encre, dans le même rapport. Les quatre
  lignes portent un crénage de **-0.04em** (sans lui, chaque ligne est ~8 % trop
  large à hauteur de capitale égale).
  - lignes 1-2, `navy` : corps 77, interligne 77, lignes de base 264 et 341
  - lignes 3-4, `gold` : corps 65.5, interligne 69, lignes de base 415 et 484
  - largeurs d'encre visées : 86..498 · 85..534 · 86..455 · 85..346
- Paragraphe : 4 lignes, bandes y 519..534 / 545..560 / 571..585 / 597..611 (pas de 26 px), corps 17
  - largeurs d'encre : 417 / 400 / 391 / 296. La boîte fait **418** : au-delà,
    « et » remonte en fin de ligne 2 et les coupes ne sont plus celles de la maquette.
- Rangée d'icônes : 4 colonnes de 146 px, centres **129 / 275 / 421 / 567** (donc rangée x 56..640)
  - cercles 57 × 57, y 643..699 · séparateurs 1 px à x 202 / 348 / 494, y 655..743
  - libellés bande y 715..727, crénage **-0.057em** · sous-libellés bande y 737..746, crénage **-0.027em**
    (même condensation que le H1 : sans crénage, les libellés sont 9 % trop larges)
- Boutons : primaire x 84..369 (285 × 53), secondaire x 386..**639** (254 × 53), tous deux y 783..836, écart 17
  - libellés centrés dans leur cadre, corps 15
- Étoiles de notation : 5 × 15 × 14, pas de 20, x 302..397, y 874..887 — centrées sur la boîte 56..640
- Ligne de bas : x 85..**620**, bande y 905..918, corps 14.2 · puces or à 177..182 et 384..388

> **Piège de mesure.** Au-delà de x≈640 le fondu de la photo est très proche du
> crème : un seuil bas le prend pour de l'encre. C'est ce qui avait fait situer
> le bord du bouton secondaire à 699 (en fait 639) et la fin de la ligne de bas
> à 699 (en fait 620). Pour mesurer à droite de 640, il faut soustraire du fond
> la photo reconstruite (source recalée × voile) et non le crème seul.

### Photo

Recalée par corrélation (r = 0.87) sur `cours-mathematiques.png` (1536 × 1024) :

```
hero(x, y) = source((x - 327) / 1.0629, (y - 92) / 1.0629)
```

Soit une image affichée à **1632.6 × 1088.4**. Dans un panneau `x[640..1622]` (largeur 982) :
`width: 166.3%` · `left: -31.9%` · `top: 0`.

Le fondu n'est pas un simple bord : c'est **un long dégradé crème qui traverse toute la photo**.
Alpha mesuré (crème par-dessus la photo), en x :

| x | 640 | 660 | 685 | 710 | 735 | 760 | 785 | 810 | 860 | 910 | 985 | 1060 | 1135 | 1210 | 1285 | 1360 | 1510 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| α | .99 | .98 | .93 | .84 | .69 | .56 | .45 | .38 | .32 | .31 | .28 | .22 | .18 | .17 | .07 | .03 | 0 |

## Règles de style

- Rayons ≤ 2 px. Aucune ombre floue. Aucun `backdrop-blur`. Aucun gradient coloré.
- Aucun emoji. Icônes en SVG maison (24 px, stroke 1.5), pas de bibliothèque.
- La hiérarchie passe par le rythme vertical et les filets 1 px, pas par des cartes ombrées.
- **Aucun tiret cadratin dans les textes** : les `—` de `reference/index.html` deviennent
  des points, des virgules ou des parenthèses.
