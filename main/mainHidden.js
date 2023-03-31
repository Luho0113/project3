
var changer = function(open){
	if(open){
  	$(".detail").css("display", "block");
  } else {
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


var opener = function(){
	$(".popUp-Background").css("display", "block");
	$(".popUp").css("display", "block");
	
};

var closer = function(){
	$(".popUp").css("display", "none");
	$(".popUp-Background").css("display", "none");
};



$(".hidden2").on('click', function(){
	opener();
});



$(".popUp-CloseBnt").on('click', function(){
	closer();
});



var count = 0;
function categoryChange(e) {
	var size_list = ["S", "M", "L"];
	var target = document.getElementById("size");

	if(e.value != "default") var d = size_list;

	target.options.length = 0;

	for (x in d) {
		var opt = document.createElement("option");
		opt.value = d[x];
		opt.innerHTML = d[x];
		target.appendChild(opt);
	}	
}

function counter(){
	var options1 = document.getElementById('color');
	var options2 = document.getElementById('size');
	if(options2.options[options2.selectedIndex].value!='default'){
		count++;
	}
	const real_price = document.getElementById('ItemExplanationPrice').innerText;
	const real_price_value =real_price.substr(6,2)+real_price.substr(9,3);
	
	const add_product_name = document.getElementById('popUp-ItemName').innerText;
	const add_product_info = options1.options[options1.selectedIndex].text+'/'+options2.options[options2.selectedIndex].text;
	



	var dummyTarget = $("#DummyTarget");
	var a = $("<div id='add_product'></div>");
	var b = $("<div id='add_product_name'></div>");
	var c = $("<div id='add_product_info'></div>");
	var d = $("<div id='add_product_price'></div>");
	a.append(b);
	a.append(c);
	a.append(d);
	dummyTarget.after(a);
	b.text(add_product_name);
	c.text(add_product_info);
	d.text(real_price_value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'won');
	document.getElementById("result").innerText = Number(real_price_value)*count+' won';
	document.getElementById("count_result").innerText = '('+count+'개)';
}
