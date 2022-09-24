const ACTIVE_CLASS = 'nav__hamburger--active';
let hamburger = document.querySelector('.nav__hamburger');
let navigationList = document.querySelectorAll('.nav__list');

// Init
hamburger.classList.remove(ACTIVE_CLASS);
navigationList.forEach(element => {
  element.style.display = "none";
});


hamburger.addEventListener('click', () => {
  
  if (hamburger.classList.contains(ACTIVE_CLASS)) {
    hamburger.classList.remove(ACTIVE_CLASS);
    navigationList.forEach(element => {
      element.style.display = "none";
    });
  }  else {
    hamburger.classList.add(ACTIVE_CLASS);
    navigationList.forEach(element => {
      element.style.display = "flex";
    });
  };
});