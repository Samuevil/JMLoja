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
  
  const isMobileOrTablet = () => {
    return isTouchDevice();
  };

  let VISIBLE = 4;
  let index = 0;
  let isAnimating = false;
  let isDragging = false;
  let startPos = 0;
  let currentX = 0;
  let translateX = 0;
  let dragStartTime = 0;

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
    grid.style.transition = withAnimation ? "transform 0.45s ease" : "none";
    grid.style.transform = `translateX(-${index * step}px)`;
    
    if (featured.length > VISIBLE) {
      let realIndex = ((index - VISIBLE) % featured.length + featured.length) % featured.length;
      updateIndicators(realIndex);
    }
  }

  function setupCarousel() {
    const isTouch = isTouchDevice();
    const mobileTablet = isMobileOrTablet();
    const viewportWidth = viewport.clientWidth;

    // ✅ CORREÇÃO: LIMITAR A NO MÁXIMO 4 PRODUTOS VISÍVEIS EM QUALQUER CENÁRIO
    if (mobileTablet) {
      if (viewportWidth < 400) {
        VISIBLE = 2;
      } else if (viewportWidth < 600) {
        VISIBLE = 3;
      } else {
        VISIBLE = 4; // ← isso inclui celulares e tablets em paisagem
      }
    } else {
      VISIBLE = 4; // desktop
    }

    // Garantir limites
    VISIBLE = Math.min(VISIBLE, featured.length);
    VISIBLE = Math.max(1, VISIBLE);
    VISIBLE = Math.min(4, VISIBLE); // ← linha-chave: nunca mais que 4

    grid.innerHTML = "";
    indicators.innerHTML = "";

    // Agora, com VISIBLE <= 4 e featured.length = 10, isso sempre será verdade:
    if (featured.length > VISIBLE) {
      const clonesBefore = featured.slice(-VISIBLE);
      const clonesAfter = featured.slice(0, VISIBLE);
      const all = [...clonesBefore, ...featured, ...clonesAfter];

      all.forEach(p => {
        const card = createProductCard(p);
        grid.appendChild(card);
      });

      index = VISIBLE;
      setTimeout(() => {
        move(false);
      }, 10);
    } else {
      // Caso tenha <= 4 produtos (pouco provável no seu caso)
      featured.forEach(p => {
        const card = createProductCard(p);
        grid.appendChild(card);
      });
      index = 0;
      move(false);
    }

    // Indicadores em dispositivos touch
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
      updateIndicators(0);
    } else {
      indicators.style.display = "none";
    }

    // Botões só em desktop não-touch
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
    index++;
    move(true);
  }

  function prevSlide() {
    if (isAnimating || featured.length <= VISIBLE) return;
    isAnimating = true;
    index--;
    move(true);
  }

  if (!isTouchDevice() && featured.length > VISIBLE) {
    prev.onclick = prevSlide;
    next.onclick = nextSlide;
  }

  grid.addEventListener("transitionend", () => {
    if (!isAnimating) return;
    
    if (featured.length > VISIBLE) {
      const step = cardStep();
      if (index >= featured.length + VISIBLE) {
        grid.style.transition = "none";
        index = VISIBLE;
        move(false);
      }
      else if (index < VISIBLE) {
        grid.style.transition = "none";
        index = featured.length + VISIBLE - 1;
        move(false);
      }
    }
    isAnimating = false;
  });

  function enableVerticalScroll() {
    const carouselWrapper = document.getElementById(`carousel-${containerId}`);
    if (carouselWrapper) {
      carouselWrapper.style.touchAction = 'pan-y';
    }
  }

  enableVerticalScroll();

  // Touch controls
  if (featured.length > VISIBLE) {
    viewport.addEventListener("touchstart", (e) => {
      if (!isTouchDevice()) return;
      isDragging = true;
      isAnimating = false;
      startPos = e.touches[0].clientX;
      currentX = startPos;
      translateX = 0;
      dragStartTime = Date.now();
      grid.style.transition = "none";
    }, { passive: true });

    viewport.addEventListener("touchmove", (e) => {
      if (!isDragging || !isTouchDevice()) return;
      currentX = e.touches[0].clientX;
      const deltaX = currentX - startPos;
      translateX = deltaX;
      const step = cardStep();
      const baseOffset = -index * step;
      grid.style.transform = `translateX(${baseOffset + translateX}px)`;
    }, { passive: false });

    viewport.addEventListener("touchend", (e) => {
      if (!isDragging || !isTouchDevice()) return;
      isDragging = false;

      const deltaX = currentX - startPos;
      const timeElapsed = Date.now() - dragStartTime;
      const velocity = timeElapsed > 0 ? deltaX / timeElapsed : 0;

      const step = cardStep();
      const baseOffset = -index * step;
      const totalOffset = baseOffset + translateX;
      const offsetFromIndex = -totalOffset / step;
      let targetIndex = Math.round(offsetFromIndex);

      if (Math.abs(velocity) > 0.8) {
        targetIndex += velocity > 0 ? -1 : 1;
      }

      index = targetIndex;

      grid.style.transition = "transform 0.4s ease";
      grid.style.transform = `translateX(-${index * step}px)`;

      setTimeout(() => {
        if (featured.length > VISIBLE) {
          if (index >= featured.length + VISIBLE) {
            grid.style.transition = "none";
            index = VISIBLE;
            grid.style.transform = `translateX(-${index * step}px)`;
          } else if (index < VISIBLE) {
            grid.style.transition = "none";
            index = featured.length + VISIBLE - 1;
            grid.style.transform = `translateX(-${index * step}px)`;
          }
          const realIndex = ((index - VISIBLE) % featured.length + featured.length) % featured.length;
          updateIndicators(realIndex);
        }
      }, 400);
    }, { passive: true });
  }

  indicators.addEventListener("click", (e) => {
    if (!isTouchDevice() || !e.target.matches("button") || featured.length <= VISIBLE) return;
    const dots = Array.from(indicators.querySelectorAll("button"));
    const clickedIndex = dots.indexOf(e.target);
    if (clickedIndex >= 0) {
      isAnimating = true;
      index = VISIBLE + clickedIndex;
      move(true);
    }
  });

  setupCarousel();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setupCarousel, 200);
  });
}