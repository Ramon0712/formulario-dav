const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "El nombre de usuario es obrigatório.");
    }
    else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "El email es obligatório.");
    }
    else if (!checkEmail(emailValue)) {
        setErrorFor(email, "por favor, digite un email válido.");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "La clave es obrigatoria.");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "La clave debe ser  mínimo 7 caracteres.");
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "La confirmación de la clave es obrigatória");
    } else if (passwordConfirmationValue != passwordValue) {
        setErrorFor(passwordConfirmation, "Las claves no coinciden");
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    if (formIsValid) {
        //    console.log("el formulario esta optimo para continuar");
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    // Adiciona el mensaje de error
    small.innerText = message;

    // Adiciona la clase de error
    formControl.className = "form-control error";

}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adiciona la clase de suceso
    formControl.className = "form-control success";
}

// regla para verificar email
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@'']+(\.[^<>()\[\]\\.,;:\s@'']+)*)|(''.+''))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0,9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}