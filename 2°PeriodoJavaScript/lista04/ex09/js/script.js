document.getElementById("btnLogin").addEventListener("click", function() {

    txtUsuario = document.getElementById("txtUsuario").value;
    txtSenha = document.getElementById("txtSenha").value;


    users = JSON.parse(localStorage.getItem("users"));


    existe = false;

 
    if (users != null) {
        for (i = 0; i < users.length; i++) {
            if (users[i].usuario == txtUsuario && users[i].senha == txtSenha) {
                existe = true;
                break;  
            }
        }
    }


    if (existe) {
        alert("USUÁRIO JÁ EXISTENTE");
    } else {
        alert("USUÁRIO INEXISTENTE");
    }
});