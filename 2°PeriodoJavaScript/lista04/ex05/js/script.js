//variavel e seu valor, todo objeto tem seu atributo e o valor


//criar um vetor contendo varios objetos
// Opção 2: Usando "user" em ambos os lugares
user = [
    { usuario: "iara", senha: "123" },
    { usuario: "iara1", senha: "123" },
    { usuario: "pedro", senha: "abc" }
];

localStorage.setItem("users", JSON.stringify(user));
