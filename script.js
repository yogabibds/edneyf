
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      navLinks?.classList.remove('open');
    }
  });
});

const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:.12});
reveals.forEach(el => io.observe(el));

const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    const el = entry.target;
    const raw = el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const isDecimal = raw.includes('.');
    const end = parseFloat(raw);
    const duration = 1200;
    const startTime = performance.now();
    const format = (n)=> isDecimal ? n.toFixed(1) : Math.round(n).toString();
    const step = (now)=>{
      const progress = Math.min((now - startTime)/duration,1);
      const value = end * (1 - Math.pow(1-progress, 3));
      el.textContent = format(value) + suffix;
      if(progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    counterObserver.unobserve(el);
  });
},{threshold:.45});
counters.forEach(c => counterObserver.observe(c));
