
var emailInput = document.getElementById("myMail");
var passInput = document.getElementById("pass");
var confirmPassInput = document.getElementById("confirmPass");

// Prevent focusing password fields if email is empty
function blockIfNoEmail(e) {
    if (emailInput.value.trim() === "") {
        e.target.blur();
        alert("Please enter your email first.");
    }
}

passInput.addEventListener('focus', blockIfNoEmail);
confirmPassInput.addEventListener('focus', blockIfNoEmail);

sign = () => {
    var email = document.getElementById("myMail").value
    var pass = document.getElementById("pass").value
    var confirmPass = document.getElementById("confirmPass").value
    var fName = document.getElementById('f-name').value
    var small = document.getElementById("small")



    if (pass == confirmPass && email != "") {
        localStorage.setItem("email", email)
        localStorage.setItem("password", pass)
        localStorage.setItem("username", fName)
        localStorage.setItem("balance", 5000)

        small.innerHTML = ''
        window.location.href = "login.html"
    }
    else {
        console.log('incorrect')
        small.innerHTML = 'Passwords don`t Match <i class="fa fa-exclamation" aria-hidden="true"></i>'
    }

    // document.getElementById('f-name').value = ''
    // document.getElementById("l-name").value = ''
    // document.getElementById("myMail").value = ''
    // document.getElementById("pass").value = ''
    // document.getElementById("confirmPass").value = ''


}

document.querySelector('#btn').addEventListener('click', sign)