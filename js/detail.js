var img=$('.lunbo .pic').children('img');
console.log(img.length);
var index=0;
var timer=null;
//将图片切换功能和数字切换功能放入功能块changeImg中
function changeImg() {
    for(var i=0;i<img.length;i++){
        img[i].style.display="none";

    }
    index++;
    if(index>img.length-1)index=0;
    img[index].style.display="block";
    $('.num').html(index+1);
}
timer=setInterval(changeImg,3000);
