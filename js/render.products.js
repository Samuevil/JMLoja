let visibleCount = 15;
let sortBy = "asc";

function getSortedProducts(products) {
  const arr = [...products];

  if (sortBy === "asc") return arr.sort((a, b) => a.price - b.price);
  if (sortBy === "desc") return arr.sort((a, b) => b.price - a.price);
  if (sortBy === "newest")
    return arr.sort((a, b) => (b.id || 0) - (a.id || 0));

  return arr;
}

function renderAllProducts(
  containerId,
  products = PRODUCTS,
  sectionTitle = "Todos os produtos"
) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const sorted = getSortedProducts(products);
  const visible = sorted.slice(0, visibleCount);

  const section = document.createElement("section");
  section.className = "grid-products-container";

  const title = document.createElement("h2");
  title.className = "section-title";
  title.textContent = sectionTitle;
  section.appendChild(title);

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
              class="product-image product-img"
              loading="lazy"
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

  section.querySelectorAll(".product-img").forEach((img) => {
    img.addEventListener("error", () => {
      img.src = "assets/images/placeholder.jpg";
    });
  });

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
      renderAllProducts(containerId, products, sectionTitle);
    });
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });

  const loadMoreBtn = section.querySelector("#loadMoreButton");
  if (loadMoreBtn) {
    loadMoreBtn.onclick = () => {
      visibleCount += 15;
      container.querySelector("section:last-of-type")?.remove();
      renderAllProducts(containerId, products, sectionTitle);
    };
  }
}

function renderFeaturedProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const featured = products.filter(p => p.featured);
  if (featured.length < 2) return;

  const section = document.createElement("section");
  section.innerHTML = `
    <div class="featured-container">
      <h2 class="featured-title">Destaques</h2>
      <div class="carousel-wrapper" id="carousel-${containerId}">
        <button class="carousel-btn-prev" aria-label="Anterior">&#8249;</button>
        <div class="carousel-viewport">
          <div class="carousel-grid"></div>
        </div>
        <button class="carousel-btn-next" aria-label="Próximo">&#8250;</button>
      </div>
      <div class="carousel-indicators"></div>
    </div>
  `;

  container.appendChild(section);

  const grid = section.querySelector(".carousel-grid");
  const prev = section.querySelector(".carousel-btn-prev");
  const next = section.querySelector(".carousel-btn-next");
  const indicators = section.querySelector(".carousel-indicators");
  const viewport = section.querySelector(".carousel-viewport");

  const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  let VISIBLE = 4;
  let index = 0;
  let isAnimating = false;
  let isDragging = false;
  let startPos = 0;
  let currentX = 0;
  let translateX = 0;
  let dragStartTime = 0;
  
  let realPosition = 0;
  let totalItems = 0;

  function createProductCard(p) {
    const card = document.createElement("div");
    card.className = "carousel-card";
    card.style.cursor = "pointer";
    card.innerHTML = `
      <div class="carousel-image-wrapper">
        <img class="carousel-image" src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
      <div class="carousel-content">
        <div class="carousel-title">${p.title}</div>
        <div class="carousel-price">R$ ${p.price.toFixed(2)}</div>
      </div>
    `;
    card.addEventListener("click", () => {
      window.open(p.link, "_blank", "noopener,noreferrer");
    });
    return card;
  }

  function updateIndicators(realIndex) {
    if (!isTouchDevice() || featured.length <= VISIBLE) return;
    const dots = indicators.querySelectorAll("button");
    dots.forEach((dot, i) => {
      dot.style.backgroundColor = i === realIndex ? "#ff5e00" : "transparent";
    });
  }

  function cardStep() {
    return grid.children[0] ? grid.children[0].offsetWidth + 17 : 0;
  }

  function move(withAnimation = true) {
    if (grid.children.length === 0) return;
    
    const step = cardStep();
    
    if (withAnimation) {
      grid.style.transition = "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)";
    } else {
      grid.style.transition = "none";
    }
    
    grid.style.transform = `translateX(-${realPosition * step}px)`;
    
    if (featured.length > VISIBLE) {
      let realIndex = ((index - VISIBLE) % featured.length + featured.length) % featured.length;
      updateIndicators(realIndex);
    }
  }

  function setupCarousel() {
    const isTouch = isTouchDevice();
    const viewportWidth = viewport.clientWidth;

    if (isTouch) {
      if (viewportWidth < 400) {
        VISIBLE = 2;
      } else if (viewportWidth < 600) {
        VISIBLE = 3;
      } else {
        VISIBLE = 4;
      }
    } else {
      VISIBLE = 4;
    }

    VISIBLE = Math.min(VISIBLE, featured.length);
    VISIBLE = Math.max(1, VISIBLE);
    VISIBLE = Math.min(4, VISIBLE);

    grid.innerHTML = "";
    indicators.innerHTML = "";

    if (featured.length > VISIBLE) {
      const clonesBefore = featured.slice(-VISIBLE * 2);
      const clonesAfter = featured.slice(0, VISIBLE * 2);
      const all = [...clonesBefore, ...featured, ...clonesAfter, ...featured.slice(0, VISIBLE)];
      
      totalItems = all.length;
      
      all.forEach(p => {
        const card = createProductCard(p);
        grid.appendChild(card);
      });

      index = VISIBLE * 2;
      realPosition = index;
      
      setTimeout(() => {
        move(false);
      }, 50);
    } else {
      featured.forEach(p => {
        const card = createProductCard(p);
        grid.appendChild(card);
      });
      index = 0;
      realPosition = 0;
      
      if (featured.length < VISIBLE) {
        grid.style.justifyContent = "center";
      }
      move(false);
    }

    if (isTouch && featured.length > VISIBLE) {
      indicators.style.display = "flex";
      for (let i = 0; i < featured.length; i++) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `Slide ${i + 1}`);
        dot.style.cssText = `
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #ff5e00;
          background: transparent;
          padding: 0;
          cursor: pointer;
        `;
        indicators.appendChild(dot);
      }
      updateIndicators(0);
    } else {
      indicators.style.display = "none";
    }

    if (!isTouch && featured.length > VISIBLE) {
      prev.style.display = "flex";
      next.style.display = "flex";
    } else {
      prev.style.display = "none";
      next.style.display = "none";
    }
  }

  function nextSlide() {
    if (isAnimating || featured.length <= VISIBLE) return;
    isAnimating = true;
    
    const step = cardStep();
    index++;
    realPosition++;
    
    if (index >= featured.length + VISIBLE * 2) {
      setTimeout(() => {
        grid.style.transition = "none";
        index = VISIBLE * 2;
        realPosition = index;
        grid.style.transform = `translateX(-${realPosition * step}px)`;
        
        setTimeout(() => {
          isAnimating = false;
        }, 50);
      }, 450);
    }
    
    move(true);
  }

  function prevSlide() {
    if (isAnimating || featured.length <= VISIBLE) return;
    isAnimating = true;
    
    const step = cardStep();
    index--;
    realPosition--;
    
    if (index < VISIBLE) {
      setTimeout(() => {
        grid.style.transition = "none";
        index = featured.length + VISIBLE * 2 - 1;
        realPosition = index;
        grid.style.transform = `translateX(-${realPosition * step}px)`;
        
        setTimeout(() => {
          isAnimating = false;
        }, 50);
      }, 450);
    }
    
    move(true);
  }

  if (!isTouchDevice() && featured.length > VISIBLE) {
    prev.onclick = prevSlide;
    next.onclick = nextSlide;
  }

  grid.addEventListener("transitionend", () => {
    if (!isAnimating) return;
    isAnimating = false;
  });

  function enableVerticalScroll() {
    const carouselWrapper = document.getElementById(`carousel-${containerId}`);
    if (carouselWrapper) {
      carouselWrapper.style.touchAction = 'pan-y';
    }
  }

  enableVerticalScroll();

  if (featured.length > VISIBLE) {
    let touchStartX = 0;
    let touchStartTime = 0;
    let isTouchMoving = false;

    viewport.addEventListener("touchstart", (e) => {
      if (!isTouchDevice()) return;
      isDragging = true;
      isAnimating = false;
      touchStartX = e.touches[0].clientX;
      touchStartTime = Date.now();
      grid.style.transition = "none";
    }, { passive: true });

    viewport.addEventListener("touchmove", (e) => {
      if (!isDragging || !isTouchDevice()) return;
      
      const currentX = e.touches[0].clientX;
      const deltaX = currentX - touchStartX;
      translateX = deltaX;
      
      const step = cardStep();
      const baseOffset = -realPosition * step;
      grid.style.transform = `translateX(${baseOffset + translateX}px)`;
    }, { passive: false });

    viewport.addEventListener("touchend", (e) => {
      if (!isDragging || !isTouchDevice()) return;
      isDragging = false;

      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - touchStartX;
      const timeElapsed = Date.now() - touchStartTime;
      
      const step = cardStep();
      const threshold = step * 0.3;
      const velocity = Math.abs(deltaX) / timeElapsed;
      
      if (Math.abs(deltaX) > threshold || velocity > 0.5) {
        if (deltaX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      } else {
        move(true);
      }
    }, { passive: true });
  }

  indicators.addEventListener("click", (e) => {
    if (!isTouchDevice() || !e.target.matches("button") || featured.length <= VISIBLE) return;
    const dots = Array.from(indicators.querySelectorAll("button"));
    const clickedIndex = dots.indexOf(e.target);
    if (clickedIndex >= 0) {
      isAnimating = true;
      index = VISIBLE * 2 + clickedIndex;
      realPosition = index;
      move(true);
    }
  });

  setupCarousel();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const currentRealIndex = ((index - VISIBLE * 2) % featured.length + featured.length) % featured.length;
      setupCarousel();
      
      setTimeout(() => {
        if (featured.length > VISIBLE) {
          index = VISIBLE * 2 + currentRealIndex;
          realPosition = index;
          move(false);
        }
      }, 100);
    }, 200);
  });
  
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      const currentRealIndex = ((index - VISIBLE * 2) % featured.length + featured.length) % featured.length;
      setupCarousel();
      
      setTimeout(() => {
        if (featured.length > VISIBLE) {
          index = VISIBLE * 2 + currentRealIndex;
          realPosition = index;
          move(false);
        }
      }, 150);
    }, 300);
  });
}