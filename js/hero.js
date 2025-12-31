// js/hero.js
const slides = [
  {
    title: "PATINS AGGRESSIVE",
    subtitle: "Feitos para corrimãos, escadas e impacto real de rua.",
    image: "assets/images/street10.png",
    link: "/categories/patins-aggressive"
  },
  {
    title: "PATINS FREESTYLE",
    subtitle: "Controle, precisão e fluidez para quem domina o asfalto.",
    image: "assets/images/Fitness10.png",
    link: "/categories/patins-freestyle"
  },
  {
    title: "CAPACETES & PROTEÇÕES",
    subtitle: "Segurança sem perder estilo nem atitude.",
    image: "assets/images/capacete11.png",
    link: "/categories/capacetes-e-protetores"
  }
];

let currentSlide = 0;
const titleEl = document.getElementById("hero-title");
const subtitleEl = document.getElementById("hero-subtitle");
const imageEl = document.getElementById("hero-image");
const buttonEl = document.getElementById("hero-button");

if (!titleEl || !subtitleEl || !imageEl || !buttonEl) {
  console.error("Hero: elementos não encontrados no DOM");
}

function renderSlide() {
  const slide = slides[currentSlide];
  imageEl.style.opacity = "0";
  imageEl.style.transform = "translateY(16px) scale(0.97)";
  titleEl.style.opacity = "0";
  subtitleEl.style.opacity = "0";

  setTimeout(() => {
    titleEl.textContent = slide.title;
    subtitleEl.textContent = slide.subtitle;
    imageEl.src = slide.image;
    imageEl.alt = slide.title;
    buttonEl.href = slide.link;
    imageEl.style.opacity = "1";
    imageEl.style.transform = "translateY(0) scale(1)";
    titleEl.style.opacity = "1";
    subtitleEl.style.opacity = "1";
  }, 300);
}

renderSlide();
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  renderSlide();
}, 4000);