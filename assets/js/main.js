
async function loadJSON(path){ const r = await fetch(path); return r.json(); }

// Playlists
loadJSON('data/playlists.json').then(p => {
  const map = [
    {key:'cd_ed_a_tripulacao', label:'CD — Ed & A Tripulação'},
    {key:'composicoes_edney', label:'Composições — Edney Fernandes'},
    {key:'gesto_de_carinho', label:'Gesto de Carinho (em breve)'}
  ];
  const c = document.getElementById('playlist-buttons');
  map.forEach(m => {
    const url = p[m.key];
    const a = document.createElement('a');
    a.className = 'btn ' + (url ? 'btn-olive' : 'btn-disabled');
    a.textContent = m.label;
    if(url){ a.href = url; a.target = '_blank'; a.rel='noopener'; }
    const ico = document.createElement('span');
    ico.innerHTML = '🎧';
    ico.style.marginRight='.4rem';
    a.prepend(ico);
    c.appendChild(a);
  });
});

// Memorial
loadJSON('data/memorial.json').then(list => {
  const g = document.getElementById('memorial-grid');
  list.forEach(item => {
    const fig = document.createElement('figure');
    fig.className='memorial-item';
    const img = document.createElement('img');
    img.src = item.src; img.alt = item.alt || 'Foto do acervo';
    fig.appendChild(img);
    g.appendChild(fig);
  });
});

// Making of (se existir)
fetch('data/makingof.json').then(r => r.json()).then(list => {
  const wrap = document.getElementById('makingof'); if(!wrap) return;
  if(list.length===0){ wrap.remove(); return; }
  const ul = document.createElement('div'); ul.className='audio-list';
  list.forEach(t => {
    const label = document.createElement('div'); label.textContent = t.titulo || 'Faixa';
    const audio = document.createElement('audio'); audio.controls = true; audio.src = t.arquivo;
    ul.appendChild(label); ul.appendChild(audio);
  });
  wrap.appendChild(ul);
}).catch(()=>{});
