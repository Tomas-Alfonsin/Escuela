function desinfectante(input,virus){
	for(let i = 0; i<input.length; i++){
		if( input.charAt(i) == virus[0] && input.charAt(i+2) == virus[0]){
			input = input.split( '' );
			input[i+1] = "";
			console.log(input);
			input = input.join( '' );
		}
	}
	return input;
}

let input;
let virus;
let canEnd = 0;
let output;

while(canEnd != 1){
	input = prompt("Ingrese el texto virus: ","");
	virus = prompt("Ingrese el virus: ","");	
	if(input != null && virus != null){
		output = desinfectante(input,virus);
		document.write(output);
	}
	else{
		canEnd = 1;
	}
}
