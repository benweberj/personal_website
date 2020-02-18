class Glyph {
    constructor(x, y, charSize, speed, interval, head, color, letter=null) {
        this.x = x;
        this.y = y;
        this.charSize = charSize;
        this.speed = speed;
        this.interval = interval;
        this.head = head;
        this.color = color;
        this.letter = letter;

        this.letter === null ? this.setChar() : this.char = letter;
    }

    setChar() {
        if (this.letter) {
            random() < .5 ? this.char = this.char.toUpperCase() : this.char = this.char.toLowerCase();
        } else {
            let ch = random(0, 90);
            this.char = String.fromCharCode(0x30A0 + ch);
         }
    }

    draw() {
        this.head ? fill(220, 255, 220) : fill(color);
        textSize(charSize);
        text(this.char, this.x, this.y);
    }

    rain() {
        if (this.y >= height) this.y = 0;
        this.y += this.speed;
        if (round(this.y % this.interval) === 0) this.setChar();
        this.draw();
    }
}