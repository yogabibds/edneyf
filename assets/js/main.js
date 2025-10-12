// ========= Helpers =========
async function loadJSON(path){ const r = await fetch(path); return r.json(); }
const $$ = sel => document.querySelector(sel);
const $$$ = sel => [...document.querySelectorAll(sel)];

// ========= I18N (PT/ES/DE/NL/RU) =========
const I18N = { dict:{}, lang: (localStorage.getItem('lang') || 'pt') };

function t(key, fallback=''){ return (I18N.dict && I18N.dict[key]) || fallback || key; }

async function loadI18n(lang){
  I18N.lang = lang;
  localStorage.setItem('lang', lang);
  try{ I18N.dict = await loadJSON(`data/i18n/${lang}.json`); }
  catch(e){ I18N.dict = {}; }
  applyI18n();
  updateLangLabel();
}

function applyI18n(){
  $$$('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(!key) return;
    const val = t(key);
    if(val) el.innerHTML = val;
  });
}

// ========= Lang UI (dropdown do header) =========
function updateLangLabel(){
  const label = $$('.lang-current');
  if(!label) return;
  label.textContent = (I18N.lang==='pt'||I18N.lang==='es') ? 'PT/ES' : I18N.lang.toUpperCase();
}
function initLangUI(){
  const wrap = $$('.lang'); const btn = $$('.lang-toggle'); const menu = $$('.lang-menu');
  if(!wrap || !btn || !menu) return;
  btn.addEventListener('click',(e)=>{
    e.stopPropagation();
    const open = wrap.hasAttribute('open');
    wrap.toggleAttribute('open', !open);
    btn.setAttribute('aria-expanded', String(!open));
    if(!open) menu.focus();
  });
  menu.addEventListener('click',(e)=>{
    const li = e.target.closest('li[data-lang]'); if(!li) return;
    wrap.removeAttribute('open'); btn.setAttribute('aria-expanded','false');
    loadI18n(li.dataset.lang);
  });
  document.addEventListener('click', ()=>{ wrap?.removeAttribute('open'); btn?.setAttribute('aria-expanded','false'); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ wrap?.removeAttribute('open'); btn?.setAttribute('aria-expanded','false'); } });
  updateLangLabel();
}

