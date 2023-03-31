const tabList = document.querySelectorAll(".tab .menu");
const content = document.querySelectorAll(".tab .basket-page .basket-empty");

let activeCont = ""; //현재활성화된컨텐츠

for (var i = 0; i < tabList.length; i++) {
  tabList[1].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      //나머지 버튼 클래스 제거
      tabList[j].classList.remove(".icon_basket_empty");
      content[j].style.display = "none";
    }
    this.parentNode.classList.add(".icon_basket_empty");

    //버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute("href");
    document.querySelector(activeCont).style.display = "block";
  });
}
