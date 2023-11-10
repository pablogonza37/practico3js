// Ejercicio 3A

document.write(`<h1>Ejercicio 3A - Trello - Trabajo Practico 3</h1>`);

function conversorGrados(temperatura) {
  return (temperatura * 9) / 5 + 32;
}

const gradoCelsius = parseFloat(
  prompt("Ingrese valor de temperatura en grados Celsius")
);

document.write(
  `La temperatura en grados Fahrenheit es : ${conversorGrados(gradoCelsius)} °F`
);
