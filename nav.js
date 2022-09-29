const ACTIVE_CLASS = "nav__hamburger--active";
let hamburger = document.querySelector(".nav__hamburger");
let navigationList = document.querySelectorAll("header .nav__list");

// Init
if (window.screen.height <= 700) {
  hamburger.classList.remove(ACTIVE_CLASS);
  navigationList.forEach((element) => {
    element.style.display = "none";
  });
}

const handleResize = () => {
  if (hamburger.classList.contains(ACTIVE_CLASS)) {
    hamburger.classList.remove(ACTIVE_CLASS);
    navigationList.forEach((element) => {
      element.style.display = "none";
    });
  } else {
    hamburger.classList.add(ACTIVE_CLASS);
    navigationList.forEach((element) => {
      element.style.display = "flex";
    });
  }
};

hamburger.addEventListener("click", handleResize);
window.addEventListener("resize", handleResize);
