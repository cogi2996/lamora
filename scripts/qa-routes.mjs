const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";

const routes = [
  ["/", "Một hành trình"],
  ["/san-pham", "Chọn dòng"],
  ["/san-pham/signature-blend", "Signature Blend"],
  ["/san-pham/original-blend", "Original Blend"],
  ["/cau-chuyen", "Nguyên bản từ đất lành"],
  ["/huong-dan-pha", "Hướng dẫn pha"],
  ["/lien-he", "Kết nối với Lamora"],
];

const assets = [
  "/images/brand/lamora-logo-wordmark-on-light.png",
  "/images/brand/lamora-logo-full-on-dark.png",
  "/images/brand/lamora-mountain-line-art.svg",
  "/images/products/lamora-signature-sig-1000-front.png",
  "/images/products/lamora-original-ori-250-front.png",
  "/images/editorial/lamora-origin-landscape.jpg",
  "/images/editorial/lamora-coffee-harvest-detail.png",
  "/images/editorial/lamora-coffee-hills-loop-poster.png",
  "/images/editorial/lamora-brewing-ritual-loop-poster.png",
  "/media/lamora-coffee-hills-loop.mp4",
  "/media/lamora-brewing-ritual-loop.mp4",
];

const failures = [];

function contrast(first, second) {
  const luminance = (hex) => {
    const channels = [0, 2, 4].map((offset) => Number.parseInt(hex.slice(offset + 1, offset + 3), 16) / 255);
    const linear = channels.map((channel) => channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  };
  const firstLum = luminance(first);
  const secondLum = luminance(second);
  return (Math.max(firstLum, secondLum) + 0.05) / (Math.min(firstLum, secondLum) + 0.05);
}

for (const [foreground, background, minimum] of [["#756b5f", "#f4efe5", 4.5], ["#e2d4c4", "#4a2f1f", 4.5], ["#fffdf8", "#30452f", 3]]) {
  if (contrast(foreground, background) < minimum) failures.push(`contrast ${foreground} on ${background} is below ${minimum}:1`);
}

for (const [route, expected] of routes) {
  const response = await fetch(`${baseUrl}${route}`);
  const body = await response.text();
  if (!response.ok) failures.push(`${route}: HTTP ${response.status}`);
  if (!body.includes(expected)) failures.push(`${route}: missing expected content “${expected}”`);
  if (!body.includes("id=\"main-content\"")) failures.push(`${route}: missing main landmark`);
}
for (const asset of assets) {
  const response = await fetch(`${baseUrl}${asset}`, { method: "HEAD" });
  if (!response.ok) failures.push(`${asset}: HTTP ${response.status}`);
}

if (failures.length) {
  console.error("Lamora route QA failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Lamora route QA passed: ${routes.length} routes and ${assets.length} assets checked.`);
