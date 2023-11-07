// Ejercicio 1 tp 3

document.write(`<h1>Ejercicio 1 Trabajo Practico 3</h1>`)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

document.write("<h2>Lista de Meses</h2>");
document.write(`<ul>`);
for (let i = 0; i < meses.length; i++) {
  document.write(`<li>${meses[i]}</li>`);
}
document.write(`</ul>`);


