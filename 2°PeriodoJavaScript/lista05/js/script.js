alert("Olá, seja bem-vindo!");

btnEntrar = document.getElementById("btnEntrar");
nome = document.getElementById("nome");

btnEntrar.addEventListener("click", validarNome);

function validarNome() {
    nomeCompleto = nome.value.trim();

    if (nomeCompleto == "") {
        alert("Por favor, informe o seu nome completo.");
        return;
    }

    palavras = nomeCompleto.split(" ");

    if(palavras.length < 2) {
        alert("Informe pelo menos NOME + SOBRENOME.");
        return;
    }

   user = {
    nomeCompleto: nomeCompleto,
    primeiroNome: palavras[0], 
    ultimoNome: palavras[palavras.length - 1]
   };

   localStorage.setItem("user", JSON.stringify(user));

   window.location.href = "menu.html";
}