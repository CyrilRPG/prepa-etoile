/**
 * Génère les déclinaisons bitmap du favicon à partir de app/icon.svg.
 *
 *   node scripts/build-favicon.mjs
 *
 * Produit :
 *   app/favicon.ico    16 + 32 + 48 px, pour les navigateurs anciens et la
 *                      barre de favoris (le .ico prime sur /favicon.ico)
 *   app/apple-icon.png 180 px, écran d'accueil iOS
 *
 * À relancer après toute modification de app/icon.svg.
 */
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const SVG = "app/icon.svg";
const svg = await readFile(SVG);

/** PNG carré rendu à la densité voulue (sharp rastérise le SVG à la volée). */
const png = (size) =>
  sharp(svg, { density: Math.max(72, Math.ceil((size / 64) * 72 * 4)) })
    .resize(size, size, { fit: "contain" })
    .png({ compressionLevel: 9 })
    .toBuffer();

/* ---------------------------------------------------------------------------
   Assemblage du .ico. Le format accepte des PNG tels quels depuis Vista, ce
   qui évite d'avoir à produire des bitmaps DIB : en-tête ICONDIR (6 octets),
   puis une entrée ICONDIRENTRY de 16 octets par taille, puis les PNG.
--------------------------------------------------------------------------- */
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // réservé
header.writeUInt16LE(1, 2); // type 1 = icône
header.writeUInt16LE(sizes.length, 4);

let offset = 6 + sizes.length * 16;
const entries = sizes.map((size, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(size === 256 ? 0 : size, 0); // largeur, 0 signifie 256
  e.writeUInt8(size === 256 ? 0 : size, 1); // hauteur
  e.writeUInt8(0, 2); // palette
  e.writeUInt8(0, 3); // réservé
  e.writeUInt16LE(1, 4); // plans
  e.writeUInt16LE(32, 6); // bits par pixel
  e.writeUInt32LE(images[i].length, 8);
  e.writeUInt32LE(offset, 12);
  offset += images[i].length;
  return e;
});

await writeFile("app/favicon.ico", Buffer.concat([header, ...entries, ...images]));
await writeFile("app/apple-icon.png", await png(180));

const ico = images.reduce((n, b) => n + b.length, 0) + 6 + sizes.length * 16;
console.log(`app/favicon.ico    ${sizes.join(" + ")} px   ${(ico / 1024).toFixed(1)} ko`);
console.log(`app/apple-icon.png 180 px`);
