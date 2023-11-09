// Ejercicio 5

document.write(`<h1>Ejercicio 5 - Trabajo Practico 3</h1>`);

function infoCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        document.write('La cadena esta formada por Mayúsculas')
    } else if (cadena === cadena.toLowerCase()) {
        document.write('La cadena está formada por minúsculas.');
    } else {
        document.write('La cadena es una mezcla de mayúsculas y minúsculas.');
    }
}

infoCadena(prompt('Ingrese un texto'));

// Textos de prueba
//SOLO MAYÚSCULAS
//solo minúsculas
//MAYÚSCULAS Y minúsculas