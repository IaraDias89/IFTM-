document.getElementById("btnEntrar").addEventListener("click", function() {

    if (document.getElementById("login").value == "") {

        alert("Digite o Login!");

    } else {

        if (document.getElementById("senha").value !=
            document.getElementById("confirmarSenha").value) {

            document.getElementById("senha").value = "";
            document.getElementById("confirmarSenha").value = "";

            alert("A senha e a confirmação da senha são diferentes!");

        } else {

            alert("Todos os campos foram digitados corretamente!");

        }
    }

});


document.getElementById("btnLimpar").addEventListener("click", function() {

    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confirmarSenha").value = "";

});