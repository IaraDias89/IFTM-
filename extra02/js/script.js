texto = prompt("Digite um texto: ", "A mola caiu perto da mola.");

letraProcurada = prompt("Qual a letra deseja procurar?", "m");
letraSubstituta = prompt("Qual a letra deseja colocar no lugar?", "b");

vetor = texto.split(" ");

for(i = 0; i < vetor.length; i++) {
    if(vetor[i].charAt(0) == letraProcurada) {
        vetor[i] = letraSubstituta + vetor[i].slice(1);
    }
}


resultado = vetor.join(" ");

alert(resultado);