// Ejercicio 7

document.write(`<h1>Ejercicio 7 - Trabajo Practico 3</h1>`);

function tablaMultiplicacion(numero) {
  document.write("<table>");
  document.write("<tr>");
  document.write("<th>Multiplicacion</th>");
  document.write("<th>Resultado</th>");
  document.write("</tr>");
  for (let i = 1; i <= 10; i++) {
    document.write("<tr>");
    document.write(`<td>${numero} x ${i} </td>`);
    document.write(`<td>${numero * i}</td>`);
    document.write("</tr>");
  }
  document.write("</table>");
}

const numero = parseInt(prompt("Ingrese numero"));

tablaMultiplicacion(numero);
