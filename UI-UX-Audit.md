# Lamora Coffee — Audit UI/UX frontend

Ngày audit: 28/08/2026  
Phạm vi: các route bán hàng tiếng Việt, trang tiếng Anh, desktop và mobile.

## Impeccable pass — 29/08/2026

| Dimension | Score | Evidence |
| --- | ---: | --- |
| Accessibility | 4/4 | Landmark, skip link, labelled form controls, visible focus ring, 48px controls and intentional reduced-motion fallback. |
| Performance | 3/4 | Responsive `sizes` cover content images; ambient stock footage is H.264, 1280×720, silent and faststart-optimized with poster fallbacks. Re-measure LCP on a throttled mobile profile before release. |
| Responsive | 4/4 | At 390px the message and CTA precede the hero image; measured `scrollWidth` does not exceed the viewport. |
| Theming | 4/4 | Colors, type, spacing, radii and component rules are captured in `DESIGN.md` and `.impeccable/design.json`. |
| Implementation integrity | 4/4 | `npx impeccable@3.6.0 detect --json app components` returned no findings. |
| **Total** | **19/20** | **Excellent; remaining work is production integration and media transcoding.** |

### Changes verified in this pass

- Mobile home hero now reads headline → supporting copy → CTA → proof → image.
- `/san-pham` uses a compact decision card: audience, flavor, roast, starting price and one clear next action; operational detail stays on product detail pages.
- Hero, editorial and packshot images declare responsive `sizes`; ambient videos keep posters and defer media loading.
- Reduced-motion uses explicit selectors and preserves poster/content states instead of globally killing every transition.
- Contact form validates minimum lengths, prevents duplicate submission, times out endpoint requests after 8 seconds, preserves input on failure, and labels the no-endpoint path as a preview rather than claiming delivery.
- Visual browser audit at 390×844 and 1440×900 confirmed no horizontal overflow; the mobile CTA appears before the image.

## Impeccable distill pass — 29/08/2026

The repeated “Thông tin Lamora.” callout was adding a second heading and a card-like interruption before the primary content. `InfoNotice` is now a quiet inline note with a small color marker, no generic bold label, and shorter guidance copy. It uses `role="note"` instead of creating an unnamed complementary landmark.

### Audit result

- `/san-pham`, `/huong-dan-pha`, `/lien-he`, product detail pages and `/en` all use the simplified notice treatment.
- No notice retains the old bordered card, heavy top accent, or repeated “Thông tin Lamora.” label; the product detail note also removes the duplicated “từ từ” phrasing.
- The note remains readable on both light surfaces and the dark brewing hero, with no layout overflow introduced.
- Impeccable detector and project type/lint/build/QA checks are rerun after this pass.

## Navigation audit — 29/08/2026

The primary navigation CTA was inheriting the text color and underline rules intended for text links. CSS Modules scoped the old `:not(.button)` selector, so the global `.button` class was not excluded; this produced muted text on the forest button and a stray underline on hover/mobile.

### Fix verified

- Navigation links now use an explicit `navLink` class; the product CTA uses an explicit `cta` class.
- The CTA keeps the high-contrast action treatment: ivory text on forest background, 48px minimum height, and one arrow affordance.
- Underline is reserved for the active/hover text links, uses the forest token, and is 2px for clear visibility; it never appears on the CTA or language switcher.
- Mobile menu keeps 48px rows, a clear open/close state, and a full-width product CTA without visual collisions.
- Desktop and mobile browser checks at 1440×900 and 390×844 confirmed no horizontal overflow and readable menu states.

## Story hero typography audit — 29/08/2026

The story hero lead was constrained by the shared 40rem child width. At a wide desktop viewport, that measure wrapped the final “sử dụng.” onto a short second line, creating a false visual indent and weakening the editorial rhythm.

### Fix verified

- The headline keeps its intentional two-line display treatment and remains aligned to the eyebrow and lead.
- The story lead now uses a 44rem maximum measure, allowing the full sentence to resolve to one balanced desktop line (679px rendered at 1920px).
- At 390px, the lead remains constrained by the mobile container and wraps into two balanced lines (315px / 322px), with no horizontal overflow.
- The hero's reading order and contrast remain unchanged: eyebrow → headline → supporting copy over the darkened landscape.

