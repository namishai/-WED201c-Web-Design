function show() {
    var para2 = document.getElementById("para2");
    var para3 = document.getElementById("para3");

    if (para2.style.display == "none") {
        para2.style.display = "block";
        para3.innerHTML = "SHOW LESS";
    } else {
        para2.style.display = "none";
        para3.innerHTML = "SHOW ALL";
    }
}

function Enroll() {
    var input = document.getElementsByTagName("input");
    var checkForm = true;
    for (let i = 0; i < 4; i++) {
        if (input[i].value == "") {
            checkForm = false;
            alert("please fiill all fields");
            return;
        }
    }
    if (checkForm) {
        if (input[2].value != input[3].value) {
            alert("password/repassword is invalid");
        } else {
            var check = false;
            for (let i = 5; i < 8; i++) {
                if (input[i].checked) {
                    check = true;
                    break;
                }
            }
            if (check) {
                alert("Start learning WED201c");
            }else{
                alert("would you like to choose option.")
            }
            
        }
    }
}
