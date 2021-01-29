const hamburger = document.querySelector("#hamburger");
const openMenu = document.querySelector(".bx-menu");
const closeMenu = document.querySelector(".bx-x");
const navMenu = document.querySelector("#nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", linkHandle));

function mobileMenu() {
    navMenu.classList.toggle("active");
    openMenu.classList.toggle("hidden");
    closeMenu.classList.toggle("active");
}

function linkHandle() {
    navMenu.classList.remove("active");
    closeMenu.classList.remove("active");
    openMenu.classList.remove("hidden");
}



