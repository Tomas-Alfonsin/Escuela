/* Entrada: Línea única que contiene dos enteros separados por espacios, a y b respectivamente. 
 Salida: Todos los enteros (en un vector) entre a y b (incluidos a y b), 
 que satisfacen las condiciones mencionadas en la declaración, separados por un solo espacio.
*/

let a = prompt("Ingrese A: ");
let b = prompt("Ingrese B: ");

primeNumberStore.init();
primeNumberStore.getPrimeNumbers(b);

let stringPrime = primeNumberStore.primeNumbers.join(" ");


for(let i = 0; primeNumberStore.primeNumbers[i] <= b && primeNumberStore.primeNumbers[i] != -1; i++){
    if(stringPrime[i] != " "){
            document.write(`${stringPrime[i]} + ${stringPrime[i+1]}<br>`); 
    } 

}

