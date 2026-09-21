# Jayachandran P M — Portfolio

The source for [jayachandranpm.github.io/portfolio](https://jayachandranpm.github.io/portfolio/).

This is a framework-free, content-first portfolio organized around three bodies of work:

- featured product and data systems;
- twelve Flutter mobile application case studies;
- professional experience and contact information.

## Local preview

```bash
python3 -m http.server 4177
```

Open `http://127.0.0.1:4177`.

## Structure

- `index.html` contains the semantic page structure and selected case studies.
- `projects.js` is the source of truth for mobile application content and repository links.
- The homepage uses a small monochrome stylesheet and intentionally ships without local images, video, SVG artwork, custom fonts, or decorative asset bundles.
- Projects are presented as concise, text-led case studies with links to their public source repositories.
- `demos/` contains the self-contained, credential-free biomimicry email collection.

GitHub Pages deploys the repository through `.github/workflows/static.yml`.
