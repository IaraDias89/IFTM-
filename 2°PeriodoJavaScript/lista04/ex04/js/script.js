document.getElementById("btnCadastrar").addEventListener("click", function() {
 
    txtUsuario = document.getElementById("txtUsuario").value;
    txtSenha = document.getElementById("txtSenha").value;

 
    user = {
        usuario: txtUsuario,
        senha: txtSenha
    };
 
    localStorage.setItem("user", JSON.stringify(user));

    alert("Cadastrado com sucesso!");
});