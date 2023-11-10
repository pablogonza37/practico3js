// Ejercicio 1A

document.write(`<h1>Ejercicio 1A- Trello - Trabajo Practico 3</h1>`);

function numeroMayor(arreglo) {
  let numMax = 0;
  for (let i = 0; i <= arreglo.length; i++) {
    if (arreglo[i] > numMax) {
      numMax = arreglo[i];
    }
  }
  return numMax;
}

// Arrays de prueba
const arr = [15, 17, 48, 45, 500, 27, 47, 120];
//const arr = [54, 6, 78, 43, 605, 68, 493, 574]; 

document.write(`El numero mayor es: ${numeroMayor(arr)}`);
