//버튼 색상 변경 관련 자바스크립트만 모음
//false = 이벤트 대상의 DOM 트리 하위에 위치한 자손 EventTarget으로 이벤트가 전달되기 전에, 이 수신기가 먼저 발동돼야 함을 나타내는 불리언 값

//전체 주문 버튼
const all_buttonEvent = document.getElementById("all-buy");
all_buttonEvent.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#e3e3e3";
  },
  false
);

all_buttonEvent.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.backgroundColor = "#373737";
    event.target.style.color = "#ffffff";
  },
  false
);

//선택상품주문버튼
const selectBuy_buttonEvent = document.getElementById("select-buy");
selectBuy_buttonEvent.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.backgroundColor = "#f0f0f0";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#e3e3e3";
  },
  false
);
selectBuy_buttonEvent.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.backgroundColor = "#9b9b9b";
    event.target.style.color = "#ffffff";
  },
  false
);

//쇼핑계속하기버튼
const shop_buttonEvent = document.getElementById("shopping-continue");
shop_buttonEvent.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.backgroundColor = "#f0f0f0";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#e3e3e3";
  },
  false
);
shop_buttonEvent.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.color = "#373737";
  },
  false
);

//장바구니에 상품이 존재할 때 사용하는 버튼들
//수량 변경 버튼
const change_buttonEvent = document.getElementById("change_button");
change_buttonEvent.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.color = "#373737";
  },
  false
);
change_buttonEvent.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.backgroundColor = "#f0f0f0";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#e3e3e3";
  },
  false
);

//주문하기 버튼
const basket_buttonEvent1 = document.getElementById("small_button1");

basket_buttonEvent1.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.backgroundColor = "#373737";
    event.target.style.color = "#ffffff";
  },
  false
);
basket_buttonEvent1.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.backgroundColor = "#f0f0f0";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#e3e3e3";
  },
  false
);

//관심상품등록
const basket_buttonEvent2 = document.getElementById("small_button2");
basket_buttonEvent2.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.color = "#373737";
  },
  false
);
basket_buttonEvent2.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.backgroundColor = "#f0f0f0";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#e3e3e3";
  },
  false
);

//삭제버튼
const basket_buttonEvent3 = document.getElementById("small_button3");
basket_buttonEvent3.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.color = "#373737";
  },
  false
);
basket_buttonEvent3.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.backgroundColor = "#f0f0f0";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#e3e3e3";
  },
  false
);

//선택상품제어버튼
//삭제하기 버튼
const select_remove_buttonEvent = document.getElementById("remove_button");
select_remove_buttonEvent.addEventListener("click", function () {
  alert("정말 삭제하시겠습니까?");
});
select_remove_buttonEvent.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.backgroundColor = "#9b9b9b";
    event.target.style.color = "#ffffff";
    event.target.style.borderColor = "#939393";
  },
  false
);
select_remove_buttonEvent.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.backgroundColor = "#f0f0f0";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#e3e3e3";
  },
  false
);

//관심상품등록버튼
const select_buttonEvent = document.getElementById("select_button");
select_buttonEvent.addEventListener("click", function () {
  alert("관심 상품에 등록되었습니다.");
});
select_buttonEvent.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#939393";
  },
  false
);
select_buttonEvent.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.backgroundColor = "#f0f0f0";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#e3e3e3";
  },
  false
);

//장바구니비우기버튼
const select_removeAll_buttonEvent =
  document.getElementById("removeAll_button");
select_removeAll_buttonEvent.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#939393";
  },
  false
);
select_removeAll_buttonEvent.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.backgroundColor = "#f0f0f0";
    event.target.style.color = "#373737";
    event.target.style.borderColor = "#e3e3e3";
  },
  false
);
