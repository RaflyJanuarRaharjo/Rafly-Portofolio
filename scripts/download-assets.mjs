/**
 * Unduh aset hasil ekspor Figma ke /public/assets.
 * URL Figma kedaluwarsa ~7 hari setelah di-generate — jalankan segera:
 *   npm run assets
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OUT = join(process.cwd(), "public", "assets");

const FILES = {
  "avatar.png": "https://www.figma.com/api/mcp/asset/981f8696-3634-468b-910c-e9113828ba79.png",
  "badge-verified.png": "https://www.figma.com/api/mcp/asset/a1531c53-9227-468b-9047-4cc84291dd39.png",
  "badge-x.png": "https://www.figma.com/api/mcp/asset/7aabeee3-e507-400b-8212-c8176307c6a3.png",

  "logo-alfagift.png": "https://www.figma.com/api/mcp/asset/662c88e6-ea60-4e0e-bbff-d45f7de219a5.png",
  "logo-brawijaya.png": "https://www.figma.com/api/mcp/asset/92f0f5f4-0cd6-454c-ae01-042f932f3a86.png",
  "logo-binus.png": "https://www.figma.com/api/mcp/asset/19260b53-b2f2-4f67-bb8d-baef63912929.png",

  "apo-waiting-trip.png": "https://www.figma.com/api/mcp/asset/47f4a30a-4e96-4500-b621-bf08fa499fbc.png",
  "apo-ongoing.png": "https://www.figma.com/api/mcp/asset/e2b4c790-81b8-4204-81e2-df2db1adc0b4.png",
  "apo-ride-details-2.png": "https://www.figma.com/api/mcp/asset/fa15165e-61d1-41b2-8ba3-4db771e32941.png",
  "apo-ride-details-1.png": "https://www.figma.com/api/mcp/asset/52d7f235-e66c-4e04-9688-7e3a9c7955f9.png",
  "apo-ride-details-3.png": "https://www.figma.com/api/mcp/asset/5244efc1-dc44-4219-a400-df64ba29f27f.png",

  "blog-thumb.png": "https://www.figma.com/api/mcp/asset/d4d08ecb-da41-4144-a5f8-295b512162a4.png",

  "stripe.svg": "https://www.figma.com/api/mcp/asset/f5f294ba-b525-4977-a05c-3472334de9ba.svg",
  "ornament.svg": "https://www.figma.com/api/mcp/asset/40e23343-d0d0-408e-bd4a-1b610843cf2a.svg",

  "icon-home.svg": "https://www.figma.com/api/mcp/asset/dee4c47d-e205-4b5c-bee3-3d5b1c4e7b5c.svg",
  "icon-work.svg": "https://www.figma.com/api/mcp/asset/6c3a96fb-b841-4c77-ba47-70190eb6502a.svg",
  "icon-award.svg": "https://www.figma.com/api/mcp/asset/907ffecc-853c-45cf-851b-f3c9fc0c5474.svg",
  "icon-doc.svg": "https://www.figma.com/api/mcp/asset/d48684d9-266a-4cc8-993e-43f4364012e2.svg",
  "icon-photos.svg": "https://www.figma.com/api/mcp/asset/caf32d9c-a043-4bea-88a1-7b8c9ce634a9.svg",
  "icon-chevron.svg": "https://www.figma.com/api/mcp/asset/70fef171-c151-4f89-b1be-9c5909ddb6b6.svg",
};

await mkdir(OUT, { recursive: true });

let ok = 0;
let failed = 0;

for (const [name, url] of Object.entries(FILES)) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(join(OUT, name), buf);
    console.log(`  ok   ${name}`);
    ok++;
  } catch (err) {
    console.error(`  FAIL ${name} — ${err.message}`);
    failed++;
  }
}

console.log(`\n${ok} berhasil, ${failed} gagal.`);
if (failed) {
  console.log(
    "URL Figma kedaluwarsa ~7 hari. Kalau gagal semua, generate ulang lewat chat atau export manual dari Figma."
  );
}
