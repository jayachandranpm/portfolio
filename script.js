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
  const hero = document.querySelector(".hero");
  const motionToggle = document.querySelector(".motion-toggle");
  const motionToggleLabel = document.querySelector(".motion-toggle-label");
  const motionToggleSymbol = document.querySelector(".motion-toggle-symbol");
  const storyGuide = document.querySelector(".story-guide");
  const guideCharacter = document.querySelector(".guide-character");
  const guideBubbleKicker = document.querySelector(".guide-bubble small");
  const guideBubbleCopy = document.querySelector(".guide-bubble strong");
  let previewObserver;

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasPrecisePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const cinematicScenes = [
    hero,
    document.querySelector("#featured"),
    document.querySelector("#mobile"),
    document.querySelector("#experiments"),
    document.querySelector("#about"),
    document.querySelector("#contact")
  ].filter(Boolean);

  cinematicScenes.forEach((scene, sceneIndex) => {
    scene.classList.add("cinematic-scene");
    if (!motionAllowed) return;

    const atmosphere = document.createElement("div");
    atmosphere.className = "atmosphere-layer";
    atmosphere.setAttribute("aria-hidden", "true");
    const palette = ["#7f9b70", "#c98a55", "#ecd68b", "#9bb9a8"];

    for (let index = 0; index < 4; index += 1) {
      const mote = document.createElement("span");
      mote.className = "atmosphere-mote";
      if (index % 3 === 2) mote.classList.add("is-seed");
      const duration = 12 + ((index * 3 + sceneIndex * 2) % 11);
      mote.style.setProperty("--mote-x", `${(index * 19 + sceneIndex * 13) % 94}%`);
      mote.style.setProperty("--mote-y", `${12 + ((index * 31 + sceneIndex * 17) % 76)}%`);
      mote.style.setProperty("--mote-size", `${4 + ((index + sceneIndex) % 5)}px`);
      mote.style.setProperty("--mote-duration", `${duration}s`);
      mote.style.setProperty("--mote-delay", `${-((index * 1.9 + sceneIndex) % duration)}s`);
      mote.style.setProperty("--mote-color", palette[(index + sceneIndex) % palette.length]);
      atmosphere.append(mote);
    }
    scene.append(atmosphere);
  });

  if (motionAllowed && "IntersectionObserver" in window) {
    document.body.classList.add("cinematic-ready");
    const sceneObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("scene-active", entry.isIntersecting);
      });
    }, { rootMargin: "12% 0px 12%", threshold: 0.08 });
    cinematicScenes.forEach((scene) => sceneObserver.observe(scene));

    let cinematicFrame = 0;
    const updateCinematicDepth = () => {
      cinematicFrame = 0;
      if (document.body.classList.contains("motion-paused")) return;
      const viewportCenter = window.innerHeight / 2;
      cinematicScenes.forEach((scene) => {
        const bounds = scene.getBoundingClientRect();
        const sceneCenter = bounds.top + bounds.height / 2;
        const distance = (sceneCenter - viewportCenter) / Math.max(window.innerHeight, 1);
        const drift = Math.max(-24, Math.min(24, distance * -18));
        scene.style.setProperty("--scene-drift", `${drift.toFixed(2)}px`);
      });
      hero?.style.setProperty("--hero-scroll", `${Math.min(window.scrollY * .055, 34).toFixed(2)}px`);
      document.querySelector("#contact")?.style.setProperty("--closing-shift", `${Math.max(-18, Math.min(18, (window.innerHeight - (document.querySelector("#contact")?.getBoundingClientRect().top || 0)) * .025)).toFixed(2)}px`);
    };
    const requestCinematicDepth = () => {
      if (cinematicFrame) return;
      cinematicFrame = requestAnimationFrame(updateCinematicDepth);
    };
    updateCinematicDepth();
    window.addEventListener("scroll", requestCinematicDepth, { passive: true });
    window.addEventListener("resize", requestCinematicDepth, { passive: true });
  } else {
    cinematicScenes.forEach((scene) => scene.classList.add("scene-active"));
  }

  const guideStops = [
    { name: "Courier", copy: "Begin with selected work", target: "#featured", sprite: "sprite-one" },
    { name: "Moss gardener", copy: "Follow me to the pocket worlds", target: "#mobile", sprite: "sprite-two" },
    { name: "Lantern owl", copy: "Fly on to web and AI explorations", target: "#experiments", sprite: "sprite-three" },
    { name: "Cloud shepherd", copy: "Continue to meet the maker", target: "#about", sprite: "sprite-four" },
    { name: "Workshop helper", copy: "The workshop is open below", target: "#contact", sprite: "sprite-five" },
    { name: "Wish spirit", copy: "Return to the beginning", target: "#top", sprite: "sprite-six" }
  ];
  const guidePhysics = {
    x: window.innerWidth + 20,
    y: window.innerHeight,
    vx: 0,
    vy: 0,
    phase: 0,
    lastTime: 0,
    frame: 0,
    scrolling: false,
    activeIndex: -1,
    paused: !motionAllowed
  };
  let guideIdleTimer = 0;
  let guideAnnouncementTimer = 0;
  const guideSpriteClasses = guideStops.map((stop) => stop.sprite);

  try {
    if (motionAllowed && localStorage.getItem("portfolio-motion") === "paused") guidePhysics.paused = true;
  } catch (_) {
    // Motion preference remains session-only when storage is unavailable.
  }

  const guideLayout = () => {
    const compact = window.innerWidth <= 780;
    const width = compact ? 188 : 270;
    const height = compact ? 136 : 174;
    return {
      floor: Math.max(76, window.innerHeight - height - (compact ? 8 : 14)),
      restingX: Math.max(8, window.innerWidth - width - (compact ? 8 : 16)),
      hiddenX: window.innerWidth - (compact ? 146 : 215)
    };
  };

  const setMotionToggleState = () => {
    document.body.classList.toggle("motion-paused", guidePhysics.paused);
    motionToggle?.setAttribute("aria-pressed", String(guidePhysics.paused));
    motionToggle?.setAttribute("aria-label", guidePhysics.paused ? "Resume character motion" : "Pause character motion");
    if (motionToggleLabel) motionToggleLabel.textContent = guidePhysics.paused ? "Resume motion" : "Pause motion";
    if (motionToggleSymbol) motionToggleSymbol.textContent = guidePhysics.paused ? "▶" : "Ⅱ";
  };

  const showGuideAnnouncement = () => {
    if (!storyGuide) return;
    clearTimeout(guideAnnouncementTimer);
    storyGuide.classList.add("is-announcing");
    guideAnnouncementTimer = window.setTimeout(() => storyGuide.classList.remove("is-announcing"), 3600);
  };

  const setGuideStop = (index, announce = true) => {
    if (!guideCharacter || !guideStops[index] || index === guidePhysics.activeIndex) return;
    const stop = guideStops[index];
    const hadGuide = guidePhysics.activeIndex >= 0;
    guidePhysics.activeIndex = index;
    guidePhysics.vy = hadGuide && !guidePhysics.paused ? -7.4 : 0;
    guidePhysics.vx += hadGuide && !guidePhysics.paused ? 3.2 : 0;
    guideCharacter.classList.remove(...guideSpriteClasses);
    guideCharacter.classList.add(stop.sprite);
    guideCharacter.setAttribute("aria-label", `${stop.name}: ${stop.copy}`);
    if (guideBubbleKicker) guideBubbleKicker.textContent = stop.name;
    if (guideBubbleCopy) guideBubbleCopy.textContent = stop.copy;
    if (announce) showGuideAnnouncement();
  };

  const updateActiveGuide = () => {
    const marker = window.innerHeight * .48;
    let nextIndex = 0;
    cinematicScenes.forEach((scene, index) => {
      if (scene.getBoundingClientRect().top <= marker) nextIndex = index;
    });
    setGuideStop(Math.min(nextIndex, guideStops.length - 1));
  };

  const renderGuidePhysics = (time) => {
    if (!storyGuide || !guideCharacter || guidePhysics.paused) return;
    const layout = guideLayout();
    const delta = guidePhysics.lastTime ? Math.min(2.4, (time - guidePhysics.lastTime) / 16.667) : 1;
    guidePhysics.lastTime = time;

    // Semi-implicit Euler integration: a damped horizontal spring plus vertical
    // gravity and an inelastic floor collision keeps entrances weighty, not floaty.
    const targetX = guidePhysics.scrolling ? layout.hiddenX : layout.restingX;
    const springAcceleration = (targetX - guidePhysics.x) * .048;
    guidePhysics.vx = (guidePhysics.vx + springAcceleration * delta) * Math.pow(.74, delta);
    guidePhysics.x += guidePhysics.vx * delta;

    guidePhysics.vy += .58 * delta;
    guidePhysics.y += guidePhysics.vy * delta;
    let impact = 0;
    if (guidePhysics.y >= layout.floor) {
      impact = Math.abs(guidePhysics.vy);
      guidePhysics.y = layout.floor;
      guidePhysics.vy = impact > 1.25 ? -impact * .2 : 0;
    }

    const grounded = Math.abs(guidePhysics.y - layout.floor) < .8;
    const speed = Math.abs(guidePhysics.vx);
    guidePhysics.phase += (.065 + speed * .16) * delta;
    const walk = grounded && speed > .22 ? Math.abs(Math.sin(guidePhysics.phase)) : 0;
    const airHeight = Math.max(0, layout.floor - guidePhysics.y);
    const stretch = Math.min(.08, Math.abs(guidePhysics.vy) * .007);
    const squash = Math.min(.1, impact * .01);
    const lean = Math.max(-7, Math.min(7, guidePhysics.vx * .7));

    storyGuide.style.transform = `translate3d(${guidePhysics.x.toFixed(2)}px, ${guidePhysics.y.toFixed(2)}px, 0)`;
    guideCharacter.style.transform = `translateY(${(-walk * 3).toFixed(2)}px) rotate(${lean.toFixed(2)}deg) scaleX(${(-1 + squash).toFixed(3)}) scaleY(${(1 + stretch - squash).toFixed(3)})`;
    storyGuide.style.setProperty("--shadow-scale", `${Math.max(.62, 1 - airHeight / 180).toFixed(3)}`);
    storyGuide.style.setProperty("--shadow-opacity", `${Math.max(.12, .5 - airHeight / 280).toFixed(3)}`);
    storyGuide.style.setProperty("--dust-opacity", `${grounded && speed > .7 ? Math.min(.62, speed / 5).toFixed(3) : 0}`);
    storyGuide.style.setProperty("--dust-shift", `${(-Math.min(12, speed * 2)).toFixed(2)}px`);
    storyGuide.style.setProperty("--dust-scale", `${Math.min(1.35, .65 + speed * .08).toFixed(3)}`);
    storyGuide.classList.add("is-ready");
    guidePhysics.frame = requestAnimationFrame(renderGuidePhysics);
  };

  const startGuidePhysics = () => {
    if (!motionAllowed || guidePhysics.paused || guidePhysics.frame) return;
    guidePhysics.lastTime = 0;
    guidePhysics.frame = requestAnimationFrame(renderGuidePhysics);
  };

  const stopGuidePhysics = () => {
    cancelAnimationFrame(guidePhysics.frame);
    guidePhysics.frame = 0;
  };

  const placeGuideAtRest = () => {
    if (!storyGuide) return;
    const layout = guideLayout();
    guidePhysics.x = layout.restingX;
    guidePhysics.y = layout.floor;
    guidePhysics.vx = 0;
    guidePhysics.vy = 0;
    storyGuide.style.transform = `translate3d(${layout.restingX}px, ${layout.floor}px, 0)`;
    guideCharacter?.style.setProperty("transform", "translateY(0) rotate(0) scaleX(-1) scaleY(1)");
    storyGuide.classList.add("is-ready");
  };

  const setMotionPaused = (paused, persist = true) => {
    guidePhysics.paused = paused || !motionAllowed;
    setMotionToggleState();
    if (guidePhysics.paused) stopGuidePhysics();
    else startGuidePhysics();
    if (persist && motionAllowed) {
      try {
        localStorage.setItem("portfolio-motion", guidePhysics.paused ? "paused" : "playing");
      } catch (_) {
        // Ignore storage restrictions; the control still works for this visit.
      }
    }
  };

  updateActiveGuide();
  setMotionToggleState();
  if (motionAllowed && !guidePhysics.paused) startGuidePhysics();
  else if (motionAllowed) placeGuideAtRest();
  else {
    placeGuideAtRest();
    motionToggle?.setAttribute("hidden", "");
  }

  motionToggle?.addEventListener("click", () => setMotionPaused(!guidePhysics.paused));
  guideCharacter?.addEventListener("pointerdown", () => {
    if (!guidePhysics.paused) guidePhysics.vy = -5.5;
  });
  guideCharacter?.addEventListener("click", () => {
    const stop = guideStops[guidePhysics.activeIndex];
    const target = stop ? document.querySelector(stop.target) : null;
    if (!target) return;
    storyGuide?.classList.remove("is-announcing");
    if (!guidePhysics.paused) guidePhysics.vy = -10.5;
    window.setTimeout(() => target.scrollIntoView({ behavior: motionAllowed && !guidePhysics.paused ? "smooth" : "auto", block: "start" }), guidePhysics.paused ? 0 : 210);
  });

  const handleGuideScroll = () => {
    updateActiveGuide();
    if (!storyGuide) return;
    guidePhysics.scrolling = true;
    storyGuide.classList.add("is-scrolling");
    clearTimeout(guideIdleTimer);
    guideIdleTimer = window.setTimeout(() => {
      guidePhysics.scrolling = false;
      storyGuide.classList.remove("is-scrolling");
      showGuideAnnouncement();
    }, 260);
  };
  window.addEventListener("scroll", handleGuideScroll, { passive: true });
  window.addEventListener("resize", () => {
    updateActiveGuide();
    if (guidePhysics.paused) placeGuideAtRest();
  }, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopGuidePhysics();
    else startGuidePhysics();
  });

  if (hero && motionAllowed && hasPrecisePointer) {
    let pointerFrame;
    const updateHeroDepth = (event) => {
      if (guidePhysics.paused) return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
        hero.style.setProperty("--hero-x", `${x * -7}px`);
        hero.style.setProperty("--hero-y", `${y * -4}px`);
        hero.style.setProperty("--note-x", `${x * 5}px`);
        hero.style.setProperty("--note-y", `${y * 4}px`);
      });
    };
    hero.addEventListener("pointermove", updateHeroDepth, { passive: true });
    hero.addEventListener("pointerleave", () => {
      hero.style.setProperty("--hero-x", "0px");
      hero.style.setProperty("--hero-y", "0px");
      hero.style.setProperty("--note-x", "0px");
      hero.style.setProperty("--note-y", "0px");
    });
  }

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
    button.id = `mobile-${app.id}`;
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
    phone.className = "mobile-screen";
    phone.style.setProperty("--screen-image", `url("${app.screens[0].src}")`);
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

  // Dynamic project cards change the document height after the browser's first
  // anchor calculation. Re-apply deep links once the rendered content is stable.
  if (window.location.hash) {
    const anchorId = decodeURIComponent(window.location.hash.slice(1));
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.getElementById(anchorId)?.scrollIntoView({ block: "start" });
    }));
  }

  const revealItems = document.querySelectorAll(".section-heading, .feature-card, .mobile-card, .web-card, .archive-card, .about-grid");
  if ("IntersectionObserver" in window && motionAllowed) {
    document.body.classList.add("reveal-ready");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);
      revealObserver.observe(item);
    });
  }

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
