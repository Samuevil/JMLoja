// js/main.js
const menuToggle = document.getElementById("menuToggle");
const menuMobile = document.getElementById("menuMobile");

menuToggle.addEventListener("click", () => {
  menuMobile.classList.toggle("open");
  menuToggle.textContent = menuMobile.classList.contains("open") ? "✕" : "☰";
});

categoryGroups.forEach((group, index) => {
  const groupDiv = document.createElement("div");
  groupDiv.className = "mobile-group";

  const header = document.createElement("div");
  header.className = "mobile-header";

  const link = document.createElement("a");
  link.href = `/categories/${group.slug}`;
  link.textContent = group.title;
  link.addEventListener("click", () => {
    menuMobile.classList.remove("open");
    menuToggle.textContent = "☰";
  });

  const toggle = document.createElement("button");
  toggle.className = "mobile-toggle";
  toggle.textContent = "+";

  header.appendChild(link);
  header.appendChild(toggle);
  groupDiv.appendChild(header);

  const content = document.createElement("div");
  content.className = "mobile-content";

  group.columns.forEach(col => {
    const colDiv = document.createElement("div");
    colDiv.className = "mobile-col";

    const h4 = document.createElement("h4");
    h4.textContent = col.title;
    colDiv.appendChild(h4);

    col.items.forEach(item => {
      const a = document.createElement("a");
      a.href = `/categories/${item.slug}`;
      a.textContent = item.name;
      a.addEventListener("click", () => {
        menuMobile.classList.remove("open");
        menuToggle.textContent = "☰";
      });
      colDiv.appendChild(a);
    });

    content.appendChild(colDiv);
  });

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    content.classList.toggle("open");
    toggle.textContent = content.classList.contains("open") ? "−" : "+";
  });

  groupDiv.appendChild(content);
  menuMobile.appendChild(groupDiv);
});