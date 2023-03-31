$(document).ready(function(){

    $(".find_hp").hide();
    $(".find_email").show();

    $('input[name="iv"]').change(function(){

        if($('input[name="iv"]:checked').val() == 'email'){
            $(".find_hp").hide();
            $(".find_email").show();
        }else if($('input[name="iv"]:checked').val() == 'hp'){
            $(".find_email").hide();
            $(".find_hp").show();
        }

    });

});


