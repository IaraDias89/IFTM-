texto = prompt("Digite um texto:", "A mola caiu perto da mala.");
letraBuscada = prompt("Qual letra deseja procurar no início das palavras?", "m");


letraBuscada = letraBuscada.toUpperCase();

vetor = texto.split(" ");
palavrasEncontradas = "";

for (i = 0; i < vetor.length; i++) {
    primeiraLetra = vetor[i].charAt(0).toUpperCase();
    
    if (primeiraLetra == letraBuscada) {
        palavrasEncontradas += vetor[i] + " ";
    }
}

document.write(`Palavras iniciadas com a letra ${letraBuscada} ${palavrasEncontradas}`);