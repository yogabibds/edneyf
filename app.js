// ===== Laia Music — JS modernizado =====
// Ano no footer
const yEl = document.getElementById('y');
if (yEl) yEl.textContent = new Date().getFullYear();

// Playlist: troque aqui pelo link final (Spotify/YouTube)
const playlistLink = document.getElementById('playlistLink');
if (playlistLink && (!playlistLink.getAttribute('href') || playlistLink.getAttribute('href') === '#')) {
  playlistLink.setAttribute('href', 'https://example.com/playlist');
}

// Scroll progress
const progress = document.getElementById('scroll-progress');
const onScroll = () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = scrolled + '%';
};
document.addEventListener('scroll', onScroll);

// Active nav link + reveal on scroll
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.segmented a');
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      const id = entry.target.getAttribute('id');
      if (!id) return;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }
  });
}, { threshold: 0.2 });
sections.forEach(s => io.observe(s));
revealEls.forEach(el => io.observe(el));

// Back to top visibility
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
});

// Tabela do catálogo (construída via JS para facilitar futuras buscas/ordenar)
const catalog = [
  {n:1, titulo:"Deixa Rolar", ano:"2003", isrc:"T0391600795", interpretes:"Exaltasamba", editora:"Sony Music"},
  {n:2, titulo:"Te Vejo na TV", ano:"2003", isrc:"T0391600706", interpretes:"Exaltasamba", editora:"Sony Music"},
  {n:3, titulo:"No Fundo dos Meus Olhos", ano:"2001", isrc:"T0391616548", interpretes:"Exaltasamba / Thiaguinho / Péricles", editora:"Peermusic"},
  {n:4, titulo:"História de Amor", ano:"2002", isrc:"T0391484506", interpretes:"Os Mulekes", editora:"Sony Music"},
  {n:5, titulo:"É Só Saudade", ano:"2004", isrc:"T0391585639", interpretes:"Chrigor", editora:"Sony Music"},
  {n:6, titulo:"Eu Choro", ano:"2002", isrc:"T0391612740", interpretes:"Karametade", editora:"Peermusic"},
  {n:7, titulo:"Samba Rock", ano:"2003", isrc:"T0391599102", interpretes:"Grupo Kipaquera / Waguinho / Paulinho", editora:"Sony Music"},
  {n:8, titulo:"Por Toda a Vida", ano:"2000", isrc:"T0393043747", interpretes:"Gamação", editora:"Mel Editora / 2M&G"},
  {n:9, titulo:"Tema dos Namorados", ano:"2004", isrc:"T0391502592", interpretes:"Péricles / Salgadinho / Wilsinho", editora:"Sony / Abril / Deckdisc"},
  {n:10, titulo:"Manequim", ano:"2004", isrc:"T0403231082", interpretes:"Ademir Fogaça / Chines / Edson Jr.", editora:"R.E. Produções"},
  {n:11, titulo:"Então Pra Que Se Machucar", ano:"2010", isrc:"T0395688411", interpretes:"—", editora:"Deckdisc"},
  {n:12, titulo:"Teu Coração", ano:"2003", isrc:"T0391600671", interpretes:"Tata Reis", editora:"Sony Music"},
  {n:13, titulo:"Vem Pra Curar", ano:"2017", isrc:"T0401884692", interpretes:"—", editora:"Warner Chappell"},
  {n:14, titulo:"Unhas e Dentes", ano:"2013", isrc:"T3075357921", interpretes:"—", editora:"Warner Chappell"},
  {n:15, titulo:"Conversando com o Luar", ano:"2003", isrc:"T0391451072", interpretes:"—", editora:"Sony Music"},
  {n:16, titulo:"Meu Maior Prazer", ano:"2005", isrc:"T0391545860", interpretes:"Mi Menor / Isaldo Souza", editora:"Peermusic"},
  {n:17, titulo:"Sentir Você", ano:"2000", isrc:"T0392096988", interpretes:"—", editora:"Warner Chappell"},
  {n:18, titulo:"Gesto de Carinho", ano:"2004", isrc:"T0391545898", interpretes:"—", editora:"Sony Music"},
  {n:19, titulo:"Incerteza", ano:"2005", isrc:"T0392134075", interpretes:"—", editora:"Warner Chappell"},
  {n:20, titulo:"Infinita Paixão", ano:"2005", isrc:"T0392108740", interpretes:"—", editora:"Warner Chappell"},
  {n:21, titulo:"Meu Cobertor", ano:"2003", isrc:"T0391555553", interpretes:"—", editora:"CDI Music / Sum Records"},
  {n:22, titulo:"Meu Desejo", ano:"2002", isrc:"T0391611472", interpretes:"—", editora:"Peermusic"},
  {n:23, titulo:"Momentos de Tristeza", ano:"2002", isrc:"T0391615550", interpretes:"—", editora:"Warner Chappell"},
  {n:24, titulo:"Noite de Verão", ano:"2003", isrc:"T0391457801", interpretes:"—", editora:"Peermusic"},
  {n:25, titulo:"Noites de Verão", ano:"2004", isrc:"T0391591457", interpretes:"Bobby / Valtinho Jota", editora:"—"},
  {n:26, titulo:"Nossa Canção", ano:"2004", isrc:"T0391579001", interpretes:"Pura Inocência", editora:"—"},
  {n:27, titulo:"Paris", ano:"2004", isrc:"T0391597108", interpretes:"Tão Inocente", editora:"—"},
  {n:28, titulo:"Por Trás de um Sorriso", ano:"2005", isrc:"T0392112351", interpretes:"—", editora:"Warner Chappell"},
  {n:29, titulo:"Priscila", ano:"2003", isrc:"T0391532090", interpretes:"—", editora:"—"},
  {n:30, titulo:"Quando Você Beija", ano:"2002", isrc:"T0391512401", interpretes:"Em Cima da Hora", editora:"—"},
  {n:31, titulo:"Será Que É Pra Ficar", ano:"2002", isrc:"T0391597788", interpretes:"—", editora:"Warner Chappell"},
  {n:32, titulo:"Solidão", ano:"2002", isrc:"T0391447802", interpretes:"—", editora:"Sony Music"},
  {n:33, titulo:"Sua Volta", ano:"2002", isrc:"T0391591999", interpretes:"—", editora:"Warner Chappell"},
  {n:34, titulo:"Um Doce Sabor", ano:"2004", isrc:"T0391609901", interpretes:"—", editora:"Warner Chappell"},
];

function renderCatalogTable() {
  const mount = document.getElementById('catalogo-table');
  if (!mount) return;
  const table = document.createElement('table');
  table.innerHTML = `
    <thead>
      <tr><th>#</th><th>Música</th><th>Intérprete(s)</th><th>Editora</th><th>Ano</th><th>ISRC</th></tr>
    </thead>
    <tbody>
      ${catalog.map(c => `<tr>
        <td>${c.n}</td><td>${c.titulo}</td><td>${c.interpretes}</td>
        <td>${c.editora}</td><td>${c.ano}</td><td>${c.isrc}</td>
      </tr>`).join('')}
    </tbody>
  `;
  table.className = 'table-wrapper';
  const card = document.createElement('div');
  card.className = 'card';
  card.appendChild(table);
  mount.appendChild(card);
}

document.addEventListener('DOMContentLoaded', renderCatalogTable);
