nomeCompleto = prompt("Digite o seu nome completo: ");

//1º Passo: Converte tudo para letras minusculas e depois transforma a string em vetor
// Ex: "Wilton de Paula Filho "->[wilton|de|paula|filho]

nomeCompleto = nomeCompleto.toLoweCase().split(" "); //quebra o nome pelo espaço em branco



//2º passo: converter a primeira palavra do nome que está na posição 0 do vetor para letras maiúsculas
//EX: [WILTON|de|paula|filho|

nomeCompleto[0] = nomeCompleto[0].toUpperCase();


alert(nomeCompleto); 


//3º passo: converter o vetor numa string
//EX: [WILTON|de|paula|filho| -> "WILTON de paula filho"
nomeCompleto.join(" ");

alert(nomeCompleto);

