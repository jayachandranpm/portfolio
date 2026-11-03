# Mobile gallery refresh — 3 November 2026

The portfolio now includes 16 mobile products and 280 original app captures.
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

The current Flutter preview harnesses were rerun successfully for Tell the World,
Vitalis, Speak I Shall Write, Personal Vault and FM Radio. FM Radio's harness was
missing its Manrope font registration; it was added before regenerating its images.
Agaram's learning-path cover was captured from the actual local Flutter web build
using the Codex browser, with sample onboarding choices. The browser capture bounds
exclude the browser zoom's blank overscan area, not any app content.

Wake Me Up and Music to My Ears use their newer October verification sets. Other
screens use the latest selected existing app evidence. Hill Myna's recapture was
attempted but blocked by existing `OrtRunOptions` compilation errors in its native
speech worker; its previous approved gallery remains in use. Native permission,
audio and device-service behavior cannot be verified from these static galleries.

## Verification

```bash
node tools/sync-mobile-previews.mjs '/path/to/Projects/Mobile Apps'
node tools/verify-mobile-previews.mjs
node --check script.js
node --check mobile-app.js
node --check projects.js
git diff --check
```

The verifier checks all 16 IDs, gallery targets, content fields, image existence,
full-screen dimensions, duplicate references, PNG/JPEG signatures and source hashes.
Codex browser review covered the grid, Aether, Agaram, FM Radio and Jay's Journal
galleries, plus the narrow-phone layout (390 CSS pixels, no horizontal overflow).
No OS screenshot or screen-recording tool was used.
