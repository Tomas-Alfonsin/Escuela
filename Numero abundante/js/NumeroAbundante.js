/*
Realizar un programa que liste todos los numeros abdundantes hasta un numero ingresado con una función llamada 
EsAbundante(n) que devuelve un valor boolean.
*/
function esAbundante(input){	
	let divisoresPropios = [input];
	let sumaDivisoresPropios = 0;
	for(let i = 0; i<= input; i++){
		if(input % i == 0 && i != 0 && i != input){
			divisoresPropios[i] = i;
		}
		else{
			divisoresPropios[i] = 0;
		}		
	}
	for(let i = 0; i<=input; i++){
		sumaDivisoresPropios += divisoresPropios[i];
	}
	return sumaDivisoresPropios > input;

}

let input;
input = prompt("Ingrese un número: ","")
for(let i = 0; i<=input; i++){
	if(esAbundante(i)){
		document.write(i+" Es abundante<br>");
	}
}