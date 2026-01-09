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
  
  // 🔧 NOVO: Contador real de posição (para loop infinito)
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

  // 🔧 CORREÇÃO: Função move() melhorada para loop infinito suave
  function move(withAnimation = true) {
    if (grid.children.length === 0) return;
    
    const step = cardStep();
    
    if (withAnimation) {
      grid.style.transition = "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)";
    } else {
      grid.style.transition = "none";
    }
    
    grid.style.transform = `translateX(-${realPosition * step}px)`;
    
    // Atualizar indicadores
    if (featured.length > VISIBLE) {
      let realIndex = ((index - VISIBLE) % featured.length + featured.length) % featured.length;
      updateIndicators(realIndex);
    }
  }

  function setupCarousel() {
    const isTouch = isTouchDevice();
    const viewportWidth = viewport.clientWidth;

    // Cálculo de VISIBLE
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

    // Garantir limites
    VISIBLE = Math.min(VISIBLE, featured.length);
    VISIBLE = Math.max(1, VISIBLE);
    VISIBLE = Math.min(4, VISIBLE);

    grid.innerHTML = "";
    indicators.innerHTML = "";

    // 🔧 CORREÇÃO: Criar loop infinito verdadeiro
    if (featured.length > VISIBLE) {
      // Para um loop infinito suave, precisamos de clones extras
      // Criamos 3 cópias: original + clones antes + clones depois
      const clonesBefore = featured.slice(-VISIBLE * 2); // 🔧 Mais clones antes
      const clonesAfter = featured.slice(0, VISIBLE * 2); // 🔧 Mais clones depois
      const all = [...clonesBefore, ...featured, ...clonesAfter, ...featured.slice(0, VISIBLE)]; // 🔧 Extra clone no final
      
      totalItems = all.length;
      
      all.forEach(p => {
        const card = createProductCard(p);
        grid.appendChild(card);
      });

      // 🔧 CORREÇÃO: Começar no meio dos clones antes
      index = VISIBLE * 2;
      realPosition = index;
      
      // 🔧 CORREÇÃO: Aguardar renderização completa
      setTimeout(() => {
        move(false);
      }, 50);
    } else {
      // Menos produtos que VISIBLE
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

    // Indicadores
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

    // Botões
    if (!isTouch && featured.length > VISIBLE) {
      prev.style.display = "flex";
      next.style.display = "flex";
    } else {
      prev.style.display = "none";
      next.style.display = "none";
    }
  }

  // 🔧 CORREÇÃO: nextSlide() com loop infinito suave
  function nextSlide() {
    if (isAnimating || featured.length <= VISIBLE) return;
    isAnimating = true;
    
    const step = cardStep();
    index++;
    realPosition++;
    
    // 🔧 CORREÇÃO: Se chegou perto do fim dos clones, reset suave
    if (index >= featured.length + VISIBLE * 2) {
      // Reset para posição equivalente nos clones iniciais
      setTimeout(() => {
        grid.style.transition = "none";
        index = VISIBLE * 2;
        realPosition = index;
        grid.style.transform = `translateX(-${realPosition * step}px)`;
        
        setTimeout(() => {
          isAnimating = false;
        }, 50);
      }, 450); // Aguardar fim da animação
    }
    
    move(true);
  }

  // 🔧 CORREÇÃO: prevSlide() com loop infinito suave
  function prevSlide() {
    if (isAnimating || featured.length <= VISIBLE) return;
    isAnimating = true;
    
    const step = cardStep();
    index--;
    realPosition--;
    
    // 🔧 CORREÇÃO: Se chegou perto do início dos clones, reset suave
    if (index < VISIBLE) {
      // Reset para posição equivalente nos clones finais
      setTimeout(() => {
        grid.style.transition = "none";
        index = featured.length + VISIBLE * 2 - 1;
        realPosition = index;
        grid.style.transform = `translateX(-${realPosition * step}px)`;
        
        setTimeout(() => {
          isAnimating = false;
        }, 50);
      }, 450); // Aguardar fim da animação
    }
    
    move(true);
  }

  if (!isTouchDevice() && featured.length > VISIBLE) {
    prev.onclick = prevSlide;
    next.onclick = nextSlide;
  }

  // 🔧 CORREÇÃO: transitionend melhorado
  grid.addEventListener("transitionend", () => {
    if (!isAnimating) return;
    
    // 🔧 CORREÇÃO: Não resetar aqui, já foi feito nas funções nextSlide/prevSlide
    isAnimating = false;
  });

  function enableVerticalScroll() {
    const carouselWrapper = document.getElementById(`carousel-${containerId}`);
    if (carouselWrapper) {
      carouselWrapper.style.touchAction = 'pan-y';
    }
  }

  enableVerticalScroll();

  // Touch controls com loop infinito
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
      const threshold = step * 0.3; // 30% do card para considerar swipe
      const velocity = Math.abs(deltaX) / timeElapsed;
      
      let moveToNext = false;
      
      // Determinar direção baseado no movimento e velocidade
      if (Math.abs(deltaX) > threshold || velocity > 0.5) {
        if (deltaX > 0) {
          // Swipe para direita = anterior
          prevSlide();
        } else {
          // Swipe para esquerda = próximo
          nextSlide();
        }
      } else {
        // Voltar para posição atual se swipe muito pequeno
        move(true);
      }
    }, { passive: true });
  }

  // Indicadores click
  indicators.addEventListener("click", (e) => {
    if (!isTouchDevice() || !e.target.matches("button") || featured.length <= VISIBLE) return;
    const dots = Array.from(indicators.querySelectorAll("button"));
    const clickedIndex = dots.indexOf(e.target);
    if (clickedIndex >= 0) {
      isAnimating = true;
      index = VISIBLE * 2 + clickedIndex; // 🔧 Ajuste para posição correta nos clones
      realPosition = index;
      move(true);
    }
  });

  setupCarousel();

  // 🔧 CORREÇÃO: Resize com recálculo correto
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Salvar posição atual relativa
      const currentRealIndex = ((index - VISIBLE * 2) % featured.length + featured.length) % featured.length;
      setupCarousel();
      
      // Restaurar posição após recálculo
      setTimeout(() => {
        if (featured.length > VISIBLE) {
          index = VISIBLE * 2 + currentRealIndex;
          realPosition = index;
          move(false);
        }
      }, 100);
    }, 200);
  });
  
  // 🔧 CORREÇÃO: Orientation change
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