(function($){
    $.fn.slideMatize = function(options) {
    
        $.fn.slideMatize.defaults = {
            hSlideContainer: "hSliderContainer",
            hSlides: "hSliders",
            prevClass: "hPrevPage",
            nextClass: "hNextPage"
        };
  
    var o = $.extend({}, $.fn.slideMatize.defaults, options);

    return this.each(function() {

        var slidesCount = $('.' + o.hSlides).children().size();
        var width = $('.' + o.hSlides).children().outerWidth();

        var distance = 0;
        var times = 1;
        var position = 0;
        var active = false;
        var number = 0;
        var interval = 0;
        var restart = 0;

        if (slidesCount===1) {
            $('.' + o.hSlides).children().css({position:"absolute",left:position,display:"block"}); 
            return;
        }
        
        $('.' + o.hSlides).css({width:(slidesCount*width)});
        $('.' + o.hSlides).children().each(function(){$(this).css({position:"absolute",left:position,display:"block"}); position=position+width;});
        $('.' + o.hSlides).children(":eq("+(slidesCount-1)+")").css({position:"absolute",left:-width});
        
        if (slidesCount>3) {
            $('.' + o.hSlides).children(":eq("+(slidesCount-1)+")").css({position:"absolute",left:-width});
        }

        autoHeight(times);

        $('.' + o.nextClass).click(function() {
            if (active===false) {
                animate("next",true);
            } 
            return false;
        });

        $('.' + o.prevClass).click(function() {
            if (active===false) {
                animate("prev",true);
            } 
            return false;
        });

        function current(times) {
            if (times===slidesCount+1) {
                times = 1;
            } 
            if(times===0) {
                times = slidesCount;}
        };

        function autoHeight(times) {
    if (times===slidesCount+1) {
            times=1;
            }
    if (times===0) {
            times=slidesCount;
            }   
    var getHeight = $('.' + o.hSlides).children(":eq("+(times-1)+")").outerHeight();
    $('#' + o.hSlideContainer).animate({height: getHeight},500);                    
        };      

        function animate(dir,clicked) { 
    active = true;  
    switch(dir){
        case "next":
            times = times+1;
            distance = (-(times*width-width));
            current(times);
            autoHeight(times);
            if (slidesCount<3) {
                        if (times===3) {
                                            $('.' + o.hSlides).children(":eq(0)").css({left:(slidesCount*width)});
                                        }
                        if (times===2) {
                                            $('.' + o.hSlides).children(":eq("+(slidesCount-1)+")").css({position:"absolute",left:width});
                                        }
            }
            $('.' + o.hSlides).animate({left: distance}, 300,function(){
                if (times===slidesCount+1) {
                    times = 1;
                    $('.' + o.hSlides).css({left:0},function(){$('.' + o.hSlides).animate({left:distance})}).children(":eq(0)").css({left:0}).children(":eq("+(slidesCount-1)+")").css({ position:"absolute",left:-width});                         
                }
                if (times===slidesCount) {
                                            $('.' + o.hSlides).children(":eq(0)").css({left:(slidesCount*width)});
                                           }
                if (times===slidesCount-1) {
                                            $('.' + o.hSlides).children(":eq("+(slidesCount-1)+")").css({left:(slidesCount*width-width)});
                                           }
                active = false;
            });                 
            break; 

        case "prev":
            times = times-1;
            distance = (-(times*width-width));
            current(times);
            autoHeight(times);
            if (slidesCount<3) {
                if (times===0) {
                                            $('.' + o.hSlides).children(":eq("+(slidesCount-1)+")").css({position:"absolute",left:(-width)});
                                           }
                if (times===1) {
                                            $('.' + o.hSlides).children(":eq(0)").css({position:"absolute",left:0});
                                           }
            }
            $('.' + o.hSlides).animate({left: distance}, 300,function(){
                if (times===0) {
                    times = slidesCount;
                    $('.' + o.hSlides).children(":eq("+(slidesCount-1)+")").css({position:"absolute",left:(slidesCount*width-width)});
                    $('.' + o.hSlides).css({left: -(slidesCount*width-width)}).children(":eq(0)").css({left:(slidesCount*width)});
                }
                if (times===2 ) {
                                            $('.' + o.hSlides).children(":eq(0)").css({position:"absolute",left:0});
                                           }
                if (times===1) {
                                            $('.' + o.hSlides).children(":eq("+ (slidesCount-1) +")").css({position:"absolute",left:-width});
                                           }
                active = false;
            });
            break;

        default:
            break;
        }                   
    };
    
  });
 };
})(jQuery);




/*
USAGE Assumes:

<ul class="omSlides">
    <li><a href="http://twitter.com/yourHandle/statuses/167337266233094146">blah blah blah blah blah blah blah blah blah  http://t.co/hDIdS5SJ</a><br>Posted: 8 Feb. 2012 - 2:01 pm</li>
    <li><a href="http://twitter.com/yourHandle/statuses/167290402049757184">blah blah blah blah blah blah blah blah blah blah blah blah  http://t.co/Cs9KUDgw</a><br>Posted: 8 Feb. 2012 - 10:55 am</li>
    <li><a href="http://twitter.com/yourHandle/statuses/167080384755011586">blah blah blah blah blah blah blah blah blah blah blah blah  http://t.co/AwxDKDdN</a><br>Posted: 7 Feb. 2012 - 9:00 pm</li>
</ul>


$('#hpTwitter').slideMatize({
    hSlideContainer: 'hpTwitter', 
    hSlides: 'omSlides', 
    prevClass: 'omPrev',
    nextClass: 'omNext' 
});




*/



