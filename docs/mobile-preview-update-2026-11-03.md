# Mobile gallery refresh — 3 November 2026

The corrected portfolio includes 14 mobile products and 249 original app captures.
Added Aether, Rooted, Thirukkural and Agaram, with descriptions grounded in their
local README and implementation notes. Their galleries intentionally omit source
repository links until a matching public repository is confirmed.

## Presentation

- One compact mobile section on the homepage; each cover opens a dedicated gallery.
- Real app images, complete aspect ratios, no rounded device masks or decorative frames.
- Galleries put screens first, followed by the problem, solution, value and product notes.
- Original images are bundled in this repository, not hotlinked to old app sites.
- Compact, large-text, comparison and reference-art fixtures are excluded.
- Each image opens its original full-resolution file. Browser/shared-renderer views
  are labeled; simulated data and app limitations are disclosed.

## Evidence and refresh

`assets/mobile/manifest.json` records source paths relative to the app workspace,
capture file dates, dimensions and SHA-256 checksums. These are capture/import
dates, not a claim that every screen was recaptured today.

The initial refresh reran the Flutter preview harnesses for Tell the World,
Vitalis, Speak I Shall Write and FM Radio. FM Radio's harness was
missing its Manrope font registration; it was added before regenerating its images.
Agaram's learning-path cover was captured from the actual local Flutter web build
using the Codex browser, with sample onboarding choices. The browser capture bounds
exclude the browser zoom's blank overscan area, not any app content.

Other screens use the latest selected existing app evidence. Hill Myna's recapture was
attempted but blocked by existing `OrtRunOptions` compilation errors in its native
speech worker; its previous approved gallery remains in use. Native permission,
audio and device-service behavior cannot be verified from these static galleries.

## Corrections after review

- Removed Music to My Ears and Personal Vault from the product data, navigation,
  generated galleries and managed image assets. Their actual app projects and
  source repositories are unchanged.
- Replaced Wake Me Up's archived October images with 24 renders from the current
  Flutter source. Updated its capture harness to follow the current journey sheet
  and settings categories, rather than obsolete controls.
- Replaced Rooted's faulty browser captures with ten full-phone Flutter renders,
  including the editor, its tool panels and settings. The harness uses isolated
  sample storage and deterministic services, never personal data.
- Both refreshed sets are 780 × 1688 (390 × 844 logical pixels at 2×). Capture
  boundaries are asserted; no app pixels are cropped or masked. Rooted's font
  fallback now handles the rupee glyph, and its sample nutrient keys match the
  actual model.
- Wake Me Up's map tiles and Android-only native 3D renderer are not available in
  offscreen widget tests. Its gallery explicitly discloses that limitation; map
  previews show the current interface rather than live cartography.
- All managed images use content-hashed filenames. Updated HTML script versions
  ensure the gallery data and images do not reuse stale browser cache entries.
- Codex browser review checked Rooted's complete screens and editor panels,
  Wake Me Up's current interface, and the 390 CSS-pixel gallery layout. No
  horizontal overflow was present. Browser screenshots only; no OS capture.

## Vitalis cover and mobile source-link follow-up

- Vitalis's previous home preview was exported before asynchronous Drift statistics
  had resolved. Its capture harness now awaits the actual seeded stats, water and
  habits providers and asserts that the Overall ring and “1 of 3” habit summary
  have rendered before exporting. Visible image assets are also precached.
- Regenerated the real Flutter screens at 780 × 1688. The homepage and Vitalis
  gallery use the new content-hashed home image. The duplicate Insights loading
  image is no longer included in the public gallery (19 selected Vitalis screens).
- Removed mobile source URLs from project data and both renderers. All 14 mobile
  cards and galleries retain preview links but omit source repository links.
  Repositories themselves are unchanged; source links for web and desktop work
  and the main profile's GitHub link remain.
- The verifier rejects mobile source fields and source-emitting render code, and
  requires Vitalis's full-size, freshly regenerated home preview.
- Live navigation exposed cached older gallery HTML, even though the homepage
  had refreshed. Gallery links now include the release version, matching all
  script versions. This also covers previous/next gallery navigation, preventing
  it from reopening an old script bundle and old image manifest.

## Verification

```bash
node tools/sync-mobile-previews.mjs '/path/to/Projects/Mobile Apps'
node tools/verify-mobile-previews.mjs
node --check script.js
node --check mobile-app.js
node --check projects.js
git diff --check
```

The verifier checks all 14 IDs, removed-gallery absence, gallery targets, content
fields, image existence, full-screen dimensions, duplicate references, PNG/JPEG
signatures, content-hashed filenames and source hashes. It additionally requires
today's 780 × 1688 captures for Rooted and Wake Me Up.
The initial Codex browser review covered the grid, Aether, Agaram, FM Radio and Jay's Journal
galleries, plus the narrow-phone layout (390 CSS pixels, no horizontal overflow).
No OS screenshot or screen-recording tool was used.
