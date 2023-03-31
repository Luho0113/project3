$(window).scroll(function(){
    var pixel = $(window).scrollTop();
    console.log(pixel);

    if(pixel > 150){
        $('#menuBar').addClass('fixed-menu');
        $('#floatLeftArea').css("display", "block"); //생기게 해야함..
        $(".floating_window").show();
    } else {
        $('#menuBar').removeClass('fixed-menu');
        $('#floatLeftArea').css("display", "none");
        $(".floating_window").hide();
    }
    });