// Image Swap
function swapImage(element, newImgSrc) {
    const oldImg = element.querySelector('img');
    if (oldImg) oldImg.src = newImgSrc;
}

// Navbar and Sidebar
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".navbar")?.classList.add("fade-in");
        document.querySelector(".sidebar")?.classList.add("fade-in");
    }, 1000);

    const toggleButton = document.querySelector(".menu");
    const closeButton = document.querySelector(".close-sidebar");
    const sidebar = document.querySelector(".sidebar");

    if (toggleButton && sidebar) {
        toggleButton.addEventListener("click", () => sidebar.classList.toggle("active"));
    }

    if (closeButton && sidebar) {
        closeButton.addEventListener("click", () => sidebar.classList.remove("active"));
    }

    document.addEventListener("click", (e) => {
        if (sidebar && !sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
            sidebar.classList.remove("active");
        }
    });

    // JavaScript to remove 'active' class when window width > 600px
    window.addEventListener("resize", () => {
        if (window.innerWidth > 600 && sidebar) {
            sidebar.classList.remove("active");
        }
    });
});
