// close all menu on first load
$('ul.subLinkAccordion ul').hide();
// add arrow images to lists with sublist
$(".subLinkAccordion li:has(ul) > a").addClass('sMenu').addClass('sLink');

// initialize content containers
var sLinkContainers = $('div.subLinksContainer > div.kontent'); 
var myFile = document.location.toString();

// the URL contains an anchor
if (myFile.match('#')) { 
        // click the navigation item corresponding to the anchor
        var myAnchor = '#' + myFile.split('#')[1];
        var myAnchor2 = myFile.split('#')[1];

        // onload color parent menu for sublink being viewed
        $('.subLinkAccordion a[href$="' + myAnchor + '"]').parents().eq(2).children("a").addClass('sMenuOpen');
        // onload show the current submenu for link being viewed
        $('.subLinkAccordion a[href$="' + myAnchor + '"]').parents('ul').show();
        // onload highlight the current link being viewed
        $('.subLinkAccordion a[href$="' + myAnchor + '"]').addClass('sMenuSelected');
        // onload show content div that matches the #anchor/hash
        sLinkContainers.hide().filter('#s' + myAnchor2).show();
    } 
    else {
         sLinkContainers.hide().filter(':first').show();
    }

$('ul.subLinkAccordion li a.sLink').click(function() {
        if ($(this).hasClass('sMenuOpen')) {
            return false;
        } 
        else {
            $('ul.subLinkAccordion ul').slideUp();
            $(this).next().animate({opacity: 'toggle', height: 'toggle'}); 
            $('ul.subLinkAccordion li a').removeClass('sMenuOpen');
            $('ul.subLinkAccordion li a').removeClass('sMenuSelected');
            $(this).addClass('sMenuOpen');
            return false;
        }
    });

/* 
USAGE Assumes:

<div class="subLinksContainer">
       <ul class="subLinkAccordion">
            <li><a href="/index.php?site=sublinksExampleAccordion#noSublinkContent" class="sLink">Link without Submenu </a></li>
            <li><a href="javascript:void(0);">Menu Heading 1</a>
                <ul>
                    <li><a href="/index.php?site=sublinksExampleAccordion#greatPrograms" class="sLink">Great Programs </a></li>
                    <li><a href="/index.php?site=sublinksExampleAccordion#niceMajors" class="sLink">Nice Majors </a></li>
                    <li><a href="/index.php?site=sublinksExampleAccordion#reasonsToAttend" class="sLink">Reasons To Attend </a></li>
                </ul>
            </li>

            <li><a href="javascript:void(0);">Menu Heading 2</a>
                <ul>
                    <li><a href="/index.php?site=sublinksExampleAccordion#prospectiveStudents" class="sLink">Prospectives </a></li>
                    <li><a href="/index.php?site=sublinksExampleAccordion#awesomeFaculty" class="sLink">Faculty </a></li>
                    <li><a href="/index.php?site=sublinksExampleAccordion#prettyCampus" class="sLink">Campus </a></li>
                </ul>
            </li>
     </ul>


    <div class="kontent" id="sHome">
    blah blah blah blah blah blah blah blah blah 
    </div>

    <div class="kontent" id="sCourses">
    blah blah blah blah blah blah blah blah blah 
    </div>
</div>

*/

