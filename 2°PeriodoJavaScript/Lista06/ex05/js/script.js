let nomes = [];
let container;
let index = 0;
let idIntervalo;

function cadastrarNomes() {
    let n = parseInt(prompt("Quantos nomes deseja cadastrar?")) || 0;

    for (let i = 0; i < n; i++) {
        let nome = prompt("Digite o " + (i + 1) + "º nome:");
        if (nome) {
            nomes.push(nome);
        }
    }
}

function exibirProximoNome() {
    if (index < nomes.length) {
        let p = document.createElement('p');
        p.textContent = nomes[index];
        container.appendChild(p);
        index++;
    } else {
        clearInterval(idIntervalo);
    }
}

function iniciarApresentacao() {
    idIntervalo = setInterval(exibirProximoNome, 1000);
}

function main() {
    container = document.getElementById('listaNomes');
    cadastrarNomes();
    iniciarApresentacao();
}

main();