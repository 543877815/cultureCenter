//模块热更新
if (process.env.NODE_ENV !== 'production') {
    require('../view/index.html')
}

import '../sass/index.scss'

$(document).ready(function () {
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback, element) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();


    function animate() {
        requestAnimFrame(animate);
        scrollMonitor();
    }

    // 函数节流
    // var lazyLayout = _.throttle(scrollMonitor,100);
    function scrollMonitor() {
        let TeamContent = $('#team .content');
        let toggle = TeamContent.offset().top - ($(window).height() - TeamContent.height());
        let scrollTop = $(window).scrollTop();
        if (toggle <= scrollTop + 200 && $('#team .content .item').hasClass('active') === false) {
            $('#team .content .item').addClass('active');
            $(window).unbind('scroll');
        }
    }

    $(window).scroll(scrollMonitor);
    setTimeout(() => {
        skrollr.get().refresh();
    }, 1);
});
