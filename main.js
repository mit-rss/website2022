// Image swap //
function swapImage(element, newImgSrc) {
    old_img = element.querySelector('img')
    old_img.src = newImgSrc
}
////

// Interative Title //
const title = document.getElementById('home');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to fit the container
canvas.width = title.offsetWidth;
canvas.height = title.offsetHeight;

const shapes = [];
const img = new Image();
img.src = 'img/ruby.png'; // Set your PNG image path here

// Ensure image is loaded before drawing
img.onload = () => {
    // Create shapes
    for (let i = 0; i < 5; i++) {
        shapes.push(new Shape(Math.random() * canvas.width, Math.random() * canvas.height, canvas.width/25 + Math.random() * 30));
    }
    animate();
}

function resizeCanvas() {
    // Get the new size of the header container
    const newWidth = title.offsetWidth;
    const newHeight = title.offsetHeight;

    // Scale the positions of existing shapes
    const widthRatio = newWidth / canvas.width;
    const heightRatio = newHeight / canvas.height;

    shapes.forEach(shape => {
        shape.x *= widthRatio;
        shape.y *= heightRatio;
    });

    // Update canvas size
    canvas.width = newWidth;
    canvas.height = newHeight;
}

// Shape object constructor
class Shape {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = { x: Math.random() * 10 - 1, y: Math.random() * 10 - 1 };
        this.blur = 5; // Blur level
        this.friction = 0.98;
        this.rotation = Math.random() * 2 * Math.PI;
        this.angularVelocity = Math.random() * 0.1; // Rotation speed (starts at zero)
        this.angularFriction = 0.98; // Friction to slow down rotation over time
    }

    // Draw the PNG image with random rotation
    draw() {
        ctx.save(); // Save the current context state
        ctx.translate(this.x, this.y); // Move the origin to the center of the shape
        ctx.rotate(this.rotation); // Apply random rotation

        // Apply blur effect to the image
        ctx.filter = `blur(${this.blur}px)`;
        ctx.drawImage(img, -this.radius, -this.radius, this.radius * 2, this.radius * 2); // Draw image with rotation
        ctx.restore(); // Restore the context to its original state
    }

    // Move the shape
    move() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Apply friction to decelerate the shape
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;

        // Update rotation and apply friction to slow it down over time
        this.rotation += this.angularVelocity;
        this.angularVelocity *= this.angularFriction; // Decay angular velocity

        // Prevent the image from being squeezed off the canvas by checking boundaries
        if (this.x - this.radius < 0) { // Left edge
            this.x = this.radius;  // Position it at the edge
            this.velocity.x = -this.velocity.x; // Reverse velocity
        }
        if (this.x + this.radius > canvas.width) { // Right edge
            this.x = canvas.width - this.radius;
            this.velocity.x = -this.velocity.x;
        }
        if (this.y - this.radius < 0) { // Top edge
            this.y = this.radius;
            this.velocity.y = -this.velocity.y;
        }
        if (this.y + this.radius > canvas.height) { // Bottom edge
            this.y = canvas.height - this.radius;
            this.velocity.y = -this.velocity.y;
        }
    }

    // Check collision with the cursor
    interact(cursorX, cursorY) {
        const dist = Math.hypot(cursorX - this.x, cursorY - this.y) - this.radius;
        const threshold = 150
        if (dist < threshold) { // If cursor is close enough
            const angle = Math.atan2(cursorY - this.y, cursorX - this.x);
            const force = (threshold - dist) / threshold;
            this.velocity.x -= Math.cos(angle) * force;
            this.velocity.y -= Math.sin(angle) * force;

            const torque = (Math.random() - 0.5) * 0.01; // Random torque effect
            this.angularVelocity += torque; // Add torque to rotation speed
        }
    }
}

let cursorX = -100, cursorY = -100;

// Update mouse position
title.addEventListener('mousemove', (e) => {
    cursorX = e.offsetX; // Get the mouse position relative to the container
    cursorY = e.offsetY;
});

// Main animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Update and draw each shape
    shapes.forEach(shape => {
        shape.move();
        shape.interact(cursorX, cursorY);
        shape.draw();
    });

    requestAnimationFrame(animate);
}

// Listen for window resize
window.addEventListener('resize', resizeCanvas);
////

// Toggle between showing and hiding the sidebar when clicking the menu icon //
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

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
