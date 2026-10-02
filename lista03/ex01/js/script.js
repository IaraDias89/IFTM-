btnExibir = document.getElementById("btnExibir");

btnExibir.addEventListener("click",exibirMsg);


 
function exibirMsg() {
    nome = document.getElementById("txtNome").value;
    alert(nome);
}
