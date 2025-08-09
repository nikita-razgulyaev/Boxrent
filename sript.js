// const slider = document.querySelector(".slider");
// let currentTranslate = 0;
// const slideHeight = 600; // Height of each slide
// const totalSlides = 5; // Number of unique slides
// const cloneThreshold = 200; // Distance from the end to start cloning (in pixels)

// // Initial cloning of slides
// const originalSlides = slider.querySelectorAll(".slide");
// for (let i = 0; i < totalSlides; i++) {
//   const clone = originalSlides[i].cloneNode(true);
//   slider.appendChild(clone);
// }

// function setSliderPosition() {
//   slider.style.transform = `translateY(${currentTranslate}px)`;

//   const sliderHeight = slider.offsetHeight;
//   const frameHeight = slider.parentElement.offsetHeight;
//   const minTranslate = -sliderHeight + frameHeight;

//   // Check if we need to clone more slides
//   if (currentTranslate <= minTranslate + cloneThreshold) {
//     for (let i = 0; i < totalSlides; i++) {
//       const clone = originalSlides[i].cloneNode(true);
//       slider.appendChild(clone);
//     }
//   }

//   // Adjust translate to prevent jumping beyond the new content
//   if (currentTranslate < minTranslate) {
//     currentTranslate = minTranslate; // Keep within bounds
//   }
// }

// // Auto-scroll logic (downward only)
// const scrollSpeed = 1; // Adjust this value to change scroll speed (pixels per frame)
// function autoScroll() {
//   currentTranslate -= scrollSpeed; // Only scroll downward
//   setSliderPosition();
// }

// // Start auto-scrolling (e.g., every 16ms for ~60 FPS)
// setInterval(autoScroll, 16);
