function esGrito(input){
	let length = input.length;
	let grito = 0;
	let noGrito = 0;
	for(let i = 0; i<length; i++){
		if(input.charAt(i) == "!"){
			grito++;
		}
		else{
			noGrito++;
		}
	}
	if(grito > noGrito){
		return true;
	}
}

let input;
let canEnd = 0;
while(canEnd != 1){
	input = prompt("Ingrese un texto: ","");
	if(input != null){
	if(esGrito(input)){
		document.write(input+" -ESGRITO.<br>");
	}
	else{
		document.write(input+" -escrito.<br>");
	}
}
	if(input == null){
		canEnd = 1;
	}
}	
