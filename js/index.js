//tab切换
    $('.foot_list>span>p').on('tap',function () {
        var i = $(this).index();
        $(this).addClass('hover').siblings().removeClass('hover');
        $('.foot_lis ul').eq(i).show().siblings().hide();
    });


// 点击关闭推荐广告

    $('.close').on('tap',function () {
        $('.tip').hide();
    });
