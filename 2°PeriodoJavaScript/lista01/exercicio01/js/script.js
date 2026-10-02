primeiroNome = prompt("Digite seu primeiro nome:");
sobrenome = prompt("Digite seu sobrenome:");
if (primeiroNome != null && sobrenome != null) {
    nomeCompleto = primeiroNome + " " + sobrenome;
    alert(`Seu nome completo é: ${nomeCompleto}`);
}