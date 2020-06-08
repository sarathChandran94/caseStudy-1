
    var myform = $('form');
    var form = $('#myForm > input');
    var button = document.getElementById('button');

    var login = (callback) => {
        myform.attr('action','main_page.html');
        myform.attr('onsubmit','return validate()');
        callback();
        // form[0].style.border = "";
        // form[1].style.border = "";
    }

    var validate = () => {
        if(form[0].value == "admin" && form[1].value == 12345) {
            return true;
        }
        if(form[0].value == "" || form[1].value == "") {
            // form[0].style.border = "1px solid red";
            // form[1].style.border = "1px solid red";
            return false;
        }
        else {
            // form[0].style.border = "2px solid blue";
            // form[1].style.border = "2px solid blue";
            return false;
        }
    }
    // button.addEventListener('submit',login(validate));
    login(validate);
