(() => {
  const $ = (sel, el=document) => el.querySelector(sel);
  const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));

  // Smooth scroll for internal anchors
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.16 });

  $$('.reveal').forEach(el => io.observe(el));

  // Orientation overlay (optional)
  const overlay = $('#rotateOverlay');
  const dismissedKey = 'laia_rotate_dismissed';
  const dismissBtn = overlay?.querySelector('[data-rotate-dismiss]');
  dismissBtn?.addEventListener('click', () => {
    overlay.classList.remove('is-on');
    try { localStorage.setItem(dismissedKey, '1'); } catch {}
  });

  const checkOrientation = () => {
    if (!overlay) return;
    const dismissed = (() => { try { return localStorage.getItem(dismissedKey) === '1'; } catch { return false; } })();
    if (dismissed) return;

    const isLandscape = window.innerWidth > window.innerHeight && window.innerWidth < 980; // mobile-ish
    overlay.classList.toggle('is-on', isLandscape);
  };
  window.addEventListener('resize', checkOrientation, { passive: true });
  checkOrientation();

  // Scroll transform: imagem vira card (escala + radius + sombra)
  const frame = $('#heroFrame');
  const spacer = $('.hero-visual__spacer');
  const applyFrame = () => {
    if (!frame || !spacer) return;
    const rect = spacer.getBoundingClientRect();
    const viewport = window.innerHeight;
    // progress 0..1 conforme o spacer vai saindo da viewport
    const start = viewport * 0.85;
    const end = -viewport * 0.25;
    const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));

    // ajustes visuais
    const scale = 1 - (0.18 * p);         // 1.00 -> 0.82
    const translateY = 0 + (18 * p);      // 0 -> 18px
    const radius = 0 + (22 * p);          // 0 -> 22px
    const shadow = 0 + (1 * p);           // 0 -> 1 (fator)
    const alpha = 0.55 * shadow;

    frame.style.transform = `translateY(${translateY}px) scale(${scale})`;
    frame.style.borderRadius = `${radius}px`;
    frame.style.boxShadow = `0 22px 80px rgba(0,0,0,${alpha})`;
  };
  window.addEventListener('scroll', applyFrame, { passive: true });
  window.addEventListener('resize', applyFrame, { passive: true });
  applyFrame();

  // Data rendering (discografia, composições, memorial)
  const loadJSON = async (path) => {
    const res = await fetch(path, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Falha ao carregar ${path}`);
    return await res.json();
  };

    const iconSpotify = () => `<svg viewBox="0 0 24 24" aria-hidden="true">  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>  <path d="M7.4 10.2c3.1-1 6.7-.6 9.4 1.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>  <path d="M7.8 12.9c2.6-.8 5.6-.4 7.9 1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>  <path d="M8.2 15.4c2-.5 4.2-.2 6 .8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;
  const iconYouTube = () => `<svg viewBox="0 0 24 24" aria-hidden="true">  <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.9C18.2 5 12 5 12 5s-6.2 0-7.8.3A2.6 2.6 0 0 0 2.4 7.2 28.5 28.5 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.9C5.8 19 12 19 12 19s6.2 0 7.8-.3a2.6 2.6 0 0 0 1.8-1.9A28.5 28.5 0 0 0 22 12c0-1.6-.1-3.2-.4-4.8z"/>  <path d="M10 15.5v-7l6 3.5-6 3.5z" fill="currentColor"/></svg>`;

  (async () => {
    // Discografia
    const cardsRoot = $('#discografiaCards');
    if (cardsRoot) {
      try {
        const items = await loadJSON('data/playlists.json');
        cardsRoot.innerHTML = items.map(item => `
          <article class="card">
            <div class="card__img">
              <img src="${item.imagem}" alt="${item.titulo}">
            </div>
            <div class="card__body">
              <span class="card__tag">${item.tag || ''}</span>
              <h3 class="card__title">${item.titulo}</h3>
              <p class="card__sub">${item.subtitulo || ''}</p>
              <div class="card__actions">
                ${item.spotify ? `<a class="icon-btn" href="${item.spotify}" target="_blank" rel="noopener" aria-label="Abrir no Spotify">${iconSpotify()}</a>` : ''}
                ${item.youtube ? `<a class="icon-btn" href="${item.youtube}" target="_blank" rel="noopener" aria-label="Abrir no YouTube">${iconYouTube()}</a>` : ''}
              </div>
            </div>
          </article>
        `).join('');
      } catch (e) {
        cardsRoot.innerHTML = `<p class="section-lead">Não foi possível carregar a discografia.</p>`;
      }
    }

    // Tracks
    const tracksRoot = $('#tracks');
    if (tracksRoot) {
      try {
        const tracks = await loadJSON('data/composicoes.json');
        const featured = tracks.filter(t => t.destaque);
        tracksRoot.innerHTML = (featured.length ? featured : tracks).map(t => `
          <article class="track">
            <div class="track__top">
              <div>
                <h3 class="track__title">${t.titulo}</h3>
                <p class="track__meta">${t.artista || ''}</p>
              </div>
              ${t.destaque ? `<span class="track__badge">Destaque</span>` : ``}
            </div>
            ${t.arquivo ? `<audio controls preload="none" src="${t.arquivo}"></audio>` : ``}
          </article>
        `).join('');
      } catch (e) {
        tracksRoot.innerHTML = `<p class="section-lead">Não foi possível carregar as composições.</p>`;
      }
    }

    // Memorial
    const memorialRoot = $('#memorialGrid');
    if (memorialRoot) {
      try {
        const images = await loadJSON('data/memorial.json');
        memorialRoot.innerHTML = images.map((img, i) => `
          <figure class="memorial-item">
            <img src="${img.src}" alt="${img.alt || `Memorial ${i+1}`}" loading="lazy">
          </figure>
        `).join('');
      } catch (e) {
        memorialRoot.innerHTML = `<p class="section-lead">Não foi possível carregar o memorial.</p>`;
      }
    }
  })();
})();