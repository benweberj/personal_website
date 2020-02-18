class Stream {
    constructor(x, charSize, minSpeed, maxSpeed, color, word=null) {
        this.x = x;
        this.chars = [];
        this.word = word;

        let speed = random(minSpeed, maxSpeed);
        let count = random(10, windowHeight / charSize / 2);
        let stagger = round(random(100, 1000));

        if (word === null) {     
            for (let i = 0; i < count; i++) {
                let head = i === 0 && random() < .5;
                let interval = round(random(50, 100));
                let glyph = new Glyph(this.x, -1 * charSize * i - stagger, charSize, speed, interval, head, color);
                this.chars.push(glyph);
            }
        } else {
            for (let i = 0; i < this.word.length; i++) {
                let head = i === 0 && random() < .5;
                let interval = round(random(50, 100));
                let glyph = new Glyph(this.x, -1 * charSize * i - stagger, charSize, speed, interval, head, color, this.word[i]);
                this.chars.push(glyph);
            }
        }
    }

    rain() {
        this.chars.forEach(glyph => glyph.rain());
    }    
}
