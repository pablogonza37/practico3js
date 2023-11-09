// Ejercicio 3 tp 3

document.write(`<h1>Ejercicio 3 - Trabajo Practico 3</h1>`);

const sumaDadosArray = new Array(11).fill(0);

for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const suma = dado1 + dado2;
  sumaDadosArray[suma - 2]++;
}

document.write('<table>');
document.write('<tr>');
        document.write('<th>Suma</th>');
        document.write('<th>Apariciones</th>');
        document.write('</tr>');
for (let i = 2; i <= 12; i++) {
    document.write('<tr>');
    document.write(`<td>${i}</td>`);
    document.write(`<td>${sumaDadosArray[i - 2]}</td>`);
    document.write('</tr>');
}
document.write('</table>');


