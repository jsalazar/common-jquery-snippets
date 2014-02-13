// :: SCENARIO :: scrolling anchor links with current link idicator
$(".simpleScroll").click(function(e) {       
        e.preventDefault();
        
        // hide any highlighted pills   
        $(".nav > li").removeClass('active');

        // scroll to requested section
        $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 800); // need minus 100 to account for top sticky bar...
        
        // highlight current nav pill - do so explicitly so any link on the page triggers
        $('.nav-pills li a[href$="' + this.hash + '"]').parent().addClass('active');
    });
