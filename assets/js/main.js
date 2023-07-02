// text animation
const typed = new Typed("#typing-animation", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  loopCount: Infinity,
});

// nav control
const nav = document.querySelector("nav");
const aboutSection = document.querySelector(".about");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50 && window.scrollY < aboutSection.offsetTop) {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
  if (window.scrollY > aboutSection.offsetTop) {
    nav.classList.add("colored");
  } else {
    nav.classList.remove("colored");
  }
});

// testimonials count dynamics
const testimonialsSection = document.querySelector(".testimonials");
const numbers = document.querySelectorAll(".count-num");
let started = false;
console.log(testimonialsSection, numbers);

window.addEventListener("scroll", () => {
  if (window.scrollY + "100" >= testimonialsSection.offsetTop) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(num) {
  const goal = num.dataset.goal;
  console.log(goal);
  const count = setInterval(() => {
    num.textContent++;
    if (num.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
