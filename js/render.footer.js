function renderFooter(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const year = new Date().getFullYear();

  container.innerHTML = `
    <footer class="footer">
      <div class="footer-inner">

        <div class="footer-grid">

          <div class="footer-col">
            <a href="/" class="footer-logo">Josimar Soares</a>
            <p class="footer-text">
              Patinador há 25 anos. Vivo o rolê raiz nas ruas: street, urbano e wizard.
              Compartilho setups reais, cultura sobre rodas e a essência do movimento —
              sempre com autenticidade.
            </p>
          </div>

          <div class="footer-col">
            <h4>Categorias</h4>
            <ul>
              <li><a href="?category=patins">Patins</a></li>
              <li><a href="?category=skates">Skates e Longboards</a></li>
              <li><a href="?category=capacetes-e-protetores">Capacetes e Protetores</a></li>
              <li><a href="?category=mochilas">Mochilas</a></li>
              <li><a href="?category=moda">Moda</a></li>
              <li><a href="?category=kids">Kids</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contato</h4>
            
            <!-- Email com versão mobile e desktop -->
            <a href="mailto:josimarsilvasoares2015@gmail.com" class="footer-link footer-email-full">
              ${mailIcon()}
              <span class="email-text">josimarsilvasoares2015@gmail.com</span>
            </a>
            
            <a href="mailto:josimarsilvasoares2015@gmail.com" class="footer-link footer-email-mobile">
              ${mailIcon()}
              <span class="email-text">Email</span>
            </a>
            
            <a
              href="https://www.google.com/maps/place/Montes+Claros,+MG,+Brasil"
              target="_blank"
              class="footer-link"
            >
              ${mapIcon()}
              <span class="location-text">Montes Claros, MG – Brasil</span>
            </a>
          </div>

          <div class="footer-col">
            <h4>Comunidade</h4>

            <a href="https://www.instagram.com/josimarssoares/" target="_blank" class="footer-social">
              ${instagramIcon()} <span>Instagram</span> 
            </a>

            <a href="https://www.facebook.com/chocolatemegastyle" target="_blank" class="footer-social">
              ${facebookIcon()} <span>Facebook</span> 
            </a>

            <a href="https://www.threads.net/@josimarssoares" target="_blank" class="footer-social">
              ${linkIcon()} <span>Threads</span>
            </a>

            <a href="https://www.josimarsoares.com.br/" target="_blank" class="footer-social">
              <span class="footer-letter-icon">B</span>
              <span>Blog</span>
            </a>

          </div>

        </div>

        <div class="footer-bottom">
          <p>
            © ${year} <a href="/" class="footer-bottom-link">Josimar Soares</a>.
            Todos os direitos reservados.
          </p>
          <span>
            Conteúdo autoral voltado à cultura urbana, esportes sobre rodas e lifestyle independente.
          </span>
        </div>

      </div>
    </footer>
  `;
}

/* ===== SVG ICONS (100% compatível com GitHub Pages) ===== */

function baseSvg(content) {
  return `
    <svg
      class="footer-icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${content}
    </svg>
  `;
}

function instagramIcon() {
  return baseSvg(`
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1"/>
  `);
}

function facebookIcon() {
  return baseSvg(`
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  `);
}

function linkIcon() {
  return baseSvg(`
    <path d="M10 13a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 7l-1 1"/>
    <path d="M14 11a5 5 0 0 1 0 7l-2 2a5 5 0 0 1-7-7l1-1"/>
  `);
}

function mailIcon() {
  return baseSvg(`
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M22 6 12 13 2 6"/>
  `);
}

function mapIcon() {
  return baseSvg(`
    <path d="M12 21s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11z"/>
    <circle cx="12" cy="10" r="3"/>
  `);
}

function externalIcon() {
  return `
    <svg
      class="footer-icon small"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 3h3v3"/>
      <path d="M10 14 21 3"/>
      <path d="M21 14v7H3V3h7"/>
    </svg>
  `;
}