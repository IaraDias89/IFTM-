idade = prompt("Qual é a sua idade? ");
if (idade != null) {// o botao cancelar foi pressionado
       if (idade != "")
           alert(`Você tem ${idade} anos`);
       else
           alert("Você não tem informou uma idade válida");
}
