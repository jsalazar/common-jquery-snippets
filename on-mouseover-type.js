// :: SCENARIO :: mouseover handler with current record indicator handler....
$("#sideBar").on("mouseover mouseout", ".fbRecord", function(e){
    if (e.type === 'mouseover') { 
            $(this).children('span').css({'display': 'block'});
        } 
        else {
            $(this).children('span').css({'display': 'none'});
        }
});
      
$("#sideBar").on("click", ".fbRecord", function(){
        $('div.fbRecord').removeClass('currentRecord');
        $(this).closest("div").addClass('currentRecord');
    });
