// ========= Helpers =========
async function loadJSON(path){ try{ const r = await fetch(path); if(!r.ok) throw 0; return await r.json(); }catch(_){ return null; } }
const $$  = (sel,sc=document)=> sc.querySelector(sel);
const $$$ = (sel,sc=document)=> [...sc.querySelectorAll(sel)];

// ========= I18N (opcional simples) =========
const I18N = { dict:{}, lang: (localStorage.getItem('lang') || 'pt') };
function t(key, fallback=''){ return (I18N.dict && I18N.dict[key]) || fallback || key; }

async function loadI18n(lang){
  I18N.lang = lang;
  localStorage.setItem('lang', lang);
  const dict = await loadJSON(`data/i18n/${lang}.json`);
  I18N.dict = dict || {};
  applyI18n();
  updateLangLabel();
}
function applyI18n(){ $$$('[data-i18n]').forEach(el=>{ const k=el.getAttribute('data-i18n'); if(k){ const v=t(k); if(v) el.innerHTML=v; } }); }

// ========= Lang UI =========
function updateLangLabel(){
  const label = $$('.lang-current');
  if(!label) return;
  label.textContent = (I18N.lang==='pt'||I18N.lang==='es') ? 'PT/ES' : I18N.lang.toUpperCase();
}
function initLangUI(){
  const wrap = $$('.lang'); const btn = $$('.lang-toggle'); const menu = $$('.lang-menu');
  if(!wrap || !btn || !menu) return;

  const open = ()=>{ wrap.dataset.state='open'; btn.setAttribute('aria-expanded','true'); menu.focus(); };
  const close= ()=>{ wrap.dataset.state='closed'; btn.setAttribute('aria-expanded','false'); };

  btn.addEventListener('click',(e)=>{ e.stopPropagation(); (wrap.dataset.state==='open'?close:open)(); });
  menu.addEventListener('click',(e)=>{
    const li = e.target.closest('li[data-lang]'); if(!li) return;
    close(); loadI18n(li.dataset.lang);
  });
  document.addEventListener('click', close);
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });

  updateLangLabel();
}

// ========= Playlists (botões) =========
// Espera por data/playlists.json com chaves que existirem. Ex.:
// {"pagode_anos_90":"<URL Spotify>","composicoes_edney":"<URL>"}
async function buildPlaylists(){
  const box = $('#playlist-buttons'); if(!box) return;
  box.innerHTML = '';
  const data = await loadJSON('data/playlists.json');
  if(!data) return;

  const defs = [
    { key:'pagode_anos_90', label:'Pagode anos 90' },
    { key:'composicoes_edney', label:'Composições — Edney Fernandes' }
  ];

  defs.forEach(d=>{
    const url = data[d.key];
    if(!url) return; // não renderiza se não tiver link (sem placeholder)
    const a = document.createElement('a');
    a.className = 'btn btn-olive';
    a.href = url; a.target='_blank'; a.rel='noopener';
    a.innerHTML = '🎧&nbsp;'+d.label;
    box.appendChild(a);
  });
}

// ========= Ícones de plataformas do álbum =========
// data/album_platforms.json: {"spotify":"...","apple":"...","youtube":"...","deezer":"..."}
async function buildAlbumPlatforms(){
  const box = $('#album-platforms'); if(!box) return;
  box.innerHTML = '';
  const links = await loadJSON('data/album_platforms.json');
  if(!links) return;

  const icons = {
    spotify:  `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm4.4 14.6a.75.75 0 0 1-1.03.25c-2.82-1.73-6.38-2.12-10.56-1.16a.75.75 0 1 1-.33-1.46c4.55-1.04 8.47-.6 11.59 1.29.35.21.47.67.24 1.08zM16.9 12a.9.9 0 0 1-1.24.3c-2.48-1.5-6.27-1.94-9.2-1.06a.9.9 0 1 1-.52-1.72c3.4-1.02 7.62-.54 10.47 1.2.42.26.55.82.29 1.28zM16.5 9a1.05 1.05 0 0 1-1.45.36C13 7.9 9.4 7.6 7.1 8.26a1.05 1.05 0 1 1-.58-2.02c2.73-.79 6.89-.43 9.6 1.17A1.05 1.05 0 0 1 16.5 9z"/></svg>`,
    apple:    `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 1.64A4.5 4.5 0 0 1 14 5a4.5 4.5 0 0 1 2.36-3.36zM20 17.5c-.45 1.05-1 2.04-1.65 2.97-.88 1.25-1.96 2.8-3.4 2.8-1.32 0-1.74-.85-3.23-.85S8.84 23.3 7.53 23.3c-1.44 0-2.52-1.43-3.4-2.68C2.07 18.7 1 16.15 1 13.79c0-3.91 2.54-5.95 5.04-5.95 1.32 0 2.42.92 3.23.92.77 0 2.1-.96 3.64-.96 2.58 0 5.09 1.83 5.09 5.62 0 1.2-.24 2.4-.6 3.08z"/></svg>`,
    youtube:  `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M23 7.5s-.2-1.6-.8-2.3c-.8-.8-1.7-.8-2.2-.9C16.7 4 12 4 12 4h0s-4.7 0-8 .3c-.5 0-1.4.1-2.2.9C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.3C.8 14.4 1 16.3 1 16.3s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.8.2 7.8.3 7.8.3s4.7 0 8-.3c.5-.1 1.4-.1 2.2-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.7v-1.3c0-1.9-.2-3.8-.2-3.8zM9.8 14.9v-6l6 3-6 3z"/></svg>`,
    deezer:   `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 15h3v3H3v-3zm4-4h3v7H7V11zm4-2h3v9h-3V9zm4-3h3v12h-3V6z"/></svg>`
  };

  ['spotify','apple','youtube','deezer'].forEach(k=>{
    if(!links[k]) return;
    const a = document.createElement('a');
    a.className = 'lm-ico'; a.href = links[k]; a.target='_blank'; a.rel='noopener'; a.ariaLabel = k;
    a.innerHTML = icons[k];
    box.appendChild(a);
  });
}

