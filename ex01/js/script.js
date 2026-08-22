primeiroNome = prompt("Digite o seu primeiro nome:");
sobrenome = prompt("Digite o seu sobrenome:");
quantidadeN = prompt("Quantas vezes deseja exibir o nome completo?");
corDesejada = prompt("Digite a cor desejada (ex: red, blue, green ou hexadecimal):");


nomeCompleto = primeiroNome + " " + sobrenome;


for (i = 1; i <= quantidadeN; i++) {
    if (i % 2 === 0) {
        document.write("<span style='color: " + corDesejada + ";'>" + nomeCompleto + "</span><br>");
    } else {
        document.write("<span style='color: black;'>" + nomeCompleto + "</span><br>");
    }
}