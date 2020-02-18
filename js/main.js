(function() {
    'use strict';

    let xs = 575;
    let sm = 767;
    let md = 991;
    let lg = 1200;

    let green = '#60b389';
    let orange = '#ef8354';
    let blue = '#3189c4';
    let red = '#a85751';

    $(document).ready(init);

    function init() {
        $('.navbar-toggler').click(function () {
            $('.navbar').toggleClass('pulse');
        });


        // $('.alert').click(function () {
        //     $(this).addClass('pulse');
        // });

        let i = 0;
        $('.image-wrap').each(function() {
            let translation = 30;
            let w = $(window).width();
            translation *= w / 1500;

            if (i % 2 === 1) {
                translation *= -1;
            }
            translation = `${translation}px`;
            
            $(this).mouseover(function() {
                $(this).next().css('transform', `translateX(${translation}) scale(1.05)`);
            });
            $(this).mouseout(function () {
                $(this).next().css('transform', 'translateX(0px) scale(1.0)');
            });
            i++;
        });

        $('#social img').hover(function () {
            $('#platform').text(this.getAttribute('data-platform'));
            $('#platform').css('opacity', 1);
        });

        $('#social').mouseleave(function () {
            $('#platform').css('opacity', 0);
        });
    }
})();