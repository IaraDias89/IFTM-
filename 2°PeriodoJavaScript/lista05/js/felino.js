// ---------- ELEMENTOS ----------
gato1 = document.getElementById("gato1");
gato2 = document.getElementById("gato2");
gato3 = document.getElementById("gato3");
gato4 = document.getElementById("gato4");

contador = document.getElementById("contador");
textoGato4 = document.getElementById("textoGato4");
btnSorte = document.getElementById("btnSorte");
numeroSorte = document.getElementById("numeroSorte");

// ---------- DADOS GUARDADOS NO INDEX ----------
user = JSON.parse(localStorage.getItem("user"));

// variável do contador (fica FORA da função)
carinhos = 0;

// ---------- EVENTOS ----------
gato1.addEventListener("click", saudar);

gato2.addEventListener("click", acariciar);

gato3.addEventListener("mouseover", trocarGato3);
gato3.addEventListener("mouseout", restaurarGato3);

gato4.addEventListener("mousemove", trocarTexto);
gato4.addEventListener("mouseout", restaurarTexto);

btnSorte.addEventListener("click", gerarNumero);

 
function saudar() {
    alert("Oi " + user.primeiroNome + ", tudo bem com você?");
}
 
function acariciar() {
    carinhos = carinhos + 1;
    contador.innerText = carinhos;
}
 
function trocarGato3() {
    gato3.src = "Imagens/gato06.gif";
}

function restaurarGato3() {
    gato3.src = "Imagens/gato03.gif";
}

 
function trocarTexto() {
    textoGato4.innerText = "Ai, pare de fazer cócegas!";
}

function restaurarTexto() {
    textoGato4.innerText = "lá lá lá lá lá lá";
}

function gerarNumero() {
    numero = Math.floor(Math.random() * 100) + 1;
    numeroSorte.value = numero;
}