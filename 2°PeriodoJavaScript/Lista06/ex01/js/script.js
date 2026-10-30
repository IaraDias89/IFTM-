let caixa1;
let caixa2;
let btn;

function transferirTexto() {
    let texto = caixa1.value;
    caixa1.value = "";

    setTimeout(function() {
        caixa2.value = texto;
    }, 2000);
}

function configurarEventos() {
    btn.addEventListener("click", transferirTexto);
}

function main() {
    caixa1 = document.getElementById('caixa1');
    caixa2 = document.getElementById('caixa2');
    btn = document.getElementById('btnTransferir');

    configurarEventos();
}

main();