//:: SCENARIO :: you have a horizontal nav bar that is positioned near the middle of viewport and you want to make it stick to the top if you scroll past it

// grab the initial top offset of the navigation 
var stickyNavTop = $('.topNavigation').offset().top-40;

// our function that decides weather the navigation bar should have "fixed" css position or not.
var stickyNav = function() {
    
    // current position from the top
    var scrollTop = $(window).scrollTop(); 
         
    // if scrolling past navigation, change position to fixed(top)
    // otherwise position remains relative
    if (scrollTop > stickyNavTop) { 
        $('.topNavigation').addClass('topNavigationSticky');
        $('.topNavHeader').slideUp();
    } 
    else {
        $('.topNavigation').removeClass('topNavigationSticky'); 
        $('.topNavHeader').slideDown();
    }

};

stickyNav();

// call the function on scroll - need some sort of scroll delay here...kinda like hover delay
$(window).scroll(function() {
    stickyNav();
});
