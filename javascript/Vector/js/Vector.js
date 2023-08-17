/*
Generar un vector llamado A de N elementos (N ingresado por teclado) con números aleatorios menores a 32000.
Realizar y mostrar las siguientes funciones:
 Calcular el promedio de los elementos del vector --- devuelve un float –
 Generar un vector llamado B con los elementos mayores al promedio del vector A. -Devuelve un vector -
 Contar la cantidad de elementos que son múltiplos a la vez de 2 y 3. --- devuelve un int –
 Calcular la suma de todos los elementos del vector – devuelve un int –
 Generar un vector llamado C con los elementos del vector A multiplicado por 2. --devuelve un vector -
 Mostrar los resultados de todas las funciones y los vectores A,B y C.
*/

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function getProm(input){
    let acum = 0;
    for(let i = 0; i < input.length; i++){
        acum += input[i];
    }
    return acum/input.length;
}
function getHigherProm(input,prom){
    let B = new Array(input.length);
    for(let i = 0; i<input.length; i++){
        if(input[i] > prom){
            B[i] = input[i];
        }
    }
    return B;
}
function countMultiplesOf2And3(input){
    let counter = 0;
    for(let i = 0; i<input.length; i++){
        if(input[i] % 2 == 0 && input[i] % 3 == 0){
            counter++;
        }
    }
    return counter;
}
function getSumOfAllElements(input){
    let sum = 0;
    for(let i = 0; i<input.length; i++){
        sum += input[i];
    }
    return sum;
}
function getDouble(input){
    let C = new Array(input.length);
    for(let i = 0; i<input.length; i++){
        C[i] = input[i] * 2;
    }
    return C;
}
let input;
let promedio = 0;
input = prompt("Ingrese la cantidad de elementos","");
let A = new Array(input);

for(let i = 0; i < input; i++){
    A[i] = getRandomNumber(0,32000);
}

promedio = getProm(A);

let B = new Array(input);
B = getHigherProm(A,promedio);
let multiplesOf2And3Counter = countMultiplesOf2And3(A);
let sumOfAllElements = getSumOfAllElements(A);
let C = new Array(input);
C = getDouble(A);

document.write("Elementos de A: "+A+"<br>");
document.write("Promedio de elementos de A: "+promedio+"<br>");
document.write("Elementos mayores al promedio: "+B+"<br>");
document.write("Contador de elementos multiplos de 2 y 3: "+multiplesOf2And3Counter+"<br>");
document.write("Suma de todos los elementos: "+sumOfAllElements+"<br>");
document.write("Elementos de A * 2: "+C+"<br>");
