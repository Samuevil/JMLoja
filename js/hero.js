
document.addEventListener("DOMContentLoaded", () => {
  if (new URLSearchParams(window.location.search).has("category")) {
    const hero = document.getElementById("hero");
    if (hero) hero.style.display = "none";
    return;
  }

  const basePath = window.location.pathname.includes('/JMLoja/') ? '/JMLoja' : '';

  const slides = [
    {
      title: "PATINS STREET AGGRESSIVE",
      subtitle: "Domine corrimãos, escadarias e concreto. Patins feitos para quem transforma a cidade em playground.",
      image: "assets/images/street10.png",
      link: basePath + "/?category=patins-completos-street"
    },
    {
      title: "FITNESS PRA QUEM NÃO PARA",
      subtitle: "Deslize por quilômetros com conforto, estabilidade e estilo. O seu corpo agradece — a cidade inteira é sua pista.",
      image: "assets/images/Fitness10.png",
      link: basePath + "/?category=patins-completos-fitness"
    },
    {
      title: "PROTEÇÃO COM ATITUDE",
      subtitle: "Capacetes e protetores que não escondem seu estilo — só garantem que você continue mandando bem amanhã.",
      image: "assets/images/capacete11.png",
      link: basePath + "/?category=capacetes-e-protetores"
    }
  ];

  const titleEl = document.getElementById("hero-title");
  const subtitleEl = document.getElementById("hero-subtitle");
  const imageEl = document.getElementById("hero-image");
  const buttonEl = document.getElementById("hero-button");
  const contentEl = document.querySelector(".hero-content");

  if (!titleEl || !subtitleEl || !imageEl || !buttonEl || !contentEl) {
    console.error("❌ Hero: elementos não encontrados no DOM.");
    return;
  }

  slides.forEach(s => {
    const img = new Image();
    img.src = s.image;
  });

  let current = 0;
  let isAnimating = false;


  function showSlide(index) {
    const slide = slides[index];
    titleEl.textContent = slide.title;
    subtitleEl.textContent = slide.subtitle;
    imageEl.src = slide.image;
    imageEl.alt = slide.title;
    buttonEl.href = slide.link;
  }

  function nextSlide() {
    if (isAnimating) return;
    isAnimating = true;

    contentEl.classList.add("slide-out");

    setTimeout(() => {

      current = (current + 1) % slides.length;
      showSlide(current);

      contentEl.classList.remove("slide-out");
      contentEl.classList.add("slide-in");

      setTimeout(() => {
        contentEl.classList.remove("slide-in");
        isAnimating = false;
      }, 600);
    }, 600);
  }

  showSlide(0);

  setInterval(nextSlide, 4000);
});