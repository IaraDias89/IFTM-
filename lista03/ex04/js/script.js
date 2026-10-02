 btnResultado = document.getElementById("btnResultado");

btnResultado.addEventListener("click", function() {

nota1 = document.getElementById("nota1");
nota2 = document.getElementById("nota2");


   notaFinal = parseFloat(nota1.value) + parseFloat(nota2.value);


    if (notaFinal >= 60.0) {
        alert("Aprovado!");
    } else {
        alert("Reprovado!");
    }
});