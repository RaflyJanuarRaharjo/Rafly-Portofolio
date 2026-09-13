#!/bin/bash
# Jalankan script ini di komputer kamu sendiri (yang punya akses internet)
# untuk mengunduh semua aset asli dari Figma ke folder assets/.
#
# PENTING: URL Figma ini bersifat sementara (biasanya kedaluwarsa ~7 hari
# sejak file ini dibuat). Kalau linknya sudah mati, generate ulang code
# dari Figma (minta Claude ambil ulang get_design_context / download_assets),
# atau export manual dari Figma lalu simpan dengan nama file yang sama
# di bawah ini.

set -e
mkdir -p assets
cd assets

echo "Mengunduh foto & logo..."
curl -L -o cover-banner.png   "https://www.figma.com/api/mcp/asset/583bdf5f-81a2-4112-b100-667fa50864aa.png"
curl -L -o avatar.png         "https://www.figma.com/api/mcp/asset/ecbb1dfb-5827-4a7c-a929-35b32491bb45.png"
curl -L -o badge-verified.png "https://www.figma.com/api/mcp/asset/36c65620-3c80-4d74-873c-721425ea95ee.png"
curl -L -o badge-flag.png     "https://www.figma.com/api/mcp/asset/5ebd8227-ec4c-4cf8-8b07-844fa52dc3ce.png"
curl -L -o logo-alfagift.png  "https://www.figma.com/api/mcp/asset/526aa98c-b6f9-4589-b85e-a384333990d7.png"
curl -L -o logo-labassist.png "https://www.figma.com/api/mcp/asset/7bc44415-bbf6-454a-bb32-4a3f1581e472.png"
curl -L -o logo-binus.png     "https://www.figma.com/api/mcp/asset/f235e065-d7de-4e70-90d3-ff55d991b721.png"

echo "Mengunduh mockup Project (APO Mitra)..."
curl -L -o project-waiting-trip.png   "https://www.figma.com/api/mcp/asset/13e1a46c-94ac-4c4e-8c22-9122805a03c0.png"
curl -L -o project-ongoing.png        "https://www.figma.com/api/mcp/asset/4c562c39-dcb8-4d11-b817-f1c51d562ae3.png"
curl -L -o project-ride-details-1.png "https://www.figma.com/api/mcp/asset/fb9b0644-4b39-4daf-b9f1-e7efbc7ce268.png"
curl -L -o project-ride-details-2.png "https://www.figma.com/api/mcp/asset/3e167735-53c5-4873-8903-c743a190190e.png"
curl -L -o project-ride-details-3.png "https://www.figma.com/api/mcp/asset/a23fdd75-2f17-48ad-91c1-0989bfeaa8d6.png"

echo "Mengunduh thumbnail Blog..."
curl -L -o blog-thumbnail.png "https://www.figma.com/api/mcp/asset/d11bd6a0-27c5-40f2-a939-0d5f8c60cc95.png"

echo "Mengunduh ikon navigasi (SVG)..."
curl -L -o icon-home.svg    "https://www.figma.com/api/mcp/asset/64e1a92c-013c-4a03-bc9f-8d1082f8d932.svg"
curl -L -o icon-work.svg    "https://www.figma.com/api/mcp/asset/e206f2d8-fbfa-4a5a-889d-c34d683a9d08.svg"
curl -L -o icon-award.svg   "https://www.figma.com/api/mcp/asset/0d1a3eb2-1dce-4dc7-b9c0-1073bce650b7.svg"
curl -L -o icon-doc.svg     "https://www.figma.com/api/mcp/asset/8f3fab4f-684c-49ba-a099-3d18aebb0965.svg"
curl -L -o icon-gallery.svg "https://www.figma.com/api/mcp/asset/599dd32f-ca79-4a91-9e5a-89d67ca812e8.svg"
curl -L -o icon-chevron.svg "https://www.figma.com/api/mcp/asset/278af88c-a974-413d-b27e-91c5e38a5b77.svg"

echo "Selesai! Semua aset ada di folder assets/."
