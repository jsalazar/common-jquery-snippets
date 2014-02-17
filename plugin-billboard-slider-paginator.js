(function($){
    $.fn.paginator = function(options) {

        $.fn.paginator.defaults = {
            slideClass: "pageWrapper",
            pagerID: "pagePager",
            indicatorID: "pageIndicator",
            indicatorSpanID: "indicatorLinks",
            indicatorClass: "indi",
            prevClass: "prevPage",
            nextClass: "nextPage",
            autoSlide: true,
            autoSlideSpeed: 5000,
            showRandom:true
        };
  
        var o = $.extend({}, $.fn.paginator.defaults, options);

        return this.each(function() {

        var $mslideSibs = $('.' + o.slideClass).siblings();
        var randomStarter = Math.floor(Math.random() * $mslideSibs.length);

        // create slide indicator 
        for (ip=0; ip<$mslideSibs.length; ip++) { 
            $('#' + o.indicatorSpanID).append('<a href="#'+ip+'" class="'+o.indicatorClass+'" id="ip'+ip+'"></a>'); 
        }

        if (o.showRandom) {
            // show random slide onLoad
            $('.' + o.slideClass+':eq('+randomStarter+')').show();   
            // determine ID for random starter, clear all indicators of indiactive class /  now set current random indicator
            $randomIndi = $('.' + o.slideClass+':eq(' + randomStarter + ')').attr('id');
            $('#' + o.indicatorSpanID+' a').removeClass('indiactive').filter('#i' + $randomIndi).addClass('indiactive');
    }
    else {
                    // default: show first element
                    $('.' + o.slideClass).hide().filter(':first').show();
                    // determine ID for first slide, clear all indicators of indiactive class
                    $firstIndi = $('.' + o.slideClass).filter(':first').attr('id');
                    $('#' + o.indicatorSpanID+' a').removeClass('indiactive').filter('#i' + $firstIndi).addClass('indiactive');
    }

        // control nav with next/prev buttons
        $('.'+o.prevClass+', .'+o.nextClass).click(function (event) {
            event.preventDefault(); // prevent links from jumping
            var tCount = $('.' + o.slideClass).length; 
            var tIndex = $('.' + o.slideClass+':visible').prevAll().length;
            if ($(this).hasClass(o.nextClass)) { tIndex++; } else { tIndex--; }
            if (tIndex === -1){ tIndex = tCount-1; }
            if (tIndex === tCount){ tIndex = 0; }
            $('.' + o.slideClass+':visible').hide();
            $('.' + o.slideClass+':eq('+tIndex+')').fadeIn();     

            // clear all indicators of indiactive class
            $('#' + o.indicatorSpanID+' a').removeClass('indiactive').filter('#i' + $('.' + o.slideClass+':eq('+tIndex+')').attr('id')).addClass('indiactive');
            return false;
           }); 

        // control nav with indicator icons
        $('.'+o.indicatorClass).click(function () {
            $('.' + o.slideClass+':visible').hide();
            var tIndex = $(this).attr('id').replace("ip", ""); // grab the ID for the slide to show and strip out text to reveal the number
            $('.' + o.slideClass+':eq('+tIndex+')').fadeIn();     
            $('#' + o.indicatorSpanID+' a').removeClass('indiactive').filter('#ip' + tIndex).addClass('indiactive'); // set the indicator to the one selected
            return false;
          }); 

        // prep function for autoslider
        function MSlideSwitch() {
            var tCount = $('.' + o.slideClass).length; 
            var tIndex = $('.' + o.slideClass+':visible').prevAll().length;
            tIndex++;
            if (tIndex === -1){ tIndex = tCount-1; }
            if (tIndex === tCount){ tIndex = 0; }
            $('.' + o.slideClass+':visible').hide();
            $('.' + o.slideClass+':eq('+tIndex+')').fadeIn();     

            // clear all indicators of indiactive class
            $('#' + o.indicatorSpanID+' a').removeClass('indiactive').filter('#i' + $('.' + o.slideClass+':eq('+tIndex+')').attr('id')).addClass('indiactive');
        }


        if (o.autoSlide) {
    // start slideshow on page load
    var playSlideshow =  window.setInterval(function(){MSlideSwitch();}, o.autoSlideSpeed);
    //onHover stop slideshow, hoverOutstart slideshow interval again
    $('.' + o.slideClass+', #'+o.pagerID+', #'+o.indicatorID).hover(function() { window.clearInterval(playSlideshow); }, function() { playSlideshow =  window.setInterval(function(){MSlideSwitch();}, o.autoSlideSpeed ); });
        }
   
   
  });
 };
})(jQuery);




/*
USAGE Assumes:

<div style="position:relative;">
    <div class="billboardSlideContainer">
        <div class="billboardSlide" id="p0"><a href="..."><img src="../imageName.jpg" alt="Alternative Text Here..."></a></div>
        <div class="billboardSlide" id="p1"><a href="..."><img src="../imageName.jpg" alt="Alternative Text Here..."></a></div>
        <div class="billboardSlide" id="p2"><a href="..."><img src="../imageName.jpg" alt="Alternative Text Here..."></a></div>
        <div class="billboardSlide" id="p3"><a href="..."><img src="../imageName.jpg" alt="Alternative Text Here..."></a></div>
        <div class="billboardSlide" id="p4"><a href="..."><img src="../imageName.jpg" alt="Alternative Text Here..."></a></div>
    </div>
<div id="mslidePager2"><a href="#" class="prevMSlide2"><img src="/prev.png"></a>&nbsp;<a href="#" class="nextMSlide2"><img src="/next.png"></a></div>
<div id="mslideIndi2"><span id="demoPager"></span></div>		
</div>



// call paginator with all options, useful to display more than one per page, override defaults
$('.billboardSlideContainer').paginator({
    slideClass: 'billboardSlide', 
    pagerID: 'mslidePager2', 
    indicatorID: 'mslideIndi2',
    indicatorSpanID: 'demoPager',
    indicatorClass: 'indi2',
    prevClass: 'prevMSlide2', 
    nextClass: 'nextMSlide2', 
    autoSlide: true,
    autoSlideSpeed: 5000,
    showRandom: true
});

*/
