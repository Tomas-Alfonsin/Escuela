/*
 Hacer un programa que muestre mediante una función llamada
 EsNarciso (n) muestre el listado de los números narcisos hasta el número ingresado
*/
function esNarciso(input){
	input = input.toString();
	let suma = 0;
	for(let i = 0; i<input.length; i++){
		suma += Math.pow(parseInt(input[i]),input.length);
	}
	return suma == input;
}

let input;
input = parseInt(prompt("Ingrese un número: ",""));
for(let i = 0; i<=input; i++){
	if(esNarciso(i)){
		document.write(i+" Es narciso<br>");
	}
}