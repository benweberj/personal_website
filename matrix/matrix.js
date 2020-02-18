let canvas;
let streams;
let charSize;
let minSpeed;
let maxSpeed;
let katakana;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', -1);
    background(0);

    $('#controls-toggle').click(() => {
        $('#controls').slideToggle();
        $('#controls-toggle').slideToggle();
    });

    $('input[name="run-button"]').click(buildStreams);

    buildStreams();
}

function buildStreams() {
    if (frameCount > 1) {
        $('#controls').slideToggle();
        $('#controls-toggle').slideToggle();
    }

    streams = [];
    charSize = int($('input[name="char-size"]').val());
    minSpeed = int($('input[name="min-speed"]').val());
    maxSpeed = int($('input[name="max-speed"]').val());
    color = $('input[name="color"]').val();
    katakana = $('input[name="char-type"]:checked').val() === 'matrix';

    if (!katakana) {
        let dict;
        $.get('dict.txt', words => dict = words.split('\n'))
            .then(() => {
                for (let x = 0; x < width; x += charSize) {
                    let randWord = dict[round(random(dict.length-1))].toUpperCase();
                    streams.push(new Stream(x, charSize, minSpeed, maxSpeed, color, randWord));
                }
            });
    } else {
        for (let x = 0; x < width; x += charSize) {
            streams.push(new Stream(x, charSize, minSpeed, maxSpeed, color));
        }
    }
}

function draw() {
    background(0, 100);
    streams.forEach(stream => stream.rain());
}

function windowResized() {
    canvas = resizeCanvas(windowWidth, windowHeight);
}