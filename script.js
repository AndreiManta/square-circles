$(document).ready(function(){
      var droppable = false;
      $('.circle1:eq(0)').mousedown(function(){
        $(window).bind('mousemove',function(event){
          event.preventDefault();
          $('.circle1:eq(0)').css({ 'position':'absolute', 'top': event.pageY + 'px', 'left':event.pageX + 'px'});
          droppable = true;
        });
      });
      $(window).mouseup(function(event){
        event.preventDefault();
        $(window).unbind('mousemove');
        $('.circle1:eq(0)').css({ 'position':'relative', 'top': '0', 'left':'0'});
      });
      $('.square1').mouseup(function(){
        if( droppable == true ){
          $('.circle1:eq(0)').css({ 'position':'relative', 'top': '0', 'left':'0'}).appendTo('.square1');
          droppable = false;
        }
      })
    });
      $(document).ready(function(){
      var droppable = false;
      $('.circle2:eq(0)').mousedown(function(){
        $(window).bind('mousemove',function(event){
          event.preventDefault();
          $('.circle2:eq(0)').css({ 'position':'absolute', 'top': event.pageY + 'px', 'left':event.pageX + 'px'});
          droppable = true;
        });
      });
      $(window).mouseup(function(event){
        event.preventDefault();
        $(window).unbind('mousemove');
        $('.circle2:eq(0)').css({ 'position':'relative', 'top': '0', 'left':'0'});
      });
      $('.square2').mouseup(function(){
        if( droppable == true ){
          $('.circle2:eq(0)').css({ 'position':'relative', 'top': '0', 'left':'0'}).appendTo('.square2');
          droppable = false;
        }
      })
    });