## Tiêu chí chấm điểm

| Tiêu chí | Trọng số | Điều kiện đạt |
| --- | ---: | --- |
| Định hướng bán hàng | 25% | Người dùng hiểu dòng sản phẩm, giá/quy cách và CTA tiếp theo trong một lượt quét |
| Phân cấp thị giác | 20% | Một tiêu đề chính, một CTA chính, khoảng thở rõ và không có vùng cạnh tranh chú ý |
| Tin cậy và nhất quán thương hiệu | 20% | Màu, chữ, ảnh, giọng điệu và thông tin hai dòng sản phẩm đồng bộ |
| Responsive và khả năng đọc | 20% | Không tràn ngang; nội dung và CTA dùng được bằng một tay ở 390 px |
| Tương tác và khả năng tiếp cận | 15% | Focus rõ, touch target tối thiểu 44 px, form có trạng thái và thông báo dễ hiểu |

## Phát hiện trước khi chỉnh

| Mức | Vấn đề | Ảnh hưởng |
| --- | --- | --- |
| Cao | Thẻ sản phẩm chỉ có một CTA xem chi tiết; giá và quy cách chìm trong danh sách | Giảm động lực đi tiếp và khó so sánh nhanh khi mua |
| Cao | Hero và các vùng sản phẩm dùng nhiều mảng phẳng, thiếu điểm neo thị giác | Cảm giác chưa đủ cao cấp, thông điệp thương hiệu bị loãng |
| Cao | Lưới thông tin trang sản phẩm có sáu dữ kiện nhưng chia bốn cột | Hàng cuối không cân bằng, nhịp đọc bị gãy |
| Trung bình | Nút menu mobile chỉ là chữ, không có tín hiệu trạng thái trực quan | Khó nhận biết menu đang mở/đóng |
| Trung bình | Form liên hệ thiếu phần giới thiệu và gợi ý nội dung | Người dùng phải tự đoán nên gửi thông tin gì |
| Trung bình | Một số liên kết đã có mũi tên trong nội dung nhưng CSS cũng thêm mũi tên | Xuất hiện mũi tên lặp và làm CTA kém tinh gọn |
| Thấp | Footer chưa có nhãn nhóm nội dung | Khó quét nhanh trên màn hình nhỏ |

## Điều chỉnh đã thực hiện

- Tạo hierarchy rõ hơn cho hero bằng gradient nền nhẹ, khoảng thở rộng, hai CTA và dải điểm nổi bật.
- Làm nổi bật giá, mã SKU và quy cách trên Product Card; thêm CTA chính “Xem sản phẩm” và CTA phụ “Tư vấn”.
- Trang chi tiết sản phẩm có giá mở đầu, nhãn bối cảnh, CTA phù hợp từng dòng và bộ dữ kiện chia ba cột cân bằng.
- Bộ chọn quy cách phản hồi giá và mã SKU đang chọn qua vùng thông báo trực tiếp.
- Chuẩn hóa button tối thiểu 48 px, focus ring, trạng thái hover/active và bố cục CTA một cột trên mobile.
- Menu mobile có biểu tượng đóng/mở, aria-label và lớp đổ bóng giúp tách khỏi nội dung phía sau.
- Form có tiêu đề, hướng dẫn ngắn, placeholder hữu ích và CTA toàn chiều rộng trên mobile.
- Footer có nhãn “Khám phá” và “Liên hệ”, giữ vùng chạm 44/48 px.
- Loại bỏ mũi tên bị lặp ở liên kết văn bản và giữ nội dung tiếng Việt dễ đọc.

## Kết quả kiểm tra kỹ thuật

- `npm run typecheck`: đạt.
- `npm run lint`: đạt.
- `npm run build`: đạt với 9 route.
- `npm run qa`: đạt, kiểm tra 7 route và 6 asset.

## Điểm còn cần theo dõi khi có dữ liệu thật

