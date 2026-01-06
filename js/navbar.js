// ========================
// ✅ MENU MOBILE (com ícone separado + texto clicável)
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

    // Contêiner do título + ícone
    const header = document.createElement('div');
    header.style.width = '100%';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    header.style.padding = '6px 0';

    // ✅ TEXTO: <a> clicável → navega para a categoria principal
    const titleLink = document.createElement('a');
    titleLink.href = `./?category=${encodeURIComponent(group.slug)}`;
    titleLink.textContent = group.title;
    titleLink.style.color = 'white';
    titleLink.style.fontWeight = 'bold';
    titleLink.style.fontSize = '1.1rem';
    titleLink.style.textDecoration = 'none';
    titleLink.style.flex = '1';
    titleLink.style.textAlign = 'left';

 
  // ✅ ÍCONE: <button> separado → só abre/fecha o submenu (MAIOR)
  const toggleButton = document.createElement('button');
  toggleButton.textContent = '+'; // estado inicial
  toggleButton.style.color = '#FF5E00';
  toggleButton.style.fontWeight = 'bold';
  toggleButton.style.background = 'transparent';
  toggleButton.style.border = 'none';
  toggleButton.style.cursor = 'pointer';
  toggleButton.style.minWidth = '36px';   // ✅ área de toque maior
  toggleButton.style.height = '36px';
  toggleButton.style.borderRadius = '50%'; // opcional: botão circular
  toggleButton.style.display = 'flex';
  toggleButton.style.alignItems = 'center';
  toggleButton.style.justifyContent = 'center';
  toggleButton.style.fontSize = '1.4rem';  // ✅ ícone maior
  toggleButton.style.padding = '0';
  toggleButton.style.marginLeft = '8px';

    header.appendChild(titleLink);
    header.appendChild(toggleButton);

    // Submenu
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

    // ✅ Só o botão controla o toggle
    toggleButton.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = submenu.style.display === 'block';
      submenu.style.display = isOpen ? 'none' : 'block';
      toggleButton.textContent = isOpen ? '+' : '−';
    });
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDropdown.classList.contains('open');
      if (isOpen) {
        mobileDropdown.classList.remove('open');
        menuToggle.textContent = '✕';
      } else {
        mobileDropdown.classList.add('open');
        menuToggle.textContent = '☰';
      }
    });

    groupItem.appendChild(header);
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