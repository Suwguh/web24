const startButton = document.getElementById('startButton');
const progressBar = document.getElementById('progressBar');

startButton.addEventListener('click', () => {
    progressBar.style.width = '100%';

    // Pour simuler un chargement, vous pouvez ajouter une temporisation.
    setTimeout(() => {
        progressBar.style.width = '0';
    }, 1000);
});