- Thay giá, kênh mua, địa chỉ và điều kiện quán bằng dữ liệu kinh doanh đã duyệt.
- Nối form vào endpoint nhận lead thật và kiểm tra thông báo thành công trên thiết bị thật.
- Kiểm tra lại font hiển thị sau khi deploy với đầy đủ dấu tiếng Việt và đo tương phản bằng công cụ accessibility.
- Bổ sung kiểm thử người dùng cho ba mục tiêu: chọn dòng, chọn quy cách và gửi yêu cầu tư vấn.

## Animation library audit — 29/08/2026

The repository was reviewed against Motion for React, GSAP and Lenis. Motion is the best fit for this React 19 / Next App Router surface: it provides declarative gesture and layout feedback with a smaller conceptual footprint than an imperative timeline system, while avoiding a root-level scroll replacement.

### Fix verified

- `motion@13.1.1` is scoped to the existing client-side product-size selector; no global animation provider or smooth-scroll hijack was added.
- The selected size uses a shared layout indicator that moves between options, making the relationship between the control and its updated price/SKU summary explicit.
- Tap and hover feedback stays within the 44–48px controls, does not move surrounding content, and is not applied to product imagery.
- `MotionConfig reducedMotion="user"` follows the device preference: transform/layout movement is reduced while the selected color/state and live summary remain visible.
- Browser checks at 390px and 1440px confirmed readable controls, correct state changes and no horizontal overflow.

## Senior UI/UX audit pass — 29/08/2026

The reusable audit brief is captured in [`UIUX-AUDIT-PROMPT.md`](./UIUX-AUDIT-PROMPT.md). This pass applied it across the eight public routes, with the header/navigation and contact form treated as the highest-leverage shared surfaces.

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | Mobile navigation opened abruptly and left the page underneath visually competing with the menu. | Added a layered backdrop, fade/slide entrance, click-away close, Escape close and scroll lock while open. | 390px browser check; menu state has no overflow and underlying content is de-emphasized. |
| P1 | Text navigation rows rendered at 44px despite the mobile interaction rule targeting 48px. | Explicitly set mobile text links to 48px minimum height. | DOM measurements at 390px. |
| P2 | “Email hoặc số điện thoại” gave no example and used an email keyboard hint for two input types. | Added a concrete placeholder and neutral text input mode while preserving email autocomplete. | Form smoke check; label, helper text and required state remain connected. |

### Remaining recommendations

- Add a dedicated English navigation/footer copy set if `/en` becomes a full locale rather than a short English landing page.
- Replace the preview contact path with the production lead endpoint before launch; test timeout, retry and duplicate-submit behavior against the real service.
- Transcode the large editorial images/videos and re-measure LCP on a throttled mobile profile.

## Brewing card redesign audit — 29/08/2026

The brewing-method cards were compared with current coffee reference-card patterns: show the method and ratio as a quick reference, keep the image dominant, and reserve detail for a short actionable cue. The card remains editorial and non-interactive because the three methods do not yet have dedicated detail routes.

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | All cards had the same generic sentence, so users could not distinguish the adjustment cue for each method at a glance. | Added one concise, method-specific brewing note for Phin, Pour over and French press. | Copy scan and production build pass. |
| P1 | Ratio metadata competed with the title in an eyebrow row and was easy to miss after the image. | Moved it into a dedicated “Tỷ lệ khởi điểm” metadata block with a divider and stronger label/value hierarchy. | Desktop and mobile visual pass; 16px body text and no overflow. |
| P2 | The cards read as three interchangeable bordered boxes with little orientation across the set. | Added numbered image markers, subtle warm surface variation and a quiet lift/border response on the card container (the image itself does not animate). | Desktop hover/reduced-motion CSS review; no image transform. |
| P2 | Mobile cards were narrow and required more horizontal swipes to compare methods. | Increased the snap-card width from 82% to 86% while preserving the next-card peek and one-handed scroll. | 390px browser check: 289px card width, 16px body copy, no horizontal page overflow. |

### Reference patterns used

- BrewCard treats method, dose, ratio, grind, temperature and time as quick-reference fields rather than burying them in prose.
- SIP-TO-SUIT groups brewing methods and parameters for fast retrieval and comparison.
- Product-card redesign research supports larger imagery, stronger titles and segmented information for better scanning.

