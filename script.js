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

  const entries = apps.map((app, index) => {
    const article = document.createElement("article");
    const title = text("h3", `${index + 1}. ${app.name}`);
    const summary = text("p", app.summary);
    const description = text("p", app.description);
    const caseStudy = document.createElement("dl");
    caseStudy.className = "case-grid";
    caseStudy.setAttribute("aria-label", `${app.name} case study`);

    [["Problem", app.problem], ["Solution", app.solution], ["Value", app.value]].forEach(([label, value]) => {
      const cell = document.createElement("div");
      cell.append(text("dt", label), text("dd", value));
      caseStudy.append(cell);
    });

    const scope = text("p", `Technical scope: ${app.tags.join(", ")}.`);
    scope.className = "technical-scope";
    const links = document.createElement("p");
    links.className = "project-links";
    links.append(externalLink("Live preview", app.preview), document.createTextNode(" · "), externalLink("Source repository", app.source));

    article.append(title, summary, description, caseStudy, scope, links);
    return article;
  });

  container.replaceChildren(...entries);
})();
