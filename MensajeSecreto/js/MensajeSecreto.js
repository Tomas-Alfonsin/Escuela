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
	newInput = newInput.join('');
	console.log(newInput)

	return newInput;

}

let input;
let output;

input = prompt("Ingrese un mensaje","");

output = mensajeSecreto(input);

document.write(output);