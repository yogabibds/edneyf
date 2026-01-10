async function loadJSON(path){
  const r = await fetch(path, { cache: "no-store" });
  if(!r.ok) throw new Error(`HTTP ${r.status} em ${path}`);
  return r.json();
}

/* =========================
   Reveal on scroll
========================= */
function initReveal(){
  const els = document.querySelectorAll('.reveal-on-scroll');
  if(!els.length) return;

  if(!('IntersectionObserver' in window)){
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('is-visible');
    });
  }, { threshold: 0.18 });

  els.forEach(el => io.observe(el));
}

/* =========================
   Rotate overlay (mobile landscape)
========================= */
function initRotateOverlay(){
  const overlay = document.getElementById('rotateOverlay');
  if(!overlay) return;

  function update(){
    const isLandscape = window.innerWidth > window.innerHeight;
    const isMobile = window.innerWidth < 920;
    overlay.style.display = (isMobile && isLandscape) ? 'flex' : 'none';
  }
  window.addEventListener('resize', update);
  window.addEventListener('orientationchange', update);
  update();
}

/* =========================
   Tap to lock / Back to scroll
========================= */
function initLockScroll(){
  const lockBtn = document.querySelector('[data-lock]');
  const unlockBtn = document.querySelector('[data-unlock]');
  if(!lockBtn || !unlockBtn) return;

  lockBtn.addEventListener('click', ()=>{
    document.body.classList.add('is-locked');
  });

  unlockBtn.addEventListener('click', ()=>{
    document.body.classList.remove('is-locked');
  });

  // se trocar orientação, destrava automaticamente (evita “prender”)
  window.addEventListener('orientationchange', ()=>{
    document.body.classList.remove('is-locked');
  });
}

/* =========================
   Horizontal: scroll vertical controla translateX
========================= */
function initHorizontalScroll(){
  const section = document.getElementById('acervo');
  const track = document.getElementById('hTrack');
  if(!section || !track) return;

  function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

  function onScroll(){
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    const total = section.offsetHeight - vh;
    const passed = clamp(-rect.top, 0, total);
    const progress = total > 0 ? (passed / total) : 0;

    const maxX = track.scrollWidth - track.clientWidth;
    const x = -maxX * progress;

    track.style.transform = `translate3d(${x}px,0,0)`;
  }

  window.addEventListener('scroll', onScroll, { passive:true });
  window.addEventListener('resize', onScroll);
  onScroll();
}

/* =========================
   Playlists
========================= */
async function buildPlaylists(){
  const grid = document.getElementById('playlistGrid');
  if(!grid) return;

  let list = [];
  try{ list = await loadJSON('data/playlists.json'); } catch { list = []; }

  grid.innerHTML = '';

  if(!Array.isArray(list) || !list.length){
    grid.innerHTML = `<div class="pcard"><h3>Em breve</h3><div class="muted">Playlists em organização.</div></div>`;
    return;
  }

  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'pcard';

    const h = document.createElement('h3');
    h.textContent = p.title || 'Playlist';

    const acts = document.createElement('div');
    acts.className = 'p-actions';

    if(p.spotify){
      const a = document.createElement('a');
      a.className = 'pbtn';
      a.href = p.spotify;
      a.target = '_blank';
      a.rel = 'noopener';
      a.innerHTML = `<span>🎧</span><span>Spotify</span>`;
      acts.appendChild(a);
    }

    if(p.youtube){
      const a = document.createElement('a');
      a.className = 'pbtn';
      a.href = p.youtube;
      a.target = '_blank';
      a.rel = 'noopener';
      a.innerHTML = `<span>▶️</span><span>YouTube</span>`;
      acts.appendChild(a);
    }

    card.appendChild(h);
    card.appendChild(acts);
    grid.appendChild(card);
  });
}

