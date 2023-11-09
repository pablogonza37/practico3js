// Ejercicio 6

document.write(`<h1>Ejercicio 6 - Trabajo Practico 3</h1>`);

function perimetro(base, altura){
    return 2*(base + altura);
}

const base = parseFloat(prompt('Digite la base del triángulo'));

const altura = parseFloat(prompt('Digite la altura del triángulo'));

document.write(`El perímetro del triángulo es: ${perimetro(base, altura)}`);