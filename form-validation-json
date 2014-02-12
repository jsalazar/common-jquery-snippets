// put cursor on first field     
//$("#clientName").focus();

$('#clientContact').submit(function() {
    
    // disable form submit button
    $('input[type=submit]', this).attr('disabled', 'disabled');
    
    //show loading bar
    $("#loading").css({"visibility":"visible","opacity":"1","display":"block"});
    
    // Grab data
    var clientName = $("#ffclientName").val();
    var clientEmail = $("#ffclientEmail").val();
    var clientMessage = $("#ffclientMessage").val();

    // Send it
    $.post('clientContactAction.php', {name:clientName, email:clientEmail, message:clientMessage}, 
        function(aResponse)
            {
                // PROCESS ERRORS
                if (aResponse.status == "error") {

                    var responseMSG = '<div class="alert alert-block"><h4>WOOPS</h4> Some information is missing!<ol>';

                    $.each(aResponse.errors,function(index,item){
                        responseMSG += '<li>'+item+'</li>';
                    });

                    responseMSG += '</ol></div>' 

                    $('#loadingStatus').html(responseMSG).fadeIn('slow').animate({ opacity: 1.0 }, 2500);
                }

                // PROCESS SUCCESS 
                if (aResponse.status == "success") {

                    var responseMSG = '<div class="alert alert-success"><h4>Awesome!</h4>';
                    
                        responseMSG += aResponse.message; // access json object directly                     

                    responseMSG += '</div>' 

                    $('#loadingStatus').html(responseMSG).fadeIn('slow').animate({ opacity: 1.0 }, 2500);

                    // CLEAR FORM VALUES
                    clearForm('#clientContact');

                }

            }, "json");

    //hide loading bar
    $("#loading").fadeTo(1000, 0);   
    
    // enable form submit button
    $('input[type=submit]', this).removeAttr('disabled');

    // Keep the form from refreshing the page
    return false;
});
