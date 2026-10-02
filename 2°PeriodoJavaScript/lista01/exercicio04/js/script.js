nota1 = prompt("Digite a nota do 1º bimestre:");
nota2 = prompt("Digite a nota do 2º bimestre:");

if (nota1 != null && nota2 != null) {
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    soma = nota1 + nota2;

    if (soma >= 60) {
        alert(`Aprovado! Soma das notas: ${soma}`);
    } else {
        faltam = 60 - soma;
        alert(`Reprovado! Faltam ${faltam} pontos para a aprovação`);
    }
}
