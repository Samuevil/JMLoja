function renderFeaturedProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const featured = products.filter(p => p.featured);
  if (featured.length < 2) return;

  const section = document.createElement("section");
  section.innerHTML = `
    <div class="featured-container">
      <h2 class="featured-title">Destaques</h2>
      <div class="carousel-wrapper">
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

  // ✅ Detecção universal de touch
  const isTouchDevice = () => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  let VISIBLE = 4;
  let index = 0;
  let isAnimating = false;

  function setupCarousel() {
    const isTouch = isTouchDevice();
    const viewportWidth = viewport.clientWidth;

    // Define cards visíveis com base na largura REAL (sempre inteiro)
    if (isTouch) {
      if (viewportWidth < 550) VISIBLE = 2;
      else if (viewportWidth < 900) VISIBLE = 3;
      else VISIBLE = 4;
    } else {
      VISIBLE = 4; // desktop
    }
    VISIBLE = Math.min(VISIBLE, featured.length);

    // Limpa
    grid.innerHTML = "";
    indicators.innerHTML = "";

    // Clones
    const clonesBefore = featured.slice(-VISIBLE);
    const clonesAfter = featured.slice(0, VISIBLE);
    const all = [...clonesBefore, ...featured, ...clonesAfter];

    // Renderiza
    all.forEach(p => {
      const card = document.createElement("div");
      card.className = "carousel-card";
      card.innerHTML = `
        <div class="carousel-image-wrapper">
          <img class="carousel-image" src="${p.image}" alt="${p.title}">
        </div>
        <div class="carousel-title">${p.title}</div>
        <div class="carousel-price">R$ ${p.price.toFixed(2)}</div>
      `;
      grid.appendChild(card);
    });

    index = VISIBLE;

    // ✅ Controle de UI pelo JS
    if (isTouch) {
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
    } else {
      indicators.style.display = "none";
    }

    prev.style.display = isTouch ? "none" : "flex";
    next.style.display = isTouch ? "none" : "flex";

    move(false);
  }

  function cardStep() {
    return grid.children[0] ? grid.children[0].offsetWidth + 17 : 0;
  }

  function move(withAnimation = true) {
    const step = cardStep();
    grid.style.transition = withAnimation ? "transform 0.45s ease" : "none";
    grid.style.transform = `translateX(-${index * step}px)`;

    if (isTouchDevice()) {
      const realIndex = ((index - VISIBLE) % featured.length + featured.length) % featured.length;
      const dots = indicators.querySelectorAll("button");
      dots.forEach((dot, i) => {
        dot.style.backgroundColor = i === realIndex ? "#ff5e00" : "transparent";
      });
    }
  }

  function nextSlide() {
    if (isAnimating || VISIBLE >= featured.length) return;
    isAnimating = true;
    index++;
    move(true);
  }

  function prevSlide() {
    if (isAnimating || VISIBLE >= featured.length) return;
    isAnimating = true;
    index--;
    move(true);
  }

  next.onclick = () => { if (!isTouchDevice()) nextSlide(); };
  prev.onclick = () => { if (!isTouchDevice()) prevSlide(); };

  grid.addEventListener("transitionend", () => {
    if (!isAnimating) return;
    if (index >= featured.length + VISIBLE) {
      setTimeout(() => { index = VISIBLE; move(false); isAnimating = false; }, 50);
      return;
    }
    if (index < VISIBLE) {
      setTimeout(() => { index = featured.length + VISIBLE - 1; move(false); isAnimating = false; }, 50);
      return;
    }
    isAnimating = false;
  });

  // Swipe
  let touchStartX = 0;
  viewport.addEventListener("touchstart", (e) => {
    if (!isTouchDevice()) return;
    touchStartX = e.touches[0].clientX;
  });

  viewport.addEventListener("touchend", (e) => {
    if (!isTouchDevice()) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  }, { passive: true });

  // Indicadores
  indicators.addEventListener("click", (e) => {
    if (!isTouchDevice() || !e.target.matches("button")) return;
    const dots = Array.from(indicators.querySelectorAll("button"));
    const clickedIndex = dots.indexOf(e.target);
    if (clickedIndex >= 0) {
      index = VISIBLE + clickedIndex;
      move(true);
    }
  });

  // Inicializa
  setupCarousel();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setupCarousel, 200);
  });
}