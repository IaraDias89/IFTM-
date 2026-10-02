titulo = document.getElementById("titulo");
btnConvidado = document.getElementById("btnConvidado");

user = JSON.parse(localStorage.getItem("user"));

titulo.innerText = user.primeiroNome + " " + user.ultimoNome + ", seja bem-vindo ao jogo dos Felinos!";

btnConvidado.addEventListener("click", entrarConvidado);

function entrarConvidado() {
    window.location.href = "felino.html";
}