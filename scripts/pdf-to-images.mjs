/**
 * Render PDF jadi gambar per halaman — dijalankan SEKALI di laptop, bukan di browser.
 *
 *   node scripts/pdf-to-images.mjs public/case-study/edunex.pdf edunex
 *
 * Hasil: public/case-study/edunex/001.webp, 002.webp, ... + pages.json
 * PDF aslinya tidak disentuh, tetap bisa diunduh pengunjung.
 */
import { createCanvas } from "@napi-rs/canvas";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const [, , pdfPath, name] = process.argv;
if (!pdfPath || !name) {
  console.error("Pakai: node scripts/pdf-to-images.mjs <file.pdf> <nama-folder>");
  process.exit(1);
}

// Lebar render. 1400 = tajam saat di-zoom, tanpa bikin file membengkak.
const WIDTH = 1400;
const QUALITY = 82;

const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");

const outDir = path.join("public", "case-study", name);
await fs.mkdir(outDir, { recursive: true });

const data = new Uint8Array(await fs.readFile(pdfPath));
const pdf = await pdfjs.getDocument({ data }).promise;

const pages = [];
let total = 0;
let height = 0;

for (let i = 1; i <= pdf.numPages; i++) {
  const page = await pdf.getPage(i);
  const base = page.getViewport({ scale: 1 });
  const viewport = page.getViewport({ scale: WIDTH / base.width });

  const canvas = createCanvas(Math.round(viewport.width), Math.round(viewport.height));
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  await page.render({ canvas, canvasContext: ctx, viewport }).promise;

  const file = `${String(i).padStart(3, "0")}.webp`;
  const buf = await sharp(canvas.toBuffer("image/png")).webp({ quality: QUALITY }).toBuffer();
  await fs.writeFile(path.join(outDir, file), buf);

  if (i === 1) height = Math.round(viewport.height);
  total += buf.length;
  pages.push(file);
  console.log(`  ${file}  ${(buf.length / 1024).toFixed(0)} KB`);
}

await fs.writeFile(
  path.join(outDir, "pages.json"),
  JSON.stringify({ width: WIDTH, height, pages }, null, 2)
);

console.log(`\n${pages.length} halaman, total ${(total / 1024 / 1024).toFixed(2)} MB → ${outDir}`);
