# Prépa Étoile

Site vitrine de Prépa Étoile (cours en petits groupes, Paris 15e, depuis 2007).
Next.js 16 (App Router) + TypeScript + Tailwind v4, exporté en site statique.

```bash
npm run dev      # http://localhost:3000
npm run build    # génère out/ (statique, déployable tel quel)
npm run lint
npx tsc --noEmit
```

`npm run build` produit `out/`, à déposer chez n'importe quel hébergeur statique
(OVH, Netlify, GitHub Pages, Vercel). Aucun serveur Node n'est requis.

## À faire avant la mise en ligne

Quatre points sont volontairement laissés en attente. Ils sont tous signalés par
un `TODO` dans le code, et les deux premiers sont visibles à l'écran.

1. **Chiffres de résultats** : `lib/data/results.ts`. Les valeurs `__À REMPLIR__`
   sont des espaces réservés, aucun taux de réussite n'a été inventé. La page
   `/resultats` affiche un encart d'avertissement tant qu'il en reste un.
   Remplacez les valeurs et retirez `placeholder: true`, l'encart disparaît.
2. **Formulaires** : `components/forms/ContactForm.tsx` et `BookingForm.tsx`.
   Ils n'envoient rien et le disent à l'utilisateur. La marche à suivre pour les
   brancher (Formspree, Netlify Forms ou route API) est en tête de `ContactForm.tsx`.
3. **Mentions légales et Confidentialité** : obligatoires en France. Les libellés
   sont dans le pied de page, sans lien, en attendant les pages.
4. **Horaires du secrétariat** : `app/contact/page.tsx`. Valeurs d'attente,
   à corriger ou à supprimer.

Deux points mineurs : la photo de la section « Notre environnement »
(`components/sections/ExperienceSection.tsx`) réutilise la photo de cours faute
de photo des locaux, et `site.url` dans `lib/data/site.ts` doit recevoir le
domaine définitif (il alimente le sitemap et les métadonnées Open Graph).

## Structure

```
app/                    une route par page, 9 au total
components/
  brand/                Logo (étoile SVG + wordmark)
  layout/               Header, Footer, menu mobile, CTA fixe
  home/Hero.tsx         reproduction au pixel de la maquette
  ui/                   Section, Button, Accordion, Stat, icônes...
  sections/             blocs réutilisés entre les pages
  forms/                formulaires (non branchés)
lib/data/               TOUT le contenu rédactionnel, typé
reference/
  index.html            maquette d'origine, source du contenu
  DESIGN.md             direction artistique et relevé de la maquette
  sources/              photos d'origine (non servies, jusqu'à 5 Mo)
public/images/          WebP servis au client
scripts/                optimize-images.mjs
```

Le contenu vit dans `lib/data/*.ts`, pas dans le JSX : pour changer un tarif, une
question de la FAQ ou une matière, un seul fichier est à toucher. `navigation.ts`
est la source unique du header, du menu mobile, du pied de page et du sitemap.

## Images

Les photos d'origine (jusqu'à 5 Mo) sont dans `reference/sources/` et ne sont
jamais servies. `public/images/` ne contient que les WebP générés :

```bash
node scripts/optimize-images.mjs
```

11,2 Mo de sources donnent 320 ko de WebP. À relancer après tout remplacement de
photo. L'export statique interdisant l'optimisation d'images à la volée par Next,
cette étape est manuelle et nécessaire.

## Le hero

`components/home/Hero.tsx` reproduit `reference/sources/hero-final-prepa-etoile.png`
au pixel près. Les cotes ne sont pas approximatives : elles ont été relevées en
décodant le PNG pixel par pixel, puis vérifiées dans le navigateur en comparant
les extensions d'encre réelles aux valeurs de la maquette. Le relevé complet est
dans `reference/DESIGN.md`.

Toutes les cotes s'écrivent `calc(N * var(--u))`, où `N` est la valeur en pixels
sur la maquette et `--u` l'unité de la maquette (voir `app/globals.css`) : elle
vaut exactement 1px quand le conteneur fait 1622 px de large, largeur de l'image
de référence. Le rendu s'y superpose alors au pixel près, et se met à l'échelle
proportionnellement ailleurs. En dessous de 1280 px, un layout compact prend le
relais.

Deux irrégularités de la maquette d'origine sont reproduites telles quelles,
volontairement : deux gouttières coexistent (84 px pour le texte et les boutons,
56 px pour la rangée d'icônes et les étoiles), et le titre n'a pas un corps
unique (les deux lignes or sont à 85 % des deux lignes navy).

## Favicon

`app/icon.svg` fait foi : c'est l'étoile du logo, redessinée pour les petites
tailles. Trois écarts assumés par rapport à `components/brand/Star.tsx` :

- les 8 aigrettes fines sont supprimées (à 16 px, une bouillie grise) ;
- les rayons sont épaissis et moins effilés, sinon les pointes se volatilisent ;
- le dégradé reste clair jusqu'aux pointes, l'or sombre de l'original n'ayant
  aucun contraste sur le fond bleu nuit.

Après toute modification du SVG, régénérer les déclinaisons bitmap :

```bash
npm run favicon
```

Cela réécrit `app/favicon.ico` (16 + 32 + 48 px, pour les navigateurs anciens
et la barre de favoris) et `app/apple-icon.png` (180 px, écran d'accueil iOS).
Next.js pose seul les trois balises `<link>` ; les navigateurs modernes
retiennent le SVG, vectoriel donc net à toute taille.

## Déploiement

Le dépôt est sur [github.com/CyrilRPG/prepa-etoile](https://github.com/CyrilRPG/prepa-etoile).
Vercel se branche dessus et redéploie à chaque `git push` sur `main`.

Le site est un export statique (`output: "export"` dans `next.config.ts`) :
Vercel le détecte seul, aucun réglage de build à saisir à l'import.

### Domaine

`site.url` (dans `lib/data/site.ts`) alimente le sitemap, les URL canoniques et
OpenGraph. Il se résout dans cet ordre :

1. `NEXT_PUBLIC_SITE_URL` si la variable existe ;
2. l'URL de production Vercel, sinon ;
3. `https://www.prepa-etoile.fr` en local.

Une fois le vrai domaine branché, définir `NEXT_PUBLIC_SITE_URL` dans
*Vercel > Settings > Environment Variables* et redéployer, pour que le sitemap
annonce le domaine définitif plutôt que l'adresse `.vercel.app`.

### Revérifier après une modification

```bash
npm run build
npx serve out -l 4321        # dans un autre terminal
npm i -D puppeteer           # non installé par défaut (~150 Mo)
node scripts/verify-hero.mjs
```

Le script capture la page à exactement 1622 px, la compare à la maquette et
écrit `hero-diff.png` où le noir marque les écarts. Un texte bien placé y
apparaît en **contour creux** (seul l'antialiasing diffère) ; un texte
**dédoublé** signale un décalage réel à corriger.

L'écart ne tombe jamais à zéro, et c'est normal : la maquette est une image
générée dont le texte ne suit pas les métriques d'une vraie fonte. Les valeurs
de référence à la livraison sont dans l'en-tête du script.
