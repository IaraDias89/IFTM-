texto = prompt("Digite um texto: ");

vetor = texto.split(" ");

iniciais = "";
for(i = 0; i<vetor.lenght; i++) {
   //iniciais = iniciais + vetor[i].charAt(0)
   if(vetor[i].lenght > 2) // eliminar artigo e preposição
   inicias += vetor[i].charAt(0);
}

alert(iniciais);
