// :: SCENARIO :: handler for drop down menu listing with AJAX like content loading
    $("#appsMenu a").click(function() {

            //show ajax loader
            $("#loading").css({visibility:"visible", opacity:"1", display:"block"});
            
            // change the search aid value to search the current app being viewed
            $('#aid').attr('value', this.id);
            //load selected directory files
            $("#sideBar").hide().load("listRecords.php", {aid: this.id, removeFilter:'yes'}).fadeIn('slow');
            // update placeholder text for search box
            $('#searchText').val('');
            $('#searchText').attr('placeholder', 'Seach '+$(this).text()+' records');
            
            // update filters for this app
            $("#recordFilters").hide().load("listFilters.php", {aid:this.id}).fadeIn('slow'); 
            
            // hide ajax loader     
            $("#loading").fadeTo(1000, 0);
            
        });
