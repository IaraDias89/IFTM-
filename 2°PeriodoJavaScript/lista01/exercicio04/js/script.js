nota1 = parseFloat(prompt("Digite a nota do 1º bimestre:"));
nota2 = parseFloat(prompt("Digite a nota do 2º bimestre:"));
soma = nota1 + nota2;
if (soma >= 60) {
    alert(`Aprovado! Soma das notas: ${soma}`);
} else {
    faltam = 60 - soma;
    alert(`Reprovado! Faltam ${faltam} pontos para a aprovação`);
}