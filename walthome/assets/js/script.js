'use strict';

/**
 * navbar toogle in mobile
 */

const /**{NodeElemnt} */ $navbar = document.querySelector("[data-navbar]");
const /**{NodeElemnt} */ $navToggler = document.querySelector("[data-nav-toggler]");
$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));


/**
 *  Header
 */

const /** NodeElemnt */ $header = document.querySelector("[data-header]");
window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});