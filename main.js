function swapImage(element, newImgSrc) {
    img = element.querySelector('img')
    img.src = newImgSrc
}

function setTitle() {
    const navbar = document.getElementById('myNavbar');
    const navHeight = navbar.offsetHeight;

    const titleImg = document.querySelector('.title_img');
    const backgroundHeight = titleImg.offsetHeight;

    const h1Offset = (backgroundHeight - navHeight) / 2 + navHeight - 20;
    const pOffset = (backgroundHeight - navHeight) + 0;

    const titleH1 = titleImg.querySelector('h1');
    titleH1.style.top = `${h1Offset}px`;

    // const titleP = titleImg.querySelector('p');
    // titleP.style.top = `${pOffset}px`;
}

document.addEventListener('DOMContentLoaded', setTitle);
window.addEventListener('resize', setTitle);
