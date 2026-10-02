//criar objeto começa criando chave , os dois pontos adiciona o valor
user = {usuario: "iara", senha:"123"};

//transforma o objeto em uma string json 
//local storage não aceita que seja colocado um objeto, tem que ser uma string
 localStorage.setItem("user", JSON.stringify(user));


