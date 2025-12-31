function renderFooter(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const year = new Date().getFullYear();

  container.innerHTML = `
    <footer class="footer">
      <div class="footer-inner">

        <!-- DESKTOP / TABLET -->
        <div class="footer-grid">

          <!-- COLUNA 1 -->
          <div class="footer-col">
            <a href="/" class="footer-logo">Josimar Soares</a>
            <p class="footer-text">
              Patinador há 25 anos. Vivo o rolê raiz nas ruas: street, urbano e wizard.
              Compartilho setups reais, cultura sobre rodas e a essência do movimento —
              sempre com autenticidade.
            </p>
          </div>

          <!-- COLUNA 2 -->
          <div class="footer-col">
            <h4>Categorias</h4>
            <ul>
              <li><a href="#">Patins</a></li>
              <li><a href="#">Skates e Longboards</a></li>
              <li><a href="#">Capacetes e Protetores</a></li>
              <li><a href="#">Mochilas</a></li>
              <li><a href="#">Moda</a></li>
              <li><a href="#">Kids</a></li>
            </ul>
          </div>

          <!-- COLUNA 3 -->
          <div class="footer-col">
            <h4>Contato</h4>

            <a href="mailto:josimarsilvasoares2015@gmail.com" class="footer-link">
              ✉ josimarsilvasoares2015@gmail.com
            </a>

            <a
              href="https://www.google.com/maps/place/Montes+Claros,+MG,+Brasil"
              target="_blank"
              class="footer-link"
            >
              📍 Montes Claros, MG – Brasil
            </a>
          </div>

          <!-- COLUNA 4 -->
          <div class="footer-col">
            <h4>Comunidade</h4>

            <a href="https://www.instagram.com/josimarssoares/" target="_blank" class="footer-social">
              <span>Instagram</span>
              <span class="external">↗</span>
            </a>

            <a href="https://www.facebook.com/chocolatemegastyle" target="_blank" class="footer-social">
              <span>Facebook</span>
              <span class="external">↗</span>
            </a>

            <a href="https://www.threads.net/@josimarssoares" target="_blank" class="footer-social">
              <span>Threads</span>
              <span class="external">↗</span>
            </a>

            <a href="https://www.josimarsoares.com.br/" target="_blank" class="footer-social">
              <span>Blog</span>
              <span class="external">↗</span>
            </a>
          </div>

        </div>

        <!-- MOBILE -->
        <div class="footer-mobile">
          <a href="/" class="footer-logo">Josimar Soares</a>

          <p class="footer-mobile-text">
            Cultura urbana sobre rodas. Street, wizard e setups reais —
            autenticidade em movimento.
          </p>

          <div class="footer-mobile-icons">
            <a href="https://www.instagram.com/josimarssoares/" target="_blank">IG</a>
            <a href="https://www.facebook.com/chocolatemegastyle" target="_blank">FB</a>
            <a href="https://www.threads.net/@josimarssoares" target="_blank">TH</a>
          </div>
        </div>

        <!-- COPYRIGHT -->
        <div class="footer-bottom">
          <p>
            © ${year}
            <a href="/" class="footer-bottom-link">Josimar Soares</a>.
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