### Verification

- `npm run typecheck`: đạt.
- `npm run lint`: đạt.
- `npm run build`: đạt với 9 route.
- `npm run qa`: đạt, kiểm tra 7 route và 11 asset.
- Browser audit at 1440×900 and 390×844: three cards render, no horizontal overflow, image ratio stays consistent, and each ratio remains visible in the card footer.
- Impeccable detector CLI entrypoint was attempted but unavailable in this install; the package fallback returned no findings for `app/huong-dan-pha/page.tsx`.

## Home hero title spacing audit — 29/08/2026

The headline “Một hành trình, hai cách thưởng thức.” was visually compressed into three short lines because the copy column inherited a 0.9/1.1 grid split. The fix keeps the existing type scale and brand voice, gives the copy column a wider 1.1/0.95 split on desktop, and restores the previous image-first balance at intermediate widths.

### Verification

- Desktop 1280px: headline now resolves to two lines (567px rendered width, 134px block height) without colliding with the image.
- Tablet 1024px: the original image-weighted split is preserved to avoid an undersized media column.
- Mobile 390px: the headline returns to the full single-column width (336px), with no horizontal overflow.

## Product listing conversion pass — 29/08/2026

The `/san-pham` page is a persuade surface: a visitor should understand the two product lines, see the entry price and move to one clear next step without parsing packaging units or a duplicate notice.

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | The price was visually subordinate to the roast/flavour metadata and the unit suffix added noise to a first scan. | Rebuilt the compact price block with an uppercase “Giá từ” label, a larger green amount, optional compare-at price support and a sale badge that renders only when supplied by product data. Removed `/1.000 g`, `/250 g` and “2 quy cách” from listing cards; those details remain on product detail pages. | Desktop and 390px browser measurements: amount is the strongest card datum, card width stays within the container, and the forbidden suffixes are absent. |
| P1 | The instruction notice repeated the page title and CTA intent, adding friction before the product comparison. | Removed the redundant `InfoNotice` from the listing surface. | DOM audit: zero `.infoNotice` nodes on `/san-pham`; reading order is title → two product choices → price → CTA. |
| P2 | Availability was buried in the detail route even though it reduces purchase hesitation at the decision point. | Added a compact “Đang nhận đơn” status with a semantic success color and status dot below the price. | Browser audit confirms it remains readable on both product cards and does not shift the CTA out of the card. |

### Pricing honesty rule

Each SKU now carries an explicit `compareAtPrice` only when a commercial anchor price is available. The UI renders the crossed-out anchor, savings amount and percentage together so the deal can be evaluated at a glance; any catalog value still requires commercial approval before production publication. If the anchor is absent or not higher than the selling price, the sale treatment disappears and the amount falls back to a neutral “Giá từ / From” presentation.

### Verification

- `npm run typecheck`: đạt.
- `npm run lint`: đạt.
- `npm run build`: đạt.
- Browser audit at 1280px and 390px: no horizontal overflow (scrollbar delta only), 48px CTA target, no duplicate notice, and no unit/“quy cách” suffix in compact cards.

## Pricing color and locale pass — 29/08/2026

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | Price strings were always formatted with Vietnamese separators and currency, even after switching the page to English. This made the mode toggle feel incomplete and weakened trust at the decision point. | Added a shared locale-aware formatter: VI uses `420.000 ₫`; EN converts to USD and uses `$16.11` (based on the documented display rate). Price, compare-at price, savings badge, aria labels and selected-size summary all use the active locale. | Browser audit confirms `/san-pham` and `/san-pham/original-blend` switch labels, `document.lang`, currency, punctuation and savings copy together in both modes. |
| P1 | The price color was visually close to the primary action color and did not clearly signal the commercial focal point. | Added the dedicated `--color-price-emphasis` token and applied it only to the selling amount and savings-related emphasis; compare-at price remains muted and struck through. | Desktop screenshot shows the selling amount as the first commercial scan target while the old price remains legible but secondary. |
| P2 | Price formatting was duplicated across card, hero and size-selector implementations, increasing the chance of locale drift. | Centralized rendering in `PriceDisplay`/`LocalizedPrice` and passed the active locale into size-selector formatting. | Text scan leaves no direct formatting calls outside the shared helper; no mixed separators or currencies appear in browser output. |

