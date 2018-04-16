(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
            
  
    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(e){
        var check = true;
        e.preventDefault();
        var postdata = $('.validate-form').serialize();

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        if ( check ) {
            $.ajax({
                type: 'POST',
                url: 'php/contact.php',
                data: postdata,
                dataType: 'json',
                success: function (result) {
    
                    if (result.isSuccess) {
                        var insert = $("<p class='thank-you'>Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.</p>");
                        $(".validate-form").append(insert);
                        setTimeout(function () {
                            insert.empty();
                        }, 6000);
                        $(".validate-form")[0].reset();
                        // location.reload();
                    }
                },
                error: function() {
                    var insert = $("<p class='thank-you'>Désolé, une erreur s'est produite... Veuillez réessayer dans quelques minutes.</p>");
                    $(".validate-form").append(insert);
                    setTimeout(function () { insert.empty(); }, 10000);
                    $(".validate-form")[0].reset();
                }
            });
        }

        // return check;
    });


    $('.validate-form .input2').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);