/* Entrada: Línea única que contiene dos enteros separados por espacios, a y b respectivamente. 
 Salida: Todos los enteros (en un vector) entre a y b (incluidos a y b), 
 que satisfacen las condiciones mencionadas en la declaración, separados por un solo espacio.
*/

let a = prompt("Ingrese A: ");
let b = prompt("Ingrese B: ");

primeNumberStore.init();
primeNumberStore.getPrimeNumbers(b);

for(let i = 0; i<= b; i++){
    if(primeNumberStore.primeNumbers[i] != -1){
        document.write(`${primeNumberStore.primeNumbers[i]}<br>`);
    }
}

