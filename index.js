let hamburgerIcon = document.getElementById("hamburger");
let navBar = document.getElementById("nav-bar");
let navLink = navBar.querySelectorAll("li");

hamburgerIcon.addEventListener("click", (), => {
    navBar.classList.toggle("active");
})