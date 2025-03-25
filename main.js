// Image swap //
function swapImage(element, newImgSrc) {
    old_img = element.querySelector('img')
    old_img.src = newImgSrc
}
////

// Navbar and sidebar
window.onload = function() {
    setTimeout(() => {
        document.querySelector(".navbar").classList.add("fade-in");
        document.querySelector(".sidebar").classList.add("fade-in");
    }, 1000);
};

const toggleButton = document.querySelector(".menu");
const closeButton = document.querySelector(".close-sidebar")
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// Close the menu when the close button is clicked
closeButton.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// Close the menu if the click is outside the menu and navbar
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
        sidebar.classList.remove("active");
    }
});

// Prevent clicks inside the menu or toggle button from closing the menu
sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
});

// JavaScript to remove 'active' class when the window gets wider than 600px
window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        sidebar.classList.remove('active');
    }
});
////
