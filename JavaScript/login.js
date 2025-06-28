// Set credentials in local storage for demonstration purposes

function Login() {
    const email = document.getElementById("myMail").value.trim();
    const pass = document.getElementById("pass").value.trim();
    const feedback = document.getElementById("small");

    const storedEmail = localStorage.getItem("email");
    const storedPass = localStorage.getItem("password");

    if (email === storedEmail && pass === storedPass) {
        feedback.textContent = "✅ Welcome!";
        feedback.style.color = "green";
        feedback.style.fontWeight = "bold";
        // Redirect to another page after successful login
        setTimeout(() => {
            window.location.href = "casinopage.html";
        }, 1000);
    } else {
        feedback.textContent = "❌ Invalid login details.";
        feedback.style.color = "red";
    }
}

function togglePassword() {
    const passInput = document.getElementById("pass");
    const isPassword = passInput.type === "password";
    passInput.type = isPassword ? "text" : "password";
}