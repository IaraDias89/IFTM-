let txt1;
let txt2;
let select;
let btn;

function executarTemporizador() {
    let segundos = parseInt(select.value);
    let valorTexto = txt1.value;
    txt1.value = "";

    setTimeout(function() {
        txt2.value = valorTexto;
    }, segundos * 1000);
}

function configurarEventos() {
    btn.addEventListener("click", executarTemporizador);
}

function main() {
    txt1 = document.getElementById('txt1');
    txt2 = document.getElementById('txt2');
    select = document.getElementById('tempoSelect');
    btn = document.getElementById('btnExecutar');

    configurarEventos();
}

main();