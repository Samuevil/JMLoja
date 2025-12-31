function renderFeaturedProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const featured = products.filter(p => p.featured);
  if (featured.length < 4) return;

  const VISIBLE = 4;
  const GAP = 16;

  const section = document.createElement("section");

 section.innerHTML = `
  <div class="featured-container">
    <h2 class="featured-title">Destaques</h2>

    <div class="carousel-wrapper">
      <button class="carousel-btn-prev">&#8249;</button>

      <div class="carousel-viewport">
        <div class="carousel-grid"></div>
      </div>

      <button class="carousel-btn-next">&#8250;</button>
    </div>
  </div>
`;


  container.appendChild(section);

  const grid = section.querySelector(".carousel-grid");
  const prev = section.querySelector(".carousel-btn-prev");
  const next = section.querySelector(".carousel-btn-next");

  // 🔁 Clones
  const clonesBefore = featured.slice(-VISIBLE);
  const clonesAfter = featured.slice(0, VISIBLE);

  const all = [...clonesBefore, ...featured, ...clonesAfter];

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

  let index = VISIBLE;
  let isAnimating = false;

  function cardStep() {
    return grid.children[0].offsetWidth + GAP;
  }

  function move(withAnimation = true) {
    grid.style.transition = withAnimation ? "transform 0.45s ease" : "none";
    grid.style.transform = `translateX(-${index * cardStep()}px)`;
  }

  move(false);

  next.onclick = () => {
    if (isAnimating) return;
    isAnimating = true;
    index++;
    move(true);
  };

  prev.onclick = () => {
    if (isAnimating) return;
    isAnimating = true;
    index--;
    move(true);
  };

  grid.addEventListener("transitionend", () => {
    if (index >= featured.length + VISIBLE) {
      index = VISIBLE;
      move(false);
    }

    if (index < VISIBLE) {
      index = featured.length + VISIBLE - 1;
      move(false);
    }

    isAnimating = false;
  });

  window.addEventListener("resize", () => move(false));
}
