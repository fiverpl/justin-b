// AMBIL ELEMENT NAVBAR
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

// BUKA DAN TUTUP MENU
menuBtn.addEventListener("click", function() {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});

// TUTUP MENU KETIKA LINK DIKLIK
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});

// ANIMASI SAAT SCROLL
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(function(section) {
    observer.observe(section);
});

// TAHUN FOOTER
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        "© " + new Date().getFullYear() +
        " JUSTIN BIEBER PORTFOLIO";
}