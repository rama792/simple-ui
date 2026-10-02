const form = document.getElementById("loginForm");

const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    if (password.length < 6) {

        message.textContent =
            "Password must be at least 6 characters";

        message.style.color = "red";

        return;
    }

    message.textContent =
        `Welcome ${email}! Login successful`;

    message.style.color = "green";

});