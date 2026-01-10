(function () {
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  // Ano
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  // Rotate overlay
  const rotateOverlay = document.getElementById('rotateOverlay');
  function updateOrientationOverlay() {
    if (!rotateOverlay) return;
    const isSmall = Math.min(window.innerWidth, window.innerHeight) < 740;
    const isLandscape = window.innerWidth > window.innerHeight;
    rotateOverlay.style.display = (isSmall && isLandscape) ? 'block' : 'none';
    rotateOverlay.setAttribute('aria-hidden', (isSmall && isLandscape) ? 'false' : 'true');
  }
  updateOrientationOverlay();
  window.addEventListener('resize', updateOrientationOverlay, { passive: true });

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('is-visible');
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Hero “image to card” progress
  const hero = document.getElementById('hero');
  let ticking = false;

  function setHeroProgress() {
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const viewportH = window.innerHeight || 1;

    const total = hero.offsetHeight - viewportH;     // tamanho “rolável” do hero
    const walked = clamp(-rect.top, 0, total);       // quanto já rolou dentro do hero
    const p = total > 0 ? walked / total : 0;        // 0..1

    document.documentElement.style.setProperty('--heroP', String(p));
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      setHeroProgress();
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  setHeroProgress();

  // Tracks / Player
  const tracksRoot = document.getElementById('tracks');
  const player = document.getElementById('player');
  const audio = document.getElementById('audio');
  const playerToggle = document.getElementById('playerToggle');
  const playerTitle = document.getElementById('playerTitle');
  const playerSeek = document.getElementById('playerSeek');
  const playerTime = document.getElementById('playerTime');

  if (tracksRoot && audio && player && playerToggle && playerTitle && playerSeek && playerTime) {
    const src = tracksRoot.getAttribute('data-source');

    fetch(src, { cache: 'no-store' })
      .then(r => r.ok ? r.json() : Promise.reject(new Error('Falha ao carregar JSON')))
      .then(list => {
        if (!Array.isArray(list)) throw new Error('JSON inválido');
        tracksRoot.innerHTML = '';

        list.forEach((t) => {
          const row = document.createElement('div');
          row.className = 'track';
          row.innerHTML = `
            <div class="track-left">
              <button class="track-btn" type="button" aria-label="Tocar ${escapeHtml(t.title || 'faixa')}">▶</button>
              <div style="min-width:0">
                <div class="track-title">${escapeHtml(t.title || 'Faixa')}</div>
                <div class="track-meta">${escapeHtml(t.subtitle || '')}</div>
              </div>
            </div>
            <a class="pill" href="${escapeAttr(t.spotify || '#')}" target="_blank" rel="noopener">Spotify</a>
          `;

          row.querySelector('.track-btn').addEventListener('click', () => playTrack(t));
          tracksRoot.appendChild(row);
        });
      })
      .catch(() => {
        tracksRoot.innerHTML = '<div class="skeleton">Não foi possível carregar as faixas.</div>';
      });

    function playTrack(t) {
      if (!t || !t.file) return;

      player.hidden = false;
      playerTitle.textContent = t.title || '—';

      const newSrc = t.file;
      if (audio.getAttribute('data-current') !== newSrc) {
        audio.src = newSrc;
        audio.setAttribute('data-current', newSrc);
      }

      audio.play().catch(() => {});
      playerToggle.textContent = '❚❚';
    }

    playerToggle.addEventListener('click', () => {
      if (audio.paused) {
        audio.play().catch(() => {});
        playerToggle.textContent = '❚❚';
      } else {
        audio.pause();
        playerToggle.textContent = '▶';
      }
    });

    audio.addEventListener('timeupdate', () => {
      const d = audio.duration || 0;
      const c = audio.currentTime || 0;
      const v = d > 0 ? Math.round((c / d) * 1000) : 0;
      playerSeek.value = String(v);
      playerTime.textContent = formatTime(c);
    });

    audio.addEventListener('ended', () => {
      playerToggle.textContent = '▶';
    });

    playerSeek.addEventListener('input', () => {
      const d = audio.duration || 0;
      const v = Number(playerSeek.value || '0') / 1000;
      if (d > 0) audio.currentTime = d * v;
    });

    function formatTime(sec) {
      const s = Math.max(0, Math.floor(sec));
      const m = Math.floor(s / 60);
      const r = s % 60;
      return `${m}:${String(r).padStart(2, '0')}`;
    }

    function escapeHtml(str) {
      return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
    }
    function escapeAttr(str) {
      return escapeHtml(str).replaceAll('`', '&#096;');
    }
  }
})();