/* =========================
   Composições
========================= */
async function buildComposicoes(){
  const wrap = document.getElementById('composicoesList');
  if(!wrap) return;

  let list = [];
  try{ list = await loadJSON('data/composicoes.json'); } catch { list = []; }

  wrap.innerHTML = '';

  if(!Array.isArray(list) || !list.length){
    wrap.innerHTML = `<div class="item"><div class="item-title">Em breve</div><div class="item-sub">Conteúdo em organização.</div></div>`;
    return;
  }

  list.forEach(it=>{
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <div class="item-title">${it.titulo || it.title || 'Composição'}</div>
      ${it.observacoes ? `<div class="item-sub">${it.observacoes}</div>` : ''}
    `;
    wrap.appendChild(div);
  });
}

/* =========================
   Memorial
========================= */
async function buildMemorial(){
  const grid = document.getElementById('memorialGrid');
  if(!grid) return;

  let list = [];
  try{ list = await loadJSON('data/memorial.json'); } catch { list = []; }

  grid.innerHTML = '';

  if(!Array.isArray(list) || !list.length){
    grid.innerHTML = `<div class="audio-row"><div class="muted">Em breve.</div></div>`;
    return;
  }

  list.forEach(item=>{
    const fig = document.createElement('figure');
    fig.className = 'polaroid';

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = item.src;
    img.alt = item.alt || 'Foto do acervo';

    const cap = document.createElement('figcaption');
    cap.textContent = item.alt || '';

    fig.appendChild(img);
    if(item.alt) fig.appendChild(cap);
    grid.appendChild(fig);
  });
}

/* =========================
   Making of
========================= */
async function buildMakingOf(){
  const wrap = document.getElementById('makingofWrap');
  if(!wrap) return;

  let list = [];
  try{ list = await loadJSON('data/makingof.json'); } catch { list = []; }

  if(!Array.isArray(list) || !list.length){
    wrap.innerHTML = `<div class="audio-row"><div class="muted">Em breve.</div></div>`;
    return;
  }

  const box = document.createElement('div');
  box.className = 'audio-list';

  list.forEach(tk=>{
    const row = document.createElement('div');
    row.className = 'audio-row';

    const title = document.createElement('div');
    title.className = 'audio-title';
    title.textContent = tk.titulo || tk.title || 'Faixa';

    const audio = document.createElement('audio');
    audio.controls = true;
    audio.preload = 'none';
    audio.src = tk.arquivo || tk.file || '';

    row.appendChild(title);
    row.appendChild(audio);
    box.appendChild(row);
  });

  wrap.innerHTML = '';
  wrap.appendChild(box);
}

/* =========================
   Bibliografia
========================= */
async function buildBibliografia(){
  const wrap = document.getElementById('biblioWrap');
  if(!wrap) return;

  let list = [];
  try{ list = await loadJSON('data/bibliografia.json'); } catch { list = []; }

  if(!Array.isArray(list) || !list.length){
    wrap.innerHTML = `<div class="audio-row"><div class="muted">Sem referências cadastradas ainda.</div></div>`;
    return;
  }

  const box = document.createElement('div');
  box.className = 'audio-list';

  list.forEach(item=>{
    const row = document.createElement('div');
    row.className = 'audio-row';

    const title = item.titulo || item.title || '';
    const meta = [item.autor || item.source, item.ano].filter(Boolean).join(' • ');
    const link = item.link || item.url || '';

    row.innerHTML = `
      <div class="audio-title">${title}</div>
      ${meta ? `<div class="muted">${meta}</div>` : ''}
      ${link ? `<div style="margin-top:10px;"><a class="pbtn" href="${link}" target="_blank" rel="noopener">Abrir referência</a></div>` : ''}
    `;

    box.appendChild(row);
  });

  wrap.innerHTML = '';
  wrap.appendChild(box);
}

/* =========================
   Boot
========================= */
document.addEventListener('DOMContentLoaded', async ()=>{
  initReveal();
  initRotateOverlay();
  initLockScroll();
  initHorizontalScroll();

  await buildPlaylists();
  await buildComposicoes();
  await buildMemorial();
  await buildMakingOf();
  await buildBibliografia();

  // sombra no nav ao rolar
  (function(){
    const nav = document.querySelector('.nav');
    if(!nav) return;
    const sc = () => nav.style.boxShadow = (window.scrollY > 4) ? '0 6px 20px rgba(0,0,0,.35)' : 'none';
    sc();
    addEventListener('scroll', sc, { passive:true });
  })();
});