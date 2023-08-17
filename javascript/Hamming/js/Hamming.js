/*
Realizar una función que calcule la diferencia de Hamming. Mostrar vectores y diferencia
*/

function getHammingDistance(x,y){
	let counter = 0;
	x = x.split("");
	y = y.split("");
	for(let i = 0; i < x.length; i++){
		if(x[i] != y[i]){
			counter++;
		}
	}
	return counter;
}

let input = new Array(2);
let hamming = 0;

input[0] = prompt("Ingrese un numero","");
input[1] = prompt("Ingrese otro numero","");

hamming = getHammingDistance(input[0],input[1]);
console.log(hamming)