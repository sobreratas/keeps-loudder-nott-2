const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
});

// Handle dropdowns on mobile
document.querySelectorAll(".navbar ul > li > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const parentLi = e.target.parentElement;
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent link from navigating
      parentLi.classList.toggle("active");
    }
  });
});

//FOOTER COPYRIGHT TEXT
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();

year.innerHTML = currentYear;ƒ