// Ejercicio 4A

document.write(`<h1>Ejercicio 4A - Trello - Trabajo Practico 3</h1>`);

function esPrimo(valor) {
  if (valor < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(valor); i++) {
    if (valor % i === 0) {
      return false;
    }
  }
  return true;
}

function numerosPrimos(numero) {
  const primos = [];
  for (let i = 2; i <= numero; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }
  return primos;
}

const numero = parseInt(prompt("digite un numero entero"));
const arrayPrimos = numerosPrimos(numero);

document.write(`Los números primos hasta ${numero}: ${arrayPrimos}`);
