nome = prompt("Digite seu nome completo:");
idade = prompt("Digite sua idade:");
if (idade != null) {
    if (idade >= 18) {
        alert(`${nome}, você já POSSUI idade para tirar carteira`);
    } else {
        anosFaltando = 18 - idade;
        alert(`${nome}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${anosFaltando} anos`);
    }
}