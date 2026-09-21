(() => {
  const apps = window.PORTFOLIO_DATA?.mobileApps;
  const container = document.querySelector("#mobile-grid");
  if (!container || !Array.isArray(apps)) return;

  const text = (tag, value) => {
    const element = document.createElement(tag);
    element.textContent = value;
    return element;
  };

  const entries = apps.map((app, index) => {
    const article = document.createElement("article");
    const title = text("h3", `${index + 1}. ${app.name}`);
    const summary = text("p", app.summary);
    const details = document.createElement("details");
    const detailsSummary = text("summary", "Read case study");
    const description = text("p", app.description);
    const caseStudy = document.createElement("dl");

    [["Problem", app.problem], ["Solution", app.solution], ["Value", app.value]].forEach(([label, value]) => {
      caseStudy.append(text("dt", label), text("dd", value));
    });

    const scope = text("p", `Technical scope: ${app.tags.join(", ")}.`);
    const source = document.createElement("a");
    source.href = app.source;
    source.target = "_blank";
    source.rel = "noreferrer";
    source.textContent = "Source repository";

    details.append(detailsSummary, description, caseStudy, scope, source);
    article.append(title, summary, details);
    return article;
  });

  container.replaceChildren(...entries);
})();
