// js/navbar.js
document.addEventListener('DOMContentLoaded', () => {
  if (typeof categoryGroups === 'undefined') {
    console.error('❌ categoryGroups não definido. Verifique se categories.js está carregado.');
    return;
  }

  const navDesktop = document.getElementById('navDesktop');
  const mobileDropdown = document.getElementById('mobileDropdown');
  const menuToggle = document.getElementById('menuToggle');

  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
  }

  // === MENU DESKTOP ===
  if (navDesktop) {
    navDesktop.innerHTML = '';

    categoryGroups.forEach((group) => {
      const navItem = document.createElement('div');
      navItem.className = 'nav-item';

      const link = document.createElement('a');
      link.className = 'nav-link';
      link.href = `./?category=${encodeURIComponent(group.slug)}`; // ✅ ./ adicionado
      link.textContent = group.title;
      link.style.textDecoration = 'none';
      navItem.appendChild(link);

      if (group.columns?.length) {
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
          titleLink.href = `./?category=${encodeURIComponent(col.slug)}`; // ✅ ./ adicionado
          titleLink.textContent = col.title;
          titleLink.style.display = 'block';
          titleLink.style.marginBottom = '8px';
          titleLink.style.color = 'white';
          titleLink.style.fontWeight = 'bold';
          titleLink.style.textDecoration = 'none';
          titleLink.addEventListener('mouseenter', () => titleLink.style.color = '#FF5E00');
          titleLink.addEventListener('mouseleave', () => titleLink.style.color = 'white');
          colDiv.appendChild(titleLink);

          col.items.forEach((item) => {
            const a = document.createElement('a');
            a.href = `./?category=${encodeURIComponent(item.slug)}`; // ✅ ./ adicionado
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
    blogLink.href = 'https://www.josimarsoares.com.br/'; // ✅ espaços removidos
    blogLink.target = '_blank';
    blogLink.rel = 'noopener noreferrer';
    blogLink.textContent = 'BLOG';
    blogLink.style.textDecoration = 'none';
    blogItem.appendChild(blogLink);
    navDesktop.appendChild(blogItem);
  }

  // === MENU MOBILE: todos os itens clicáveis! ===
  if (mobileDropdown && menuToggle) {
    mobileDropdown.innerHTML = '';
    const mobileMenu = document.createElement('div');
    mobileMenu.style.padding = '24px 16px';

    categoryGroups.forEach((group) => {
      const groupLink = document.createElement('a');
      groupLink.href = `./?category=${encodeURIComponent(group.slug)}`; // ✅ ./ adicionado
      groupLink.textContent = group.title;
      groupLink.style.display = 'block';
      groupLink.style.color = 'white';
      groupLink.style.fontWeight = 'bold';
      groupLink.style.fontSize = '1.1rem';
      groupLink.style.marginBottom = '12px';
      groupLink.style.textDecoration = 'none';
      mobileMenu.appendChild(groupLink);

      if (group.columns?.length) {
        group.columns.forEach((col) => {
          const colLink = document.createElement('a');
          colLink.href = `./?category=${encodeURIComponent(col.slug)}`; // ✅ ./ adicionado
          colLink.textContent = col.title;
          colLink.style.display = 'block';
          colLink.style.color = '#ddd';
          colLink.style.fontWeight = '600';
          colLink.style.fontSize = '1rem';
          colLink.style.margin = '8px 0 6px 0';
          colLink.style.textDecoration = 'none';
          mobileMenu.appendChild(colLink);

          col.items.forEach((item) => {
            const itemLink = document.createElement('a');
            itemLink.href = `./?category=${encodeURIComponent(item.slug)}`; // ✅ ./ adicionado
            itemLink.textContent = item.name;
            itemLink.style.display = 'block';
            itemLink.style.color = '#b0b0b0';
            itemLink.style.fontSize = '0.95rem';
            itemLink.style.margin = '4px 0';
            itemLink.style.textDecoration = 'none';
            mobileMenu.appendChild(itemLink);
          });
        });
      }
    });

    // Blog no mobile
    const blogLinkMobile = document.createElement('a');
    blogLinkMobile.href = 'https://www.josimarsoares.com.br/'; // ✅ espaços removidos
    blogLinkMobile.textContent = 'Blog';
    blogLinkMobile.style.display = 'block';
    blogLinkMobile.style.color = 'white';
    blogLinkMobile.style.fontWeight = 'bold';
    blogLinkMobile.style.marginTop = '24px';
    blogLinkMobile.style.textDecoration = 'none';
    mobileMenu.appendChild(blogLinkMobile);

    mobileDropdown.appendChild(mobileMenu);

    // Toggle
    menuToggle.addEventListener('click', () => {
      mobileDropdown.classList.toggle('open');
    });

    // Fecha ao clicar em link ou fora
    mobileDropdown.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        // Deixa o link funcionar naturalmente
        // O menu será fechado após a navegação (SPA) ou não importa (hard reload)
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) {
        mobileDropdown.classList.remove('open');
      }
    });
  }
});