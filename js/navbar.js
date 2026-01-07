// navbar.js – Josimar Soares
// Street inline Skater | Policial Penal | Vice-presidente da Associação de Esportes Radicais MG

document.addEventListener('DOMContentLoaded', () => {
  if (typeof categoryGroups === 'undefined') {
    console.error('❌ categoryGroups não definido. Verifique categories.js.');
    return;
  }

  const navDesktop = document.getElementById('navDesktop');
  const mobileDropdown = document.getElementById('mobileDropdown');
  const menuToggle = document.getElementById('menuToggle');
  
  // Variáveis para controlar cliques pendentes
  let pendingClick = null;
  let clickHandlers = new WeakMap(); // Para armazenar handlers originais
  let isMenuOpen = false;

  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
  }

  // ========================
  // ✅ MENU DESKTOP
  // ========================
  if (navDesktop) {
    navDesktop.innerHTML = '';

    categoryGroups.forEach((group) => {
      const navItem = document.createElement('div');
      navItem.className = 'nav-item';

      const link = document.createElement('a');
      link.className = 'nav-link';
      link.href = './?category=' + encodeURIComponent(group.slug);
      link.textContent = group.title;
      link.style.textDecoration = 'none';
      navItem.appendChild(link);

      if (group.columns && group.columns.length > 0) {
        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown';
        const inner = document.createElement('div');
        inner.style.maxWidth = '1600px';
        inner.style.margin = 'auto';
        inner.style.padding = '32px';
        inner.style.display = 'grid';
        inner.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        inner.style.gap = '24px';

        group.columns.forEach((col) => {
          const colDiv = document.createElement('div');
          const titleLink = document.createElement('a');
          titleLink.href = './?category=' + encodeURIComponent(col.slug);
          titleLink.textContent = col.title;
          titleLink.style.display = 'block';
          titleLink.style.marginBottom = '8px';
          titleLink.style.color = 'white';
          titleLink.style.fontWeight = 'bold';
          titleLink.style.textDecoration = 'none';
          titleLink.addEventListener('mouseenter', () => titleLink.style.color = '#FF5E00');
          titleLink.addEventListener('mouseleave', () => titleLink.style.color = 'white');
          colDiv.appendChild(titleLink);

          if (col.items && col.items.length > 0) {
            col.items.forEach((item) => {
              const a = document.createElement('a');
              a.href = './?category=' + encodeURIComponent(item.slug);
              a.textContent = item.name;
              a.style.display = 'block';
              a.style.color = '#b0b0b0';
              a.style.fontSize = '14px';
              a.style.margin = '6px 0';
              a.style.textDecoration = 'none';
              a.addEventListener('mouseenter', () => a.style.color = '#FF5E00');
              a.addEventListener('mouseleave', () => a.style.color = '#b0b0b0');
              colDiv.appendChild(a);
            });
          }

          inner.appendChild(colDiv);
        });

        dropdown.appendChild(inner);
        navItem.appendChild(dropdown);

        navItem.addEventListener('mouseenter', () => {
          closeAllDropdowns();
          dropdown.classList.add('open');
        });
        dropdown.addEventListener('mouseenter', () => dropdown.classList.add('open'));
        dropdown.addEventListener('mouseleave', () => dropdown.classList.remove('open'));
      }

      navDesktop.appendChild(navItem);
    });

    // Blog no desktop
    const blogItem = document.createElement('div');
    blogItem.className = 'nav-item';
    const blogLink = document.createElement('a');
    blogLink.className = 'nav-link';
    blogLink.href = 'https://www.josimarsoares.com.br/';
    blogLink.target = '_blank';
    blogLink.rel = 'noopener noreferrer';
    blogLink.textContent = 'BLOG';
    blogLink.style.textDecoration = 'none';
    blogItem.appendChild(blogLink);
    navDesktop.appendChild(blogItem);
  }

  // ========================
  // ✅ MENU MOBILE
  // ========================
  if (mobileDropdown && menuToggle) {
    mobileDropdown.innerHTML = '';
    const mobileMenu = document.createElement('div');
    mobileMenu.style.padding = '20px 16px';
    mobileMenu.style.display = 'flex';
    mobileMenu.style.flexDirection = 'column';
    mobileMenu.style.gap = '12px';

    categoryGroups.forEach((group) => {
      if (!group.columns || group.columns.length === 0) return;

      const groupItem = document.createElement('div');
      groupItem.style.display = 'flex';
      groupItem.style.flexDirection = 'column';
      groupItem.style.gap = '8px';

      const header = document.createElement('div');
      header.style.width = '100%';
      header.style.display = 'flex';
      header.style.alignItems = 'center';
      header.style.justifyContent = 'space-between';
      header.style.padding = '6px 0';

      const titleLink = document.createElement('a');
      titleLink.href = './?category=' + encodeURIComponent(group.slug);
      titleLink.textContent = group.title;
      titleLink.style.color = 'white';
      titleLink.style.fontWeight = 'bold';
      titleLink.style.fontSize = '1.1rem';
      titleLink.style.textDecoration = 'none';
      titleLink.style.flex = '1';
      titleLink.style.textAlign = 'left';

      const toggleButton = document.createElement('button');
      toggleButton.textContent = '+';
      toggleButton.style.color = '#FF5E00';
      toggleButton.style.fontWeight = 'bold';
      toggleButton.style.background = 'transparent';
      toggleButton.style.border = 'none';
      toggleButton.style.cursor = 'pointer';
      toggleButton.style.minWidth = '36px';
      toggleButton.style.height = '36px';
      toggleButton.style.borderRadius = '50%';
      toggleButton.style.display = 'flex';
      toggleButton.style.alignItems = 'center';
      toggleButton.style.justifyContent = 'center';
      toggleButton.style.fontSize = '1.4rem';
      toggleButton.style.padding = '0';
      toggleButton.style.marginLeft = '8px';

      header.appendChild(titleLink);
      header.appendChild(toggleButton);

      const submenu = document.createElement('div');
      submenu.style.display = 'none';
      submenu.style.marginTop = '8px';
      submenu.style.marginLeft = '12px';
      submenu.style.borderLeft = '1px solid #333';
      submenu.style.paddingLeft = '12px';

      group.columns.forEach((col) => {
        const colLink = document.createElement('a');
        colLink.href = './?category=' + encodeURIComponent(col.slug);
        colLink.textContent = col.title;
        colLink.style.display = 'block';
        colLink.style.color = '#ddd';
        colLink.style.fontWeight = '600';
        colLink.style.fontSize = '1rem';
        colLink.style.margin = '6px 0';
        colLink.style.textDecoration = 'none';
        colLink.addEventListener('mouseenter', () => colLink.style.color = '#FF5E00');
        colLink.addEventListener('mouseleave', () => colLink.style.color = '#ddd');
        submenu.appendChild(colLink);

        if (col.items && col.items.length > 0) {
          col.items.forEach((item) => {
            const itemLink = document.createElement('a');
            itemLink.href = './?category=' + encodeURIComponent(item.slug);
            itemLink.textContent = item.name;
            itemLink.style.display = 'block';
            itemLink.style.color = '#b0b0b0';
            itemLink.style.fontSize = '0.95rem';
            itemLink.style.margin = '4px 0';
            itemLink.style.textDecoration = 'none';
            itemLink.addEventListener('mouseenter', () => itemLink.style.color = '#FF5E00');
            itemLink.addEventListener('mouseleave', () => itemLink.style.color = '#b0b0b0');
            submenu.appendChild(itemLink);
          });
        }
      });

      toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = submenu.style.display === 'block';
        submenu.style.display = isOpen ? 'none' : 'block';
        toggleButton.textContent = isOpen ? '+' : '−';
      });

      groupItem.appendChild(header);
      groupItem.appendChild(submenu);
      mobileMenu.appendChild(groupItem);
    });

    mobileDropdown.appendChild(mobileMenu);

    // Função para fechar o menu mobile
    function closeMobileMenu() {
      mobileDropdown.classList.remove('open');
      isMenuOpen = false;
      if (menuToggle) menuToggle.textContent = '☰';
      
      // Remove overlay se existir
      const overlay = document.getElementById('mobileMenuOverlay');
      if (overlay) overlay.remove();
    }

    // Função para abrir o menu mobile
    function openMobileMenu() {
      mobileDropdown.classList.add('open');
      isMenuOpen = true;
      if (menuToggle) menuToggle.textContent = '✕';
      
      // Adiciona overlay para capturar cliques em iframes
      addOverlayForIframes();
    }

    // Adiciona overlay semi-transparente sobre iframes quando menu está aberto
    function addOverlayForIframes() {
      // Remove overlay anterior se existir
      const existingOverlay = document.getElementById('mobileMenuOverlay');
      if (existingOverlay) existingOverlay.remove();
      
      // Cria novo overlay
      const overlay = document.createElement('div');
      overlay.id = 'mobileMenuOverlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '80px'; // Altura da navbar
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = 'calc(100vh - 80px)';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.01)'; // Quase transparente
      overlay.style.zIndex = '998'; // Abaixo do dropdown (999) mas acima de tudo
      overlay.style.cursor = 'pointer';
      
      // Fecha menu ao clicar no overlay
      overlay.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeMobileMenu();
      });
      
      // Adiciona ao body
      document.body.appendChild(overlay);
    }

    // Controle do botão hambúrguer
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isMenuOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Função para capturar informações do elemento clicado
    function getElementInfo(element) {
      if (!element) return null;
      
      // Verifica se é um iframe ou está dentro de um iframe
      const iframe = element.closest('iframe');
      const isInIframe = iframe !== null;
      
      return {
        element: element,
        tagName: element.tagName,
        href: element.getAttribute('href'),
        onclick: element.onclick,
        hasClickListener: element.hasAttribute('onclick') || element.onclick,
        isButton: element.tagName === 'BUTTON' || element.getAttribute('role') === 'button',
        isVideo: element.tagName === 'VIDEO' || 
                 element.closest('video') || 
                 element.classList.contains('video-player') ||
                 element.closest('.video-player') ||
                 element.closest('.youtube-video') ||
                 element.closest('.video-container') ||
                 iframe?.src?.includes('youtube.com') ||
                 iframe?.src?.includes('youtu.be'),
        isIframe: element.tagName === 'IFRAME' || isInIframe,
        iframe: iframe,
        isImage: element.tagName === 'IMG' || element.closest('img'),
        isLink: element.tagName === 'A',
        className: element.className,
        id: element.id,
        dataset: { ...element.dataset }
      };
    }

    // Função para executar a ação do elemento
    function executeElementAction(elementInfo) {
      if (!elementInfo) return;
      
      const { element, href, onclick, isLink, isButton, isVideo, isIframe } = elementInfo;
      
      try {
        if (isLink && href) {
          // É um link
          if (element.target === '_blank') {
            window.open(href, '_blank');
          } else {
            window.location.href = href;
          }
        } else if (onclick) {
          // Tem onclick handler
          onclick.call(element);
        } else if (isButton) {
          // É um botão - simula clique normal
          element.click();
        } else if (isVideo || isIframe) {
          // Para vídeos ou iframes, tentamos dar play/pause
          // ou simulamos um clique no container
          const videoElement = element.closest('video') || 
                              element.closest('.video-player') ||
                              element.closest('.youtube-video') ||
                              element.closest('.video-container') ||
                              element;
          
          if (videoElement.tagName === 'VIDEO') {
            // Video HTML5 nativo
            if (videoElement.paused) {
              videoElement.play();
            } else {
              videoElement.pause();
            }
          } else if (videoElement.click) {
            // Outros elementos de vídeo
            videoElement.click();
          }
        } else if (element.click) {
          // Elemento tem método click
          element.click();
        }
      } catch (err) {
        console.error('Erro ao executar ação:', err);
      }
    }

    // Lógica inteligente para TODOS os cliques quando menu está aberto
    document.addEventListener('click', (e) => {
      // Se menu está aberto
      if (isMenuOpen) {
        // Verifica se o clique foi dentro do menu dropdown
        const isClickInDropdown = e.target.closest('#mobileDropdown');
        const isClickOnToggle = e.target.closest('.menu-toggle');
        const isClickOnOverlay = e.target.id === 'mobileMenuOverlay';
        
        if (isClickInDropdown || isClickOnToggle || isClickOnOverlay) {
          // Clique dentro do menu, no botão ou no overlay
          if (isClickInDropdown && e.target.closest('a')) {
            // Link dentro do menu - fecha menu E permite seguir link
            closeMobileMenu();
            // Permite comportamento normal
            return;
          }
          // Para outros cliques dentro do menu, permite comportamento normal
          return;
        } else {
          // Clique FORA do menu (em qualquer lugar do site)
          
          // 1. Previne TODAS as ações
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          // 2. Fecha o menu
          closeMobileMenu();
          
          // 3. Captura informações do elemento clicado
          const elementInfo = getElementInfo(e.target);
          
          // 4. Marca como clique pendente
          pendingClick = {
            element: e.target,
            elementInfo: elementInfo,
            originalEvent: { 
              x: e.clientX, 
              y: e.clientY,
              timeStamp: e.timeStamp
            },
            timestamp: Date.now()
          };
          
          // 5. Remove o clique pendente após 1 segundo
          setTimeout(() => {
            pendingClick = null;
          }, 1000);
          
          return false;
        }
      } else {
        // Menu está fechado - verifica se há clique pendente
        if (pendingClick) {
          // Calcula distância e tempo desde o clique anterior
          const timeDiff = Date.now() - pendingClick.timestamp;
          
          // Verifica se é o mesmo elemento ou um elemento relacionado
          const isSameElement = e.target === pendingClick.element || 
                               e.target.contains(pendingClick.element) || 
                               pendingClick.element.contains(e.target) ||
                               // Para vídeos, considera o container como mesmo elemento
                               (pendingClick.elementInfo?.isVideo && 
                                (e.target.closest('video') || 
                                 e.target.closest('.video-player') || 
                                 e.target.closest('.youtube-video') || 
                                 e.target.closest('.video-container')));
          
          // Se foi no mesmo elemento dentro de 1 segundo
          if (isSameElement && timeDiff < 1000) {
            // É o segundo clique - executa a ação original
            
            // Previne o clique normal
            e.preventDefault();
            e.stopPropagation();
            
            // Executa a ação do elemento
            executeElementAction(pendingClick.elementInfo);
            
            // Limpa o clique pendente
            pendingClick = null;
            
            return false;
          } else {
            // Não é o mesmo elemento ou passou muito tempo
            pendingClick = null;
          }
        }
      }
    }, true); // Use capture phase para interceptar antes de outros listeners

    // Previne propagação de cliques dentro do dropdown
    mobileDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    
    // Também fecha ao pressionar ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMobileMenu();
      }
    });
    
    // Fecha menu ao rolar (opcional)
    window.addEventListener('scroll', () => {
      if (isMenuOpen) {
        closeMobileMenu();
      }
    }, { passive: true });
  }
});