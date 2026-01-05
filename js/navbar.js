// navbar.js – Josimar Soares
document.addEventListener('DOMContentLoaded', () => {
  if (typeof categoryGroups === 'undefined') {
    console.error('❌ categoryGroups não carregado. Verifique categories.js.');
    return;
  }

  const navDesktop = document.getElementById('navDesktop');
  const mobileDropdown = document.getElementById('mobileDropdown');
  const menuToggle = document.getElementById('menuToggle');

  // Fecha dropdowns desktop
  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
  }

  // ========================
  // ✅ MENU DESKTOP (completo)
  // ========================
  if (navDesktop) {
    navDesktop.innerHTML = '';

    categoryGroups.forEach((group) => {
      const navItem = document.createElement('div');
      navItem.className = 'nav-item';

      const link = document.createElement('a');
      link.className = 'nav-link';
      link.href = `./?category=${encodeURIComponent(group.slug)}`;
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
          titleLink.href = `./?category=${encodeURIComponent(col.slug)}`;
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
            a.href = `./?category=${encodeURIComponent(item.slug)}`;
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

    // Blog no desktop (fora do loop, no final)
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
  // ✅ MENU MOBILE (com +/−, sem Blog no dropdown)
  // ========================
  if (mobileDropdown && menuToggle) {
    mobileDropdown.innerHTML = '';
    const mobileMenu = document.createElement('div');
    mobileMenu.style.padding = '20px 16px';
    mobileMenu.style.display = 'flex';
    mobileMenu.style.flexDirection = 'column';
    mobileMenu.style.gap = '12px';

    categoryGroups.forEach((group) => {
      if (!group.columns?.length) return;

      const groupItem = document.createElement('div');
      groupItem.style.display = 'flex';
      groupItem.style.flexDirection = 'column';
      groupItem.style.gap = '8px';

      const toggleButton = document.createElement('button');
      toggleButton.style.width = '100%';
      toggleButton.style.textAlign = 'left';
      toggleButton.style.color = 'white';
      toggleButton.style.fontWeight = 'bold';
      toggleButton.style.fontSize = '1.1rem';
      toggleButton.style.background = 'transparent';
      toggleButton.style.border = 'none';
      toggleButton.style.cursor = 'pointer';
      toggleButton.style.display = 'flex';
      toggleButton.style.justifyContent = 'space-between';
      toggleButton.style.alignItems = 'center';
      toggleButton.style.padding = '6px 0';

      const toggleText = document.createElement('span');
      toggleText.textContent = group.title;
      toggleText.style.flex = '1';

      const toggleIcon = document.createElement('span');
      toggleIcon.textContent = '+';
      toggleIcon.style.color = '#FF5E00';
      toggleIcon.style.fontWeight = 'bold';
      toggleIcon.style.marginLeft = '8px';
      toggleIcon.style.minWidth = '16px';
      toggleIcon.style.textAlign = 'right';

      toggleButton.appendChild(toggleText);
      toggleButton.appendChild(toggleIcon);

      const submenu = document.createElement('div');
      submenu.style.display = 'none';
      submenu.style.marginTop = '8px';
      submenu.style.marginLeft = '12px';
      submenu.style.borderLeft = '1px solid #333';
      submenu.style.paddingLeft = '12px';

      group.columns.forEach((col) => {
        const colLink = document.createElement('a');
        colLink.href = `./?category=${encodeURIComponent(col.slug)}`;
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

        col.items.forEach((item) => {
          const itemLink = document.createElement('a');
          itemLink.href = `./?category=${encodeURIComponent(item.slug)}`;
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
      });

      toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = submenu.style.display === 'block';
        submenu.style.display = isOpen ? 'none' : 'block';
        toggleIcon.textContent = isOpen ? '+' : '−';
      });

      groupItem.appendChild(toggleButton);
      groupItem.appendChild(submenu);
      mobileMenu.appendChild(groupItem);
    });

    mobileDropdown.appendChild(mobileMenu);

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDropdown.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) {
        mobileDropdown.classList.remove('open');
      }
    });

    mobileDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
});