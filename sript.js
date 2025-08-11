const sections = {
  aboutUs: "aboutUs",
  whyWe: "whyWe",
  workSteps: "workSteps",
  investment: "investment",
  contacts: "contacts",
  feedback: "feedback",
};

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: sectionPosition, behavior: "smooth" });
  }
}

function scrollToAboutUs() {
  scrollToSection(sections.aboutUs);
}

function scrollToWhyWe() {
  scrollToSection(sections.whyWe);
}

function scrollToWorkSteps() {
  scrollToSection(sections.workSteps);
}

function scrollToInvestment() {
  scrollToSection(sections.investment);
}

function scrollToContacts() {
  scrollToSection(sections.contacts);
}

function scrollToFeedback() {
  scrollToSection(sections.feedback);
}

const investmentProgress = document.getElementById("investmentProgressBar");
const containerProgress = document.getElementById("containerProgressBar");
const incomeProgress = document.getElementById("incomeProgressBar");

const investmentValue = document.getElementById("investmentValue");
const containerValue = document.getElementById("containerValue");
const incomeValue = document.getElementById("incomeValue");
const monthlyIncome = document.getElementById("monthlyIncome");
const annualIncome = document.getElementById("annualIncome");

const investmentToContainer = {
  8000: 2,
  12000: 3,
  16000: 4,
  20000: 5,
  24000: 6,
  28000: 7,
  32000: 8,
  36000: 9,
  40000: 10,
};

const investmentToIncome = {
  8000: 10.5,
  12000: 10.5,
  16000: 11,
  20000: 11,
  24000: 11.5,
  28000: 11.5,
  32000: 11.5,
  36000: 11.5,
  40000: 12,
};

const containerToInvestment = {
  2: 8000,
  3: 12000,
  4: 16000,
  5: 20000,
  6: 24000,
  7: 28000,
  8: 32000,
  9: 36000,
  10: 40000,
};

const incomeToInvestment = {
  10.5: 8000,
  11: 16000,
  11.5: 24000,
  12: 40000,
};

function calculateMonthlyIncome(investment, annualPercent) {
  return Math.round((investment * annualPercent) / 100 / 12);
}

function calculateAnnualIncome(investment, annualPercent) {
  return Math.round((investment * annualPercent) / 100);
}

function updateIncomeCalculations() {
  const investment = parseFloat(investmentProgress.value) || 0;
  const annualPercent = parseFloat(incomeProgress.value) || 0;

  if (investment > 0 && annualPercent > 0) {
    const monthly = calculateMonthlyIncome(investment, annualPercent);
    const annual = calculateAnnualIncome(investment, annualPercent);

    monthlyIncome.textContent = `${monthly} €`;
    annualIncome.textContent = `${annual} €`;
  } else {
    monthlyIncome.textContent = "0 €";
    annualIncome.textContent = "0 €";
  }
}

function calcUpdate() {
  const value = parseFloat(investmentProgress.value);

  if (investmentToContainer[value] !== undefined) {
    containerProgress.value = investmentToContainer[value];
    containerValue.textContent = investmentToContainer[value] + " конт.";
  } else {
    containerProgress.value = "";
    containerValue.textContent = "0 конт.";
  }

  if (investmentToIncome[value] !== undefined) {
    incomeProgress.value = investmentToIncome[value];
    incomeValue.textContent = investmentToIncome[value] + " %";
  } else {
    incomeProgress.value = "";
    incomeValue.textContent = "0 %";
  }

  updateIncomeCalculations();
}

investmentProgress.addEventListener("input", () => {
  const value = investmentProgress.value;
  investmentValue.textContent = value ? value + " €" : "0 €";
  calcUpdate();
});

containerProgress.addEventListener("input", () => {
  const value = containerProgress.value;
  containerValue.textContent = value ? value + " конт." : "0 конт.";

  if (containerToInvestment[value]) {
    investmentProgress.value = containerToInvestment[value];
    investmentValue.textContent = containerToInvestment[value] + " €";
    calcUpdate();
  }
});

incomeProgress.addEventListener("input", () => {
  const value = parseFloat(incomeProgress.value);
  incomeValue.textContent = value ? value + " %" : "0 %";

  if (incomeToInvestment[value] !== undefined) {
    const invValue = incomeToInvestment[value];
    investmentProgress.value = invValue;
    investmentValue.textContent = invValue + " €";
    calcUpdate();
  }
});

calcUpdate();

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".advantages__slider");
  const slides = document.querySelectorAll(".advantages__slide");
  const slideHeight = slides[0].offsetHeight;
  const totalSlides = slides.length;
  let currentPosition = 0;
  let animationId;

  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });

  function animateSlider() {
    currentPosition -= 1;

    if (currentPosition <= -slideHeight * totalSlides) {
      currentPosition = 0;
    }

    slider.style.transform = `translateY(${currentPosition}px)`;
    animationId = requestAnimationFrame(animateSlider);
  }

  animateSlider();

  slider.addEventListener("mouseenter", function () {
    cancelAnimationFrame(animationId);
  });

  slider.addEventListener("mouseleave", function () {
    animationId = requestAnimationFrame(animateSlider);
  });
});

const points = [
  { className: "scheme__point--1", popupClass: "scheme__point-popup--1" },
  { className: "scheme__point--2", popupClass: "scheme__point-popup--2" },
  { className: "scheme__point--3", popupClass: "scheme__point-popup--3" },
  { className: "scheme__point--4", popupClass: "scheme__point-popup--4" },
  { className: "scheme__point--5", popupClass: "scheme__point-popup--5" },
  { className: "scheme__point--6", popupClass: "scheme__point-popup--6" },
];

points.forEach((point) => {
  const pointElement = document.querySelector(`.${point.className}`);
  if (pointElement) {
    pointElement.addEventListener("mouseover", () => {
      const popup = document.querySelector(`.${point.popupClass}`);
      if (popup) {
        popup.style.opacity = "1";
        popup.style.zIndex = "3";
      }
    });
    pointElement.addEventListener("mouseout", () => {
      const popup = document.querySelector(`.${point.popupClass}`);
      if (popup) {
        popup.style.opacity = "0";
        popup.style.zIndex = "1";
      }
    });
  }
});

const diagram = document.querySelector(".growth-statistics__diagram");

function isElementInViewport(el) {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  return (
    top >= 0 &&
    left >= 0 &&
    bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  if (isElementInViewport(diagram)) {
    diagram.classList.add("active");
  }
}

window.addEventListener("scroll", handleScroll);
