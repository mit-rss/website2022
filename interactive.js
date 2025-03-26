const title = document.getElementById('home');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set initial canvas size
function setCanvasSize() {
    canvas.width = title.offsetWidth;
    canvas.height = title.offsetHeight;
}
setCanvasSize();

const shapes = [];
const img = new Image();
img.src = 'img/ruby.png'; // Set PNG image path

img.onload = () => {
    for (let i = 0; i < 5; i++) {
        shapes.push(new Shape(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            canvas.width / 25 + Math.random() * 30
        ));
    }
    animate();
};

class Shape {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = { x: Math.random() * 6 - 3, y: Math.random() * 6 - 3 };
        this.blur = 5;
        this.friction = 0.98;
        this.rotation = Math.random() * Math.PI * 2;
        this.angularVelocity = Math.random() * 0.1;
        this.angularFriction = 0.98;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.filter = `blur(${this.blur}px)`;
        ctx.drawImage(img, -this.radius, -this.radius, this.radius * 2, this.radius * 2);
        ctx.restore();
    }

    move() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
        this.rotation += this.angularVelocity;
        this.angularVelocity *= this.angularFriction;
        this.handleBoundaries();
    }

    handleBoundaries() {
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
            this.velocity.x *= -1;
            this.x = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x));
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
            this.velocity.y *= -1;
            this.y = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y));
        }
    }

    interact(cursorX, cursorY) {
        const dist = Math.hypot(cursorX - this.x, cursorY - this.y);
        const threshold = 150;
        if (dist < threshold) {
            const angle = Math.atan2(cursorY - this.y, cursorX - this.x);
            const force = (threshold - dist) / threshold;
            this.velocity.x -= Math.cos(angle) * force;
            this.velocity.y -= Math.sin(angle) * force;
            this.angularVelocity += (Math.random() - 0.5) * 0.01;
        }
    }
}

let cursorX = -100, cursorY = -100;
title.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    cursorX = e.clientX - rect.left;
    cursorY = e.clientY - rect.top;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach(shape => {
        shape.move();
        shape.interact(cursorX, cursorY);
        shape.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    const newWidth = title.offsetWidth;
    const newHeight = title.offsetHeight;
    const widthRatio = newWidth / canvas.width;
    const heightRatio = newHeight / canvas.height;
    shapes.forEach(shape => {
        shape.x *= widthRatio;
        shape.y *= heightRatio;
    });
    setCanvasSize();
});
