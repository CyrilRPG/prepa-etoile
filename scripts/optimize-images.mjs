/**
 * Génère les versions web des photos depuis les originaux.
 *
 *   node scripts/optimize-images.mjs
 *
 * Les originaux vivent dans reference/sources/ (jusqu'à 5 Mo) et ne sont jamais
 * servis : l'export est statique et `images.unoptimized` est activé, donc Next ne
 * retaille rien à la volée. On pré-calcule donc ici les WebP servis au client.
 * Relancer ce script après tout remplacement de photo.
 */
import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "reference/sources";
const OUT = "public/images";

/* Largeur de rendu maximale de chaque image, en px CSS.
   La photo du hero est affichée à 1633 px à --u=1, jusqu'à 1829 px à --u=1.12. */
const targets = [
  { file: "cours-mathematiques.png", width: 1536, quality: 82 },
  { file: "cours-physique-chimie.png", width: 1200, quality: 80 },
  { file: "cours-francais.jpg", width: 1200, quality: 80 },
  { file: "cours-anglais.png", width: 1200, quality: 80 },
];

await mkdir(OUT, { recursive: true });

for (const { file, width, quality } of targets) {
  const src = path.join(SRC, file);
  const name = file.replace(/\.(png|jpg|jpeg)$/i, "");
  const dest = path.join(OUT, `${name}.webp`);

  const meta = await sharp(src).metadata();
  await sharp(src)
    .resize({ width: Math.min(width, meta.width), withoutEnlargement: true })
    .webp({ quality })
    .toFile(dest);

  const before = (await stat(src)).size;
  const after = (await stat(dest)).size;
  console.log(
    `${file.padEnd(28)} ${meta.width}x${meta.height} ${(before / 1e6).toFixed(2)}MB` +
      ` -> ${path.basename(dest)} ${(after / 1e6).toFixed(2)}MB` +
      ` (${Math.round((1 - after / before) * 100)}% de moins)`,
  );
}

console.log("\nContenu de", OUT);
for (const f of await readdir(OUT)) {
  console.log("  ", f, ((await stat(path.join(OUT, f))).size / 1e3).toFixed(0) + " ko");
}
