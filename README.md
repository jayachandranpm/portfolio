# Jayachandran P M — Portfolio

The source for [jayachandranpm.github.io/portfolio](https://jayachandranpm.github.io/portfolio/).

This is a framework-free static portfolio organized around four bodies of work:

- featured product and data systems;
- twelve Flutter mobile applications with full-resolution previews;
- web applications and interactive prototypes;
- a public archive of AI, web, and data experiments.

## Local preview

```bash
python3 -m http.server 4177
```

Open `http://127.0.0.1:4177`.

## Structure

- `index.html` contains the semantic page structure and featured case studies.
- `projects.js` is the single source of truth for mobile-app galleries and the project archive.
- `assets/mobile/` contains real Flutter captures at 780 × 1688 pixels.
- `assets/web/` contains portfolio images for web projects.
- `demos/` contains self-contained, credential-free static demonstrations.

GitHub Pages deploys the repository through `.github/workflows/static.yml`.
