/*
Entrada
La entrada consta de una serie de casos de prueba. Cada uno comienza con un numero que indica la cantidad de valores 
que tiene la muestra. A continuacion se dan los valores de la muestra, todos numeros enteros positivos,
de los que habra que calcular la mediana multiplicada por dos.
La entrada terminara con una serie de 0 valores.

Salida
Para cada caso de prueba se mostrar ́el doble de la mediana de los valores dados.
*/

function getMediana(input){

	let mediana = 0;
	let length = input.length;

	input.sort((a,b)=>a-b);

	if(length%2 == 0){
		mediana = (input[length/2-1] + input[length/2]) / 2;
	}
	else{
		mediana = input[(length-1) / 2];
	}
	return mediana;
}

let length = parseInt(prompt("Cuantos números quiere ingresar?: "));

let input = new Array(length);
let mediana = 0;
let canEnd = 0;

for(let i = 0; i<length; i++){
	input[i] = parseInt(prompt("Ingrese un número: "));
	if(input == null){
		canEnd = 1;
	}
}
mediana = getMediana(input) * 2;
document.write(`La mediana es: " ${mediana} `);