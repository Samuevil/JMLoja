// js/navbar.js
const navDesktop = document.getElementById("navDesktop");

function closeAllDropdowns() {
  document.querySelectorAll(".dropdown.open").forEach((d) => {
    d.classList.remove("open");
  });
}

categoryGroups.forEach((group) => {
  const navItem = document.createElement("div");
  navItem.className = "nav-item";

  const link = document.createElement("a");
  link.className = "nav-link";
  link.href = `/categories/${group.slug}`;
  link.textContent = group.title;
  link.style.textDecoration = "none";
  navItem.appendChild(link);

  if (group.columns?.length) {
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";
    const inner = document.createElement("div");
    inner.style.maxWidth = "1600px";
    inner.style.margin = "auto";
    inner.style.padding = "32px";
    inner.style.display = "grid";
    inner.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    inner.style.gap = "24px";

    group.columns.forEach((col) => {
      const colDiv = document.createElement("div");
      const titleLink = document.createElement("a");
      titleLink.href = `/categories/${col.slug}`;
      titleLink.textContent = col.title;
      titleLink.style.display = "block";
      titleLink.style.marginBottom = "8px";
      titleLink.style.color = "white";
      titleLink.style.fontWeight = "bold";
      titleLink.style.textDecoration = "none";
      titleLink.addEventListener("mouseenter", () => titleLink.style.color = "#FF5E00");
      titleLink.addEventListener("mouseleave", () => titleLink.style.color = "white");
      colDiv.appendChild(titleLink);

      col.items.forEach((item) => {
        const a = document.createElement("a");
        a.href = `/categories/${item.slug}`;
        a.textContent = item.name;
        a.style.display = "block";
        a.style.color = "#b0b0b0";
        a.style.fontSize = "14px";
        a.style.margin = "6px 0";
        a.style.textDecoration = "none";
        a.addEventListener("mouseenter", () => a.style.color = "#FF5E00");
        a.addEventListener("mouseleave", () => a.style.color = "#b0b0b0");
        colDiv.appendChild(a);
      });

      inner.appendChild(colDiv);
    });

    dropdown.appendChild(inner);
    navItem.appendChild(dropdown);

    navItem.addEventListener("mouseenter", () => {
      closeAllDropdowns();
      dropdown.classList.add("open");
    });
    dropdown.addEventListener("mouseenter", () => dropdown.classList.add("open"));
    dropdown.addEventListener("mouseleave", () => dropdown.classList.remove("open"));
  }

  navDesktop.appendChild(navItem);
});

const blogItem = document.createElement("div");
blogItem.className = "nav-item";
const blogLink = document.createElement("a");
blogLink.className = "nav-link";
blogLink.href = "https://www.josimarsoares.com.br/";
blogLink.target = "_blank";
blogLink.rel = "noopener noreferrer";
blogLink.textContent = "BLOG";
blogLink.style.textDecoration = "none";
blogItem.appendChild(blogLink);
navDesktop.appendChild(blogItem);