nomeCompleto = prompt("Digite o seu nome completo").trim();
//trim retira os espaços

if(nomeCompleto != null) { //Pressionou o btn "ok"?
  if (nomeCompleto != " ") { 
    document.write(`<p>${nomeCompleto}</p>`);
    document.write(`<p>${nomeCompleto} tem ${nomeCompleto.length} caracteres</p>`);
  }
  else 
 document.write(`<p>Nome inválido, tente novamente!</p>`);
}

 
