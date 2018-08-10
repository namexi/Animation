/**
 * Created by xi on 2018/7/29.
 */
$(function () {
   var flag =false
   $('#container').fullpage({
      sectionsColor:['#fadd67','#84a2d4','#ef674d','#ffeedd','#d04759','#84d9ed','#8ac060','#fff'],
      verticalCentered: false,
      navigation: true,
      scrollingSpeed: 1000,
      onLeave: function (index,nextIndex,direction) {
         //解决往上回滚在往下滚 继续触发动画
         if(direction === 'up'){
           flag = true
         }
         //  第一屏到第二屏动画
         if( index === 1 && nextIndex === 2 && !flag ){

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
         //第三屏动画
         if(index === 2 && direction === 'down'){
            $('.section02 .content .sofa').css('animation', 'sofa02 1s forwards').on('webkitAnimationEnd',function(){
               $('.section03 .content .gods img:last-child').css({
                  'position': 'static',
                  'opacity': 1
               })
               $('.section03 .content .gods img:first-child').css({
                  'position': 'absolute',
                  'opacity': 0
               })
               $('.section03 .content .cart img:last-child').css({
                  'position': 'static',
                  'opacity': 1
               })
               $('.section03 .content .cart img:first-child').css({
                  'position': 'absolute',
                  'opacity': 0
               })
            })
         }

         if(index === 2 && nextIndex === 3 && !flag){
            //$('.section03 .content .sofa').css({
            //   'opacity':1,
            //   'animation':'sofa03 3s forwards'
            //})
         }
      }
   })

});