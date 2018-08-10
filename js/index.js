/**
 * Created by xi on 2018/7/29.
 */
$(function () {
   $('#container').fullpage({
      sectionsColor:['#fadd67','#84a2d4','#ef674d','#ffeedd','#d04759','#84d9ed','#8ac060','#fff'],
      verticalCentered: false,
      navigation: true,
      afterLoad: function (anchorLink,index) {
         //解决第二屏文字
         if(index === 2){
            $('.section02 .content .text img:last-child').css({'opacity':1,'position':'static'})
            $('.section02 .content .text img:first-child').css({'display':'none','position':'absolute'})

               $('.section02 .content .search').css('animation', 'search 2s forwards')
               $('.section02 .search img:last-child').css('animation', 'key 3s  forwards')

               //监听动画完成事件 有兼容性问题
            $('.section02 .content .search') .on('webkitAnimationEnd',function(){
                  $('.section02 .content .goods').css('animation', 'goods 1.2s  forwards')
                  $('.section02 .content .search').css('animation', 'search01 1.2s  forwards')
               })
         }
      }
   });
});