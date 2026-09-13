function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", function () {
    const button = document.getElementById("backToTop");

    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById("themeToggle");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }
}