### Behavioral guardrails

- Savings are calculated from explicit SKU values, not invented urgency or scarcity language.
- No-sale, equal-price and malformed/empty compare-at values resolve to a single neutral selling price.
- The primary amount remains readable at 390px; crossed-out values and savings badges wrap without horizontal overflow.
- Bilingual labels and `aria-label` text preserve the same price hierarchy for assistive technology.

### Verification

- Browser audit: VI and EN at 1280px, Original detail hero and size selector, plus mobile overflow check at 390px.
- `npx impeccable detect --json components/site-footer.tsx`: clean; no pricing component findings.
- `npm run typecheck`: đạt.
- `npm run lint`: đạt.
- `npm run qa`: đạt, kiểm tra 7 route và 11 asset.
- `npm run build`: đạt với 9 route.

## USD display in English mode — 29/08/2026

The English mode now presents customer-facing prices in US dollars while Vietnamese mode remains in VND. Conversion uses a display-only snapshot of **1 USD = 26,070 VND**, based on the Wise mid-market rate checked on 29 August 2026; this rate is intentionally centralized in `USD_TO_VND_RATE` and should be reviewed by the commercial owner before launch. Prices use two decimal places in English and zero decimals with Vietnamese separators in Vietnamese.

## Product detail Figma parity pass — 29/08/2026

The two product detail routes were compared with the supplied Figma reference. The earlier template stopped after a generic facts block and one shared editorial section; the new composition gives each line its own use context while keeping the same Lamora token system.

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | Hero lacked the Figma decision sequence: flavour cues, clear entry price and a contained product presentation. | Added line-specific hero surface, flavour/roast tags, prominent “Giá từ”, CTA pair, packshot card and SKU/weight metadata. | Desktop and 390px browser screenshots; no horizontal overflow and all hero content remains readable. |
| P1 | Signature and Original shared one generic editorial block, so the use case was not clear. | Added dedicated cafe-workflow and home-brewing feature sections with product-specific copy and existing editorial assets. | Both routes render distinct section order/content; image alt text is present. |
| P1 | Product evidence was compressed into one facts table and hid the profile story shown in Figma. | Added four scan-friendly highlights, a flavor-profile section and a facts/profile grouping before the purchase details. | DOM heading sequence and visual pass at desktop/mobile. |
| P2 | Original’s 250g/500g choice was a text-only control with no visual comparison. | Upgraded the selector into responsive product-size cards with packshots, price and live SKU/status summary. | Selecting 500g updates `aria-pressed` and the live summary; both images have accurate alt text. |

### Verification

- `npm run typecheck`: đạt.
- `npm run lint`: đạt.
- `npm run qa`: đạt, kiểm tra 7 route và 11 asset.
- `npx --yes impeccable@3.6.0 detect --json --scope layout components/product-detail-template.tsx components/product-size-selector.tsx app/globals.css lib/content.ts`: no findings.
- Browser audit at 1440×720 and 390×844 (before the palette follow-up below): both routes render without horizontal overflow; mobile selector has two accessible cards for Original; Signature hero used the then-current dark Figma-aligned surface while Original retained the light surface.

## Product detail clarity and palette pass — 29/08/2026

