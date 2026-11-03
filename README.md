# Jayachandran P M — Portfolio

The source for [jayachandranpm.github.io/portfolio](https://jayachandranpm.github.io/portfolio/).

This is a framework-free, content-first portfolio organized around three bodies of work:

- featured product and data systems;
- fourteen Flutter mobile product galleries and case studies;
- professional experience and contact information.

## Local preview

```bash
python3 -m http.server 4177
```

Open `http://127.0.0.1:4177`.

## Structure

- `index.html` contains the semantic page structure and selected case studies.
- `projects.js` is the source of truth for mobile application content and repository links.
- The homepage uses a small, restrained stylesheet with actual app screenshots, relevant brand marks, and no decorative imagery, video, custom fonts, or animation.
- Mobile products use compact screenshot cards. `mobile-app.html?app=<id>` provides the complete screen gallery and problem / solution / value context without making the homepage excessively long.
- `assets/mobile/` hosts versioned, uncropped app captures locally; `mobile-previews.js` supplies dimensions and labels. Previews are static app interfaces, not live device emulators. New app entries do not invent source links to unpublished repositories.
- `tools/sync-mobile-previews.mjs` imports selected real-app evidence from the local projects. It preserves the source image bytes, checks dimensions and records provenance in `assets/mobile/manifest.json`. Content-hashed image URLs prevent stale images after a refresh; removed galleries are pruned from the managed assets.
- `demos/` contains the self-contained, credential-free biomimicry email collection.

GitHub Pages deploys the repository through `.github/workflows/static.yml`.
