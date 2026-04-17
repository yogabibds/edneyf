(() => {
  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

  const translations = {
    pt: {
      navManifesto: "Manifesto",
      navRelevance: "Relevância",
      navJourney: "Trajetória",
      navArtists: "Intérpretes",
      navDiscography: "Discografia",
      navCatalog: "Catálogo",
      navAudio: "Áudios",
      navMemorial: "Memorial",
      navContact: "Contato",

      rotateTitle: "Gire o dispositivo",
      rotateText: "Este site foi pensado para navegação vertical.",
      rotateButton: "Continuar assim mesmo",

      heroKicker: "Memorial Oficial",
      heroTitle: "Uma voz que o tempo não silenciou",
      heroSubtitle: "O legado de Edney Fernandes continua vivo — entre memória, catálogo e novas interpretações.",
      heroCtaPrimary: "Explorar catálogo",
      heroCtaSecondary: "Ler manifesto",
      scrollLabel: "Role para descobrir",

      manifestoEyebrow: "A Voz e o Tempo",
      manifestoTitle: "Manifesto",
      manifestoP1: "Há vozes que, mesmo depois da despedida, não se apagam. Atravessam o invisível, o tempo e a ausência — e continuam ecoando.",
      manifestoP2: "Edney Fernandes foi uma dessas vozes. Um artista que transformava sentimentos em melodia, cotidiano em poesia e memória em canção.",
      manifestoP3: "Este projeto é um reencontro entre passado e futuro: um espaço para preservar sua obra, apresentar sua trajetória e abrir caminho para novas vozes.",

      relevanceEyebrow: "Alcance & Relevância",
      relevanceTitle: "A permanência da obra",
      relevanceLead: "O catálogo de Edney Fernandes continua ativo no imaginário coletivo, em plataformas digitais, repertórios de intérpretes e no circuito afetivo do samba e do pagode.",
      impact1Number: "+6M",
      impact1Label: "de visualizações em interpretações das músicas do catálogo",
      impact2Number: "44",
      impact2Label: "obras registradas oficialmente",
      impact3Number: "Anos 90–Hoje",
      impact3Label: "presença contínua no samba e pagode brasileiro",

      journeyEyebrow: "Trajetória & Colaborações",
      journeyTitle: "Presença real no circuito da música brasileira",
      journeyText1: "Como cantor, compositor, instrumentista e músico de estúdio, Edney Fernandes participou de projetos que ajudaram a consolidar o samba e o pagode paulista no cenário nacional.",
      journeyText2: "Sua trajetória inclui Ed & A Tripulação, colaborações com nomes relevantes e participações em projetos fonográficos que conectam sua obra a uma memória viva da música popular brasileira.",
      feature1Title: "Ed & A Tripulação",
      feature1Text: "Vocalista, violonista e compositor em um projeto marcante do pagode paulista.",
      feature2Title: "Terra Brasil — Pagode de Mesa 3",
      feature2Text: "Participação como produtor assistente e percussionista em projeto fonográfico relevante do gênero.",
      feature3Title: "Colaborações & Fonogramas",
      feature3Text: "Participações e conexões com artistas e nomes ligados ao samba e pagode, incluindo Bete Carvalho, Lula Lafayette e Wilson Prateado.",

      artistsEyebrow: "Grandes Intérpretes",
      artistsTitle: "Canções que seguiram vivas em outras vozes",
      artistsLead: "Obras autorais interpretadas por artistas relevantes do samba e do pagode brasileiro.",

      discographyEyebrow: "Discografia",
      discographyTitle: "Projetos que marcaram uma trajetória",
      discographyLead: "Uma seleção de obras que apresenta a força artística de Edney Fernandes entre grupo, catálogo e lançamentos póstumos.",

      catalogEyebrow: "Catálogo Vivo",
      catalogTitle: "Obras abertas a novas interpretações",
      catalogText1: "Este não é apenas um memorial. É também um catálogo vivo, com composições que podem voltar ao mundo em novas gravações, arranjos e projetos.",
      catalogText2: "Para artistas, intérpretes, produtores e parceiros interessados, este espaço apresenta um repertório com identidade, emoção e história.",
      catalogCardTitle: "Grave uma obra",
      catalogCardText: "Conheça composições disponíveis, possibilidades de licenciamento e caminhos de interpretação do catálogo de Edney Fernandes.",
      catalogCardCta: "Quero gravar uma obra",

      audioEyebrow: "Áudios",
      audioTitle: "Escuta sensível do catálogo",
      audioLead: "Prévias, registros e composições para apresentar a textura emocional da obra.",

      memorialEyebrow: "Memorial",
      memorialTitle: "Memória visual",
      memorialLead: "Fotografias, encontros e fragmentos de uma trajetória que continua presente.",

      contactEyebrow: "Contato",
      contactTitle: "Converse sobre o legado",
      contactText: "Para imprensa, parcerias, gravações, licenciamento ou contato institucional, fale com a curadoria do projeto.",

      footerText: "© Laia Music — Memorial Edney Fernandes"
    },

    en: {
      navManifesto: "Manifesto",
      navRelevance: "Relevance",
      navJourney: "Journey",
      navArtists: "Artists",
      navDiscography: "Discography",
      navCatalog: "Catalog",
      navAudio: "Audio",
      navMemorial: "Memorial",
      navContact: "Contact",

      rotateTitle: "Rotate your device",
      rotateText: "This website was designed for vertical browsing.",
      rotateButton: "Continue anyway",

      heroKicker: "Official Memorial",
      heroTitle: "A voice time could not silence",
      heroSubtitle: "Edney Fernandes' legacy lives on — through memory, catalog and new interpretations.",
      heroCtaPrimary: "Explore catalog",
      heroCtaSecondary: "Read manifesto",
      scrollLabel: "Scroll to discover",

      manifestoEyebrow: "The Voice and Time",
      manifestoTitle: "Manifesto",
      manifestoP1: "There are voices that do not fade after farewell. They cross the invisible, time and absence — and keep resonating.",
      manifestoP2: "Edney Fernandes was one of those voices. An artist who transformed feelings into melody, everyday life into poetry and memory into song.",
      manifestoP3: "This project is a reunion between past and future: a place to preserve his work, present his journey and open paths for new voices.",

      relevanceEyebrow: "Reach & Relevance",
      relevanceTitle: "The permanence of the work",
      relevanceLead: "Edney Fernandes' catalog remains active in the collective imagination, on digital platforms, in performers' repertoires and in the affective circuit of samba and pagode.",
      impact1Number: "+6M",
      impact1Label: "views across interpretations of songs from the catalog",
      impact2Number: "44",
      impact2Label: "officially registered works",
      impact3Number: "90s–Today",
      impact3Label: "continuous presence in Brazilian samba and pagode",

      journeyEyebrow: "Journey & Collaborations",
      journeyTitle: "A real presence in Brazilian music",
      journeyText1: "As a singer, songwriter, instrumentalist and studio musician, Edney Fernandes took part in projects that helped consolidate São Paulo samba and pagode on the national scene.",
      journeyText2: "His path includes Ed & A Tripulação, collaborations with relevant names and phonographic projects that connect his work to a living memory of Brazilian popular music.",
      feature1Title: "Ed & A Tripulação",
      feature1Text: "Lead singer, guitarist and songwriter in a landmark São Paulo pagode project.",
      feature2Title: "Terra Brasil — Pagode de Mesa 3",
      feature2Text: "Participation as assistant producer and percussionist in a relevant phonographic project of the genre.",
      feature3Title: "Collaborations & Phonograms",
      feature3Text: "Participations and links with artists connected to samba and pagode, including Bete Carvalho, Lula Lafayette and Wilson Prateado.",

      artistsEyebrow: "Major Performers",
      artistsTitle: "Songs that remained alive in other voices",
      artistsLead: "Original songs interpreted by relevant artists of Brazilian samba and pagode.",

      discographyEyebrow: "Discography",
      discographyTitle: "Projects that shaped a journey",
      discographyLead: "A selection of works that presents Edney Fernandes' artistic strength across group recordings, catalog songs and posthumous releases.",

      catalogEyebrow: "Living Catalog",
      catalogTitle: "Works open to new interpretations",
      catalogText1: "This is not only a memorial. It is also a living catalog, with songs that can return to the world through new recordings, arrangements and projects.",
      catalogText2: "For artists, performers, producers and partners, this space presents a repertoire with identity, emotion and history.",
      catalogCardTitle: "Record a song",
      catalogCardText: "Discover available compositions, licensing possibilities and paths for interpreting Edney Fernandes' catalog.",
      catalogCardCta: "I want to record a song",

      audioEyebrow: "Audio",
      audioTitle: "A sensitive listening experience",
      audioLead: "Previews, recordings and compositions that reveal the emotional texture of the work.",

      memorialEyebrow: "Memorial",
      memorialTitle: "Visual memory",
      memorialLead: "Photographs, encounters and fragments of a journey that remains present.",

      contactEyebrow: "Contact",
      contactTitle: "Talk about the legacy",
      contactText: "For press, partnerships, recordings, licensing or institutional contact, speak with the project's curatorship.",

      footerText: "© Laia Music — Edney Fernandes Memorial"
    },

    es: {
      navManifesto: "Manifiesto",
      navRelevance: "Relevancia",
      navJourney: "Trayectoria",
      navArtists: "Intérpretes",
      navDiscography: "Discografía",
      navCatalog: "Catálogo",
      navAudio: "Audios",
      navMemorial: "Memorial",
      navContact: "Contacto",

      rotateTitle: "Gira el dispositivo",
      rotateText: "Este sitio fue pensado para navegación vertical.",
      rotateButton: "Continuar de todos modos",

      heroKicker: "Memorial Oficial",
      heroTitle: "Una voz que el tiempo no silenció",
      heroSubtitle: "El legado de Edney Fernandes sigue vivo — entre memoria, catálogo y nuevas interpretaciones.",
      heroCtaPrimary: "Explorar catálogo",
      heroCtaSecondary: "Leer manifiesto",
      scrollLabel: "Desliza para descubrir",

      manifestoEyebrow: "La Voz y el Tiempo",
      manifestoTitle: "Manifiesto",
      manifestoP1: "Hay voces que, incluso después de la despedida, no se apagan. Atraviesan lo invisible, el tiempo y la ausencia — y siguen resonando.",
      manifestoP2: "Edney Fernandes fue una de esas voces. Un artista que transformaba sentimientos en melodía, la vida cotidiana en poesía y la memoria en canción.",
      manifestoP3: "Este proyecto es un reencuentro entre pasado y futuro: un espacio para preservar su obra, presentar su trayectoria y abrir camino a nuevas voces.",

      relevanceEyebrow: "Alcance & Relevancia",
      relevanceTitle: "La permanencia de la obra",
      relevanceLead: "El catálogo de Edney Fernandes sigue activo en el imaginario colectivo, en plataformas digitales, repertorios de intérpretes y en el circuito afectivo del samba y del pagode.",
      impact1Number: "+6M",
      impact1Label: "de visualizaciones en interpretaciones de canciones del catálogo",
      impact2Number: "44",
      impact2Label: "obras registradas oficialmente",
      impact3Number: "Años 90–Hoy",
      impact3Label: "presencia continua en el samba y pagode brasileño",

      journeyEyebrow: "Trayectoria & Colaboraciones",
      journeyTitle: "Presencia real en el circuito de la música brasileña",
      journeyText1: "Como cantante, compositor, instrumentista y músico de estudio, Edney Fernandes participó en proyectos que ayudaron a consolidar el samba y el pagode paulista a nivel nacional.",
      journeyText2: "Su trayectoria incluye Ed & A Tripulação, colaboraciones con nombres relevantes y proyectos fonográficos que conectan su obra con una memoria viva de la música popular brasileña.",
      feature1Title: "Ed & A Tripulação",
      feature1Text: "Vocalista, guitarrista y compositor en un proyecto emblemático del pagode paulista.",
      feature2Title: "Terra Brasil — Pagode de Mesa 3",
      feature2Text: "Participación como productor asistente y percusionista en un proyecto fonográfico relevante del género.",
      feature3Title: "Colaboraciones & Fonogramas",
      feature3Text: "Participaciones y vínculos con artistas ligados al samba y pagode, incluyendo Bete Carvalho, Lula Lafayette y Wilson Prateado.",

      artistsEyebrow: "Grandes Intérpretes",
      artistsTitle: "Canciones que siguieron vivas en otras voces",
      artistsLead: "Obras autorales interpretadas por artistas relevantes del samba y del pagode brasileño.",

      discographyEyebrow: "Discografía",
      discographyTitle: "Proyectos que marcaron una trayectoria",
      discographyLead: "Una selección de obras que presenta la fuerza artística de Edney Fernandes entre grupo, catálogo y lanzamientos póstumos.",

      catalogEyebrow: "Catálogo Vivo",
      catalogTitle: "Obras abiertas a nuevas interpretaciones",
      catalogText1: "Esto no es solo un memorial. También es un catálogo vivo, con composiciones que pueden volver al mundo en nuevas grabaciones, arreglos y proyectos.",
      catalogText2: "Para artistas, intérpretes, productores y aliados, este espacio presenta un repertorio con identidad, emoción e historia.",
      catalogCardTitle: "Graba una obra",
      catalogCardText: "Conoce composiciones disponibles, posibilidades de licencia y caminos de interpretación del catálogo de Edney Fernandes.",
      catalogCardCta: "Quiero grabar una obra",

      audioEyebrow: "Audios",
      audioTitle: "Escucha sensible del catálogo",
      audioLead: "Previews, registros y composiciones para presentar la textura emocional de la obra.",

      memorialEyebrow: "Memorial",
      memorialTitle: "Memoria visual",
      memorialLead: "Fotografías, encuentros y fragmentos de una trayectoria que sigue presente.",

      contactEyebrow: "Contacto",
      contactTitle: "Conversa sobre el legado",
      contactText: "Para prensa, alianzas, grabaciones, licencias o contacto institucional, habla con la curaduría del proyecto.",

      footerText: "© Laia Music — Memorial Edney Fernandes"
    }
  };

  const iconSpotify = () => `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
      <path d="M7.4 10.2c3.1-1 6.7-.6 9.4 1.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M7.8 12.9c2.6-.8 5.6-.4 7.9 1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M8.2 15.4c2-.5 4.2-.2 6 .8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </svg>
  `;

  const iconYouTube = () => `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.9C18.2 5 12 5 12 5s-6.2 0-7.8.3A2.6 2.6 0 0 0 2.4 7.2 28.5 28.5 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.9C5.8 19 12 19 12 19s6.2 0 7.8-.3a2.6 2.6 0 0 0 1.8-1.9A28.5 28.5 0 0 0 22 12c0-1.6-.1-3.2-.4-4.8z"/>
      <path d="M10 15.5v-7l6 3.5-6 3.5z" fill="currentColor"/>
    </svg>
  `;

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

  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = $(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);

      $("#mobileMenu")?.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.14 }
  );

  $$(".reveal").forEach((el) => observer.observe(el));

  const rotateOverlay = $("#rotateOverlay");
  const dismissBtn = rotateOverlay?.querySelector("[data-rotate-dismiss]");
  const dismissedKey = "edney_rotate_dismissed";

  dismissBtn?.addEventListener("click", () => {
    rotateOverlay.classList.remove("is-on");
    try {
      localStorage.setItem(dismissedKey, "1");
    } catch {}
  });

  const checkOrientation = () => {
    if (!rotateOverlay) return;

    const dismissed = (() => {
      try {
        return localStorage.getItem(dismissedKey) === "1";
      } catch {
        return false;
      }
    })();

    if (dismissed) return;

    const isLandscapeMobile =
      window.innerWidth > window.innerHeight && window.innerWidth < 980;

    rotateOverlay.classList.toggle("is-on", isLandscapeMobile);
  };

  window.addEventListener("resize", checkOrientation, { passive: true });
  checkOrientation();

  const heroFrame = $("#heroFrame");
  const spacer = $(".hero-visual__spacer");

  const animateHero = () => {
    if (!heroFrame || !spacer) return;

    const rect = spacer.getBoundingClientRect();
    const viewport = window.innerHeight;
    const start = viewport * 0.86;
    const end = -viewport * 0.22;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));

    const scale = 1 - 0.14 * progress;
    const translateY = 18 * progress;
    const radius = 26 * progress;
    const alpha = 0.42 * progress;

    heroFrame.style.transform = `translateY(${translateY}px) scale(${scale})`;
    heroFrame.style.borderRadius = `${radius}px`;
    heroFrame.style.boxShadow = `0 30px 90px rgba(0,0,0,${alpha})`;
  };

  window.addEventListener("scroll", animateHero, { passive: true });
  window.addEventListener("resize", animateHero, { passive: true });
  animateHero();

  const menuToggle = $("#menuToggle");
  const mobileMenu = $("#mobileMenu");

  menuToggle?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  });

  const loadJSON = async (path) => {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`Erro ao carregar ${path}`);
    return response.json();
  };

  const renderDiscography = async () => {
    const root = $("#discografiaCards");
    if (!root) return;

    let items = [];
    try {
      const json = await loadJSON("data/playlists.json");
      if (Array.isArray(json)) items = json;
    } catch {}

    root.innerHTML = items.map((item) => {
      const spotify = item.spotify && item.spotify !== "#" ? item.spotify : null;
      const youtube = item.youtube && item.youtube !== "#" ? item.youtube : null;

      return `
        <article class="album-card">
          <img src="${item.imagem || "assets/img/discografia/playlist.jpg"}" alt="${item.titulo || ""}">
          <div class="album-card__body">
            ${item.tag ? `<span class="album-year">${item.tag}</span>` : ""}
            <h3>${item.titulo || ""}</h3>
            <p>${item.subtitulo || ""}</p>

            <div class="album-links">
              ${spotify ? `<a class="icon-btn" href="${spotify}" target="_blank" rel="noopener" aria-label="Spotify">${iconSpotify()}</a>` : ""}
              ${youtube ? `<a class="icon-btn" href="${youtube}" target="_blank" rel="noopener" aria-label="YouTube">${iconYouTube()}</a>` : ""}
            </div>
          </div>
        </article>
      `;
    }).join("");
  };

  const renderTracks = async () => {
    const root = $("#tracks");
    if (!root) return;

    let items = [];
    try {
      const json = await loadJSON("data/composicoes.json");
      if (Array.isArray(json)) items = json;
    } catch {}

    const usableTracks = items
      .filter((track) => track && track.titulo && track.arquivo)
      .slice(0, 8);

    root.innerHTML = usableTracks.map((track) => `
      <article class="track">
        <div class="track__top">
          <div>
            <h3 class="track__title">${track.titulo || ""}</h3>
            <p class="track__meta">${track.artista || ""}</p>
          </div>
          ${track.destaque ? `<span class="track__badge">Destaque</span>` : ""}
        </div>
        <audio controls preload="none" src="${track.arquivo}"></audio>
      </article>
    `).join("");
  };

  const renderMemorial = async () => {
    const root = $("#memorialGrid");
    if (!root) return;

    let items = [];
    try {
      const json = await loadJSON("data/memorial.json");
      if (Array.isArray(json)) items = json;
    } catch {}

    root.innerHTML = items.map((img, index) => `
      <figure class="memorial-item" data-full="${img.src}">
        <img
          src="${img.src}"
          alt="${img.alt || `Memorial Edney Fernandes ${index + 1}`}"
          loading="lazy"
        />
      </figure>
    `).join("");

    bindLightbox();
  };

  const bindLightbox = () => {
    const lightbox = $("#lightbox");
    const lightboxImage = $("#lightboxImage");
    const lightboxClose = $("#lightboxClose");
    const items = $$(".memorial-item");

    if (!lightbox || !lightboxImage || !lightboxClose) return;

    const open = (src, alt) => {
      lightboxImage.src = src;
      lightboxImage.alt = alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("menu-open");
    };

    const close = () => {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.src = "";
      lightboxImage.alt = "";
      document.body.classList.remove("menu-open");
    };

    items.forEach((item) => {
      item.addEventListener("click", () => {
        const img = $("img", item);
        const src = item.dataset.full || img?.src;
        const alt = img?.alt || "";
        if (src) open(src, alt);
      });
    });

    lightboxClose.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        close();
      }
    });
  };

  renderDiscography();
  renderTracks();
  renderMemorial();
})();
