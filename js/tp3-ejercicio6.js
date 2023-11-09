// Ejercicio 6

document.write(`<h1>Ejercicio 6 - Trabajo Practico 3</h1>`);

function perimetro(base, altura){
    return 2*(base + altura);
}

const base = parseFloat(prompt('Digite la base del triangulo'));

const altura = parseFloat(prompt('Digite la altura del triangulo'));

document.write(`El perimetro del triangulos es de ${perimetro(base, altura)}`);