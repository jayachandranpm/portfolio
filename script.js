(() => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".nav-menu");
  const mobileGrid = document.querySelector("#mobile-grid");
  const archiveGrid = document.querySelector("#archive-grid");
  const dialog = document.querySelector("#preview-dialog");
  const dialogKicker = document.querySelector("#preview-kicker");
  const dialogTitle = document.querySelector("#preview-title");
  const dialogDescription = document.querySelector("#preview-description");
  const dialogTags = document.querySelector("#preview-tags");
  const dialogLinks = document.querySelector("#preview-links");
  const previewStage = document.querySelector("#preview-stage");
  const previewNav = document.querySelector("#preview-nav");
  let previewObserver;

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  menuButton?.addEventListener("click", () => {
    const open = menu?.classList.toggle("is-open") ?? false;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.querySelector(".sr-only").textContent = open ? "Close navigation" : "Open navigation";
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  const mobileCard = (app, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mobile-card";
    button.style.setProperty("--card-color", app.color);
    button.style.setProperty("--phone-tilt", app.tilt);
    button.setAttribute("aria-label", `View ${app.name} screen gallery`);

    const top = document.createElement("div");
    top.className = "mobile-card-top";
    top.innerHTML = `
      <div class="mobile-card-index"><span>${String(index + 1).padStart(2, "0")} · Mobile</span><span>${app.tags[0]}</span></div>
      <h3></h3>
      <p></p>
    `;
    top.querySelector("h3").textContent = app.name;
    top.querySelector("p").textContent = app.summary;

    const phone = document.createElement("div");
    phone.className = "phone-shot";
    const image = document.createElement("img");
    image.src = app.screens[0].src;
    image.alt = `${app.name}: ${app.screens[0].label}`;
    image.loading = "lazy";
    phone.append(image);

    const action = document.createElement("span");
    action.className = "mobile-card-action";
    action.setAttribute("aria-hidden", "true");
    action.textContent = "↗";

    button.append(top, phone, action);
    button.addEventListener("click", () => openPreview(app));
    return button;
  };

  const openPreview = (app) => {
    if (!dialog || !previewStage || !previewNav) return;
    if (dialogKicker) dialogKicker.textContent = `Mobile application · ${app.screens.length} real screens`;
    dialogTitle.textContent = app.name;
    dialogDescription.textContent = app.description;
    dialogTags.replaceChildren(...app.tags.map((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      return item;
    }));
    if (dialogLinks) {
      const links = [
        { href: app.preview, label: "Open complete gallery ↗" },
        { href: app.source, label: "View source ↗" }
      ].map(({ href, label }) => {
        const link = document.createElement("a");
        link.href = href;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = label;
        return link;
      });
      dialogLinks.replaceChildren(...links);
    }

    const phones = app.screens.map((screen, index) => {
      const frame = document.createElement("figure");
      frame.className = "preview-phone";
      frame.id = `preview-${app.id}-${index}`;
      const image = document.createElement("img");
      image.src = screen.src;
      image.alt = `${app.name}: ${screen.label}`;
      image.loading = "lazy";
      image.decoding = "async";
      const caption = document.createElement("figcaption");
      caption.textContent = `${String(index + 1).padStart(2, "0")} · ${screen.label}`;
      frame.append(image, caption);
      return frame;
    });
    previewStage.replaceChildren(...phones);

    const controls = app.screens.map((screen, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = screen.label;
      button.classList.toggle("is-active", index === 0);
      button.addEventListener("click", () => {
        controls.forEach((control) => control.classList.remove("is-active"));
        button.classList.add("is-active");
        phones[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      });
      return button;
    });
    previewNav.replaceChildren(...controls);

    previewObserver?.disconnect();
    previewObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = phones.indexOf(visible.target);
      controls.forEach((control, controlIndex) => control.classList.toggle("is-active", controlIndex === index));
      const activeControl = controls[index];
      if (activeControl) {
        previewNav.scrollTo({
          left: Math.max(0, activeControl.offsetLeft - (previewNav.clientWidth - activeControl.clientWidth) / 2),
          behavior: "smooth"
        });
      }
    }, { root: previewStage, threshold: [0.55, 0.8] });
    phones.forEach((phone) => previewObserver.observe(phone));

    document.body.classList.add("dialog-open");
    dialog.showModal();
    dialog.scrollTop = 0;
    previewStage.scrollLeft = 0;
  };

  const closePreview = () => {
    if (!dialog?.open) return;
    dialog.close();
  };

  dialog?.querySelector(".dialog-close")?.addEventListener("click", closePreview);
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) closePreview();
  });
  dialog?.addEventListener("close", () => {
    previewObserver?.disconnect();
    document.body.classList.remove("dialog-open");
  });

  mobileGrid?.replaceChildren(...data.mobileApps.map(mobileCard));

  document.querySelectorAll("[data-mobile-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!mobileGrid) return;
      const direction = Number(button.dataset.mobileScroll) || 1;
      const card = mobileGrid.querySelector(".mobile-card");
      const distance = card ? card.getBoundingClientRect().width + 16 : mobileGrid.clientWidth * 0.8;
      mobileGrid.scrollBy({ left: distance * direction, behavior: "smooth" });
    });
  });

  const archiveCard = (project) => {
    const article = document.createElement("article");
    article.className = "archive-card";
    article.dataset.type = project.type;

    const title = document.createElement("h4");
    title.textContent = project.name;
    const description = document.createElement("p");
    description.textContent = project.description;
    const meta = document.createElement("div");
    meta.className = "archive-card-meta";
    const label = document.createElement("span");
    label.textContent = project.label;
    const link = document.createElement("a");
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.setAttribute("aria-label", `Open ${project.name}`);
    link.textContent = "↗";
    meta.append(label, link);
    article.append(title, description, meta);
    return article;
  };

  archiveGrid?.replaceChildren(...data.archive.map(archiveCard));

  const filterButtons = document.querySelectorAll("[data-filter]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const filter = button.dataset.filter;
      archiveGrid?.querySelectorAll(".archive-card").forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.type !== filter;
      });
    });
  });
})();
