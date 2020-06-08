
    var myform = $('form');
    var form = $('#myForm > input');

    form.on("focus", () => {form[0].style.borderBottom = "";form[1].style.borderBottom = "";$(".helper-text").html("")});
    var login = (callback) => {
        myform.attr('action','main_page.html');
        myform.attr('onsubmit','return validate()');
        callback();
    }

    var validate = () => {
        $(".helper-text").html("");
        if(form[0].value == "admin" && form[1].value == 12345) {
            $(".helper-text").html("Good").css("color","green");
            return true;
        }
        if(form[0].value == "") {
            form[0].style.borderBottom = "1px solid red";
            $("#helpUname").html("Cannot be empty").css("color","red");
            return false;
        }
        if(form[1].value == "") {
            form[1].style.borderBottom = "1px solid red";
            $("#helpPw").html("Cannot be empty").css("color","red");
            return false;
        }
        if(form[0].value !== "admin") {
            form[0].style.borderBottom = "2px solid red";
            $("#helpUname").html("Wrong").css("color","red");
            return false;
        }
        if(form[0].value !== 12345) {
            form[1].style.borderBottom = "2px solid red";
            $("#helpPw").html("Wrong").css("color","red");
            return false;
        }
    }

    $("button").on("click", () => login(validate));
