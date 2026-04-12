document.documentElement.classList.add("js-enabled");

const translations = {
  pt: {
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.legacy": "Legado",
    "nav.institute": "Instituto",
    "nav.contact": "Contato",

    "hero.eyebrow": "Gestão de legado musical",
    "hero.title": "Honrando o passado.\nInspirando o futuro.",
    "hero.text": "A Laia Music é uma plataforma de gestão, preservação e expansão de legados musicais. Transformamos memória artística em ativos culturais vivos, conectando gerações e criando novas oportunidades através da música.",
    "hero.ctaPrimary": "Agendar conversa",
    "hero.ctaSecondary": "Explorar serviços",
    "hero.ctaCatalog": "Explorar legado",

    "about.eyebrow": "Sobre",
    "about.title": "Uma plataforma construída sobre legado",
    "about.text": "A Laia Music nasceu da necessidade de preservar, organizar e expandir o legado artístico de Edney Fernandes. Mais do que uma marca, é uma estrutura dedicada à gestão de catálogos, desenvolvimento de projetos culturais, posicionamento artístico e criação de novas oportunidades para artistas, famílias e acervos musicais.",
    "about.quote": "Acreditamos que um legado musical bem cuidado não pertence apenas ao passado. Ele pode gerar relevância, conexão e crescimento no presente.",

    "services.eyebrow": "Atuação",
    "services.title": "Estratégia, sensibilidade e visão de longo prazo",
    "services.text": "Combinamos direção cultural, organização estratégica e construção de valor. A Laia atua com foco em gestão de legado, consultoria musical e desenvolvimento de oportunidades estruturadas.",
    "services.item1Title": "Gestão de catálogo",
    "services.item1Text": "Organização, posicionamento e expansão de obras, repertórios e ativos musicais.",
    "services.item2Title": "Preservação de legado",
    "services.item2Text": "Estratégias para manter viva a memória artística e ampliar sua relevância cultural.",
    "services.item3Title": "Consultoria musical",
    "services.item3Text": "Direcionamento estratégico para artistas, famílias, produtores e projetos culturais.",
    "services.item4Title": "Desenvolvimento artístico e posicionamento",
    "services.item4Text": "Apoio na construção de narrativa, identidade e presença cultural consistente.",

    "legacy.eyebrow": "Case",
    "legacy.title": "Um legado que continua em movimento",
    "legacy.text": "A trajetória de Edney Fernandes inspira a base da Laia Music. Seu catálogo demonstra como memória artística pode ser transformada em presença cultural estruturada, com continuidade, posicionamento e valor.",
    "legacy.stat1": "obras registradas",
    "legacy.stat2": "views digitais",
    "legacy.stat3Value": "Anos 90",
    "legacy.stat3": "samba e pagode",
    "legacy.copy": "Com obras registradas, interpretações por artistas reconhecidos e relevância contínua no universo do samba e pagode, o acervo de Edney Fernandes é hoje um exemplo concreto de como um legado pode ser organizado, valorizado e expandido.",
    "legacy.cta1": "Acessar catálogo",
    "legacy.cta2": "Falar sobre um catálogo",

    "institute.eyebrow": "Ecossistema",
    "institute.title": "Além da música",
    "institute.text": "A Laia Music também se conecta a iniciativas de impacto cultural, como o Instituto Edney Fernandes, ampliando a atuação da música para educação, memória, inovação e economia criativa.",
    "institute.cardTitle": "Instituto Edney Fernandes",
    "institute.cardText": "Um projeto cultural e educacional que transforma legado em impacto social. O Instituto reúne música, formação, tecnologia, memória e território em uma proposta de longo prazo.",
    "institute.item1": "Centro cultural e memorial musical",
    "institute.item2": "Formação criativa e educação musical",
    "institute.item3": "Inovação, coworking e economia criativa",
    "institute.cta": "Conhecer o Instituto",

    "cta.eyebrow": "Contato",
    "cta.title": "Vamos construir o próximo capítulo",
    "cta.text": "Trabalhamos com artistas, famílias, instituições e parceiros que entendem a música como legado, ativo e potência cultural.",
    "cta.button1": "Entrar em contato",
    "cta.button2": "Ver case completo"
  },

  es: {
    "nav.about": "Sobre",
    "nav.services": "Servicios",
    "nav.legacy": "Legado",
    "nav.institute": "Instituto",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Gestión de legado musical",
    "hero.title": "Honrando el pasado.\nInspirando el futuro.",
    "hero.text": "Laia Music es una plataforma dedicada a la gestión, preservación y expansión de legados musicales. Transformamos la memoria artística en activos culturales vivos, conectando generaciones y creando nuevas oportunidades a través de la música.",
    "hero.ctaPrimary": "Agendar reunión",
    "hero.ctaSecondary": "Explorar servicios",
    "hero.ctaCatalog": "Explorar legado",

    "about.eyebrow": "Sobre",
    "about.title": "Una plataforma construida sobre legado",
    "about.text": "Laia Music nació de la necesidad de preservar, organizar y expandir el legado artístico de Edney Fernandes. Más que una marca, es una estructura dedicada a la gestión de catálogos, al desarrollo de proyectos culturales, al posicionamiento artístico y a la creación de nuevas oportunidades para artistas, familias y acervos musicales.",
    "about.quote": "Creemos que un legado musical bien cuidado no pertenece solo al pasado. Puede generar relevancia, conexión y crecimiento en el presente.",

    "services.eyebrow": "Actuación",
    "services.title": "Estrategia, sensibilidad y visión de largo plazo",
    "services.text": "Combinamos dirección cultural, organización estratégica y construcción de valor. Laia actúa con foco en gestión de legado, consultoría musical y desarrollo de oportunidades estructuradas.",
    "services.item1Title": "Gestión de catálogo",
    "services.item1Text": "Organización, posicionamiento y expansión de obras, repertorios y activos musicales.",
    "services.item2Title": "Preservación de legado",
    "services.item2Text": "Estrategias para mantener viva la memoria artística y ampliar su relevancia cultural.",
    "services.item3Title": "Consultoría musical",
    "services.item3Text": "Dirección estratégica para artistas, familias, productores y proyectos culturales.",
    "services.item4Title": "Desarrollo artístico y posicionamiento",
    "services.item4Text": "Apoyo en la construcción de narrativa, identidad y presencia cultural consistente.",

    "legacy.eyebrow": "Caso",
    "legacy.title": "Un legado que sigue en movimiento",
    "legacy.text": "La trayectoria de Edney Fernandes inspira la base de Laia Music. Su catálogo demuestra cómo la memoria artística puede transformarse en una presencia cultural estructurada, con continuidad, posicionamiento y valor.",
    "legacy.stat1": "obras registradas",
    "legacy.stat2": "visualizaciones digitales",
    "legacy.stat3Value": "Años 90",
    "legacy.stat3": "samba y pagode",
    "legacy.copy": "Con obras registradas, interpretaciones de artistas reconocidos y relevancia continua dentro del universo del samba y el pagode, el acervo de Edney Fernandes es hoy un ejemplo concreto de cómo un legado puede organizarse, valorizarse y expandirse.",
    "legacy.cta1": "Acceder al catálogo",
    "legacy.cta2": "Hablar sobre un catálogo",

    "institute.eyebrow": "Ecosistema",
    "institute.title": "Más allá de la música",
    "institute.text": "Laia Music también se conecta con iniciativas de impacto cultural, como el Instituto Edney Fernandes, ampliando la actuación de la música hacia educación, memoria, innovación y economía creativa.",
    "institute.cardTitle": "Instituto Edney Fernandes",
    "institute.cardText": "Un proyecto cultural y educativo que transforma legado en impacto social. El Instituto reúne música, formación, tecnología, memoria y territorio en una propuesta de largo plazo.",
    "institute.item1": "Centro cultural y memorial musical",
    "institute.item2": "Formación creativa y educación musical",
    "institute.item3": "Innovación, coworking y economía creativa",
    "institute.cta": "Conocer el Instituto",

    "cta.eyebrow": "Contacto",
    "cta.title": "Construyamos el próximo capítulo",
    "cta.text": "Trabajamos con artistas, familias, instituciones y aliados que entienden la música como legado, activo y potencia cultural.",
    "cta.button1": "Entrar en contacto",
    "cta.button2": "Ver caso completo"
  },

  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.legacy": "Legacy",
    "nav.institute": "Institute",
    "nav.contact": "Contact",

    "hero.eyebrow": "Music legacy management",
    "hero.title": "Honoring the past.\nInspiring the future.",
    "hero.text": "Laia Music is a platform dedicated to the management, preservation, and expansion of musical legacies. We transform artistic memory into living cultural assets, connecting generations and creating new opportunities through music.",
    "hero.ctaPrimary": "Schedule a Call",
    "hero.ctaSecondary": "Explore services",
    "hero.ctaCatalog": "Explore legacy",

    "about.eyebrow": "About",
    "about.title": "A platform built on legacy",
    "about.text": "Laia Music was created to preserve, organize, and expand the artistic legacy of Edney Fernandes. More than a brand, it is a structure dedicated to catalog management, cultural project development, artistic positioning, and the creation of new opportunities for artists, families, and musical estates.",
    "about.quote": "We believe that a well-managed musical legacy does not belong only to the past. It can generate relevance, connection, and growth in the present.",

    "services.eyebrow": "What we do",
    "services.title": "Strategy, sensitivity, and long-term vision",
    "services.text": "We combine cultural direction, strategic organization, and value building. Laia focuses on legacy management, music consulting, and the development of structured opportunities.",
    "services.item1Title": "Catalog management",
    "services.item1Text": "Organization, positioning, and expansion of works, repertoires, and musical assets.",
    "services.item2Title": "Legacy preservation",
    "services.item2Text": "Strategies to keep artistic memory alive and expand its cultural relevance.",
    "services.item3Title": "Music consulting",
    "services.item3Text": "Strategic guidance for artists, families, producers, and cultural projects.",
    "services.item4Title": "Artistic development and positioning",
    "services.item4Text": "Support in building narrative, identity, and a consistent cultural presence.",

    "legacy.eyebrow": "Case",
    "legacy.title": "A legacy still in motion",
    "legacy.text": "Edney Fernandes’ trajectory forms the foundation of Laia Music. His catalog shows how artistic memory can become a structured cultural presence, with continuity, positioning, and value.",
    "legacy.stat1": "registered works",
    "legacy.stat2": "digital views",
    "legacy.stat3Value": "1990s",
    "legacy.stat3": "samba and pagode",
    "legacy.copy": "With registered works, recordings by recognized artists, and lasting relevance in samba and pagode, Edney Fernandes’ catalog is now a concrete example of how a legacy can be organized, valued, and expanded.",
    "legacy.cta1": "Access the catalog",
    "legacy.cta2": "Discuss a catalog",

    "institute.eyebrow": "Ecosystem",
    "institute.title": "Beyond music",
    "institute.text": "Laia Music also connects with broader cultural impact initiatives, including the Edney Fernandes Institute, expanding music into education, memory, innovation, and the creative economy.",
    "institute.cardTitle": "Edney Fernandes Institute",
    "institute.cardText": "A cultural and educational project that transforms legacy into social impact. The Institute brings together music, training, technology, memory, and territory within a long-term vision.",
    "institute.item1": "Cultural center and music memorial",
    "institute.item2": "Creative training and music education",
    "institute.item3": "Innovation, coworking, and creative economy",
    "institute.cta": "Learn about the Institute",

    "cta.eyebrow": "Contact",
    "cta.title": "Let’s build the next chapter",
    "cta.text": "We work with artists, families, institutions, and partners who understand music as legacy, asset, and cultural force.",
    "cta.button1": "Get in touch",
    "cta.button2": "View full case"
  }
};

function applyTextWithLineBreaks(element, value) {
  if (element.tagName === "H1" && value.includes("\n")) {
    element.innerHTML = value.split("\n").map(line => line.trim()).join("<br>");
  } else {
    element.textContent = value;
  }
}

function setLanguage(lang) {
  const selected = translations[lang] ? lang : "pt";
  localStorage.setItem("laia-language", selected);
  document.documentElement.lang = selected === "pt" ? "pt-BR" : selected;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = translations[selected][key];
    if (value) {
      applyTextWithLineBreaks(element, value);
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === selected);
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem("laia-language") || "pt");

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const header = document.getElementById("siteHeader");
function updateHeaderOnScroll() {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
}
window.addEventListener("scroll", updateHeaderOnScroll);
updateHeaderOnScroll();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.classList.remove("active");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.14
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

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

const counterElements = document.querySelectorAll("[data-counter]");
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
  {
    threshold: 0.5
  }
);

counterElements.forEach((counter) => counterObserver.observe(counter));