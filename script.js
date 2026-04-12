document.documentElement.classList.add('js-enabled');

// ===== ANO AUTOMÁTICO =====
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== HEADER DINÂMICO =====
const header = document.getElementById('siteHeader');

function updateHeader() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 40);
}

window.addEventListener('scroll', updateHeader);
updateHeader();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    const headerHeight = header ? header.offsetHeight : 0;
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - headerHeight + 8;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  });
});

// ===== REVEAL SUAVE =====
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.9;

  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// ===== PARALLAX LEVE NOS CARDS =====
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
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

buttons.forEach((btn) => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-2px) scale(1.02)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// ===== MULTILÍNGUE =====
const translations = {
  pt: {
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.legacy": "Legado",
    "nav.institute": "Instituto",
    "nav.contact": "Contato",

    "hero.eyebrow": "Gestão de legado musical",
    "hero.title": "Honrando o passado.<br>Inspirando o futuro.",
    "hero.text":
      "A Laia Music é uma plataforma de gestão, preservação e expansão de legados musicais. Transformamos memória artística em ativos culturais vivos, conectando gerações e criando novas oportunidades através da música.",
    "hero.ctaPrimary": "Agendar conversa",
    "hero.ctaSecondary": "Explorar serviços",
    "hero.ctaCatalog": "Explorar legado",

    "about.eyebrow": "Sobre",
    "about.title": "Uma plataforma construída sobre legado",
    "about.text":
      "A Laia Music nasceu da necessidade de preservar, organizar e expandir o legado artístico de Edney Fernandes. Mais do que uma marca, é uma estrutura dedicada à gestão de catálogos, ao desenvolvimento cultural e à criação de novas oportunidades para artistas, famílias e acervos musicais.",
    "about.quote":
      "Acreditamos que um legado musical bem cuidado não pertence apenas ao passado. Ele pode gerar relevância, conexão e crescimento no presente.",

    "services.eyebrow": "Atuação",
    "services.title": "Estratégia, sensibilidade e visão de longo prazo",
    "services.text":
      "Combinamos direção cultural, organização estratégica e construção de valor.",
    "services.item1Title": "Gestão de catálogo",
    "services.item1Text": "Organização e expansão de obras e repertórios.",
    "services.item2Title": "Preservação de legado",
    "services.item2Text": "Estratégias para manter viva a memória artística.",
    "services.item3Title": "Consultoria musical estratégica",
    "services.item3Text": "Direcionamento estratégico para projetos e artistas.",
    "services.item4Title": "Desenvolvimento artístico e posicionamento",
    "services.item4Text": "Construção de narrativa, identidade e posicionamento.",

    "legacy.eyebrow": "Case",
    "legacy.title": "Um legado que continua em movimento",
    "legacy.text": "A trajetória de Edney Fernandes inspira a base da Laia Music.",
    "legacy.stat1": "obras registradas",
    "legacy.stat2": "views digitais",
    "legacy.stat3Value": "Anos 90",
    "legacy.stat3": "samba e pagode",
    "legacy.copy":
      "Um exemplo concreto de como um legado pode ser organizado, valorizado e expandido.",
    "legacy.cta1": "Acessar catálogo",
    "legacy.cta2": "Falar sobre um catálogo",

    "institute.eyebrow": "Ecossistema",
    "institute.title": "Além da música",
    "institute.text":
      "A Laia Music amplia sua atuação através do Instituto Edney Fernandes, conectando legado, educação, memória e inovação em um projeto de impacto cultural de longo prazo.",
    "institute.cardTitle": "Instituto Edney Fernandes",
    "institute.cardText":
      "Um projeto cultural e educacional que transforma legado em impacto social.",
    "institute.item1": "Centro cultural e memorial",
    "institute.item2": "Educação musical",
    "institute.item3": "Inovação e tecnologia",
    "institute.cta": "Conhecer o Instituto",

    "cta.eyebrow": "Contato",
    "cta.title": "Vamos construir o próximo capítulo",
    "cta.text":
      "Trabalhamos com quem entende a música como legado e potência cultural.",
    "cta.button1": "Entrar em contato",
    "cta.button2": "Ver case completo",
  },

  es: {
    "nav.about": "Sobre",
    "nav.services": "Servicios",
    "nav.legacy": "Legado",
    "nav.institute": "Instituto",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Gestión de legado musical",
    "hero.title": "Honrando el pasado.<br>Inspirando el futuro.",
    "hero.text":
      "Laia Music es una plataforma dedicada a la gestión, preservación y expansión de legados musicales. Transformamos la memoria artística en activos culturales vivos, conectando generaciones y creando nuevas oportunidades a través de la música.",
    "hero.ctaPrimary": "Agendar reunión",
    "hero.ctaSecondary": "Explorar servicios",
    "hero.ctaCatalog": "Explorar legado",

    "about.eyebrow": "Sobre",
    "about.title": "Una plataforma construida sobre legado",
    "about.text":
      "Laia Music nació de la necesidad de preservar, organizar y expandir el legado artístico de Edney Fernandes. Más que una marca, es una estructura dedicada a la gestión de catálogos, al desarrollo cultural y a la creación de nuevas oportunidades para artistas, familias y acervos musicales.",
    "about.quote":
      "Creemos que un legado musical bien cuidado no pertenece solo al pasado. Puede generar relevancia, conexión y crecimiento en el presente.",

    "services.eyebrow": "Actuación",
    "services.title": "Estrategia, sensibilidad y visión de largo plazo",
    "services.text":
      "Combinamos dirección cultural, organización estratégica y construcción de valor.",
    "services.item1Title": "Gestión de catálogo",
    "services.item1Text": "Organización y expansión de obras y repertorios.",
    "services.item2Title": "Preservación de legado",
    "services.item2Text": "Estrategias para mantener viva la memoria artística.",
    "services.item3Title": "Consultoría musical estratégica",
    "services.item3Text": "Dirección estratégica para proyectos y artistas.",
    "services.item4Title": "Desarrollo artístico y posicionamiento",
    "services.item4Text": "Construcción de narrativa, identidad y posicionamiento.",

    "legacy.eyebrow": "Caso",
    "legacy.title": "Un legado que sigue en movimiento",
    "legacy.text": "La trayectoria de Edney Fernandes inspira la base de Laia Music.",
    "legacy.stat1": "obras registradas",
    "legacy.stat2": "visualizaciones digitales",
    "legacy.stat3Value": "Años 90",
    "legacy.stat3": "samba y pagode",
    "legacy.copy":
      "Un ejemplo concreto de cómo un legado puede organizarse, valorizarse y expandirse.",
    "legacy.cta1": "Acceder al catálogo",
    "legacy.cta2": "Hablar sobre un catálogo",

    "institute.eyebrow": "Ecosistema",
    "institute.title": "Más allá de la música",
    "institute.text":
      "Laia Music amplía su actuación a través del Instituto Edney Fernandes, conectando legado, educación, memoria e innovación en un proyecto de impacto cultural de largo plazo.",
    "institute.cardTitle": "Instituto Edney Fernandes",
    "institute.cardText":
      "Un proyecto cultural y educativo que transforma legado en impacto social.",
    "institute.item1": "Centro cultural y memorial",
    "institute.item2": "Educación musical",
    "institute.item3": "Innovación y tecnología",
    "institute.cta": "Conocer el Instituto",

    "cta.eyebrow": "Contacto",
    "cta.title": "Construyamos el próximo capítulo",
    "cta.text":
      "Trabajamos con quienes entienden la música como legado y potencia cultural.",
    "cta.button1": "Entrar en contacto",
    "cta.button2": "Ver caso completo",
  },

  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.legacy": "Legacy",
    "nav.institute": "Institute",
    "nav.contact": "Contact",

    "hero.eyebrow": "Music legacy management",
    "hero.title": "Honoring the past.<br>Inspiring the future.",
    "hero.text":
      "Laia Music is a platform dedicated to the management, preservation, and expansion of musical legacies. We transform artistic memory into living cultural assets, connecting generations and creating new opportunities through music.",
    "hero.ctaPrimary": "Schedule a call",
    "hero.ctaSecondary": "Explore services",
    "hero.ctaCatalog": "Explore legacy",

    "about.eyebrow": "About",
    "about.title": "A platform built on legacy",
    "about.text":
      "Laia Music was created to preserve, organize, and expand the artistic legacy of Edney Fernandes. More than a brand, it is a structure dedicated to catalog management, cultural development, and the creation of new opportunities for artists, families, and musical estates.",
    "about.quote":
      "We believe that a well-managed musical legacy does not belong only to the past. It can generate relevance, connection, and growth in the present.",

    "services.eyebrow": "What we do",
    "services.title": "Strategy, sensitivity, and long-term vision",
    "services.text":
      "We combine cultural direction, strategic organization, and value building.",
    "services.item1Title": "Catalog management",
    "services.item1Text": "Organization and expansion of works and repertoires.",
    "services.item2Title": "Legacy preservation",
    "services.item2Text": "Strategies to keep artistic memory alive.",
    "services.item3Title": "Strategic music consulting",
    "services.item3Text": "Strategic guidance for projects and artists.",
    "services.item4Title": "Artistic development and positioning",
    "services.item4Text": "Narrative, identity, and positioning development.",

    "legacy.eyebrow": "Case",
    "legacy.title": "A legacy still in motion",
    "legacy.text": "Edney Fernandes’ trajectory forms the foundation of Laia Music.",
    "legacy.stat1": "registered works",
    "legacy.stat2": "digital views",
    "legacy.stat3Value": "1990s",
    "legacy.stat3": "samba and pagode",
    "legacy.copy":
      "A concrete example of how a legacy can be organized, valued, and expanded.",
    "legacy.cta1": "Access the catalog",
    "legacy.cta2": "Discuss a catalog",

    "institute.eyebrow": "Ecosystem",
    "institute.title": "Beyond music",
    "institute.text":
      "Laia Music expands its work through the Edney Fernandes Institute, connecting legacy, education, memory, and innovation in a long-term cultural impact project.",
    "institute.cardTitle": "Edney Fernandes Institute",
    "institute.cardText":
      "A cultural and educational project that transforms legacy into social impact.",
    "institute.item1": "Cultural center and memorial",
    "institute.item2": "Music education",
    "institute.item3": "Innovation and technology",
    "institute.cta": "Learn about the Institute",

    "cta.eyebrow": "Contact",
    "cta.title": "Let’s build the next chapter",
    "cta.text":
      "We work with those who understand music as legacy and cultural force.",
    "cta.button1": "Get in touch",
    "cta.button2": "View full case",
  },
};

function applyTranslations(lang) {
  const selected = translations[lang] ? lang : 'pt';
  localStorage.setItem('laia-language', selected);
  document.documentElement.lang = selected === 'pt' ? 'pt-BR' : selected;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const value = translations[selected][key];
    if (value) element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.getAttribute('data-i18n-html');
    const value = translations[selected][key];
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === selected);
  });
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    applyTranslations(btn.dataset.lang);
  });
});

// ===== CONTADORES =====
function formatCounter(value) {
  if (value >= 1000000) {
    const millions = value / 1000000;
    return `${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}M+`;
  }
  return `${value}+`;
}

function animateCounter(element, endValue) {
  const duration = 1400;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = Math.floor(progress * endValue);
    element.textContent = formatCounter(currentValue);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = formatCounter(endValue);
    }
  }

  requestAnimationFrame(update);
}

const counterElements = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const endValue = Number(element.dataset.counter);

      if (!Number.isNaN(endValue)) {
        animateCounter(element, endValue);
      }

      observer.unobserve(element);
    });
  },
  { threshold: 0.5 }
);

counterElements.forEach((counter) => counterObserver.observe(counter));

// ===== INIT =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  applyTranslations(localStorage.getItem('laia-language') || 'pt');
  revealOnScroll();
});