// ========= Memorial =========
function buildMemorial(){
  const g = $('#memorial-grid'); if(!g) return;
  g.innerHTML = '';
  for(let i=1;i<=15;i++){
    const n = String(i).padStart(2,'0');
    const fig = document.createElement('figure');
    const img = document.createElement('img');
    img.loading='lazy'; img.src=`assets/img/memorial/memorial-${n}.jpg`; img.alt=`Memorial ${n}`;
    fig.appendChild(img); g.appendChild(fig);
  }
}

// ========= Mini Player (único <audio> compartilhado) =========
(function miniPlayer(){
  document.addEventListener('DOMContentLoaded', ()=>{
    const items = [...document.querySelectorAll('.mini-audio')];
    if(!items.length) return;

    const audio = new Audio(); audio.preload='metadata';
    let current = null;

    const mmss = s => {
      if(!isFinite(s)) return '0:00';
      s = Math.max(0, Math.floor(s));
      const m = Math.floor(s/60), ss = String(s%60).padStart(2,'0');
      return `${m}:${ss}`;
    };

    items.forEach(box=>{
      const title = box.dataset.title || 'Faixa';
      const src   = box.dataset.src;

      box.innerHTML = `
        <button class="mini-audio__btn" aria-label="Play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
        <div class="mini-audio__title">${title}</div>
        <div class="mini-audio__time">0:00</div>
        <div class="mini-audio__bar"><i></i></div>
      `;

      const btn  = $$('.mini-audio__btn', box);
      const time = $$('.mini-audio__time', box);
      const barI = $$('.mini-audio__bar i', box);
      const bar  = $$('.mini-audio__bar', box);

      btn.addEventListener('click', ()=>{
        if(current === box && !audio.paused){ audio.pause(); return; }
        if(current !== box){
          if(current){ $$('.mini-audio__btn', current).innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`; }
          current = box; audio.src = src; audio.play().catch(()=>{});
        }else{
          audio.play().catch(()=>{});
        }
      });

      bar.addEventListener('click', (e)=>{
        if(audio.src.indexOf(src) === -1) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
        audio.currentTime = p * (audio.duration || 0);
      });

      audio.addEventListener('timeupdate', ()=>{
        if(current !== box) return;
        const d = audio.duration || 0;
        barI.style.inset = `0 ${Math.max(0,100-((audio.currentTime/d)*100))}% 0 0`;
        time.textContent = `${mmss(audio.currentTime)} / ${mmss(d)}`;
      });
      audio.addEventListener('play', ()=>{ if(current===box){ btn.innerHTML=`<svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>`; }});
      audio.addEventListener('pause',()=>{ btn.innerHTML=`<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`; });
      audio.addEventListener('ended',()=>{ if(current===box){ btn.innerHTML=`<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`; }});
    });
  });
})();

// ========= Boot =========
document.addEventListener('DOMContentLoaded', async ()=>{
  initLangUI();
  await loadI18n(I18N.lang); // aplica textos se existirem
  buildPlaylists();
  buildAlbumPlatforms();
  buildMemorial();
});