/* =========================
   REVEAL ON SCROLL (fix: conteúdo invisível)
========================= */
function initReveal(){
  const els = document.querySelectorAll('.reveal');
  if(!els.length) return;

  // Fallback: se o navegador não suportar IntersectionObserver, mostra tudo
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


/* =====================
   REVEAL ON SCROLL
===================== */
(function () {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  }, { threshold: 0.18 });
  els.forEach(el => io.observe(el));
})();

/* =====================
   FETCH DATA
===================== */
async function loadJSON(url) {
  const r = await fetch(url);
  return await r.json();
}

/* PLAYLISTS */
loadJSON("data/playlists.json").then(data => {
  const el = document.getElementById("playlists");
  data.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${item.title}</strong><br>${item.description || ""}`;
    el.appendChild(div);
  });
});

/* MEMORIAL */
loadJSON("data/memorial.json").then(data => {
  const el = document.getElementById("memorial-grid");
  data.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${item.image}" alt="">
      <p>${item.caption || ""}</p>
    `;
    el.appendChild(div);
  });
});

/* MAKING OF */
loadJSON("data/makingof.json").then(data => {
  const el = document.getElementById("makingof");
  data.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item.title;
    el.appendChild(div);
  });
});

/* COMPOSIÇÕES */
loadJSON("data/composicoes.json").then(data => {
  const el = document.getElementById("composicoes");
  data.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item.title;
    el.appendChild(div);
  });
});

/* BIBLIOGRAFIA */
loadJSON("data/bibliografia.json").then(data => {
  const el = document.getElementById("bibliografia");
  data.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
    el.appendChild(div);
  });
});
