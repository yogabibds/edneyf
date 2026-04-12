// ===== LOADING SUAVE =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  revealOnScroll();
});

// ===== HEADER DINÂMICO =====
const header = document.querySelector('.site-header');

function updateHeader() {
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateHeader);
updateHeader();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    const headerHeight = header ? header.offsetHeight : 0;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight + 8;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// ===== REVEAL SUAVE =====
const revealElements = document.querySelectorAll(
  '.section, .card, .case, .quote, .image, .content'
);

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// ===== PARALLAX LEVE NOS CARDS =====
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) / 28;
    const moveY = (y - rect.height / 2) / 28;

    card.style.transform = `translateY(-4px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===== MICROINTERAÇÃO BOTÕES =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-2px) scale(1.02)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});