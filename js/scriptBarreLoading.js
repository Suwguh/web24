document.addEventListener("DOMContentLoaded", function() {
    // Simuler un délai de chargement de 5 secondes
    setTimeout(function() {
        // Masquer la barre de chargement
        document.getElementById("loader").style.display = "none";

        // Afficher le contenu
        document.getElementById("content").style.display = "flex";
    }, 3000);
});
