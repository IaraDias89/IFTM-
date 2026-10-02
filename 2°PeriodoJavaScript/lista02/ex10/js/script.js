numero = parseInt(prompt("Digite um valor inteiro positivo maior ou igual a 2:", "3"));

document.write("<table border='1' style='border-collapse: collapse; text-align: center; width: 50%'>");
  
document.write("<tr>");

document.write("<th>Base decimal</th>");

document.write("<th>Base binária</th>");

document.write("<th>Base hexadecimal</th>");

document.write("</tr>");

for (i = 0; i <= numero; i++) {
        decimal = i;
    binario = i.toString(2);
    hexadecimal = i.toString(16); // Opcional: .toUpperCase() se quiser letras maiúsculas (ex: A, B, C)
    
    document.write("<tr>");
    document.write("<td>" + decimal + "</td>");
    document.write("<td>" + binario + "</td>");
    document.write("<td>" + hexadecimal + "</td>");
    document.write("</tr>");
}


document.write("</table>");