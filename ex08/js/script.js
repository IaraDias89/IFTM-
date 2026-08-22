texto = prompt("Digite um texto:", "amor carro bola bexiga caminhão aranha pastel");


vetor = texto.split(" ");


alfabeto = "abcdefghijklmnopqrstuvwxyz";

for (i = 0; i < alfabeto.length; i++) {
    letraAtual = alfabeto.charAt(i);
    palavrasDaLetra = "";

    for (j = 0; j < vetor.length; j++) {
        if (vetor[j].charAt(0).toLowerCase() === letraAtual) {
            palavrasDaLetra += "<li>" + vetor[j] + "</li>";
        }
    }

    if (palavrasDaLetra !== "") {
        document.write("Palavras iniciadas com a letra " + letraAtual + ":<br>");
        document.write("<ul>" + palavrasDaLetra + "</ul>");
    }
}