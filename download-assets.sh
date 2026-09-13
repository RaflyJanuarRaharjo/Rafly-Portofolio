#!/usr/bin/env bash
# Figma asset URLs expire ~7 days after export.
# Run this once to pull every asset into ./assets and repoint index.html to it.
#   bash download-assets.sh
set -euo pipefail

BASE="https://www.figma.com/api/mcp/asset"
mkdir -p assets

declare -A ASSETS=(
  ["avatar.png"]="729e0ffd-7182-4213-a25e-ff7118b0d25b.png"
  ["badge-1.png"]="1e246b44-c463-4f47-851f-46aebd05f3fb.png"
  ["badge-2.png"]="e7401fff-5a80-497c-b257-744716859a40.png"
  ["hatch.svg"]="e6cb5b7b-66bb-472c-aff1-62a56f17cf18.svg"
  ["icon-home.svg"]="a1bf5ec0-47e5-4d89-9ab5-dbf7cdf861d2.svg"
  ["icon-work.svg"]="3628bbb2-1b00-4bb0-aa46-3a049bb67f81.svg"
  ["icon-award.svg"]="9048ada8-b6ca-4490-b1ec-7b4f1aec0427.svg"
  ["icon-doc.svg"]="e32f0972-22d2-4a30-b624-eda029d68660.svg"
  ["icon-photos.svg"]="d075bf50-17c9-4adb-9251-329df5455392.svg"
  ["icon-chevron.svg"]="f6b03ab4-fea0-4020-82c7-d9a9b74dac0a.svg"
  ["logo-alfagift.png"]="502882e3-6a30-41f7-8be6-fdddf8c41d33.png"
  ["logo-ub.png"]="19550a69-6374-4df6-bc19-d17e1270b35a.png"
  ["logo-binus.png"]="d2e19bb9-07d7-44d6-89d5-1237340adea2.png"
  ["ornament.svg"]="9739fb0f-ad46-46a3-979c-5f663a945d40.svg"
  ["shot-waiting-trip.png"]="bebc06a7-da8a-4c28-88a7-b0adbbdfd38c.png"
  ["shot-ongoing.png"]="58ad4515-92bd-489b-b17f-1c3782b5da5f.png"
  ["shot-ride-details-2.png"]="c02ff8b9-6e2c-4987-911a-83226d5583d0.png"
  ["shot-ride-details-1.png"]="899ecbda-2397-41d9-93fb-7b504852b2e9.png"
  ["shot-ride-details-3.png"]="5584458f-2c32-40ee-bff6-ddcdf0be3da6.png"
  ["post-1.png"]="8ec1e94b-6ade-4cdd-90a5-4dde1b2eb7ed.png"
)

for name in "${!ASSETS[@]}"; do
  id="${ASSETS[$name]}"
  echo "→ $name"
  curl -fsSL "$BASE/$id" -o "assets/$name"
  sed -i.bak "s|$BASE/$id|assets/$name|g" index.html
done

# post-2 shares the same source image as post-1 in the design
cp assets/post-1.png assets/post-2.png 2>/dev/null || true

rm -f index.html.bak
echo "Done. All assets are local now."
