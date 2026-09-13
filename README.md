# Portofolio — Rafly Januar Raharjo

Next.js 15 (App Router) + TypeScript + Tailwind v4, di-port dari Figma.

## Jalankan

```bash
npm install
npm run assets   # unduh gambar & ikon dari Figma ke public/assets
npm run dev
```

Buka http://localhost:3000

> `npm run assets` harus dijalankan dalam ~7 hari sejak kode ini dibuat —
> URL ekspor Figma kedaluwarsa setelah itu.

## Halaman & navigasi

| Route | Halaman |
|---|---|
| `/` | Home |
| `/experience` | Experience |
| `/awards` | Awards |
| `/portfolio` | Portfolio |
| `/blog` | Blog |
| `/portfolio/apo-mitra` | Case study (placeholder) |

Navbar menandai halaman aktif otomatis lewat `usePathname()`.
Tombol **See all** di Home menuju halaman daftar masing-masing.

## Ganti konten

Semua teks ada di `lib/data.ts`. Nama file gambar ada di `lib/assets.ts`.
