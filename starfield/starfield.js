let starfield = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    for (let i = 0; i < 50; i++) {
        let r = random(150, 255);
        let g = random(150, 255);
        let b = random(150, 255);

        starfield.push(new Star([r, g, b]));
    }
}

function draw() {
    background(0, 100);
    starfield.forEach(star => {
        star.move();
        star.show();
    });
}


function mouseClicked() {
    for (let i = 0; i < 100; i++) {
        let r = random(150, 255);
        let g = random(150, 255);
        let b = random(150, 255);

        starfield.push(new Star([r, g, b]));
    }
}
