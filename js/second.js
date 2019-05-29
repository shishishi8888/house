// $('.list_title>li').on('tap',function () {
//     var i = $(this).index();
//     console.log(i);
//     $('.list_title').css({
//         'position':'fixed',
//         'top':'0',
//         'left':'0'
//     });
//     $('.list_title li>a').addClass('up').siblings().removeClass('up');
//     $('.someList li').eq(i).show().siblings().hide();
// });
var $listLi = $('.list_title li');
var $someListLi = $('.someList > li')
$listLi.on('tap',function () {
//        alert(1)
//        把导航条置于页面最顶端
    $('.list_title').css({
        'position':'fixed',
        'top':'0',
        'left':'0'
    });
//        出现透明层蒙板
    $('.mark').show();
//        定义当前元素的下标
    var index = $(this).index();
//        给导航上的a元素切换上下箭头及字体颜色
    $listLi.children('h2').children('a').removeClass('up');
    $(this).children('h2').children('a').addClass('up');

    $someListLi.hide();
//        因为区域下面使用了flex布局，不能直接用display：none隐藏，所以需要判断
    if(index === 0){
        $someListLi.eq(index).css('display', 'flex');
    } else {
        $someListLi.eq(index).show();
    }
//        阻止冒泡
    return false;
});
//下面的代码是点击空白区域的时候模板层消失，弹出层消失
$someListLi.on('tap', function() { return false; });

$('body').on('tap', function() {
    $('.list_title').css({
        'position':''
    });
    $('.mark').hide();
    $listLi.children('h2').children('a').removeClass('up');
    $someListLi.hide();
});
