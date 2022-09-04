
    function submit(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var select = document.getElementsByTagName("select");
        var showinfo = document.getElementById("showinfo");
        var skills = document.querySelectorAll("#skill");
        showinfo.innerHTML = "";
        var count = 0;
        if(name == "" && email == ""){
            alert("Đừng để trống tên và email của bạn");
        }else if(name == "" ){
            alert("Đừng để trống tên của bạn");
        }else if(email == ""){
            alert("Đừng để trống email của bạn");
        }
    
        for(let i of select){
            if(i.value == ""){
                count ++;
                i.style.border = "2px solid red";
            }else{
                i.style.border = "1px solid black";
            }
        }
    
        if(count == 0){
            showinfo.style.display ="block";
            showinfo.innerHTML = `Xem lại thông tin của bạn:<br>
            Tên: ${name} <br>
            Email: ${email} <br>
            Năm tốt nghiệp: ${select[0].value} <br>
            Điểm Toán: ${select[1].value} <br>
            Điểm lý: ${select[2].value} <br>
            Điểm Ngoại Ngữ: ${select[3].value} <br>`
            
        }

        skills.forEach(function(item){
            if(item.checked){
                showinfo.innerHTML += `Kỹ năng: ${item.value} <br>`
            }
        });

    }

