/* js/render.featured.js
function renderFeaturedProducts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const featured = PRODUCTS.filter(p => p.featured);

  if (featured.length === 0) return;

  const section = document.createElement("section");
  section.className = "max-w-[1400px] mx-auto px-4 py-10";
  section.innerHTML = `
    <div class="flex items-center gap-3 mb-6">
      <div class="w-1.5 h-7 bg-[#FF5E00]/60 rounded"></div>
      <h2 class="text-xl md:text-2xl font-extrabold text-white">Destaques</h2>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      ${featured.map(renderProductCard).join("")}
    </div>
  `;
  container.appendChild(section);
}

*/