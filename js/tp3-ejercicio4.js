// Ejercicio 4

document.write(`<h1>Ejercicio 4 - Trabajo Practico 3</h1>`);

function parImpar(numero){
    if(numero % 2 === 0){
        document.write(`El numero ${numero} es Par`);
    }else {
        document.write(`El numero ${numero} es Impar`);
    }
}

parImpar(parseInt(prompt('Ingrese un numero entero')));
