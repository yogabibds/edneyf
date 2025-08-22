// Footer year
const yEl = document.getElementById('y'); if (yEl) yEl.textContent = new Date().getFullYear();

// Lightbox (se existir na página)
(function(){
  const grid = document.querySelector('.memorial-grid');
  if(!grid) return;
  const imgs = Array.from(grid.querySelectorAll('img'));
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lb-cap');
  const btnPrev = lb.querySelector('.lb-prev');
  const btnNext = lb.querySelector('.lb-next');
  const btnClose = lb.querySelector('.lb-close');
  let idx = 0;
  function openLB(i){ idx=(i+imgs.length)%imgs.length; const el=imgs[idx]; lbImg.src=el.src; lbCap.textContent=el.alt||''; lb.classList.add('open'); document.body.style.overflow='hidden';}
  function closeLB(){ lb.classList.remove('open'); document.body.style.overflow='';}
  function next(){ openLB(idx+1) } function prev(){ openLB(idx-1) }
  imgs.forEach((img,i)=> img.addEventListener('click', ()=> openLB(i)));
  btnNext.addEventListener('click', next); btnPrev.addEventListener('click', prev); btnClose.addEventListener('click', closeLB);
  lb.addEventListener('click', (e)=>{ if(e.target===lb) closeLB(); });
  window.addEventListener('keydown', (e)=>{ if(!lb.classList.contains('open')) return; if(e.key==='Escape') closeLB(); if(e.key==='ArrowRight') next(); if(e.key==='ArrowLeft') prev(); });
})();
