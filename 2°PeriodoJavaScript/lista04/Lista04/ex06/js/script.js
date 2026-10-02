
users = JSON.parse(localStorage.getItem("users"));


if (users == null) {
    document.write('<p>Não há usuário cadastrado</p>');
} else {

    for (i = 0; i < users.length; i++) {
        // Usa CRASE (`) para interpolação de variáveis com ${}
        document.write(`<p>Usuário ${i}:${users[i].usuario}</p>`);
    }

    console.log(users[0].usuario);
}
//mostrar posição // para usuario sair o nome do usuario da posição




//nome da variavel.atributo sai o resultado no console ou na interface

//o q esta guardado é string 


