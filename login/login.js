const loginButtonFucn = () => {
    const id = document.getElementById('id').value;
    const password = document.getElementById("password").value;
    (!id)? alert("아이디 항목은 필수 입력값입니다."):(!password)? alert("비밀번호 항목은 필수 입력값입니다."):window.location.href="./main.html";

    if(id && password){
        location.href="../main/main.html";
    }
};


