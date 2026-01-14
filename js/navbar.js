
document.addEventListener('DOMContentLoaded', () => {
  if (typeof categoryGroups === 'undefined') {
    console.error('❌ categoryGroups não definido. Verifique categories.js.');
    return;
  }

  const navDesktop = document.getElementById('navDesktop');
  const mobileDropdown = document.getElementById('mobileDropdown');
  const menuToggle = document.getElementById('menuToggle');
  
  let pendingClick = null;
  let clickHandlers = new WeakMap(); 
  let isMenuOpen = false;

  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
  }

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


    function closeMobileMenu() {
      mobileDropdown.classList.remove('open');
      isMenuOpen = false;
      if (menuToggle) menuToggle.textContent = '☰';
      

      const overlay = document.getElementById('mobileMenuOverlay');
      if (overlay) overlay.remove();
    }

    function openMobileMenu() {
      mobileDropdown.classList.add('open');
      isMenuOpen = true;
      if (menuToggle) menuToggle.textContent = '✕';
      addOverlayForIframes();
    }

  
    function addOverlayForIframes() {
      const existingOverlay = document.getElementById('mobileMenuOverlay');
      if (existingOverlay) existingOverlay.remove();
      
      const overlay = document.createElement('div');
      overlay.id = 'mobileMenuOverlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '80px'; 
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = 'calc(100vh - 80px)';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.01)'; 
      overlay.style.zIndex = '998'; 
      overlay.style.cursor = 'pointer';
      overlay.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeMobileMenu();
      });

      document.body.appendChild(overlay);
    }

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isMenuOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    function getElementInfo(element) {
      if (!element) return null;
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
    function executeElementAction(elementInfo) {
      if (!elementInfo) return;
      
      const { element, href, onclick, isLink, isButton, isVideo, isIframe } = elementInfo;
      
      try {
        if (isLink && href) {
          if (element.target === '_blank') {
            window.open(href, '_blank');
          } else {
            window.location.href = href;
          }
        } else if (onclick) {
          onclick.call(element);
        } else if (isButton) {
          element.click();
        } else if (isVideo || isIframe) {
          const videoElement = element.closest('video') || 
                              element.closest('.video-player') ||
                              element.closest('.youtube-video') ||
                              element.closest('.video-container') ||
                              element;
          
          if (videoElement.tagName === 'VIDEO') {
            if (videoElement.paused) {
              videoElement.play();
            } else {
              videoElement.pause();
            }
          } else if (videoElement.click) {

            videoElement.click();
          }
        } else if (element.click) {

          element.click();
        }
      } catch (err) {
        console.error('Erro ao executar ação:', err);
      }
    }


    document.addEventListener('click', (e) => {
    
      if (isMenuOpen) {
       
        const isClickInDropdown = e.target.closest('#mobileDropdown');
        const isClickOnToggle = e.target.closest('.menu-toggle');
        const isClickOnOverlay = e.target.id === 'mobileMenuOverlay';
        
        if (isClickInDropdown || isClickOnToggle || isClickOnOverlay) {
   
          if (isClickInDropdown && e.target.closest('a')) {
      
            closeMobileMenu();

            return;
          }

          return;
        } else {


          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();

          closeMobileMenu();

          const elementInfo = getElementInfo(e.target);
          

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
          
          setTimeout(() => {
            pendingClick = null;
          }, 1000);
          
          return false;
        }
      } else {
  
        if (pendingClick) {
        
          const timeDiff = Date.now() - pendingClick.timestamp;
        
          const isSameElement = e.target === pendingClick.element || 
                               e.target.contains(pendingClick.element) || 
                               pendingClick.element.contains(e.target) ||
                               (pendingClick.elementInfo?.isVideo && 
                                (e.target.closest('video') || 
                                 e.target.closest('.video-player') || 
                                 e.target.closest('.youtube-video') || 
                                 e.target.closest('.video-container')));
  
          if (isSameElement && timeDiff < 1000) {
  

            e.preventDefault();
            e.stopPropagation();

            executeElementAction(pendingClick.elementInfo);
            

            pendingClick = null;
            
            return false;
          } else {
            pendingClick = null;
          }
        }
      }
    }, true); 


    mobileDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMobileMenu();
      }
    });
    
    window.addEventListener('scroll', () => {
      if (isMenuOpen) {
        closeMobileMenu();
      }
    }, { passive: true });
  }
});