/*
Datos de entrada
Se recibe un archivo de texto SECRETO.IN
del directorio actual, que contiene una única línea
con una cantidad máxima de 500 caracteres. Esta
línea consta de letras, números, signos de pun-
tuación y posiblemente paréntesis producto del
encriptado.
Datos de salida
El programa SECRETO.EXE debe generar el

archivo SECRETO.OUT con el mensaje decodificado, en el directorio actual.
*/
function mensajeSecreto(input){
	let start = 0;
	let end = 0;
	let reversedInput = "";
	let secretInput = "";
	let newInput = "";

	for(let i = 0; i<input.length; i++){
		if(input.charAt(i) == "("){
			start = i+1;
		}
		else if(input.charAt(i) == ")"){
			end = i-1;
		}
	}
	for(let i = start; i<=end; i++){
		secretInput += input[i];
	}
	reversedInput = secretInput.split( '' )
						       .reverse()
						       .join("");

	newInput = input.split('');
	
	let counter = 0;

	for(let i = start; i <= end; i++){
		newInput[i] = reversedInput[counter];
		counter++;
	}
	newInput[start-1] = "";
	newInput[end+1] = "";
	newInput = newInput.join('');
	console.log(newInput)
	return newInput;

}

let input;
let output;

input = prompt("Ingrese un mensaje","");

output = mensajeSecreto(input);

document.write(output);