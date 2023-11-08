// Ejercicio 2 tp 3

document.write(`<h1>Ejercicio 2 Trabajo Practico 3</h1>`);

const ciudades = [];
do {
  ciudades.push(prompt("Por favor, ingrese nombre de ciudad"));
} while (confirm("Desea seguir agregando ciudades?"));

document.write(
  `<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`
);

document.write(`<ul>`);
document.write(`<li>Elemento en la 1er posicion: ${ciudades[0]}</li>`);
document.write(`<li>Elemento en la 3er posicion: ${ciudades[2]}</li>`);
document.write(
  `<li>Elemento en la ultima posicion: ${
    ciudades[ciudades.length - 1]
  }</li></br>`
);
ciudades.push("Paris, Francia");
document.write(
  `<li>Elemento en la ultima posicion: ${ciudades[ciudades.length - 1]}</li>`
);

document.write(`</ul>`);
document.write(`<h2>Arreglo de Ciudades (${ciudades.length} elementos)</h2>`);
document.write(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>Elemento: ${ciudades[i]}</li>`);
}
document.write(`</ul>`);
