document.getElementById("btnCadastrar").addEventListener("click", function() {
    txtUsuario = document.getElementById("txtUsuario").value;
    txtSenha = document.getElementById("txtSenha").value;

    // 1. Busca o vetor que já existe no localStorage
    users = JSON.parse(localStorage.getItem("users"));

    if (users == null) {
        users = [];
    }

    users.push({ usuario: txtUsuario, senha: txtSenha });


    localStorage.setItem("users", JSON.stringify(users));

    alert("Usuário cadastrado com sucesso!");
});