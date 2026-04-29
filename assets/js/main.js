(() => {
  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

  const translations = {
    pt: {
      navManifesto: "Manifesto",
      navBiografia: "Biografia",
      navObras: "Obras",
      navContato: "Contato",

      heroKicker: "Memorial Oficial",
      heroTitle: "Edney Fernandes",
      heroManifest: "Canções que permanecem mesmo depois da despedida.",
      heroSubtitle: "Uma presença que continua através das canções.",
      heroCtaPrimary: "Explorar catálogo",
      heroCtaSecondary: "Ler manifesto",
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
      metricViews: "visualizações em gravações e interpretações do catálogo",
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

      registrosTitle: "Registros, prensa y memoria",
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
      // FIX: new keys
      catalogoPositioning: "Obras que fizeram parte do repertório do pagode dos anos 90 e seguem circulando até hoje.",
      catalogoAvailability: "Este catálogo está disponível para gravação, licenciamento e novos projetos.",
      catalogoCtaGravar: "🎤 Quero gravar uma música",
      catalogoCtaCatalogo: "📩 Solicitar catálogo completo",
      catalogoCtaOuvir: "🎧 Ouvir demos",
      catalogoP1:
        "Este catálogo reúne composições que fizeram parte de uma geração e seguem tocando até hoje, prontas para ganhar novas leituras, gravações e caminhos de interpretação.",
      catalogoP2:
        "Um repertório vivo, com identidade própria, presença histórica e potencial para circular novamente na voz de novos artistas.",
      catalogoCardTitle: "Grave uma obra",
      catalogoCardText:
        "Conheça composições disponíveis, possibilidades de licenciamento e caminhos de interpretação do catálogo de Edney Fernandes.",
      catalogoCardBtn: "Quero gravar uma obra",

      // FIX 7: corrected from "Composições inéditas" → "Composições"
      ineditasTitle: "Composições",
      ineditasLead:
        "Três composições foram selecionadas deste acervo como forma de apresentar um lado mais íntimo da obra de Edney Fernandes. São registros que revelam emoções, caminhos e nuances importantes da sua trajetória autoral.",
      trackBadge: "Inédita",
      spotifySoon: "Disponível em breve no Spotify",

      memorialTitle: "Presenças que permanecem",
      memorialLead: "Fragmentos íntimos de uma trajetória que continua viva.",

      contatoTitle: "Converse sobre o legado",
      contatoText:
        "Para imprensa, parcerias, gravações, licenciamento e contato institucional, fale com a curadoria do projeto.",
      contatoBtn1: "Fale com a curadoria",
      contatoBtn2: "Conheça o projeto Instituto Edney Fernandes",

      curadoriaTitle: "O Pagode dos Anos 90",
      curadoriaLead: "Antes de ouvir as composições, conheça o universo musical que influenciou essa trajetória.",

      footer1: "Edney Fernandes — Todos os direitos reservados",
      footer2: "Curadoria e desenvolvimento por Laiá Music"
    },

    en: {
      navManifesto: "Manifesto",
      navBiografia: "Biography",
      navObras: "Works",
      navContato: "Contact",

      heroKicker: "Official Memorial",
      heroTitle: "Edney Fernandes",
      heroManifest: "Songs that remain even after farewell.",
      heroSubtitle: "A presence that continues through songs.",
      heroCtaPrimary: "Explore catalog",
      heroCtaSecondary: "Read manifesto",
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
      metricViews: "views across recordings and interpretations of the catalog",
      metric2: "officially registered works",
      metric3Title: "90s–Today",
      metric3: "continuous presence in Brazilian samba and pagode",
      relevanciaNote: "A body of work that continues to be heard, reinterpreted and remembered.",
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

      registrosTitle: "Records, press and memory",
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
      catalogoPositioning: "Works that shaped the pagode repertoire of the 90s and still circulate today.",
      catalogoAvailability: "This catalog is available for recording, licensing and new projects.",
      catalogoCtaGravar: "🎤 I want to record a song",
      catalogoCtaCatalogo: "📩 Request full catalog",
      catalogoCtaOuvir: "🎧 Listen to demos",
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
        "Three compositions were selected from this archive as a way of presenting a more intimate side of Edney Fernandes' work. They are records that reveal emotions, paths and important nuances of his authorial trajectory.",
      trackBadge: "Unreleased",
      spotifySoon: "Coming soon to Spotify",

      memorialTitle: "Presences that remain",
      memorialLead: "Intimate fragments of a journey that remains alive.",

      contatoTitle: "Talk about the legacy",
      contatoText:
        "For press, partnerships, recordings, licensing and institutional contact, speak with the project's curatorship.",
      contatoBtn1: "Talk to the curatorship",
      contatoBtn2: "Discover the Edney Fernandes Institute project",

      curadoriaTitle: "The Pagode of the 90s",
      curadoriaLead: "Before listening to the compositions, discover the musical universe that influenced this journey.",

      footer1: "Edney Fernandes — All rights reserved",
      footer2: "Curated and developed by Laiá Music"
    },

    es: {
      navManifesto: "Manifiesto",
      navBiografia: "Biografía",
      navObras: "Obras",
      navContato: "Contacto",

      heroKicker: "Memorial Oficial",
      heroTitle: "Edney Fernandes",
      heroManifest: "Canciones que permanecen incluso después de la despedida.",
      heroSubtitle: "Una presencia que continúa a través de las canciones.",
      heroCtaPrimary: "Explorar catálogo",
      heroCtaSecondary: "Leer manifiesto",
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
      metricViews: "visualizaciones en grabaciones e interpretaciones del catálogo",
      metric2: "obras registradas oficialmente",
      metric3Title: "Años 90–Hoy",
      metric3: "presencia continua en el samba y pagode brasileño",
      relevanciaNote: "Una obra que sigue siendo escuchada, reinterpretada y recordada.",
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

      registrosTitle: "Registros, prensa y memoria",
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
      catalogoPositioning: "Obras que formaron parte del repertorio del pagode de los 90 y siguen circulando hasta hoy.",
      catalogoAvailability: "Este catálogo está disponible para grabación, licenciamiento y nuevos proyectos.",
      catalogoCtaGravar: "🎤 Quiero grabar una canción",
      catalogoCtaCatalogo: "📩 Solicitar catálogo completo",
      catalogoCtaOuvir: "🎧 Escuchar demos",
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
        "Tres composiciones fueron seleccionadas de este acervo como forma de presentar un lado más íntimo de la obra de Edney Fernandes. Son registros que revelan emociones, caminos y matices importantes de su trayectoria autoral.",
      trackBadge: "Inédita",
      spotifySoon: "Próximamente en Spotify",

      memorialTitle: "Presencias que permanecen",
      memorialLead: "Fragmentos íntimos de una trayectoria que sigue viva.",

      contatoTitle: "Conversa sobre el legado",
      contatoText:
        "Para prensa, alianzas, grabaciones, licencias y contacto institucional, habla con la curaduría del proyecto.",
      contatoBtn1: "Habla con la curaduría",
      contatoBtn2: "Conoce el proyecto Instituto Edney Fernandes",

      curadoriaTitle: "El Pagode de los Años 90",
      curadoriaLead: "Antes de escuchar las composiciones, conoce el universo musical que influyó en esta trayectoria.",

      footer1: "Edney Fernandes — Todos los derechos reservados",
      footer2: "Curaduría y desarrollo por Laiá Music"
    }
  };

  /* ── i18n ── */
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
    try { localStorage.setItem("edney_lang", lang); } catch {}
  };

  const savedLang = (() => {
    try { return localStorage.getItem("edney_lang") || "pt"; } catch { return "pt"; }
  })();

  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
  applyLanguage(savedLang);

  /* ── Mobile menu ── */
  const menuToggle = $("#menuToggle");
  const mobileMenu = $("#mobileMenu");
  menuToggle?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  });

  /* ── Smooth scroll + close menu ── */
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

  /* ── Reveal on scroll ── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.14 }
  );
  $$(".reveal").forEach((el) => revealObserver.observe(el));

  /* ── Hero parallax ── */
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

  /* ── Animated counters ── */
  const formatCounter = (value) => {
    if (value >= 1_000_000) {
      const short = value / 1_000_000;
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
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = formatCounter(target);
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

  /* ── FIX: Strip arrow click handlers (scroll by one card width) ── */
  const initStripArrows = (stripEl) => {
    if (!stripEl) return;
    const track = stripEl.querySelector(".edge-strip__track, .projects-marquee__track");
    const prevBtn = stripEl.querySelector(".strip-arrow--prev");
    const nextBtn = stripEl.querySelector(".strip-arrow--next");
    if (!track) return;

    const getScrollAmount = () => {
      const firstChild = track.firstElementChild;
      return firstChild ? firstChild.offsetWidth + 16 : 320;
    };

    prevBtn?.addEventListener("click", () => {
      track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    });
    nextBtn?.addEventListener("click", () => {
      track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    });
  };

  // Init arrows for all strips
  [
    "#stripPresenca",
    "#stripProjetos",
    "#stripCancoes",
    "#stripRegistros",
    "#stripMemorial"
  ].forEach((id) => initStripArrows($(id)));

  /* ── FIX: Autoplay for photo strips (slow continuous drift, pause on hover) ── */
  const initAutoplay = (trackEl, speedPx = 0.6) => {
    if (!trackEl) return;
    let pos = 0;
    let paused = false;
    let raf;

    const tick = () => {
      if (!paused) {
        pos += speedPx;
        // Loop: if scrolled past half, reset to 0 for seamless loop
        if (pos >= trackEl.scrollWidth / 2) pos = 0;
        trackEl.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };

    trackEl.addEventListener("mouseenter", () => { paused = true; });
    trackEl.addEventListener("mouseleave", () => { paused = false; });
    trackEl.addEventListener("touchstart", () => { paused = true; }, { passive: true });
    trackEl.addEventListener("touchend",   () => {
      setTimeout(() => { paused = false; }, 2000);
    }, { passive: true });

    raf = requestAnimationFrame(tick);
  };

  // Autoplay only on photo strips (not video iframes — those need user intent)
  const photoTrackPresenca = $("#stripPresenca .edge-strip__track");
  const photoTrackMemorial = $("#stripMemorial .edge-strip__track");
  if (photoTrackPresenca) initAutoplay(photoTrackPresenca, 0.55);
  if (photoTrackMemorial) initAutoplay(photoTrackMemorial, 0.55);

  /* ── Lightbox (memorial photo cards) ── */
  const lightbox      = $("#lightbox");
  const lightboxImage = $("#lightboxImage");
  const lightboxClose = $("#lightboxClose");
  const memoryItems   = $$(".memory-card");

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
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });
  }

  /* ── Single audio at a time ── */
  const audios = $$("audio");
  audios.forEach((audio) => {
    audio.addEventListener("play", () => {
      audios.forEach((other) => { if (other !== audio) other.pause(); });
    });
  });
})();


const initHeaderScroll = () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 32);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
};

initHeaderScroll();
