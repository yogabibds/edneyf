(() => {
  const $ = (q, el = document) => el.querySelector(q);
  const $$ = (q, el = document) => Array.from(el.querySelectorAll(q));

  // Footer year
  const y = $("#y");
  if (y) y.textContent = String(new Date().getFullYear());

  // Optional: rotate overlay (portrait only)
  const rotateOverlay = $("#rotateOverlay");
  function updateRotateOverlay() {
    if (!rotateOverlay) return;
    const isLandscape = window.innerWidth > window.innerHeight;
    // se você NÃO quiser forçar retrato, mude para "false"
    rotateOverlay.style.display = isLandscape && window.innerWidth < 900 ? "flex" : "none";
  }
  window.addEventListener("resize", updateRotateOverlay);
  updateRotateOverlay();

  // Smooth anchor scroll
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = $(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 66;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  // Reveal on scroll
  const reveals = $$(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) ent.target.classList.add("is-visible");
    });
  }, { threshold: 0.18 });
  reveals.forEach(el => io.observe(el));

  // Hero -> virar card (progresso 0..1)
  const heroWrap = $("#heroWrap");
  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }

  let ticking = false;
  function updateHeroProgress() {
    ticking = false;
    if (!heroWrap) return;

    const rect = heroWrap.getBoundingClientRect();
    // quanto já “andou” dentro do wrap (0..1)
    const start = 0; // topo do viewport
    const total = rect.height; // referência
    const moved = clamp(-rect.top + start, 0, total);
    const p = total ? (moved / total) : 0;

    document.documentElement.style.setProperty("--heroP", String(clamp(p, 0, 1)));
  }

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateHeroProgress);
  }, { passive: true });
  window.addEventListener("resize", updateHeroProgress);
  updateHeroProgress();

  // SVG icons
  const ICONS = {
    spotify: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm4.586 14.43a.75.75 0 0 1-1.032.243c-2.826-1.726-6.39-2.118-10.59-1.165a.75.75 0 1 1-.33-1.463c4.598-1.041 8.53-.59 11.7 1.347a.75.75 0 0 1 .252 1.038Zm.93-2.83a.9.9 0 0 1-1.238.292c-3.235-1.988-8.17-2.564-12.004-1.4a.9.9 0 1 1-.524-1.722c4.386-1.332 9.834-.685 13.548 1.6a.9.9 0 0 1 .218 1.23Zm.08-3.018c-3.877-2.304-10.277-2.516-13.98-1.391a1.05 1.05 0 0 1-.61-2.01c4.255-1.292 11.311-1.042 15.772 1.61a1.05 1.05 0 1 1-1.182 1.791Z"/>
      </svg>`,
    youtube: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M21.6 7.2a3 3 0 0 0-2.12-2.12C17.64 4.5 12 4.5 12 4.5s-5.64 0-7.48.58A3 3 0 0 0 2.4 7.2 31.7 31.7 0 0 0 2 12s.1 3.05.4 4.8a3 3 0 0 0 2.12 2.12c1.84.58 7.48.58 7.48.58s5.64 0 7.48-.58a3 3 0 0 0 2.12-2.12c.3-1.75.4-4.8.4-4.8s-.1-3.05-.4-4.8ZM10.5 15.3V8.7L16.2 12l-5.7 3.3Z"/>
      </svg>`
  };

  function iconLink(href, label, type) {
    const a = document.createElement("a");
    a.className = "iconLink";
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    a.ariaLabel = label;
    a.innerHTML = ICONS[type] || "";
    return a;
  }

  // Discografia cards via data/playlists.json
  async function loadDiscografia() {
    const mount = $("#discografiaCards");
    if (!mount) return;

    try {
      const res = await fetch("data/playlists.json", { cache: "no-store" });
      const data = await res.json();

      mount.innerHTML = "";
      data.items.forEach(item => {
        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
          <div class="card__media cinema">
            <img src="${item.cover}" alt="${item.title}" loading="lazy">
          </div>
          <div class="card__body">
            <h3 class="card__title">${item.title}</h3>
            <p class="card__meta">${item.subtitle}</p>
            <div class="card__actions"></div>
          </div>
        `;

        const actions = $(".card__actions", card);
        if (item.spotify) actions.appendChild(iconLink(item.spotify, "Abrir no Spotify", "spotify"));
        if (item.youtube) actions.appendChild(iconLink(item.youtube, "Abrir no YouTube", "youtube"));

        mount.appendChild(card);
      });
    } catch (err) {
      // fallback simples
      mount.innerHTML = `<p class="muted">Não foi possível carregar a discografia (data/playlists.json).</p>`;
      console.error(err);
    }
  }

  // Player via data/composicoes-selecao.json
  function fmtTime(sec) {
    if (!isFinite(sec) || sec < 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  async function loadPlayer() {
    const audio = $("#audio");
    const tracklist = $("#tracklist");
    const nowTitle = $("#nowTitle");
    const nowLinks = $("#nowLinks");
    const seekRange = $("#seekRange");
    const tCur = $("#tCur");
    const tDur = $("#tDur");

    const btnPlay = $("#btnPlay");
    const btnPrev = $("#btnPrev");
    const btnNext = $("#btnNext");

    if (!audio || !tracklist || !btnPlay) return;

    let tracks = [];
    let idx = 0;
    let isSeeking = false;

    function setNow(i) {
      idx = (i + tracks.length) % tracks.length;
      const tr = tracks[idx];

      nowTitle.textContent = tr.title || "—";
      nowLinks.innerHTML = "";

      if (tr.spotify) {
        const a = document.createElement("a");
        a.className = "pillLink";
        a.href = tr.spotify;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = "Spotify";
        nowLinks.appendChild(a);
      }
      if (tr.youtube) {
        const a = document.createElement("a");
        a.className = "pillLink";
        a.href = tr.youtube;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = "YouTube";
        nowLinks.appendChild(a);
      }

      audio.src = tr.src;
      audio.load();

      // UI active row
      $$(".track", tracklist).forEach((row, rIdx) => {
        row.classList.toggle("is-active", rIdx === idx);
      });
    }

    function renderList() {
      tracklist.innerHTML = "";
      tracks.forEach((tr, i) => {
        const row = document.createElement("div");
        row.className = "track";
        row.innerHTML = `
          <div class="track__left">
            <div class="track__name">${tr.title}</div>
            <div class="track__desc">${tr.note || "Edney Fernandes"}</div>
          </div>
          <button class="track__btn" type="button">Ouvir</button>
        `;
        $("button", row).addEventListener("click", async () => {
          setNow(i);
          await audio.play();
        });
        tracklist.appendChild(row);
      });
    }

    function syncPlayBtn() {
      btnPlay.textContent = audio.paused ? "▶" : "❚❚";
    }

    // Events
    btnPlay.addEventListener("click", async () => {
      try {
        if (audio.paused) await audio.play();
        else audio.pause();
      } catch {}
    });

    btnPrev.addEventListener("click", async () => {
      setNow(idx - 1);
      try { await audio.play(); } catch {}
    });

    btnNext.addEventListener("click", async () => {
      setNow(idx + 1);
      try { await audio.play(); } catch {}
    });

    audio.addEventListener("play", syncPlayBtn);
    audio.addEventListener("pause", syncPlayBtn);
    audio.addEventListener("ended", async () => {
      setNow(idx + 1);
      try { await audio.play(); } catch {}
    });

    audio.addEventListener("loadedmetadata", () => {
      tDur.textContent = fmtTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      if (isSeeking) return;
      tCur.textContent = fmtTime(audio.currentTime);
      const dur = audio.duration || 0;
      const p = dur ? (audio.currentTime / dur) : 0;
      seekRange.value = String(Math.floor(p * 1000));
    });

    seekRange.addEventListener("input", () => {
      isSeeking = true;
    });

    seekRange.addEventListener("change", () => {
      const dur = audio.duration || 0;
      const p = Number(seekRange.value) / 1000;
      audio.currentTime = dur * p;
      isSeeking = false;
    });

    // Load tracks
    try {
      const res = await fetch("data/composicoes-selecao.json", { cache: "no-store" });
      const data = await res.json();
      tracks = data.tracks || [];
      if (!tracks.length) return;

      renderList();
      setNow(0);
      syncPlayBtn();
      tCur.textContent = "0:00";
      tDur.textContent = "0:00";
    } catch (err) {
      console.error(err);
    }
  }

  loadDiscografia();
  loadPlayer();
})();