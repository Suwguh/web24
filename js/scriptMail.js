function validateEmail() {
    var emailInput = document.getElementById("emailInput");
    var emailButton = document.getElementById("emailButton");

    // Simulation d'une vérification d'e-mail (remplacez cela par votre propre logique)
    var isEmailValid = /\S+@\S+\.\S+/.test(emailInput.value);

    if (isEmailValid) {
        emailButton.classList.remove("error");
        emailButton.classList.add("success");
    } else {
        emailButton.classList.remove("success");
        emailButton.classList.add("error");
    }

    // Réinitialise le bouton après l'animation
    setTimeout(function () {
        emailButton.classList.remove("error", "success");
    }, 2000);
}