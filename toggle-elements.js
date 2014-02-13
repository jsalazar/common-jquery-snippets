// :: SCENARIO :: you need to toggle elements tied to some sort of navigation structure

var allPages = $('div.pageContainer > p.page');
allPages.hide().filter(':first').show();

$('ul.pageList li a').click(function() {
        allPages.hide().filter(this.hash).animate({opacity: 'toggle'}, 800); 
        $('ul.pageList li a').removeClass('pSelected');
        $(this).addClass('pSelected');
        return false;
    }); 
