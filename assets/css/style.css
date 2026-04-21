(() => {
  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

  /* =========================
     CONFIG BÁSICA DE IDIOMA
  ========================= */
  const translations = {
    pt: {
      rotateTitle: "Gire o dispositivo",
      rotateText: "Este site foi pensado para navegação vertical.",
      rotateButton: "Continuar assim mesmo"
    },
    en: {
      rotateTitle: "Rotate your device",
      rotateText: "This website was designed for vertical browsing.",
      rotateButton: "Continue anyway"
    },
    es: {
      rotateTitle: "Gira el dispositivo",
      rotateText: "Este sitio fue pensado para navegación vertical.",
      rotateButton: "Continuar de todos modos"
    }
  };

  const applyLanguage = (lang) => {
    const dict = translations[lang] || translations.pt;

    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : lang === "en" ? "en" : "es";

    $$("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (dict[key]) node.textContent = dict[key];
    });

    $$(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });

    try {
      localStorage.setItem("edney_lang", lang);
    } catch (error) {
      console.warn("Não foi possível salvar idioma:", error);
    }
  };

  const savedLang = (() => {
    try {
      return localStorage.getItem("edney_lang") || "pt";
    } catch {
      return "pt";
    }
  })();

  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage(savedLang);

  /* =========================
     MENU MOBILE
  ========================= */
  const menuToggle = $("#menuToggle");
  const mobileMenu = $("#mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-open");
      document.body.classList.toggle("menu-open");
    });

    $$("#mobileMenu a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      });
    });
  }

  /* =========================
     SCROLL SUAVE
  ========================= */
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;

      const target = $(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.replaceState(null, "", id);
    });
  });

  /* =========================
     REVEAL ON SCROLL
  ========================= */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.14 }
  );

  $$(".reveal").forEach((el) => revealObserver.observe(el));

  /* =========================
     ORIENTATION OVERLAY
  ========================= */
  const rotateOverlay = $("#rotateOverlay");
  const dismissBtn = rotateOverlay?.querySelector("[data-rotate-dismiss]");
  const dismissedKey = "edney_rotate_dismissed";

  dismissBtn?.addEventListener("click", () => {
    rotateOverlay.classList.remove("is-on");
    try {
      localStorage.setItem(dismissedKey, "1");
    } catch (error) {
      console.warn("Não foi possível salvar dismiss do overlay:", error);
    }
  });

  const checkOrientation = () => {
    if (!rotateOverlay) return;

    const dismissed = (() => {
      try {
        return localStorage.getItem(dismissedKey) === "1";
      } catch {
        return false;
      }
    })();

    if (dismissed) return;

    const isLandscapeMobile =
      window.innerWidth > window.innerHeight && window.innerWidth < 980;

    rotateOverlay.classList.toggle("is-on", isLandscapeMobile);
  };

  window.addEventListener("resize", checkOrientation, { passive: true });
  checkOrientation();

  /* =========================
     HERO MOTION
  ========================= */
  const heroFrame = $("#heroFrame");
  const spacer = $(".hero-visual__spacer");

  const animateHero = () => {
    if (!heroFrame || !spacer) return;

    const rect = spacer.getBoundingClientRect();
    const viewport = window.innerHeight;
    const start = viewport * 0.86;
    const end = -viewport * 0.22;
    const progress = Math.min(
      1,
      Math.max(0, (start - rect.top) / (start - end))
    );

    const scale = 1 - 0.12 * progress;
    const translateY = 16 * progress;
    const radius = 26 * progress;
    const alpha = 0.42 * progress;

    heroFrame.style.transform = `translateY(${translateY}px) scale(${scale})`;
    heroFrame.style.borderRadius = `${radius}px`;
    heroFrame.style.boxShadow = `0 30px 90px rgba(0,0,0,${alpha})`;
  };

  window.addEventListener("scroll", animateHero, { passive: true });
  window.addEventListener("resize", animateHero, { passive: true });
  animateHero();

  /* =========================
     COUNTERS
  ========================= */
  const formatCounter = (value) => {
    if (value >= 1000000) {
      const short = value / 1000000;
      return `+${Number.isInteger(short) ? short : short.toFixed(1)}M`;
    }
    return `${value}+`;
  };

  const animateCounter = (el) => {
    const target = Number(el.dataset.counter || 0);
    if (!target) return;

    const duration = 1400;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);

      if (target >= 1000000) {
        el.textContent = formatCounter(current);
      } else if (target === 44) {
        el.textContent = `${current}+`;
      } else {
        el.textContent = String(current);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        if (target >= 1000000) {
          el.textContent = "+6M";
        } else if (target === 44) {
          el.textContent = "44+";
        } else {
          el.textContent = String(target);
        }
      }
    };

    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  $$("[data-counter]").forEach((el) => counterObserver.observe(el));

  /* =========================
     LOAD JSON
  ========================= */
  const loadJSON = async (path) => {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Erro ao carregar ${path}`);
    }
    return response.json();
  };

  /* =========================
     TRACKS / INÉDITAS
  ========================= */
  const renderTracks = async () => {
    const root = $("#tracks");
    if (!root) return;

    try {
      const json = await loadJSON("data/composicoes.json");

      if (!Array.isArray(json)) {
        root.innerHTML = "";
        return;
      }

      const usableTracks = json
        .filter((track) => track && track.titulo && track.arquivo)
        .slice(0, 4);

      root.innerHTML = usableTracks.map((track) => `
        <article class="track">
          <div class="track__top">
            <div>
              <h3 class="track__title">${track.titulo || ""}</h3>
              <p class="track__meta">${track.artista || ""}</p>
            </div>
            ${track.destaque ? `<span class="track__badge">Destaque</span>` : ""}
          </div>
          <audio controls preload="none" src="${track.arquivo}"></audio>
        </article>
      `).join("");
    } catch (error) {
      console.error("Erro ao renderizar tracks:", error);
      root.innerHTML = "";
    }
  };

  /* =========================
     LIGHTBOX MEMORIAL
  ========================= */
  const bindLightbox = () => {
    const lightbox = $("#lightbox");
    const lightboxImage = $("#lightboxImage");
    const lightboxClose = $("#lightboxClose");
    const items = $$(".memory-card");

    if (!lightbox || !lightboxImage || !lightboxClose || !items.length) return;

    const open = (src, alt) => {
      lightboxImage.src = src;
      lightboxImage.alt = alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("menu-open");
    };

    const close = () => {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.src = "";
      lightboxImage.alt = "";
      document.body.classList.remove("menu-open");
    };

    items.forEach((item) => {
      item.addEventListener("click", () => {
        const img = $("img", item);
        if (img?.src) {
          open(img.src, img.alt || "");
        }
      });
    });

    lightboxClose.addEventListener("click", close);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        close();
      }
    });
  };

  /* =========================
     INIT
  ========================= */
  renderTracks();
  bindLightbox();
})();