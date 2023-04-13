/*
	Ingresar una frase y convertirla a cesar con una función llamada ConvertirFrase(frase, cantDesplazamiento) 
	devolver la nueva frase
*/
function convertirFrase(input,factor){
	let numberInput = {}; // Input to ASCII code
	let newInput = ""; // ASCII code to new caesar encryption

	for(let i = 0; i<input.length; i++){
		numberInput[i] = input.charCodeAt(i); // 97 - 122
		console.log(numberInput);
	}
	for(let i = 0; i<input.length; i++){
		if((numberInput[i] + factor) <= 122 && (numberInput[i] + factor >= 97)){
			numberInput[i] += factor;
		}
		else if((numberInput[i] + factor) > 122){
			numberInput[i] = numberInput[i] + factor - 122;
			numberInput[i] += 96;
		}
		else if(numberInput[i] + factor < 97){
			numberInput[i] = 97 - numberInput[i] + 122;
		}
	}
	console.log( numberInput )
	for(let i = 0; i<input.length; i++){
		newInput += String.fromCharCode(numberInput[i]);
	}
	console.log(newInput);
}

let input;
let factor;
let canEnd = 0;
while(canEnd != 1){
	input = prompt("Ingrese texto a codificar: ","");
	factor = parseInt(prompt("Ingrese el factor a codificar: "));
	if(input != null && factor != null){
		convertirFrase(input,factor);
	}
	else{
		canEnd = 1;
	}
}
