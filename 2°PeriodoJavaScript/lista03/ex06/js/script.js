val1 = document.getElementById("val1");
val2 = document.getElementById("val2");
resultado = document.getElementById("resultado");


val1.addEventListener("input", function() {
resultado.value = "";
});

val2.addEventListener("input", function() {
resultado.value = "";
});

function validarCampos() {
    if(val1.value == "" || val2.value == "") {
        alert("Digite os dois valores!");
        return false;
    }
    return true;
}

//soma
document.getElementById("btnSomar").addEventListener("click", function(){
    if(validarCampos()) {
        resultado.value = parseFloat(val1.value) + parseFloat(val2.value);
    }
});

//subtração
document.getElementById("btnSubtrair").addEventListener("click", function() {
    if(validarCampos()) {
        resultado.value = parseFloat(val1.value) - parseFloat(val2.value);
    }
})

//multiplicação
document.getElementById("btnMultiplicar").addEventListener("click", function() {
    if(validarCampos()) {
        resultado.value = parseFloat(val1.value) * parseFloat(val2.value);
    }
});

//divisão
document.getElementById("btnDividir").addEventListener("click", function () {
    if(validarCampos()) {
        numero2 = parseFloat(val2.value);

        if(numero2 == 0) {
        alert("Erro: Não é permitido a divisão por zero!");
        return;
        }

        resultado.value = parseFloat(val1.value) / numero2;
    }
});