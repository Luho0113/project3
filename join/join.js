join_Button_Click = () => {

    //필수 입력 항목 확인
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const password_answer = document.getElementById('password_answer').value;
    const name = document.getElementById('name_ej').value;
    const address = document.getElementById('address').value;
    const tel = document.getElementById('tel3').value;
    const hp = document.getElementById('HP3').value;
    const email = document.getElementById('e-mail').value;

    const valauName = ["아이디", "비밀번호", "비밀번호 확인", 
                        "비밀번호 확인 답변", "이름", "주소", "전화번호", "휴대전화", "이메일"]
    const required_input = [id, password, password2, password_answer, name, address, tel, hp, email];

    const func = valauName.filter((v) => (required_input)).filter((v, index) => required_input[index] == false);
    if(func[0]){
        alert(`${func[0]} 항목은 필수 입력값입니다.`);
    };
    
    if(func[0] == undefined){
        regular_expression(email, id, password);
    };

    //비밀번호와 비밀번호 확인
    if(password2){
        if(!(password == password2)){
            alert("비밀번호가 일치하지 않습니다.")
        };
    };

};

regular_expression = (email, id, password) => {
    //이메일 형식
    const email_RE = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@(?:\w+\.)+\w+$/;
    
    //아이디(영문소문자/숫자, 4~16자)
    const id_RE = /[0-9a-z]{4,16}$/; 
    
    //비밀번호(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)
    const password_RE = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/;

    const is_null = email && id && password;

    if(is_null){
        if(!email_RE.test(email)){
            alert("이메일 형식이 올바르지 않습니다.");
        }else if(!id_RE.test(id)){
            alert("아이디 형식이 올바르지 않습니다.");
        }else if(!password_RE.test(password)){
            alert("비밀번호 형식이 올바르지 않습니다.");
        };
    };


};

checkSelectAll = (check) => {
    const selectAll = document.getElementById('termsAll');
    if(check.checked == false){
        selectAll.checked = false;
    };

};

selectAll = (selectAll) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]'); 
    checkboxes.forEach((checkbox) => {checkbox.checked = selectAll.checked})
};

$(".postcode").hide();

$('.address').click(function(){

    $(".postcode").show();

});

$('.close').click(function(){

    $(".postcode").hide();

});

cancle_Button_Click = () => {
    location.href="../main/main.html";
}