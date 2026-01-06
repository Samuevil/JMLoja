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

  let isDragging = false;
  let startPos = 0;
  let currentX = 0;
  let translateX = 0;
  let dragStartTime = 0;

  // ✅ Função para atualizar indicadores com base em índice real
  function updateIndicators(realIndex) {
    if (!isTouchDevice()) return;
    const dots = indicators.querySelectorAll("button");
    dots.forEach((dot, i) => {
      dot.style.backgroundColor = i === realIndex ? "#ff5e00" : "transparent";
    });
  }

  function cardStep() {
    return grid.children[0] ? grid.children[0].offsetWidth + 17 : 0;
  }

  function move(withAnimation = true) {
    const step = cardStep();
    grid.style.transition = withAnimation ? "transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)" : "none";
    grid.style.transform = `translateX(-${index * step}px)`;
    const realIndex = ((index - VISIBLE) % featured.length + featured.length) % featured.length;
    updateIndicators(realIndex);
  }

  function setupCarousel() {
    const isTouch = isTouchDevice();
    const viewportWidth = viewport.clientWidth;

    if (isTouch) {
      if (viewportWidth < 550) VISIBLE = 2;
      else if (viewportWidth < 900) VISIBLE = 3;
      else VISIBLE = 4;
    } else {
      VISIBLE = 4;
    }
    VISIBLE = Math.min(VISIBLE, featured.length);

    grid.innerHTML = "";
    indicators.innerHTML = "";

    const clonesBefore = featured.slice(-VISIBLE);
    const clonesAfter = featured.slice(0, VISIBLE);
    const all = [...clonesBefore, ...featured, ...clonesAfter];

    all.forEach(p => {
      const card = document.createElement("div");
      card.className = "carousel-card";
      card.style.cursor = "pointer";
      card.innerHTML = `
        <div class="carousel-image-wrapper">
          <img class="carousel-image" src="${p.image}" alt="${p.title}">
        </div>
        <div class="carousel-title">${p.title}</div>
        <div class="carousel-price">R$ ${p.price.toFixed(2)}</div>
      `;
      card.addEventListener("click", () => {
        window.open(p.link, "_blank", "noopener,noreferrer");
      });
      grid.appendChild(card);
    });

    index = VISIBLE;
    move(false);

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
      // Garante que o primeiro esteja ativo
      updateIndicators(0);
    } else {
      indicators.style.display = "none";
    }

    prev.style.display = isTouch ? "none" : "flex";
    next.style.display = isTouch ? "none" : "flex";
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

  prev.onclick = () => { if (!isTouchDevice()) prevSlide(); };
  next.onclick = () => { if (!isTouchDevice()) nextSlide(); };

  grid.addEventListener("transitionend", () => {
    if (!isAnimating) return;
    if (index >= featured.length + VISIBLE) {
      setTimeout(() => {
        index = VISIBLE;
        move(false);
        isAnimating = false;
      }, 50);
      return;
    }
    if (index < VISIBLE) {
      setTimeout(() => {
        index = featured.length + VISIBLE - 1;
        move(false);
        isAnimating = false;
      }, 50);
      return;
    }
    isAnimating = false;
  });

  // ✅ Anima os indicadores progressivamente durante a transição
  function animateIndicators(fromIndex, toIndex, duration = 400) {
    if (!isTouchDevice()) return;
    const startTime = Date.now();
    const fromLogical = ((fromIndex - VISIBLE) % featured.length + featured.length) % featured.length;
    const toLogical = ((toIndex - VISIBLE) % featured.length + featured.length) % featured.length;

    function update() {
      const elapsed = Date.now() - startTime;
      if (elapsed >= duration) {
        updateIndicators(toLogical);
        return;
      }

      const progress = elapsed / duration;
      // Interpolação linear entre fromLogical e toLogical
      // Lidar com wrap (ex: 3 → 0)
      let logicalDiff = toLogical - fromLogical;
      if (Math.abs(logicalDiff) > featured.length / 2) {
        if (logicalDiff > 0) logicalDiff -= featured.length;
        else logicalDiff += featured.length;
      }
      const currentLogical = (fromLogical + logicalDiff * progress + featured.length) % featured.length;
      updateIndicators(Math.round(currentLogical));

      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  viewport.addEventListener("touchstart", (e) => {
    if (VISIBLE >= featured.length || !isTouchDevice()) return;
    isDragging = true;
    isAnimating = false;
    startPos = e.touches[0].clientX;
    currentX = startPos;
    translateX = 0;
    dragStartTime = Date.now();
    grid.style.transition = "none";
  }, { passive: true });

  viewport.addEventListener("touchmove", (e) => {
    if (!isDragging || VISIBLE >= featured.length || !isTouchDevice()) return;
    currentX = e.touches[0].clientX;
    const deltaX = currentX - startPos;
    translateX = deltaX;
    const step = cardStep();
    const baseOffset = -index * step;
    grid.style.transform = `translateX(${baseOffset + translateX}px)`;
    e.preventDefault();
  }, { passive: false });

  viewport.addEventListener("touchend", (e) => {
    if (!isDragging || VISIBLE >= featured.length || !isTouchDevice()) return;
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
      const direction = velocity > 0 ? -1 : 1;
      targetIndex += direction;
    }

    const minIndex = 0;
    const maxIndex = featured.length + 2 * VISIBLE - 1;
    targetIndex = Math.max(minIndex, Math.min(maxIndex, targetIndex));

    const startIndex = index;
    index = targetIndex;

    // ✅ Anima indicadores progressivamente
    animateIndicators(startIndex, index, 400);

    // Move o grid
    grid.style.transition = "transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)";
    grid.style.transform = `translateX(-${index * step}px)`;

    setTimeout(() => {
      if (index >= featured.length + VISIBLE) {
        index = VISIBLE;
        grid.style.transition = "none";
        grid.style.transform = `translateX(-${index * step}px)`;
      } else if (index < VISIBLE) {
        index = featured.length + VISIBLE - 1;
        grid.style.transition = "none";
        grid.style.transform = `translateX(-${index * step}px)`;
      }
      // Garante estado final
      const realIndex = ((index - VISIBLE) % featured.length + featured.length) % featured.length;
      updateIndicators(realIndex);
    }, 400);
  }, { passive: true });

  indicators.addEventListener("click", (e) => {
    if (!isTouchDevice() || !e.target.matches("button")) return;
    const dots = Array.from(indicators.querySelectorAll("button"));
    const clickedIndex = dots.indexOf(e.target);
    if (clickedIndex >= 0) {
      const startIndex = index;
      index = VISIBLE + clickedIndex;
      animateIndicators(startIndex, index, 400);
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