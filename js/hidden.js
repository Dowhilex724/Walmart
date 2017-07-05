//滑轮滚动出现小导航
    function getTop() {
        var mytop = $(document).scrollTop();
        if (mytop > 120) {
            $(".fixed_banner").css({
                'display': 'block',
                'top': 0,
            });
        } else {
            $(".fixed_banner").css('display', 'none');
        }
        setTimeout(getTop);
    }
    getTop();


