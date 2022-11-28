function authCheck() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    let span = document.querySelector('span');

    if (email == "matijagudic@hotmail.com" && password == "241241") {
        window.location = "home.html"; //redirect 
        return false;
    }
    else {
        span.innerHTML = 'Wrong e-mail/password!';
        span.style.color = 'red';
        return false;
    }

}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#button').onclick = authCheck;
});