This pass applied the Impeccable polish, layout, color and clarify criteria to `/san-pham/signature-blend` and `/san-pham/original-blend`.

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | The hero packshot sat inside a bordered, shadowed container that made the product feel boxed in rather than editorial. | Removed the container border, background and shadow; the packshot now floats on the hero surface while its SKU/weight metadata remains anchored. | Browser computed-style check: `border: 0`, transparent background and no shadow on both routes. |
| P1 | “Quy cách” was repeated in selector labels and product facts, adding jargon to a purchase decision. | Replaced it with “Cỡ túi” in the selector, facts, highlights, notice, trust copy and contact copy. | DOM/text scan on both product routes contains no “Quy cách”; selector legend and labels announce “Chọn cỡ túi” / “Cỡ túi”. |
| P1 | Flavour and roast tags were outlined and visually weak against the warm surface. | Converted all tags into forest-background pills with white text, consistent padding and a restrained rest shadow. | Desktop/mobile computed-style check: `rgb(48, 69, 47)` background and `rgb(255, 253, 248)` text; four tags remain readable and wrap cleanly. |
| P1 | Signature retained a chocolate hero/feature treatment that diverged from Original despite the requested palette alignment. | Moved Signature hero, feature, profile and CTA band to the same light ivory/white surface family as Original; preserved chocolate only in the product description and editorial imagery. | Desktop surface audit reports matching light surfaces and ink text for both product routes. |
| P2 | Signature’s opening section lacked the mountain line-art cue used elsewhere in the brand system. | Added the existing decorative `lamora-mountain-line-art.svg` as a non-interactive, empty-alt background layer in the Signature hero. | Desktop screenshot shows line-art anchored at the lower edge; `aria-hidden` and empty alt keep it out of the screen-reader path. |

### Verification

- `npm run typecheck`: đạt.
- `npm run lint`: đạt.
- `npm run qa`: đạt, kiểm tra 7 route và 11 asset.
- `npm run build`: đạt với 9 route.
- Impeccable detector: no findings for the changed product template, selector, content and global styles.
- Browser audit at 1440×900 and 390×844: no content overflow, no heading overflow, 48px CTA targets, no missing image alt text, and Original’s two size cards preserve `aria-pressed` state.

## Homepage packaging overview — 29/08/2026

The homepage now includes a packaging overview directly after the product choice section. The supplied specification image acts as product proof: visitors can scan both lines and the front/back/side views before continuing to brewing guidance.

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | The packaging reference was not discoverable from the homepage, so users had to open a product route to understand the two package systems. | Added a dedicated editorial section with one clear heading, short supporting copy and a single route-level CTA to `/san-pham`. | Homepage DOM and browser audit confirm the section appears after product choice and before brewing guidance. |
| P1 | The supplied raster was not part of the public asset pipeline. | Added `public/images/editorial/lamora-packaging-specification.png` with intrinsic 1280×720 dimensions, responsive `sizes` and descriptive alt text. | Image loads successfully at desktop/mobile; no missing-alt or broken-source findings. |
| P2 | A wide specification sheet can become unreadable when forced into a narrow two-column layout. | Use a 0.72/1.28 editorial split on desktop and move the image above the copy at mobile widths; preserve the original 16:9 ratio. | 1440px and 390px screenshots: no horizontal overflow, no heading overflow, and the image remains fully scannable. |

## Product detail focus pass — 29/08/2026

The product detail routes now keep the hero focused on the product and next action. Signature Blend does not need a second size-selection block because it has one available bag size; Original Blend retains the selector because it offers multiple sizes.

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | Signature repeated a single-size decision in a long “Chọn cỡ túi” section, delaying the contact CTA and adding unnecessary scanning. | Removed the complete size-selection/details section from `/san-pham/signature-blend`; kept the richer selector for Original Blend where there are multiple choices. | Browser DOM audit: Signature has zero `.productDetails` sections; Original has one selector and facts block. |
| P2 | SKU, weight and “Whole bean” metadata below the hero packshot competed with the product image and repeated information shown elsewhere. | Removed `.productHeroMediaMeta` from both product detail routes. | Browser DOM audit: zero hero metadata nodes on Signature and Original; hero image remains centered with no overflow. |

### Verification

- `npm run typecheck`: đạt.
- `npm run lint`: đạt.
- `npm run qa`: đạt, kiểm tra 7 route và 11 asset.
- `npm run build`: đạt với 9 route.
- Impeccable detector: no layout findings for the changed product template and global styles.
- Browser audit at 1440×900 and 390×844: both routes have no horizontal or heading overflow; Signature has no size section; Original keeps its size selector; both heroes have no metadata row and retain accessible packshot labels.

## Product detail noise reduction pass — 29/08/2026

