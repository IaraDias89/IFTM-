let x;
let idIntervalo;
let elementoMensagem;

function atualizarMensagem() {
    if (x > 0) {
        elementoMensagem.textContent = "Por favor, aguarde " + x + " segundos para carregar a página do Google.";
        x--;
    } else {
        elementoMensagem.textContent = "Redirecionando para o Google...";
        clearInterval(idIntervalo);
        window.location.href = "https://www.google.com";
    }
}

function main() {
    x = parseInt(prompt("Digite a quantidade de segundos de espera:"));
    if (isNaN(x) || x < 0) {
        x = 5;
    }

    elementoMensagem = document.getElementById('mensagem');
    
    atualizarMensagem();
    idIntervalo = setInterval(atualizarMensagem, 1000);
}

main();