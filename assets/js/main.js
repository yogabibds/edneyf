(() => {
  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

  const translations = {
    pt: {
      navCatalogo: "Catálogo",
      navBiografia: "Biografia",
      navObras: "Obras",
      navContato: "Contato",

      heroKicker: "",
      heroTitle: "Edney Fernandes",
      heroManifest: "Canções que permanecem depois da despedida",
      heroSubtitle: "Uma presença que continua através das canções e de gerações",
      heroCtaPrimary: "Explorar catálogo",
      heroCtaSecondary: "Ler história",
      heroSpotify: "Ouvir no Spotify",
      heroScroll: "Role para descobrir",

      manifestoEyebrow: "Manifesto",
      manifestoP1:
        "Há vozes que, mesmo depois da despedida, não se apagam. Atravessam o invisível, o tempo e a ausência, e continuam ecoando.",
      manifestoP2:
        "Edney Fernandes foi uma dessas vozes: um artista que transformou sentimentos em melodia, o cotidiano em poesia e memórias em composições.",
      manifestoP3:
        "Este projeto é um reencontro entre passado e futuro: um espaço para preservar sua obra, apresentar sua trajetória e abrir caminho para novas vozes e interpretações.",

      biografiaEyebrow: "Biografia",

      relevanciaTitle: "A permanência da obra",
      relevanciaLead:
        "As obras de Edney Fernandes continuam sendo lembradas em rodas de samba, plataformas digitais e repertórios de diversos intérpretes do samba e do pagode.",
      metric1: "de visualizações em interpretações das músicas do catálogo",
      metric2: "obras registradas oficialmente",
      metric3Title: "Anos 90–Hoje",
      metric3: "presença contínua no samba e pagode brasileiro",
      relevanciaNote: "Uma obra que segue sendo ouvida, reinterpretada e lembrada.",
      partnersTitle: "Catálogo em Editoras e Entidades",

      presencaTitle: "Presença na música brasileira",
      presencaP1:
        "Edney Fernandes construiu sua trajetória em rodas de samba, shows, estúdios e projetos que marcaram o fim dos anos 90 e os anos 2000.",
      presencaP2:
        "Ao longo desse percurso, trabalhou com artistas, produtores, compositores e parceiros que fizeram parte da sua história e do movimento do samba e do pagode. Entre esses nomes estão Thaís Nascimento, Valtinho Jota, Marcelo Lombardo, Lua Lafaiette, Almirzinho, Bete Carvalho, Netinho de Paula, Billy SP, Dedé Paraíso e outros nomes ligados à música brasileira.",
      presencaP3:
        "Foi uma trajetória feita de trabalho, criação e presença em projetos que ajudaram a consolidar a história do samba e do pagode.",

      cancoesTitle: "Composições gravadas por outros artistas",
      cancoesLead:
        "A obra de Edney Fernandes seguiu adiante em outras vozes, outros grupos e outras interpretações, mantendo viva sua presença no repertório do samba e do pagode.",

      registrosTitle: "Registros televisivos",
      registrosLead:
        "Imagens raras de uma trajetória que marcou quem viu, ouviu e viveu o pagode nos anos 90.",
      registrosBody:
        "Poucos registros em imagem e som que atravessam o tempo e revelam o carisma, a presença e a força artística de Edney Fernandes.",

      projetosTitle: "Projetos que marcaram a trajetória",
      projetosLead:
        "Entre o fim dos anos 90 e os anos 2000, Edney Fernandes participou de projetos importantes para o samba e o pagode, deixando sua presença em composições, interpretações e músicas que marcaram uma geração.",
      terraTag: "Projeto fonográfico",
      terraTitle: "Terra Brasil — Pagode de Mesa 3",
      terraText:
        "Projeto fonográfico ao vivo ligado ao universo do samba e do pagode, reunindo diferentes intérpretes em formato de roda e consolidando uma estética importante do gênero em registros musicais da época.",
      edTag: "Discografia",
      edTitle: "Ed & A Tripulação",
      edText:
        "Projeto central da trajetória de Edney Fernandes, onde atuou como vocalista e consolidou sua identidade artística dentro do pagode paulista. Produzido por Arnaldo Sacomani, permanece como uma das principais referências de sua caminhada musical.",
      gestoTag: "Álbum póstumo",
      gestoTitle: "Gesto de Carinho",
      gestoText:
        "Projeto póstumo que dá continuidade à trajetória solo de Edney Fernandes, a partir de um trabalho que ficou sem ser concluído em vida e que hoje retorna como parte de seu legado artístico.",

      catalogoTitle: "Obras abertas a novas interpretações",
      catalogoP1:
        "Este catálogo reúne composições que fizeram parte de uma geração e seguem tocando até hoje, prontas para ganhar novas leituras, gravações e caminhos de interpretação.",
      catalogoP2:
        "Um repertório vivo, com identidade própria, presença histórica e potencial para circular novamente na voz de novos artistas.",
      catalogoCardTitle: "Grave uma obra",
      catalogoCardText:
        "Conheça composições disponíveis, possibilidades de licenciamento e caminhos de interpretação do catálogo de Edney Fernandes.",
      catalogoCardBtn: "Quero gravar uma obra",

      ineditasTitle: "Composições",
      ineditasLead:
        "Três canções foram selecionadas deste acervo como forma de apresentar um lado mais íntimo da obra de Edney Fernandes. São composições que não chegaram a ser lançadas em vida, mas que hoje revelam caminhos, emoções e nuances importantes da sua trajetória autoral.",
      trackBadge: "Inédita",

      memorialTitle: "Presenças que permanecem",
      memorialLead: "Fragmentos íntimos de uma trajetória que continua viva.",

      contatoTitle: "Converse sobre o legado",
      contatoText:
        "Para imprensa, parcerias, gravações, licenciamento e contato institucional, fale com a curadoria do projeto.",
      contatoBtn1: "Fale com a curadoria",
      contatoBtn2: "Conheça o projeto Instituto Edney Fernandes",

      footer1: "Edney Fernandes — Todos os direitos reservados",
      footer2: "Curadoria e desenvolvimento por Laiá Music"
    },

    en: {
      navCatalogo: "Catalog",
      navBiografia: "Biography",
      navObras: "Works",
      navContato: "Contact",

      heroKicker: "",
      heroTitle: "Edney Fernandes",
      heroManifest: "Songs that remain after farewell",
      heroSubtitle: "A presence that continues through songs and generations",
      heroCtaPrimary: "Explore catalog",
      heroCtaSecondary: "Read story",
      heroSpotify: "Listen on Spotify",
      heroScroll: "Scroll to discover",

      manifestoEyebrow: "Manifesto",
      manifestoP1:
        "There are voices that do not fade after farewell. They cross the invisible, time and absence, and keep resonating.",
      manifestoP2:
        "Edney Fernandes was one of those voices: an artist who transformed feelings into melody, everyday life into poetry and memories into compositions.",
      manifestoP3:
        "This project is a reunion between past and future: a space to preserve his work, present his journey and open paths for new voices and interpretations.",

      biografiaEyebrow: "Biography",

      relevanciaTitle: "The permanence of the work",
      relevanciaLead:
        "Edney Fernandes' works continue to be remembered in samba circles, digital platforms and in the repertoires of several samba and pagode performers.",
      metric1: "views across interpretations of songs from the catalog",
      metric2: "officially registered works",
      metric3Title: "90s–Today",
      metric3: "continuous presence in Brazilian samba and pagode",
      relevanciaNote:
        "A body of work that continues to be heard, reinterpreted and remembered.",
      partnersTitle: "Catalog in Publishers and Entities",

      presencaTitle: "Presence in Brazilian music",
      presencaP1:
        "Edney Fernandes built his path through samba circles, live shows, studios and projects that marked the late 1990s and the 2000s.",
      presencaP2:
        "Along the way, he worked with artists, producers, composers and partners who became part of his story and of the samba and pagode movement. Among these names are Thaís Nascimento, Valtinho Jota, Marcelo Lombardo, Lua Lafaiette, Almirzinho, Bete Carvalho, Netinho de Paula, Billy SP, Dedé Paraíso and other names connected to Brazilian music.",
      presencaP3:
        "It was a path built on work, creation and presence in projects that helped consolidate the history of samba and pagode.",

      cancoesTitle: "Songs recorded by other artists",
      cancoesLead:
        "Edney Fernandes' work moved forward in other voices, other groups and other interpretations, keeping his presence alive in the repertoire of samba and pagode.",

      registrosTitle: "TV records",
      registrosLead:
        "Rare images of a journey that marked those who saw, heard and lived pagode in the 1990s.",
      registrosBody:
        "Few records in image and sound that cross time and reveal Edney Fernandes' charisma, presence and artistic strength.",

      projetosTitle: "Projects that shaped the journey",
      projetosLead:
        "Between the late 1990s and the 2000s, Edney Fernandes took part in important samba and pagode projects, leaving his presence in compositions, interpretations and songs that marked a generation.",
      terraTag: "Phonographic project",
      terraTitle: "Terra Brasil — Pagode de Mesa 3",
      terraText:
        "A live phonographic project linked to samba and pagode, bringing together different performers in a circle format and consolidating an important aesthetic of the genre in the musical records of the time.",
      edTag: "Discography",
      edTitle: "Ed & A Tripulação",
      edText:
        "A central project in Edney Fernandes' path, where he acted as lead singer and consolidated his artistic identity within São Paulo pagode. Produced by Arnaldo Sacomani, it remains one of the main references of his musical journey.",
      gestoTag: "Posthumous album",
      gestoTitle: "Gesto de Carinho",
      gestoText:
        "A posthumous project that continues Edney Fernandes' solo path, based on a work that remained unfinished during his lifetime and now returns as part of his artistic legacy.",

      catalogoTitle: "Works open to new interpretations",
      catalogoP1:
        "This catalog brings together compositions that were part of a generation and still resonate today, ready to gain new readings, recordings and paths of interpretation.",
      catalogoP2:
        "A living repertoire with its own identity, historical presence and potential to circulate again through new artists' voices.",
      catalogoCardTitle: "Record a song",
      catalogoCardText:
        "Discover available compositions, licensing possibilities and paths for interpreting Edney Fernandes' catalog.",
      catalogoCardBtn: "I want to record a song",

      ineditasTitle: "Compositions",
      ineditasLead:
        "Three songs were selected from this archive as a way of presenting a more intimate side of Edney Fernandes' work. They are compositions that were not released during his lifetime, but today reveal paths, emotions and important nuances of his authorial trajectory.",
      trackBadge: "Unreleased",

      memorialTitle: "Presences that remain",
      memorialLead: "Intimate fragments of a journey that remains alive.",

      contatoTitle: "Talk about the legacy",
      contatoText:
        "For press, partnerships, recordings, licensing and institutional contact, speak with the project's curatorship.",
      contatoBtn1: "Talk to the curatorship",
      contatoBtn2: "Discover the Edney Fernandes Institute project",

      footer1: "Edney Fernandes — All rights reserved",
      footer2: "Curated and developed by Laiá Music"
    },

    es: {
      navCatalogo: "Catálogo",
      navBiografia: "Biografía",
      navObras: "Obras",
      navContato: "Contacto",

      heroKicker: "",
      heroTitle: "Edney Fernandes",
      heroManifest: "Canciones que permanecen después de la despedida",
      heroSubtitle: "Una presencia que continúa a través de las canciones y de generaciones",
      heroCtaPrimary: "Explorar catálogo",
      heroCtaSecondary: "Leer historia",
      heroSpotify: "Escuchar en Spotify",
      heroScroll: "Desliza para descubrir",

      manifestoEyebrow: "Manifiesto",
      manifestoP1:
        "Hay voces que, incluso después de la despedida, no se apagan. Atraviesan lo invisible, el tiempo y la ausencia, y siguen resonando.",
      manifestoP2:
        "Edney Fernandes fue una de esas voces: un artista que transformó sentimientos en melodía, la vida cotidiana en poesía y memorias en composiciones.",
      manifestoP3:
        "Este proyecto es un reencuentro entre pasado y futuro: un espacio para preservar su obra, presentar su trayectoria y abrir camino a nuevas voces e interpretaciones.",

      biografiaEyebrow: "Biografía",

      relevanciaTitle: "La permanencia de la obra",
      relevanciaLead:
        "Las obras de Edney Fernandes siguen siendo recordadas en rodas de samba, plataformas digitales y repertorios de diversos intérpretes del samba y del pagode.",
      metric1: "de visualizaciones en interpretaciones de canciones del catálogo",
      metric2: "obras registradas oficialmente",
      metric3Title: "Años 90–Hoy",
      metric3: "presencia continua en el samba y pagode brasileño",
      relevanciaNote:
        "Una obra que sigue siendo escuchada, reinterpretada y recordada.",
      partnersTitle: "Catálogo en Editoras y Entidades",

      presencaTitle: "Presencia en la música brasileña",
      presencaP1:
        "Edney Fernandes construyó su trayectoria entre rodas de samba, shows, estudios y proyectos que marcaron el final de los años 90 y los años 2000.",
      presencaP2:
        "A lo largo de este recorrido, trabajó con artistas, productores, compositores y socios que formaron parte de su historia y del movimiento del samba y del pagode. Entre esos nombres están Thaís Nascimento, Valtinho Jota, Marcelo Lombardo, Lua Lafaiette, Almirzinho, Bete Carvalho, Netinho de Paula, Billy SP, Dedé Paraíso y otros nombres ligados a la música brasileña.",
      presencaP3:
        "Fue una trayectoria hecha de trabajo, creación y presencia en proyectos que ayudaron a consolidar la historia del samba y del pagode.",

      cancoesTitle: "Composiciones grabadas por otros artistas",
      cancoesLead:
        "La obra de Edney Fernandes siguió adelante en otras voces, otros grupos y otras interpretaciones, manteniendo viva su presencia en el repertorio del samba y del pagode.",

      registrosTitle: "Registros televisivos",
      registrosLead:
        "Imágenes raras de una trayectoria que marcó a quienes vieron, escucharon y vivieron el pagode en los años 90.",
      registrosBody:
        "Pocos registros en imagen y sonido que atraviesan el tiempo y revelan el carisma, la presencia y la fuerza artística de Edney Fernandes.",

      projetosTitle: "Proyectos que marcaron la trayectoria",
      projetosLead:
        "Entre el final de los años 90 y los años 2000, Edney Fernandes participó en proyectos importantes para el samba y el pagode, dejando su presencia en composiciones, interpretaciones y canciones que marcaron una generación.",
      terraTag: "Proyecto fonográfico",
      terraTitle: "Terra Brasil — Pagode de Mesa 3",
      terraText:
        "Proyecto fonográfico en vivo vinculado al universo del samba y del pagode, reuniendo a diferentes intérpretes en formato de rueda y consolidando una estética importante del género en los registros musicales de la época.",
      edTag: "Discografía",
      edTitle: "Ed & A Tripulação",
      edText:
        "Proyecto central de la trayectoria de Edney Fernandes, donde actuó como vocalista y consolidó su identidad artística dentro del pagode paulista. Producido por Arnaldo Sacomani, sigue siendo una de las principales referencias de su camino musical.",
      gestoTag: "Álbum póstumo",
      gestoTitle: "Gesto de Carinho",
      gestoText:
        "Proyecto póstumo que da continuidad a la trayectoria solista de Edney Fernandes, a partir de un trabajo que quedó sin concluir en vida y que hoy regresa como parte de su legado artístico.",

      catalogoTitle: "Obras abiertas a nuevas interpretaciones",
      catalogoP1:
        "Este catálogo reúne composiciones que formaron parte de una generación y que siguen sonando hasta hoy, listas para ganar nuevas lecturas, grabaciones y caminos de interpretación.",
      catalogoP2:
        "Un repertorio vivo, con identidad propia, presencia histórica y potencial para volver a circular en la voz de nuevos artistas.",
      catalogoCardTitle: "Graba una obra",
      catalogoCardText:
        "Conoce composiciones disponibles, posibilidades de licencia y caminos de interpretación del catálogo de Edney Fernandes.",
      catalogoCardBtn: "Quiero grabar una obra",

      ineditasTitle: "Composiciones",
      ineditasLead:
        "Tres canciones fueron seleccionadas de este acervo como forma de presentar un lado más íntimo de la obra de Edney Fernandes. Son composiciones que no llegaron a ser lanzadas en vida, pero que hoy revelan caminos, emociones y matices importantes de su trayectoria autoral.",
      trackBadge: "Inédita",

      memorialTitle: "Presencias que permanecen",
      memorialLead: "Fragmentos íntimos de una trayectoria que sigue viva.",

      contatoTitle: "Conversa sobre el legado",
      contatoText:
        "Para prensa, alianzas, grabaciones, licencias y contacto institucional, habla con la curaduría del proyecto.",
      contatoBtn1: "Habla con la curaduría",
      contatoBtn2: "Conoce el proyecto Instituto Edney Fernandes",

      footer1: "Edney Fernandes — Todos los derechos reservados",
      footer2: "Curaduría y desarrollo por Laiá Music"
    }
  };

  const applyLanguage = (lang) => {
    const dict = translations[lang] || translations.pt;

    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : lang === "en" ? "en" : "es";

    $$("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (dict[key]) node.textContent = dict[key];
    });

    $$(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });

    try {
      localStorage.setItem("edney_lang", lang);
    } catch {}
  };

  const savedLang = (() => {
    try {
      return localStorage.getItem("edney_lang") || "pt";
    } catch {
      return "pt";
    }
  })();

  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage(savedLang);

  const menuToggle = $("#menuToggle");
  const mobileMenu = $("#mobileMenu");

  menuToggle?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  });

  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = $(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      $("#mobileMenu")?.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.14 }
  );

  $$(".reveal").forEach((el) => revealObserver.observe(el));

  const heroFrame = $("#heroFrame");
  const spacer = $(".hero-visual__spacer");

  const animateHero = () => {
    if (!heroFrame || !spacer) return;

    const rect = spacer.getBoundingClientRect();
    const viewport = window.innerHeight;
    const start = viewport * 0.86;
    const end = -viewport * 0.22;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));

    const scale = 1 - 0.1 * progress;
    const translateY = 14 * progress;
    const radius = 24 * progress;
    const alpha = 0.36 * progress;

    heroFrame.style.transform = `translateY(${translateY}px) scale(${scale})`;
    heroFrame.style.borderRadius = `${radius}px`;
    heroFrame.style.boxShadow = `0 26px 80px rgba(0,0,0,${alpha})`;
  };

  window.addEventListener("scroll", animateHero, { passive: true });
  window.addEventListener("resize", animateHero, { passive: true });
  animateHero();

  const formatCounter = (value) => {
    if (value >= 1000000) {
      const short = value / 1000000;
      return `+${Number.isInteger(short) ? short : short.toFixed(1)}M`;
    }
    if (value === 44) return "44+";
    return String(value);
  };

  const animateCounter = (el) => {
    const target = Number(el.dataset.counter || 0);
    if (!target) return;

    const duration = 1400;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      el.textContent = formatCounter(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = formatCounter(target);
      }
    };

    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  $$("[data-counter]").forEach((el) => counterObserver.observe(el));

  const lightbox = $("#lightbox");
  const lightboxImage = $("#lightboxImage");
  const lightboxClose = $("#lightboxClose");
  const memoryItems = $$(".memory-card");

  if (lightbox && lightboxImage && lightboxClose) {
    const openLightbox = (src, alt) => {
      lightboxImage.src = src;
      lightboxImage.alt = alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("menu-open");
    };

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.src = "";
      lightboxImage.alt = "";
      document.body.classList.remove("menu-open");
    };

    memoryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const img = $("img", item);
        if (img?.src) openLightbox(img.src, img.alt || "");
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }

  const audios = $$("audio");
  audios.forEach((audio) => {
    audio.addEventListener("play", () => {
      audios.forEach((other) => {
        if (other !== audio) other.pause();
      });
    });
  });
})();

