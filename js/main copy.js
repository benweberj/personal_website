(function() {
    'use strict';

    let real;
    let vector;
    let description;

    $(document).ready(() => {
        real = $('#real');
        vector = $('#vector');

        $('#me').click(() => {
            $(this).css('animation', 'pulse .5s ease');
        })

        // positions vector pic on top of real pic
        vector.css('position', 'absolute');
        vector.css({ top: 50, left: $(window).width() / 2 - vector.width() / 2 });

        vector.click(() => {
            vector.css('opacity', 0);
            real.css('opacity', 1);
            setTimeout(() => {
                vector.css('display', 'none');
                real.css('display', 'block');
            }, 500);
        });

        // hides the real pic and shows the vector pic
        real.click(() => {
            vector.css('display', 'block');
            setTimeout(() => { vector.css('opacity', 1) }, 0);
        });

        centerDescriptions();

        $('.entry').hover(function() {
            $(this).children('img').css('filter', 'brightness(.5)');
            let d = $(this).children('.description');
            d.children('p').css('opacity', 1);
            d.children('p').css('height', '100%');
            centerDescriptions();
        });

        $('.entry').mouseleave(function () {
            $(this).children('img').css({ 'filter': 'brightness(1)', 'transform': 'scale(1.5)'});
            let d = $(this).children('.description');
            d.children('p').css('height', 0);
            d.children('p').css('opacity', 0);
            centerDescriptions();
        });

        $('#social img').hover(function() {
            $('#platform').text(this.getAttribute('data-platform'));
            $('#platform').css('opacity', 1);
        });

        $('#social').mouseleave(function() {
            $('#platform').css('opacity', 0);
        });
    });

    window.onresize = () => {
        centerDescriptions();
        vector.css({ top: 50, left: $(window).width() / 2 - vector.width() / 2 });
    }

    function centerDescriptions() {
        let descriptions = $('.description');
        descriptions.each(function() {
            let prevH = this.previousElementSibling.offsetHeight;
            let thisH = this.offsetHeight;
            this.style.marginTop = `${(prevH - thisH) / 2}px`;
        });
    }
})();