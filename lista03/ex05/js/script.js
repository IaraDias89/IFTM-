 btnResultado = document.getElementById("btnResultado");
 nota1 = document.getElementById("nota1");
 nota2 = document.getElementById("nota2");

btnResultado.addEventListener("click", calcularResultado);

function calcularResultado() {
     notaFinal = parseFloat(nota1.value) + parseFloat(nota2.value);

    if (notaFinal >= 60) {
        alert(`Aprovado! Nota final: ${notaFinal}`);
    } else {
        alert(`Reprovado! Faltou(ram) ${60 - notaFinal} pontos!`);
    }
}