function validateUsername() {
    const usernameInput = document.querySelector("#user-user input");
    const usernameValue = usernameInput.value.trim();

    if (usernameValue.length > 15 || !/^[a-zA-Z]+$/.test(usernameValue)) {
        usernameInput.classList.add("error");
        usernameInput.nextSibling.textContent =
            "Username should be less than 15 characters and only contain letters.";
    } else {
        usernameInput.classList.remove("error");
        usernameInput.nextSibling.textContent = "";
    }
}

function validateEmail() {
    const emailInput = document.querySelector("#user-email input");
    const emailValue = emailInput.value.trim();

    if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue) &&
        emailValue.length > 0
    ) {
        emailInput.classList.add("error");
        emailInput.nextSibling.textContent = "Invalid email format.";
    } else {
        emailInput.classList.remove("error");
        emailInput.nextSibling.textContent = "";
    }
}

function validatePassword() {
    const passwordInput = document.querySelector("#user-pass input");
    const passwordValue = passwordInput.value;

    if (
        passwordValue.length <8 ||
        !/[a-z]/.test(passwordValue) ||
        !/[A-Z]/.test(passwordValue) ||
        !/[0-9]/.test(passwordValue)
    ) {
        passwordInput.classList.add("error");
        passwordInput.nextSibling.textContent =
            "Password should be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, and one number.";
    } else {
        passwordInput.classList.remove("error");
        passwordInput.nextSibling.textContent = "";
    }
}