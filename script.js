document.addEventListener("DOMContentLoaded", function () {
    const cronometro = document.getElementById("cronometro");
    const dataInicial = new Date("2023-06-07T00:00:00");

    function atualizarCronometro() {
        const agora = new Date();
        const diferenca = agora - dataInicial;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        cronometro.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }

    setInterval(atualizarCronometro, 1000);
    atualizarCronometro();
});




document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.getElementById("hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw"; // Posição horizontal aleatória
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duração aleatória
        heartsContainer.appendChild(heart);

        // Remove o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Cria corações a cada 300ms
    setInterval(createHeart, 300);
});