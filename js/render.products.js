let visibleCount = 12;
let sortBy = "asc";

function getSortedProducts(products) {
  const arr = [...products];

  if (sortBy === "asc") return arr.sort((a, b) => a.price - b.price);
  if (sortBy === "desc") return arr.sort((a, b) => b.price - a.price);
  if (sortBy === "newest")
    return arr.sort((a, b) => (b.id || 0) - (a.id || 0));

  return arr;
}

function renderAllProducts(containerId, products = PRODUCTS) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const sorted = getSortedProducts(products);
  const visible = sorted.slice(0, visibleCount);

  const section = document.createElement("section");
  section.className = "grid-products-container";

  /* ===== TÍTULO ===== */
  const title = document.createElement("h2");
  title.className = "section-title"; // mesma classe do "Destaques"
  title.textContent = "Todos os produtos";
  section.appendChild(title);

  /* ===== FILTRO ===== */
  section.innerHTML += `
    <div class="filter-wrapper">
      <div class="filter-dropdown" id="filterDropdown">
        <button class="filter-button" id="filterButton">
          <div class="filter-left">
            <svg
              class="filter-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
            </svg>

            <span id="filterLabel">
              ${
                sortBy === "asc"
                  ? "Menor preço"
                  : sortBy === "desc"
                  ? "Maior preço"
                  : "Lançamentos"
              }
            </span>
          </div>
          <span class="filter-arrow">▼</span>
        </button>

        <div class="filter-menu">
          <button data-value="asc">Menor preço</button>
          <button data-value="desc">Maior preço</button>
          <button data-value="newest">Lançamentos</button>
        </div>
      </div>
    </div>
  `;

  /* ===== GRID DE PRODUTOS ===== */
  const grid = document.createElement("div");
  grid.className = "grid-products";

  grid.innerHTML = visible
    .map(
      (product) => `
        <a href="${product.link}" target="_blank" class="product-card">
          <div class="product-image-wrapper">
            <img
              src="${product.image}"
              alt="${product.title}"
              class="product-image"
              onerror="this.src='assets/images/placeholder.jpg'"
            />
          </div>
          <div class="product-content">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">
              ${product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </a>
      `
    )
    .join("");

  section.appendChild(grid);

  /* ===== MOSTRAR MAIS ===== */
  if (visibleCount < sorted.length) {
    const loadMore = document.createElement("div");
    loadMore.className = "load-more-container";
    loadMore.innerHTML = `
      <button class="load-more-button" id="loadMoreButton">
        Mostrar mais
      </button>
    `;
    section.appendChild(loadMore);
  }

  container.appendChild(section);

  /* ===== EVENTOS ===== */
  const dropdown = section.querySelector("#filterDropdown");
  const filterButton = section.querySelector("#filterButton");
  const filterMenuButtons = section.querySelectorAll(".filter-menu button");
  const filterLabel = section.querySelector("#filterLabel");

  filterButton.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  filterMenuButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      sortBy = btn.dataset.value;
      visibleCount = 12;
      filterLabel.textContent = btn.textContent;

      container.querySelector("section:last-of-type")?.remove();
      renderAllProducts(containerId, products);
    });
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });

  const loadMoreBtn = section.querySelector("#loadMoreButton");
  if (loadMoreBtn) {
    loadMoreBtn.onclick = () => {
      visibleCount += 12;
      container.querySelector("section:last-of-type")?.remove();
      renderAllProducts(containerId, products);
    };
  }
}
