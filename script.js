(() => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".nav-menu");
  const mobileGrid = document.querySelector("#mobile-grid");
  const mobileRailStatus = document.querySelector("#mobile-rail-status");
  const mobileRailProgress = document.querySelector("#mobile-rail-progress");
  const mobileScrollButtons = [...document.querySelectorAll("[data-mobile-scroll]")];
  const dialog = document.querySelector("#preview-dialog");
  const dialogKicker = document.querySelector("#preview-kicker");
  const dialogTitle = document.querySelector("#preview-title");
  const dialogDescription = document.querySelector("#preview-description");
  const dialogTags = document.querySelector("#preview-tags");
  const dialogLinks = document.querySelector("#preview-links");
  const dialogProblem = document.querySelector("#preview-problem");
  const dialogSolution = document.querySelector("#preview-solution");
  const dialogValue = document.querySelector("#preview-value");
  const previewCount = document.querySelector("#preview-count");
  const previewStage = document.querySelector("#preview-stage");
  const previewNav = document.querySelector("#preview-nav");
  const heroFilm = document.querySelector(".hero-film");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reducedMotion = reducedMotionQuery.matches;
  let previewObserver;
  let returnFocus;

  const syncHeroFilm = () => {
    if (!heroFilm) return;
    if (document.hidden || reducedMotionQuery.matches) {
      heroFilm.pause();
      return;
    }
    heroFilm.play().catch(() => {});
  };
  syncHeroFilm();
  document.addEventListener("visibilitychange", syncHeroFilm);
  reducedMotionQuery.addEventListener?.("change", syncHeroFilm);

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  menuButton?.addEventListener("click", () => {
    const open = menu?.classList.toggle("is-open") ?? false;
    menuButton.setAttribute("aria-expanded", String(open));
    const label = menuButton.querySelector(".sr-only");
    if (label) label.textContent = open ? "Close navigation" : "Open navigation";
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  const sectionLinks = [...(menu?.querySelectorAll('a[href^="#"]') || [])];
  const observedSections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if ("IntersectionObserver" in window && observedSections.length) {
    const navigationObserver = new IntersectionObserver((entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!current) return;
      sectionLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${current.target.id}`;
        link.classList.toggle("is-current", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-18% 0px -62%", threshold: [0, 0.15, 0.35] });
    observedSections.forEach((section) => navigationObserver.observe(section));
  }

  const mobileCard = (app, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mobile-card";
    button.id = `mobile-${app.id}`;
    button.style.setProperty("--card-color", app.color);
    button.style.setProperty("--phone-tilt", app.tilt);
    button.setAttribute("aria-label", `Open ${app.name} case study and ${app.screens.length} screen previews`);

    const top = document.createElement("div");
    top.className = "mobile-card-top";
    top.innerHTML = `
      <div class="mobile-card-index"><span>${String(index + 1).padStart(2, "0")} · Mobile</span><span>${app.tags[0]}</span></div>
      <h3></h3>
      <p></p>
      <span class="mobile-card-meta">Case study · ${app.screens.length} real screens</span>
    `;
    top.querySelector("h3").textContent = app.name;
    top.querySelector("p").textContent = app.summary;

    const phone = document.createElement("div");
    phone.className = "mobile-screen";
    const image = document.createElement("img");
    image.src = app.screens[0].src;
    image.alt = `${app.name}: ${app.screens[0].label}`;
    image.loading = index < 3 ? "eager" : "lazy";
    image.decoding = "async";
    phone.append(image);

    const action = document.createElement("span");
    action.className = "mobile-card-action";
    action.setAttribute("aria-hidden", "true");
    action.textContent = "View →";

    button.append(top, phone, action);
    button.addEventListener("click", () => openPreview(app, button));
    return button;
  };

  const setActivePreview = (index, controls) => {
    controls.forEach((control, controlIndex) => {
      const active = controlIndex === index;
      control.classList.toggle("is-active", active);
      control.setAttribute("aria-pressed", String(active));
    });
    const activeControl = controls[index];
    if (activeControl) {
      previewNav?.scrollTo({
        left: Math.max(0, activeControl.offsetLeft - (previewNav.clientWidth - activeControl.clientWidth) / 2),
        behavior: reducedMotion ? "auto" : "smooth"
      });
    }
  };

  const openPreview = (app, trigger) => {
    if (!dialog || !previewStage || !previewNav) return;
    returnFocus = trigger;
    if (dialogKicker) dialogKicker.textContent = "Mobile application · Product case study";
    if (dialogTitle) dialogTitle.textContent = app.name;
    if (dialogDescription) dialogDescription.textContent = app.description;
    if (dialogProblem) dialogProblem.textContent = app.problem;
    if (dialogSolution) dialogSolution.textContent = app.solution;
    if (dialogValue) dialogValue.textContent = app.value;
    if (previewCount) previewCount.textContent = `${app.screens.length} screens`;

    dialogTags?.replaceChildren(...app.tags.map((tag) => {
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
      image.loading = index < 2 ? "eager" : "lazy";
      image.decoding = "async";
      const caption = document.createElement("figcaption");
      caption.textContent = `${String(index + 1).padStart(2, "0")} · ${screen.label}`;
      image.addEventListener("error", () => frame.classList.add("is-unavailable"), { once: true });
      frame.append(image, caption);
      return frame;
    });
    previewStage.replaceChildren(...phones);

    const controls = app.screens.map((screen, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = screen.label;
      button.setAttribute("aria-label", `Show screen ${index + 1}: ${screen.label}`);
      button.addEventListener("click", () => {
        setActivePreview(index, controls);
        phones[index].scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", inline: "center", block: "nearest" });
      });
      return button;
    });
    previewNav.replaceChildren(...controls);
    setActivePreview(0, controls);

    previewObserver?.disconnect();
    if ("IntersectionObserver" in window) {
      previewObserver = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = phones.indexOf(visible.target);
        if (index >= 0) setActivePreview(index, controls);
      }, { root: previewStage, threshold: [0.55, 0.8] });
      phones.forEach((phone) => previewObserver.observe(phone));
    }

    previewStage.onkeydown = (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const activeIndex = Math.max(0, controls.findIndex((control) => control.classList.contains("is-active")));
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(phones.length - 1, activeIndex + direction));
      setActivePreview(nextIndex, controls);
      phones[nextIndex].scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", inline: "center", block: "nearest" });
    };

    document.body.classList.add("dialog-open");
    dialog.showModal();
    dialog.scrollTop = 0;
    previewStage.scrollLeft = 0;
  };

  const closePreview = () => {
    if (dialog?.open) dialog.close();
  };

  dialog?.querySelector(".dialog-close")?.addEventListener("click", closePreview);
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) closePreview();
  });
  dialog?.addEventListener("close", () => {
    previewObserver?.disconnect();
    document.body.classList.remove("dialog-open");
    returnFocus?.focus({ preventScroll: true });
  });

  const mobileCards = data.mobileApps.map(mobileCard);
  let activeMobileIndex = 0;
  const updateMobileRail = (index) => {
    activeMobileIndex = Math.max(0, Math.min(mobileCards.length - 1, index));
    const app = data.mobileApps[activeMobileIndex];
    if (mobileRailStatus) {
      mobileRailStatus.textContent = `${String(activeMobileIndex + 1).padStart(2, "0")} / ${String(mobileCards.length).padStart(2, "0")} · ${app.name}`;
    }
    if (mobileRailProgress) {
      mobileRailProgress.style.width = `${((activeMobileIndex + 1) / mobileCards.length) * 100}%`;
    }
    mobileCards.forEach((card, cardIndex) => card.classList.toggle("is-rail-active", cardIndex === activeMobileIndex));
    mobileScrollButtons.forEach((button) => {
      const direction = Number(button.dataset.mobileScroll) || 1;
      button.disabled = direction < 0 ? activeMobileIndex === 0 : activeMobileIndex === mobileCards.length - 1;
    });
  };

  mobileGrid?.replaceChildren(...mobileCards);
  updateMobileRail(0);

  if (mobileGrid) {
    let railFrame;
    const syncMobileRail = () => {
      railFrame = undefined;
      const remainingScroll = mobileGrid.scrollWidth - mobileGrid.clientWidth - mobileGrid.scrollLeft;
      if (remainingScroll <= 2) {
        updateMobileRail(mobileCards.length - 1);
        return;
      }
      const railLeft = mobileGrid.getBoundingClientRect().left;
      const closestIndex = mobileCards.reduce((closest, card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left - railLeft);
        return distance < closest.distance ? { index, distance } : closest;
      }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;
      updateMobileRail(closestIndex);
    };
    mobileGrid.addEventListener("scroll", () => {
      if (railFrame) return;
      railFrame = requestAnimationFrame(syncMobileRail);
    }, { passive: true });
  }

  mobileScrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!mobileGrid) return;
      const direction = Number(button.dataset.mobileScroll) || 1;
      const nextIndex = Math.max(0, Math.min(mobileCards.length - 1, activeMobileIndex + direction));
      mobileCards[nextIndex]?.scrollIntoView({ inline: "start", block: "nearest", behavior: reducedMotion ? "auto" : "smooth" });
      updateMobileRail(nextIndex);
    });
  });
  mobileGrid?.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = Math.max(0, Math.min(mobileCards.length - 1, activeMobileIndex + direction));
    mobileCards[nextIndex]?.scrollIntoView({ inline: "start", block: "nearest", behavior: reducedMotion ? "auto" : "smooth" });
    updateMobileRail(nextIndex);
  });

  if (window.location.hash) {
    const anchorId = decodeURIComponent(window.location.hash.slice(1));
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const target = document.getElementById(anchorId);
      if (!target) return;
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      target.scrollIntoView({ block: "start" });
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    }));
  }

  const revealItems = document.querySelectorAll(".section-heading, .feature-card, .mobile-card, .web-card, .about-grid");
  if ("IntersectionObserver" in window && !reducedMotion) {
    document.body.classList.add("reveal-ready");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 45}ms`);
      revealObserver.observe(item);
    });
  }

  const projectDisclosures = document.querySelectorAll(".compact-case");
  projectDisclosures.forEach((disclosure) => {
    disclosure.addEventListener("toggle", () => {
      if (!disclosure.open) return;
      projectDisclosures.forEach((other) => {
        if (other !== disclosure) other.open = false;
      });
    });
  });
})();