// === Final premium motion pass ===
(function(){
  const header = document.querySelector('.site-header');
  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('load', updateHeader);
  updateHeader();

  const reveals = Array.from(document.querySelectorAll('.reveal, .reveal-soft, .reveal-lift'));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16,
    rootMargin: '0px 0px -8% 0px'
  });
  reveals.forEach((el) => revealObserver.observe(el));

  const heroFrame = document.getElementById('heroFrame');
  const heroSection = document.getElementById('hero');
  let ticking = false;
  const parallaxHero = () => {
    if (!heroFrame || !heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
    const y = progress * 22;
    heroFrame.style.transform = `translate3d(0, ${y}px, 0) scale(${1 + progress * 0.02})`;
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(parallaxHero);
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  parallaxHero();

  // Autoplay + loop dos carrosséis/faixas horizontais
  const setupHorizontalRow = (row) => {
    const track = row.querySelector('.edge-strip__track, .projects-marquee__track');
    const prev = row.querySelector('[data-scroll-prev]');
    const next = row.querySelector('[data-scroll-next]');
    if (!track) return;

    const originalItems = Array.from(track.children);
    if (originalItems.length && !track.dataset.cloned) {
      originalItems.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
      });
      track.dataset.cloned = 'true';
    }

    let isPaused = false;
    const speed = row.dataset.speed ? Number(row.dataset.speed) : 0.35;
    const loopPoint = () => track.scrollWidth / 2;

    const tick = () => {
      if (!isPaused && track.scrollWidth > track.clientWidth) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= loopPoint()) track.scrollLeft = 0;
      }
      requestAnimationFrame(tick);
    };

    const amount = () => Math.min(track.clientWidth * 0.85, 520);

    prev?.addEventListener('click', () => {
      isPaused = true;
      track.scrollBy({ left: -amount(), behavior: 'smooth' });
      window.setTimeout(() => { isPaused = false; }, 1200);
    });

    next?.addEventListener('click', () => {
      isPaused = true;
      track.scrollBy({ left: amount(), behavior: 'smooth' });
      window.setTimeout(() => { isPaused = false; }, 1200);
    });

    row.addEventListener('mouseenter', () => { isPaused = true; });
    row.addEventListener('mouseleave', () => { isPaused = false; });
    row.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
    row.addEventListener('touchend', () => {
      window.setTimeout(() => { isPaused = false; }, 1400);
    }, { passive: true });

    tick();
  };

  document.querySelectorAll('[data-scroll-row]').forEach(setupHorizontalRow);

  // Só um áudio toca por vez
  document.querySelectorAll('audio').forEach((audio) => {
    audio.addEventListener('play', () => {
      document.querySelectorAll('audio').forEach((other) => {
        if (other !== audio) other.pause();
      });
    });
  });

})();
