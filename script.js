/* ====================================== */
/* DADOS DINÂMICOS */
/* ====================================== */

const tips = [
  {
    title: "💧 Reutilização",
    description: "Aproveite água da chuva para irrigação."
  },

  {
    title: "🌱 Sensores",
    description: "Sensores evitam desperdício de água."
  },

  {
    title: "☀️ Horário Ideal",
    description: "Irrigue pela manhã ou fim da tarde."
  }
];

const carouselImages = [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop"
];

/* ====================================== */
/* RENDERIZAÇÃO DAS DICAS */
/* ====================================== */

const tipsContainer = document.getElementById("tips-container");

tips.forEach((tip) => {
  const card = document.createElement("article");

  card.classList.add("tip-card");

  card.innerHTML = `
    <h3>${tip.title}</h3>
    <p>${tip.description}</p>
  `;

  tipsContainer.appendChild(card);
});

/* ====================================== */
/* CARROSSEL */
/* ====================================== */

const carouselTrack = document.getElementById("carousel-track");

carouselImages.forEach((image) => {
  const slide = document.createElement("div");

  slide.classList.add("carousel-slide");

  slide.innerHTML = `
    <img src="${image}" alt="Imagem sustentável">
  `;

  carouselTrack.appendChild(slide);
});

let currentSlide = 0;

const slides = document.querySelectorAll(".carousel-slide");

document.querySelector(".next").addEventListener("click", () => {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  updateCarousel();
});

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}

/* ====================================== */
/* ACORDEÃO */
/* ====================================== */

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

/* ====================================== */
/* QUIZ */
/* ====================================== */

const quiz = {
  question: "Qual prática ajuda a economizar água?",

  answers: [
    "Irrigar ao meio-dia",
    "Usar sensores inteligentes",
    "Desperdiçar água"
  ],

  correct: 1
};

document.getElementById("question").innerText = quiz.question;

const answersContainer = document.getElementById("answers");

quiz.answers.forEach((answer, index) => {
  const button = document.createElement("button");

  button.innerText = answer;

  button.addEventListener("click", () => {
    const result = document.getElementById("quiz-result");

    if (index === quiz.correct) {
      result.innerText = "✅ Resposta correta!";
    } else {
      result.innerText = "❌ Tente novamente.";
    }
  });

  answersContainer.appendChild(button);
});

/* ====================================== */
/* CALCULADORA */
/* ====================================== */

document.getElementById("calculate-btn").addEventListener("click", () => {
  const litros = Number(document.getElementById("litros").value);

  const economia = litros * 0.3;

  document.getElementById(
    "resultado-calculo"
  ).innerText = `Você pode economizar aproximadamente ${economia.toFixed(
    2
  )} litros por dia.`;
});

/* ====================================== */
/* ALTO CONTRASTE */
/* ====================================== */

document.getElementById("contrast-btn").addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

/* ====================================== */
/* TAMANHO DA FONTE */
/* ====================================== */

let fontSize = 100;

document.getElementById("increase-font").addEventListener("click", () => {
  fontSize += 10;

  document.body.style.fontSize = `${fontSize}%`;
});

document.getElementById("decrease-font").addEventListener("click", () => {
  fontSize -= 10;

  document.body.style.fontSize = `${fontSize}%`;
});

/* ====================================== */
/* SCROLL REVEAL */
/* ====================================== */

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;

    const revealTop = section.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
