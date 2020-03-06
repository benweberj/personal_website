class Star {
    constructor(color) {
        this.spawnStar();
        this.color = color;
    }

    move() {
        this.prev = this.pos.copy();
        this.path.mult(1.1);
        this.pos.add(this.path);
        this.age += .15;
 
        
        if (this.dead()) this.spawnStar();
    }

    show() {
        strokeWeight(this.age);
        stroke(this.color);
        line(this.prev.x, this.prev.y, this.pos.x, this.pos.y);
    }

    dead() {
        return this.pos.x > width + this.age || 
               this.pos.x < -this.age || 
               this.pos.y < -this.age || 
               this.pos.y > height + this.age;
    }

    spawnStar() {
        this.pos = createVector(random(width), random(height));
        this.prev = this.pos.copy();
        this.path = p5.Vector.sub(this.pos, createVector(mouseX, mouseY)).normalize();
        this.age = 0;
    }
}