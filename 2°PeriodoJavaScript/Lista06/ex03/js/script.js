let nomeUsuario;
let container;
let tamanhoAtual = 14;
let tamanhoMaximo = 40;
let idIntervalo;

function exibirNome() {
    container.textContent = nomeUsuario;
}

function atualizarTamanhoFonte() {
    tamanhoAtual += 2;
    container.style.fontSize = tamanhoAtual + "px";

    if (tamanhoAtual >= tamanhoMaximo) {
        clearInterval(idIntervalo);
    }
}

function iniciarAnimacao() {
    idIntervalo = setInterval(atualizarTamanhoFonte, 500);
}

function main() {
    nomeUsuario = prompt("Digite seu nome completo:") || "Usuário Padrão";
    container = document.getElementById('nomeContainer');

    exibirNome();
    iniciarAnimacao();
}

main();