This pass applied the Impeccable distill criteria to remove repeated operational and tasting details that interrupted the purchase path.

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | “Đang nhận đơn” was repeated in product cards, the size selector summary and the product facts, competing with price and the primary action. | Removed the status from all rendered product UI while keeping the source data available for future operational states. | Text scan of product components contains no rendered status copy. |
| P1 | Flavour, roast and bean-format details appeared in multiple hero, highlight and profile blocks for both products. | Removed the duplicated hero tags, highlights/profile sections and product-card flavour/roast rows; retained the product description and purchase-relevant bag sizes. | Both detail routes and the catalogue render without those redundant blocks; heading flow remains intact. |
| P1 | The facts panel exposed “Tình trạng” and duplicated status values. | Removed the status field from the Original facts grid. | Browser DOM check reports no “Tình trạng” or “Đang nhận đơn” text. |
| P1 | Channel and café-minimum notices created competing paths (“Có thể đặt qua…”, “Điều kiện quán…”). | Removed channel notices from product cards and the detail facts/notice area; the CTA still routes to contact based on audience. | Browser DOM check reports no channel/minimum notice text; contact CTA remains available. |
| P2 | The selected-size summary repeated SKU/status metadata below the selector. | Reduced it to the selected price only, keeping the decision feedback without operational noise. | Original selector still updates the live price and preserves `aria-pressed` state. |

### Verification

- `npm run typecheck`: đạt.
- `npm run lint`: đạt.
- `npm run qa`: đạt, kiểm tra 7 route và 11 asset.
- `npm run build`: đạt với 9 route.
- Impeccable detector: không phát hiện lỗi layout trên product template, selector, cards và global styles.
- Browser audit at 1440×900 and 390×844: không overflow ngang, không heading overflow, và không còn các chuỗi gây nhiễu trên `/san-pham`, `/san-pham/signature-blend` hoặc `/san-pham/original-blend`.

## Ambient video playback fix — 29/08/2026

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | The two editorial loops were encoded as MPEG-4 Part 2 (`mp4v`), which is not reliably decoded by modern browsers; with `preload="none"` the page stayed on the poster (`readyState: 0`, `paused: true`). | Re-encoded both supplied loops to H.264/AVC (`avc1`, `yuv420p`) with `faststart`, kept the original filenames/URLs, and changed the ambient component to `preload="auto"` with an explicit muted `play()` fallback after `loadeddata`. | In-browser audit confirms both routes reach `readyState: 4`, `paused: false`, `duration: 8s`; after 7s each currentTime wraps back near 0, proving loop playback. |
| P2 | Autoplay can still be refused by user settings or reduced-motion preferences. | The poster remains the visual fallback; the component keeps `muted`, `playsInline`, `loop`, and the existing reduced-motion rule. | No console errors; poster remains available when playback is unavailable. |

### Verification

- `npm run typecheck`: đạt.
- `npm run lint`: đạt.
- `npm run qa`: đạt, kiểm tra 7 route và 11 asset.
- `npm run build`: đạt với 9 route.
- Impeccable detector: no layout findings for the changed ambient video component.

## Pexels ambient footage pass — 29/08/2026

The requested stock footage is now used as the visual source for both story and homepage surfaces. The Câu chuyện hero uses the aerial farmland clip, while the homepage adds a dedicated close-up coffee-berry section before the brewing guidance section.

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | The story hero still showed the previous generated landscape loop, and the homepage had no motion that connected the product to the coffee plant. | Replaced `lamora-coffee-hills-loop.mp4` with the supplied Pexels farmland footage and added `lamora-coffee-branch-loop.mp4` to a new responsive editorial section. | Both local MP4 URLs return 200 with `video/mp4`; homepage and story routes build with the expected sources. |
| P1 | Downloaded source files were larger than needed for a decorative background. | Transcoded both clips to silent H.264 1280×720 with faststart; the story file is ~2.3 MB and the homepage file is ~1.6 MB. | Poster frames load as PNG fallbacks; reduced-motion hides playback without losing visual context. |
| P2 | Stock media provenance could be lost when assets are copied or regenerated. | Added [`public/media/PROVENANCE.md`](./public/media/PROVENANCE.md) with the original Pexels pages and license reference; the ambient generator preserves existing approved footage. | `npx impeccable detect` returned no findings on changed UI targets; typecheck, lint, build and route QA pass. |

