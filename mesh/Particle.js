class Particle {
    constructor(maxSpeed, min, max) {
        this.min = min;
        this.max = max;
        this.respawn();
        this.pos = createVector(random(-100, width+100), random(-100, height+100));
        this.maxSpeed = maxSpeed;
    }

    move() {
        this.pos.add(this.vel);
        this.checkPos();
    }

    draw() {
        strokeWeight(this.size);
        stroke(255);
        point(this.pos.x, this.pos.y);
    }

    applyForce(force) {
        let dist = force.mag();
        let strength = .3 / Math.pow(dist, 2);
        strength = constrain(strength, 0, this.maxSpeed / 10000);
        force.setMag(strength);
        this.vel.add(force);
    }

    checkPos() {
        let x = this.pos.x;
        let y = this.pos.y;
        let s = 100;

        if ((x < 0 - s) ||
           (x > width + s) ||
           (y < 0 - s) ||
           (y > height + s)) {

            this.respawn();
        }
    }

    respawn() {
        let rate = random(.2, .4);
        this.pos = createVector(random(-100, width + 100), -100);
        this.vel = createVector(random(-rate, rate), random(-rate + rate, rate));
        this.size = random(this.min, this.max);
    }
}