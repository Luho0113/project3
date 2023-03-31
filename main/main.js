$(window).scroll(function(){
    var pixel = $(window).scrollTop();
    console.log(pixel);

    if(pixel > 150){
        $('#menuBar').addClass('fixed-menu');
        $('#floatLeftArea').css("display", "block"); 
        $(".floating_window").show();
    } else {
        $('#menuBar').removeClass('fixed-menu');
        $('#floatLeftArea').css("display", "none");
        $(".floating_window").hide();
    }
    });