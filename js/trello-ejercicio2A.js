// Ejercicio 2A

document.write(`<h1>Ejercicio 2A- Trello - Trabajo Practico 3</h1>`);

function numerosPares(arreglo){
    let pares = [];
    for (let i=0; i <= arreglo.length; i++){
        if (arreglo[i] % 2 === 0){
            pares.push(arreglo[i]);
        }
    }
    return pares;
}

const arr = [3, 8 , 4, 2, 9, 7, 5, 3, 5, 4, 6, 20, 25]; // array de prueba

document.write(`Array de numeros pares: [${numerosPares(arr)}]`);