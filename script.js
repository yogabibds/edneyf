/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Georgia, "Times New Roman", serif;
  background: #0b0f0c;
  color: #f7f2e8;
  line-height: 1.6;
}

/* CONTAINER */
.container {
  width: 90%;
  max-width: 1180px;
  margin: auto;
}

/* HEADER */
.site-header {
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(10, 12, 10, 0.6);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

/* BRAND */
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-logo {
  width: 42px;
}

.brand-name {
  font-size: 14px;
  letter-spacing: 2px;
  color: #d4b054;
}

/* NAV */
.main-nav {
  display: flex;
  gap: 25px;
}

.main-nav a {
  font-size: 14px;
  color: #c7bda7;
  position: relative;
}

.main-nav a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 100%;
  height: 1px;
  background: #d4b054;
  transition: 0.3s;
}

.main-nav a:hover::after {
  right: 0;
}

/* HEADER ACTIONS */
.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* LANGUAGE */
.language-switcher {
  display: flex;
  gap: 6px;
}

.lang-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 6px 10px;
  border-radius: 20px;
  color: #c7bda7;
  cursor: pointer;
  font-size: 12px;
}

.lang-btn.active {
  background: rgba(212,176,84,0.2);
  color: #f0deaa;
}

/* BUTTONS */
.btn {
  padding: 12px 22px;
  border-radius: 30px;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: 0.3s;
}

.btn-primary {
  background: linear-gradient(180deg, rgba(212,176,84,0.3), rgba(212,176,84,0.1));
  color: #f0deaa;
}

.btn-secondary {
  border: 1px solid rgba(255,255,255,0.2);
}

.btn:hover {
  transform: translateY(-2px);
}

/* HERO */
.hero {
  padding: 100px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.hero-text {
  margin-top: 20px;
}

.hero-badges {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.hero-badges span {
  border: 1px solid rgba(212,176,84,0.2);
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 12px;
}

.hero-actions-row {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}

/* HERO CARD */
.hero-card {
  background: rgba(255,255,255,0.04);
  padding: 20px;
  border-radius: 20px;
}

/* SECTION */
.section {
  padding: 100px 0;
}

/* GRID */
.grid,
.about-grid,
.case-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

/* SERVICES */
.service-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 40px;
}

.service-card {
  background: rgba(255,255,255,0.03);
  padding: 25px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.05);
  transition: 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: rgba(212,176,84,0.3);
}

.service-number {
  color: #d4b054;
  margin-bottom: 10px;
}

/* CASE */
.media-card img {
  border-radius: 20px;
}

.content-card {
  background: rgba(255,255,255,0.03);
  padding: 30px;
  border-radius: 20px;
}

/* STATS */
.stats-row {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.stat-box {
  border: 1px solid rgba(212,176,84,0.2);
  padding: 10px 15px;
  border-radius: 15px;
}

.stat-box strong {
  display: block;
  color: #f0deaa;
}

/* LIST */
.mini-list {
  margin-top: 20px;
}

.mini-item {
  margin-bottom: 10px;
}

/* CTA */
.final-cta {
  text-align: center;
}

.cta-panel {
  background: rgba(255,255,255,0.04);
  padding: 40px;
  border-radius: 20px;
}

.cta-panel-actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

/* FOOTER */
.site-footer {
  padding: 40px 0;
  border-top: 1px solid rgba(255,255,255,0.05);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #aaa;
}

/* ANIMATION */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: 0.6s;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* MOBILE */
@media (max-width: 900px) {
  .hero-grid,
  .grid,
  .about-grid,
  .case-grid {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .cta-panel-actions {
    flex-direction: column;
  }
}