// js/utils.js
function renderProductCard(product) {
  return `
    <a
      href="${product.link}"
      target="_blank"
      class="flex flex-col rounded-xl bg-[#0a0a0a]/60 border border-[#333]/40 p-3 hover:-translate-y-1 transition-all"
    >
      <div class="relative w-full mb-3 overflow-hidden" style="padding-top:135%">
        <img
          src="${product.image}"
          alt="${product.title}"
          class="absolute inset-0 w-full h-full object-fill"
        />
      </div>
      <h3 class="text-sm font-semibold text-[#e0e0e0] line-clamp-2">
        ${product.title}
      </h3>
      <p class="text-[#06F272] font-bold text-sm mt-2">
        ${product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>
    </a>
  `;
}