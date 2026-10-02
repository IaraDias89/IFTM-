document.getElementById("btnCadastrar").addEventListener("click", function() {
    txtUsuario = document.getElementById("txtUsuario").value;
    txtSenha = document.getElementById("txtSenha").value;

    users = JSON.parse(localStorage.getItem("users"));

    if (users == null) {
        users = [];
    }


    existe = false;
    for (i = 0; i < users.length; i++) {
        if (users[i].usuario == txtUsuario) {
            existe = true;
            break;
        }
    }

    if (existe) {
        alert("Erro: Usuário já cadastrado!");
    } else {
        users.push({ usuario: txtUsuario, senha: txtSenha });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Usuário cadastrado com sucesso!");
    }
});