btnDobrar = document.getElementById("btnDobrar");

btnDobrar.addEventListener("click", function() {
    valor = parseFloat(document.getElementById("txtValor").value);
    dobro = valor * 2;
    document.getElementById("txtDobro").value = dobro;
});