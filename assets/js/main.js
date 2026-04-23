(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  /* =========================
     IDIOMA BÁSICO
  ========================= */
  const translations = {
    pt: {},
    en: {},
    es: {}
  };

  const applyLanguage = (lang) => {
    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : lang === "en" ? "en" : "es";

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

    document.addEventListener("click", (event) => {
      const clickedInsideMenu = mobileMenu.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle && mobileMenu.classList.contains("is-open")) {
        mobileMenu.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      }
    });
  }

  /* =========================
     SCROLL SUAVE
  ========================= */
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = $(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.replaceState(null, "", targetId);
    });
  });

  /* =========================
     REVEAL
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

  $$(".reveal").forEach((element) => revealObserver.observe(element));

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
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));

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
  const formatCounter = (value, target) => {
    if (target >= 1000000) {
      const short = value / 1000000;
      return `+${Number.isInteger(short) ? short : short.toFixed(1)}M`;
    }
    if (target === 44) {
      return `${value}+`;
    }
    return String(value);
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

      el.textContent = formatCounter(current, target);

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
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
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

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) close();
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        close();
      }
    });
  };

  /* =========================
     ÁUDIOS: 1 POR VEZ
  ========================= */
  const bindAudioPause = () => {
    const audios = $$("audio");

    audios.forEach((audio) => {
      audio.addEventListener("play", () => {
        audios.forEach((other) => {
          if (other !== audio) other.pause();
        });
      });
    });
  };

  /* =========================
     INIT
  ========================= */
  renderTracks().then(() => {
    bindAudioPause();
  });

  bindLightbox();
})();