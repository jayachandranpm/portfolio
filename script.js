(() => {
  const apps = window.PORTFOLIO_DATA?.mobileApps;
  const container = document.querySelector("#mobile-grid");
  if (!container || !Array.isArray(apps)) return;

  const text = (tag, value) => {
    const element = document.createElement(tag);
    element.textContent = value;
    return element;
  };

  const externalLink = (label, href) => {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = label;
    return link;
  };

  const entries = apps.map((app) => {
    const article = document.createElement("article");
    article.id = app.id;
    const title = text("h3", app.name);
    const summary = text("p", app.summary);
    const screen = app.screens[0];
    if (screen) {
      const preview = document.createElement("a");
      preview.className = "mobile-preview";
      preview.href = app.preview;
      preview.setAttribute("aria-label", `View ${app.name} screens`);
      const image = document.createElement("img");
      image.src = screen.src;
      image.alt = `${app.name} — ${screen.label}`;
      image.width = screen.width;
      image.height = screen.height;
      image.loading = "lazy";
      image.decoding = "async";
      preview.append(image);
      article.append(preview);
    }
    const links = document.createElement("p");
    links.className = "project-links";
    const gallery = text("a", `View ${app.screens.length} screens`);
    gallery.href = app.preview;
    gallery.setAttribute("aria-label", `View ${app.screens.length} ${app.name} screens and case study`);
    links.append(gallery);
    if (app.source) links.append(externalLink("Source", app.source));

    article.append(title, summary, links);
    return article;
  });

  container.replaceChildren(...entries);
})();
