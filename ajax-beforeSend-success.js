$('.modal-footer').on("click", ".confirmDelete", function(event) {

        //show ajax loader
        $("#loading").css({visibility:"visible", opacity:"1", display:"block"});
        //close modal
        $('#recordModal').modal('hide');

        //load selected record
        var record = this.name; // name=$appIdentity-$recordHeading
        var recordParts = record.split('-');       
        var TELEPORT = this.id;
        // silent post to delete record
        $.ajax({ 
                    type: "POST",
                    url: "deleteRecord.php",
                    data: {aid: recordParts[0], rid: this.id, nid: recordParts[1]},
                    beforeSend: function() {
                        // highlight record before deleting it
                        $('div[name=RO'+TELEPORT+']').css("background-color","#f2dede");

                    },
                    success: function(msg) { 
                        var pid = $("#currentPage").html(); //set current page being viewed
                        var aid = recordParts[0]; // set current app being viewed
                        // reload records for this app showing current page, etc..
                        $("#loading").fadeTo(1000, 0, function(){ $("#sideBar").hide().load("listRecords.php", {aid:aid,pid:pid,alertDelete:msg}).fadeIn('slow'); });
                    }
                });
        
        return false; 

    });
