var parentBuy = document.getElementsByClassName("item");
  for (let i = 0; i < parentBuy.length; i++) {
    parentBuy[i].getElementsByClassName("buy")[0].addEventListener("click", function () {
        var checkPhone = prompt("Enter Your Phone:");
        if (parseInt(checkPhone) == checkPhone) {
          alert("Minh Phuong will contact you via phone number: " + checkPhone);
        }
      });
  }