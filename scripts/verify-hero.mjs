/**
 * Vérifie que le hero rendu se superpose toujours à la maquette d'origine.
 *
 *   npm run build && npx serve out -l 4321     (dans un autre terminal)
 *   npm i -D puppeteer                          (non installé par défaut, ~150 Mo)
 *   node scripts/verify-hero.mjs
 *
 * Capture la page à EXACTEMENT 1622 px de large, la largeur de
 * reference/sources/hero-final-prepa-etoile.png. À cette largeur `--u` vaut 1px
 * (voir app/globals.css), donc les cotes du hero valent leurs valeurs relevées
 * sur la maquette et les deux images sont directement comparables.
 *
 * Écrit une image de diff où le NOIR marque les écarts. Un texte correctement
 * placé y apparaît en contour creux (seul l'antialiasing diffère) ; un texte
 * dédoublé signale un décalage réel.
 *
 * L'écart ne tombera jamais à zéro : la maquette est une image générée dont le
 * texte ne suit pas les métriques d'une vraie fonte, et la photo porte son
 * propre bruit de rééchantillonnage. C'est la RÉPARTITION qui compte, pas la
 * valeur absolue. Référence au moment de la livraison :
 *
 *   écart moyen 14.0 · 71 % des pixels à d<=8 · 7.3 % à d>64
 *   header 9.5 · colonne texte 8.8 · rangée icônes 7.0 · photo 18.2
 *
 * Une régression franche se voit tout de suite : le dédoublement réapparaît et
 * la zone concernée passe au-dessus de ces valeurs.
 */
import sharp from "sharp";

const MOCKUP = "reference/sources/hero-final-prepa-etoile.png";
const URL = process.env.URL ?? "http://localhost:4321";
const OUT = process.env.OUT ?? "hero-diff.png";

const { default: puppeteer } = await import("puppeteer").catch(() => {
  console.error("puppeteer absent. Installez-le : npm i -D puppeteer");
  process.exit(1);
});

const browser = await puppeteer.launch({
  headless: true,
  args: ["--force-device-scale-factor=1", "--hide-scrollbars", "--font-render-hinting=none"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1622, height: 970, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 500));

const containerWidth = await page.evaluate(
  () => document.querySelector("header .pixel-scale")?.clientWidth,
);
if (containerWidth !== 1622) {
  console.error(`conteneur à ${containerWidth} px au lieu de 1622 : --u ne vaut pas 1, comparaison invalide.`);
  process.exit(1);
}
const shot = await page.screenshot();
await browser.close();

const raw = (buf) => sharp(buf).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const [a, b] = await Promise.all([raw(MOCKUP), raw(shot)]);
const W = Math.min(a.info.width, b.info.width);
const H = Math.min(a.info.height, b.info.height);
const at = (o, x, y) => { const i = (y * o.info.width + x) * 3; return [o.data[i], o.data[i + 1], o.data[i + 2]]; };

const zones = {
  "header             ": [0, 0, 1622, 88],
  "colonne texte hero  ": [0, 88, 640, 970],
  "photo               ": [640, 88, 1622, 970],
  "  H1                ": [80, 200, 560, 500],
  "  paragraphe        ": [80, 512, 520, 615],
  "  rangée icônes     ": [56, 640, 640, 760],
  "  boutons           ": [80, 780, 705, 840],
};
const acc = Object.fromEntries(Object.keys(zones).map((k) => [k, { s: 0, n: 0, big: 0 }]));
let sum = 0, n = 0, le8 = 0, gt64 = 0;
const diff = Buffer.alloc(W * H * 3);

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const p = at(a, x, y), q = at(b, x, y);
    const d = (Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]) + Math.abs(p[2] - q[2])) / 3;
    sum += d; n++;
    if (d <= 8) le8++;
    if (d > 64) gt64++;
    const v = 255 - Math.min(255, d * 5);
    const i = (y * W + x) * 3;
    diff[i] = diff[i + 1] = diff[i + 2] = v;
    for (const [k, [x0, y0, x1, y1]] of Object.entries(zones)) {
      if (x >= x0 && x < x1 && y >= y0 && y < y1) { acc[k].s += d; acc[k].n++; if (d > 64) acc[k].big++; }
    }
  }
}

console.log(`\n=== HERO vs MAQUETTE (${W}x${H}) ===`);
console.log("  écart moyen                :", (sum / n).toFixed(2), " (référence 14.0)");
console.log("  pixels d<=8                :", ((le8 / n) * 100).toFixed(1) + "%", " (référence 71%)");
console.log("  pixels d>64                :", ((gt64 / n) * 100).toFixed(1) + "%", " (référence 7.3%)");
console.log("\n=== PAR ZONE ===");
for (const [k, v] of Object.entries(acc)) {
  console.log(`${k} moyen ${(v.s / v.n).toFixed(2).padStart(6)}   d>64 ${((v.big / v.n) * 100).toFixed(1).padStart(5)}%`);
}
await sharp(diff, { raw: { width: W, height: H, channels: 3 } }).png().toFile(OUT);
console.log("\nimage de diff (noir = écart) ->", OUT);
