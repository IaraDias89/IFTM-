textoOriginal = prompt("Informe um texto:", "O carro quebrou na estrada de São Paulo. O carro foi levado para a oficina.");
palavraAntiga = prompt("Informe a primeira palavra:", "carro");
palavraNova = prompt("Informe a segunda palavra:", "caminhão");

textoModificado = textoOriginal.replaceAll(palavraAntiga, palavraNova);

alert("Mensagem final:\n" + textoModificado);