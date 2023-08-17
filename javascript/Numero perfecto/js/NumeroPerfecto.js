/*
Realizar un programa que liste TODOS los números perfectos hasta un numero ingresado.
*/
function esPerfecto(input){	
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
	return sumaDivisoresPropios == input;

}

let input;
input = prompt("Ingrese un número: ","")
for(let i = 0; i<=input; i++){
	if(esPerfecto(i)){
		document.write(i+" Es perfecto<br>");
	}
}