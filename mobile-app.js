(() => {
  const apps = window.PORTFOLIO_DATA?.mobileApps ?? [];
  const id = new URLSearchParams(window.location.search).get("app");
  const index = apps.findIndex((app) => app.id === id);
  const app = apps[index];
  const title = document.querySelector("#app-title");
  const summary = document.querySelector("#app-summary");
  if (!app) {
    title.textContent = "App not found";
    summary.textContent = "Choose a mobile app from the portfolio to see its screens.";
    return;
  }
  document.title = `${app.name} — App screens · Jayachandran P M`;
  title.textContent = app.name;
  summary.textContent = app.summary;
  const text = (tag, value) => {
    const element = document.createElement(tag);
    element.textContent = value;
    return element;
  };
  const context = document.querySelector("#app-context");
  const study = document.createElement("dl");
  study.className = "case-grid";
  study.setAttribute("aria-label", `${app.name} case study`);
  for (const [label, value] of [["Problem", app.problem], ["Solution", app.solution], ["Value", app.value]]) {
    const cell = document.createElement("div");
    cell.append(text("dt", label), text("dd", value));
    study.append(cell);
  }
  context.append(text("h3", "Product notes"), text("p", app.description), study);
  const scope = text("p", `Built with ${app.tags.join(" · ")}`);
  scope.className = "technical-scope";
  context.append(scope);
  if (app.source) {
    const source = text("a", "Source repository");
    source.href = app.source;
    source.target = "_blank";
    source.rel = "noreferrer";
    context.append(source);
  }
  if (app.notes) context.append(text("p", app.notes));
  document.querySelector("#screen-count").textContent = `${app.screens.length} screens · Actual app interfaces, with sample data where applicable. Open any screen at full resolution. Static previews do not run device services or native animations.`;

  document.querySelector("#app-screens").replaceChildren(...app.screens.map((screen, i) => {
    const figure = document.createElement("figure");
    const caption = text("figcaption", screen.label);
    const link = document.createElement("a");
    link.href = screen.src;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.setAttribute("aria-label", `Open ${app.name}: ${screen.label} at full resolution`);
    const image = document.createElement("img");
    image.src = screen.src;
    image.alt = `${app.name} — ${screen.label}`;
    image.width = screen.width;
    image.height = screen.height;
    image.loading = i < 3 ? "eager" : "lazy";
    image.decoding = "async";
    link.append(image);
    figure.append(caption, link);
    if (screen.kind === "browser") {
      figure.append(text("small", "Rendered app · Browser preview"));
    }
    return figure;
  }));
  const navigation = document.querySelector("#gallery-navigation");
  for (const [target, direction] of [[apps[index - 1], "Previous"], [apps[index + 1], "Next"]]) {
    if (!target) continue;
    const link = text("a", `${direction}: ${target.name}`);
    link.href = target.preview;
    navigation.append(link);
  }
})();
