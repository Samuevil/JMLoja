document.addEventListener('DOMContentLoaded', () => {
  
  const menuToggle = document.getElementById("menuToggle");
  const menuMobile = document.getElementById("menuMobile");

  if (!menuToggle || !menuMobile) {
    console.warn("⚠️ Elementos do menu mobile não encontrados no HTML.");
    return; 
  }

  const categoryGroups = window.categoryGroups || [

    {
      slug: "patins",
      title: "Patins",
      columns: [
        {
          title: "Freestyle",
          items: [
            { slug: "freestyle-pro", name: "Freestyle Pro" },
            { slug: "freestyle-urban", name: "Freestyle Urban" }
          ]
        }
      ]
    }

  ];


  menuToggle.addEventListener("click", () => {
    menuMobile.classList.toggle("open");
    menuToggle.textContent = menuMobile.classList.contains("open") ? "✕" : "☰";
  });

  categoryGroups.forEach((group) => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "mobile-group";

    const header = document.createElement("div");
    header.className = "mobile-header";

    const link = document.createElement("a");
    link.href = `/?category=${encodeURIComponent(group.slug)}`;
    link.textContent = group.title;
    link.addEventListener("click", () => {
      menuMobile.classList.remove("open");
      menuToggle.textContent = "☰";
    });

    const toggle = document.createElement("button");
    toggle.className = "mobile-toggle";
    toggle.textContent = "+";
    toggle.setAttribute("aria-label", "Expandir categoria");

    header.appendChild(link);
    header.appendChild(toggle);
    groupDiv.appendChild(header);

    const content = document.createElement("div");
    content.className = "mobile-content";

    if (group.columns && Array.isArray(group.columns)) {
      group.columns.forEach(col => {
        const colDiv = document.createElement("div");
        colDiv.className = "mobile-col";

        const h4 = document.createElement("h4");
        h4.textContent = col.title || "Sem título";
        colDiv.appendChild(h4);

        if (col.items && Array.isArray(col.items)) {
          col.items.forEach(item => {
            const a = document.createElement("a");
            a.href = `/?category=${encodeURIComponent(item.slug)}`;
            a.textContent = item.name || "Item sem nome";
            a.addEventListener("click", () => {
              menuMobile.classList.remove("open");
              menuToggle.textContent = "☰";
            });
            colDiv.appendChild(a);
          });
        }

        content.appendChild(colDiv);
      });
    }

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      content.classList.toggle("open");
      toggle.textContent = content.classList.contains("open") ? "−" : "+";
    });

    groupDiv.appendChild(content);
    menuMobile.appendChild(groupDiv); 
  });
});