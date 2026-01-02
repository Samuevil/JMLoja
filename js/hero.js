// js/hero.js

document.addEventListener("DOMContentLoaded", () => {
  if (new URLSearchParams(window.location.search).has("category")) {
    const hero = document.getElementById("hero");
    if (hero) hero.style.display = "none";
    return;
  }

  const slides = [
    {
      title: "PATINS STREET AGGRESSIVE",
      subtitle: "Domine corrimãos, escadarias e concreto. Patins feitos para quem transforma a cidade em playground.",
      image: "assets/images/street10.png",
      link: "/?category=patins-completos-street"
    },
    {
      title: "FITNESS PRA QUEM NÃO PARA",
      subtitle: "Deslize por quilômetros com conforto, estabilidade e estilo. O seu corpo agradece — a cidade inteira é sua pista.",
      image: "assets/images/Fitness10.png",
      link: "/?category=patins-completos-fitness"
    },
    {
      title: "PROTEÇÃO COM ATITUDE",
      subtitle: "Capacetes e protetores que não escondem seu estilo — só garantem que você continue mandando bem amanhã.",
      image: "assets/images/capacete11.png",
      link: "/?category=capacetes-e-protetores"
    }
  ];

  // Elementos reais (mantêm seu estilo do CSS)
  const titleEl = document.getElementById("hero-title");
  const subtitleEl = document.getElementById("hero-subtitle");
  const imageEl = document.getElementById("hero-image");
  const buttonEl = document.getElementById("hero-button");
  const contentEl = document.querySelector(".hero-content"); // ← anima este

  if (!titleEl || !subtitleEl || !imageEl || !buttonEl || !contentEl) {
    console.error("Hero: elementos não encontrados");
    return;
  }

  slides.forEach(s => new Image().src = s.image);

  let current = 0;
  let isAnimating = false;

  function nextSlide() {
    if (isAnimating) return;
    isAnimating = true;

    // 1. ANIMAÇÃO DE SAÍDA: todo o bloco sai para a esquerda
    contentEl.classList.add("slide-out");

    setTimeout(() => {
      // 2. Atualiza só o conteúdo (sem tocar no HTML)
      const slide = slides[current];
      titleEl.textContent = slide.title;
      subtitleEl.textContent = slide.subtitle;
      imageEl.src = slide.image;
      imageEl.alt = slide.title;
      buttonEl.href = slide.link;

      // 3. Remove saída, aplica entrada
      contentEl.classList.remove("slide-out");
      contentEl.classList.add("slide-in");

      setTimeout(() => {
        contentEl.classList.remove("slide-in");
        isAnimating = false;
        current = (current + 1) % slides.length;
      }, 600);
    }, 600);
  }

  // Primeiro slide (sem animação)
  titleEl.textContent = slides[0].title;
  subtitleEl.textContent = slides[0].subtitle;
  imageEl.src = slides[0].image;
  imageEl.alt = slides[0].title;
  buttonEl.href = slides[0].link;

  // Loop
  setInterval(nextSlide, 4000);
});