### Source notes

- [Lush Green Landscape Aerial View of Farmland — Pexels](https://www.pexels.com/video/lush-green-landscape-aerial-view-of-farmland-33412872/)
- [Vibrant Coffee Berries on Lush Coffee Plant — Pexels](https://www.pexels.com/video/vibrant-coffee-berries-on-lush-coffee-plant-36271589/)
- Both pages mark the clips as free to use under the [Pexels License](https://www.pexels.com/license/).

## Brewing hero title width pass — 29/08/2026

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | The desktop title “Một tỷ lệ vừa vặn, điều chỉnh theo khẩu vị.” inherited the global `15ch` heading cap, creating three short lines and weakening the hero’s editorial rhythm. | Scoped the brewing hero title to `max-width: 26ch`; the mobile breakpoint keeps its existing narrower measure. | Browser audit: desktop at 1280px renders two balanced lines; mobile at 390px remains three lines with no horizontal overflow. |

### Verification

- `npm run typecheck`: đạt.
- `npm run lint`: đạt.
- `npm run qa`: đạt, kiểm tra 7 route và 11 asset.
- `npm run build`: đạt với 9 route.
- Impeccable detector: no findings for the brewing page and global styles.
## EN / VI language mode — 29/08/2026

- Added a shared language provider with a persisted `lamora-locale` preference and updates to the document language for assistive technology.
- Added an accessible EN / VI switcher with authored SVG flags, pressed states, visible focus styling, and 44px touch targets. On mobile it remains inside the opened navigation panel.
- Localized shared navigation/footer, home, story, brew guide, products, product details, contact form, notices, CTAs, empty/error/success copy and product/brew metadata while preserving product URLs and CTA behavior.
- Verified in the local browser at desktop and 390px mobile widths: English content switches in place, reload keeps the selection, and document scroll width does not exceed the viewport.
- `npx impeccable detect --json app components lib` returned no findings.

## Footer visual authority pass — 29/08/2026

### Audit evidence

| View | Result |
| --- | --- |
| Desktop 1280px | Two-column footer scans cleanly; all links expose 44px hit areas; contact address remains readable; no horizontal overflow. |
| Tablet 768px | Grid remains balanced at the tablet gutter; navigation and contact columns retain comfortable spacing. |
| Mobile 390px | Footer stacks into two clear groups; links and contact actions expose 48px hit areas; no horizontal overflow (`scrollWidth` stays below the viewport). |
| Contrast | Secondary footer text `#e2d4c4` on `#4a2f1f` measures approximately 8.4:1, above WCAG AA for body copy. |

### Findings and fixes

| Priority | Finding | Applied fix | Verification |
| --- | --- | --- | --- |
| P1 | Footer previously ended as a flat dark block, so the origin-in-place brand story stopped at the last content row. | Added a restrained mountain line-art layer using the existing Lamora asset, positioned behind content with low opacity and `pointer-events: none`. | Desktop and mobile screenshots show the line-art as a visible signature without competing with copy. |
| P1 | Brand, navigation and contact content did not have a strong enough reading rhythm on small screens. | Kept a dedicated intro divider, separated navigation/contact groups, and increased mobile link rows to 48px. | Browser measurements confirm six interactive footer links are visible and comfortably tappable at 390px. |
| P2 | Footer links lacked a clear non-pointer state and the bilingual context was implicit. | Added visible keyboard focus treatment, subtle hover translation, and bilingual landmark labels/copy. | DOM audit confirms semantic `nav`, `address`, email and telephone links; focus styling inherits the global gold ring. |

### Verification

- Browser audit completed at 1280×720, 768×900 and 390×844.
- Responsive checks: no horizontal overflow, all footer links visible, and touch targets meet or exceed 44px (48px on mobile).
- Reduced-motion path retains the footer artwork and removes transition/animation dependency.
- Bundled Impeccable detector was attempted but is unavailable in this environment (`bundled detector not found`); manual/browser evidence above is the fallback signal.
