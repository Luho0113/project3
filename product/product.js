$(document).ready(function () {

	$(".total_item").hide();

	$(".floating_window").hide();

	$(".img_box").not(".active").hide(); //화면 로딩 후 첫번째 div를 제외한 나머지 숨김
	
	setInterval(nextSlide, 4000); //4초(4000)마다 다음 슬라이드로 넘어감
});

function prevSlide() {
	$(".img_box").hide(); //모든 div 숨김
	var allSlide = $(".img_box"); //모든 div 객체를 변수에 저장
	var currentIndex = 0; //현재 나타난 슬라이드의 인덱스 변수
	
	//반복문으로 현재 active클래스를 가진 div를 찾아 index 저장
	$(".img_box").each(function(index,item){ 
		if($(this).hasClass("active")) {
			currentIndex = index;
		}
        
	});
	
	//새롭게 나타낼 div의 index
	var newIndex = 0;
    
	if(currentIndex <= 0) {
		//현재 슬라이드의 index가 0인 경우 마지막 슬라이드로 보냄(무한반복)
		newIndex = allSlide.length-1;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 뒤로 간 index 지정
		newIndex = currentIndex-1;
	}

	//모든 div에서 active 클래스 제거
	$(".img_box").removeClass("active");
    
	//새롭게 지정한 index번째 슬라이드에 active 클래스 부여 후 show()
	$(".img_box").eq(newIndex).addClass("active");
	$(".img_box").eq(newIndex).show();

}

function nextSlide() {
	$(".img_box").hide();
	var allSlide = $(".img_box");
	var currentIndex = 0;
	
	$(".img_box").each(function(index,item){
		if($(this).hasClass("active")) {
			currentIndex = index;
		}
        
	});
	
	var newIndex = 0;
	
	if(currentIndex >= allSlide.length-1) {
		//현재 슬라이드 index가 마지막 순서면 0번째로 보냄(무한반복)
		newIndex = 0;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 앞으로 간 index 지정
		newIndex = currentIndex+1;
	}

	$(".img_box").removeClass("active");
	$(".img_box").eq(newIndex).addClass("active");
	$(".img_box").eq(newIndex).show();
	
}

$(window).scroll(function() {
	if($(this).scrollTop() > 1250) {
		$(".floating_window").show();
	}
	if($(this).scrollTop() <= 1250) {
		$(".floating_window").hide();
	}
});


// $('#small1').on({
//     'click': function(){
//         $('#main').attr('src','./image(yej)/상품이미지(small).gif');
//     }
// });


//작은 상품 이미지 hover 시 큰 이미지로 띄우기
$('#small1').hover(function(){
        $('#main').attr('src','./image(yej)/상품이미지(small).gif');
		$('#small1').css('cursor', 'pointer');
});

$('#small2').hover(function(){
        $('#main').attr('src','./image(yej)/상품이미지2(small).jpg');
		$('#small2').css('cursor', 'pointer');
});

$('#small3').hover(function(){
        $('#main').attr('src','./image(yej)/상품이미지3(small).jpg');
		$('#small3').css('cursor', 'pointer');
});

$('#small4').hover(function(){
        $('#main').attr('src','./image(yej)/상품이미지4(small).jpg');
		$('#small4').css('cursor', 'pointer');
});

$('#small5').hover(function(){
        $('#main').attr('src','./image(yej)/상품이미지5(small).jpg');
		$('#small5').css('cursor', 'pointer');
});

onChange = () => {
	var color  = document.getElementById("color");
	var value1 = (color.options[color.selectedIndex].value);

	var size = document.getElementById("size");
	var value2 = (size.options[size.selectedIndex].value);


	if((!(value1 == "default")) && (!(value2 == "default"))){
		$(".select_option_name").append("<div></div>");
		$(".select_option_name > div").text(`${value1} / ${value2}`);
		$(".total_item").show();
	};

};


