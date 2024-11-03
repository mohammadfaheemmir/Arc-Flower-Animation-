const container = document.querySelector('.circle-container');

// Rotation angles and translation distances
const transformations = [
    { angle: 30, distance: 80 },
    { angle: 60, distance: 80 },
    { angle: 90, distance: 80 },
    { angle: 120, distance: 80 },
    { angle: 150, distance: 80 },
    { angle: 180, distance: 80 },
    { angle: 210, distance: 80 },
    { angle: 240, distance: 80 },
    { angle: 270, distance: 80 },
    { angle: 300, distance: 80 },
    { angle: 330, distance: 80 },
    { angle: 360, distance: 80 },
    { angle: 16.36, distance: 180 },
    { angle: 32.73, distance: 180 },
    { angle: 49.09, distance: 180 },
    { angle: 65.45, distance: 180 },
    { angle: 81.82, distance: 180 },
    { angle: 98.18, distance: 180 },
    { angle: 114.55, distance: 180 },
    { angle: 130.91, distance: 180 },
    { angle: 147.27, distance: 180 },
    { angle: 163.64, distance: 180 },
    { angle: 180, distance: 180 },
    { angle: 196.36, distance: 180 },
    { angle: 212.73, distance: 180 },
    { angle: 229.09, distance: 180 },
    { angle: 245.45, distance: 180 },
    { angle: 261.82, distance: 180 },
    { angle: 278.18, distance: 180 },
    { angle: 294.55, distance: 180 },
    { angle: 310.91, distance: 180 },
    { angle: 327.27, distance: 180 },
    { angle: 343.64, distance: 180 },
    { angle: 360, distance: 180 },
    { angle: 11.25, distance: 280 },
    { angle: 22.5, distance: 280 },
    { angle: 33.75, distance: 280 },
    { angle: 45, distance: 280 },
    { angle: 56.25, distance: 280 },
    { angle: 67.5, distance: 280 },
    { angle: 78.75, distance: 280 },
    { angle: 90, distance: 280 },
    { angle: 101.25, distance: 280 },
    { angle: 112.5, distance: 280 },
    { angle: 123.75, distance: 280 },
    { angle: 135, distance: 280 },
    { angle: 146.25, distance: 280 },
    { angle: 157.5, distance: 280 },
    { angle: 168.75, distance: 280 },
    { angle: 180, distance: 280 },
    { angle: 191.25, distance: 280 },
    { angle: 202.5, distance: 280 },
    { angle: 213.75, distance: 280 },
    { angle: 225, distance: 280 },
    { angle: 236.25, distance: 280 },
    { angle: 247.5, distance: 280 },
    { angle: 258.75, distance: 280 },
    { angle: 270, distance: 280 },
    { angle: 281.25, distance: 280 },
    { angle: 292.5, distance: 280 },
    { angle: 303.75, distance: 280 },
    { angle: 315, distance: 280 },
    { angle: 326.25, distance: 280 },
    { angle: 337.5, distance: 280 },
    { angle: 348.75, distance: 280 },
    { angle: 360, distance: 280 }
];


transformations.forEach((transform) => {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    const arc = document.createElement('div');
    arc.classList.add('arc');
    circle.appendChild(arc);

    circle.style.transform = `rotate(${transform.angle}deg) translate(${transform.distance}px)`;

    container.appendChild(circle);
});