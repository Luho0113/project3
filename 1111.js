var changer = function(open){
	if(open){
  	$(".detail").css("display", "block");
    isOpen=true;
  } else {
  	if(!$('.hiddenMenu').is(':hover')&&!$('.detail').is(':hover'))
  		$(".detail").css("display", "none");
  }
};

$(".hidden1").on('click', function(){
	changer(true);
});
$(".hiddenMenu").hover(function(){
}, function(){
  changer();
});
$(".detail").hover(function(){
}, function(){
  changer();
});