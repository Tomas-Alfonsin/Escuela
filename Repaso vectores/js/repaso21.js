/**
 * Cree una función que devuelva un número
 * entero correspondiente a la cantidad de dígitos en el número entero dado.
 */

let input = parseInt(prompt("Ingrese un numero: "));

function countNumber(number){
    let count = 0;
    for(let i = 0; i<16; i++){
        if(number >= 1){
            count++;
            number = number /10;
        }
    }    
}
document.write(`La cantiad de cifras es: ${countNumber(input)}`);