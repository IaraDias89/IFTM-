textoOriginal = prompt("Digite um texto para verificar se é um palíndromo:");

textoLimpo = textoOriginal.toUpperCase().replace( / /g, " ");

textoInvertido = textoLimpo.split("").reverse().join("");

if(textoLimpo == textoInvertido && textoLimpo != "") {
    alert("O texto \"" + textoOriginal + "\" É um palíndromo!");
} else {
    alert("O texto \"" + textoOriginal + "\" NÃO é um palíndromo!");
}