// ========= Playlists =========
// Espera por data/playlists.json com chaves:
// { "cd_ed_a_tripulacao": "...", "composicoes_edney": "...", "gesto_de_carinho": "..." }
async function buildPlaylists(){
  let p={}; try{ p = await loadJSON('data/playlists.json'); }catch{}
  const map = [
    {key:'cd_ed_a_tripulacao', labelKey:'pl.cd', fallback:'CD — Ed & A Tripulação'},
    {key:'composicoes_edney',  labelKey:'pl.composicoes', fallback:'Composições — Edney Fernandes'},
    {key:'gesto_de_carinho',   labelKey:'pl.gesto', fallback:'Gesto de Carinho (em breve)'}
  ];
  const c = document.getElementById('playlist-buttons');
  if(!c) return;
  c.innerHTML = '';
  map.forEach(m=>{
    const url = p[m.key];
    const a = document.createElement('a');
    a.className = 'btn ' + (url ? 'btn-olive' : 'btn-disabled');
    a.textContent = t(m.labelKey, m.fallback);
    if(url){ a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
    const ico = document.createElement('span'); ico.innerHTML = '🎧'; ico.style.marginRight='.4rem';
    a.prepend(ico);
    c.appendChild(a);
  });
}

// ========= Memorial =========
// data/memorial.json -> [{ "src":"assets/img/memorial/memorial-01.jpg", "alt":"..." }, ...]
async function buildMemorial(){
  let list=[]; try{ list = await loadJSON('data/memorial.json'); }catch{}
  const g = document.getElementById('memorial-grid'); if(!g) return;
  g.innerHTML = '';
  list.forEach(item=>{
    const fig = document.createElement('figure'); fig.className='memorial-item';
    const img = document.createElement('img');
    img.loading='lazy'; img.src=item.src; img.alt=item.alt || 'Foto do acervo';
    fig.appendChild(img); g.appendChild(fig);
  });
}

// ========= Making Of (opcional) =========
// data/makingof.json -> [{ "titulo":"Faixa", "arquivo":"assets/audio/..." }, ...]
async function buildMakingOf(){
  let list=[]; try{ list = await loadJSON('data/makingof.json'); }catch{ list=[]; }
  const wrap = document.getElementById('makingof'); if(!wrap) return;
  if(!list.length){ wrap.style.display='none'; return; }
  const ul = document.createElement('div'); ul.className='audio-list';
  list.forEach(tk=>{
    const label=document.createElement('div'); label.textContent = tk.titulo || 'Faixa';
    const audio=document.createElement('audio'); audio.controls=true; audio.src=tk.arquivo;
    ul.appendChild(label); ul.appendChild(audio);
  });
  wrap.appendChild(ul);
}

// ========= Boot =========
document.addEventListener('DOMContentLoaded', async ()=>{
  initLangUI();
  await loadI18n(I18N.lang); // aplica textos
  buildPlaylists();
  buildMemorial();
  (function(){
  const nav = document.querySelector('.nav');
  if(!nav) return;
  const sc = ()=> nav.style.boxShadow = (window.scrollY>4) ? '0 6px 20px rgba(0,0,0,.35)' : 'none';
  sc(); addEventListener('scroll', sc, {passive:true});
})();
// ===== Mini Player compacto (um único <audio> compartilhado) =====
(function(){
  const items = [...document.querySelectorAll('.mini-audio')];
  if(!items.length) return;

  // único elemento de áudio compartilhado
  const audio = new Audio();
  audio.preload = 'metadata';

  let current = null; // div ativa

  // formata 90 -> "1:30"
  const mmss = s => {
    if(!isFinite(s)) return '0:00';
    s = Math.max(0, Math.floor(s));
    const m = Math.floor(s/60), ss = String(s%60).padStart(2,'0');
    return `${m}:${ss}`;
  };

  // cria UI
  items.forEach(box => {
    const title = box.dataset.title || 'Faixa';
    const src   = box.dataset.src;

    box.innerHTML = `
      <button class="mini-audio__btn" aria-label="Play">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </button>
      <div class="mini-audio__title">${title}</div>
      <div class="mini-audio__time">0:00</div>
      <div class="mini-audio__bar"><i></i></div>
    `;

    const btn  = box.querySelector('.mini-audio__btn');
    const time = box.querySelector('.mini-audio__time');
    const bar  = box.querySelector('.mini-audio__bar i');

    // play/pause
    btn.addEventListener('click', () => {
      if(current === box && !audio.paused){ audio.pause(); return; }
      // trocar de faixa
      if(current !== box){
        current?.querySelector('.mini-audio__btn').innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
        current = box;
        audio.src = src; audio.play().catch(()=>{});
      }else{
        audio.play().catch(()=>{});
      }
    });

    // clique na barra para buscar
    box.querySelector('.mini-audio__bar').addEventListener('click', (e)=>{
      if(audio.src.indexOf(src) === -1) return; // ainda não carregou essa
      const rect = e.currentTarget.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      audio.currentTime = p * (audio.duration || 0);
    });

    // quando essa faixa estiver tocando, atualizar UI
    audio.addEventListener('timeupdate', ()=>{
      if(current !== box) return;
      const d = audio.duration || 0;
      bar.style.inset = `0 ${Math.max(0,100-((audio.currentTime/d)*100))}% 0 0`;
      time.textContent = `${mmss(audio.currentTime)} / ${mmss(d)}`;
    });

    audio.addEventListener('play', ()=>{
      if(current === box){
        btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>`;
      }
    });

    audio.addEventListener('pause', ()=>{
      btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
    });

    audio.addEventListener('ended', ()=>{
      if(current === box){
        btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
      }
    });
  });
})();
