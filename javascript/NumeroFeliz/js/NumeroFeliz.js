/*
 * Devuelve true si el numero es feliz
 * numero es feliz cuando:
 * La suma de sus cifras elevado al cuadrado
 * da un numero al cual se pueda sumar sus cifras elevadas al cuadrado
 * hasta que la cifra final sea 1 
 */

function esFeliz(input){
	if(input == 1 || input == 7){
		return true;
	}
	else if(input < 10){
		return false;
	}
	input = input.toString();
	let resultado;
	let aux = input;
	console.log("INPUT"+input);
	for(let i = 0; i < input.length; i++){
		resultado = resultado * resultado + aux;
		if(resultado == 1){
			return true;
		}
	}
}
let input;
input = parseInt(prompt("Ingrese un número: ",""));
for(let i = 0; i<=input; i++){
	if(esFeliz(i)){
		document.write(i+" Es feliz<br>");
	}
}