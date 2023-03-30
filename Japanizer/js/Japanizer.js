function japonizer(input){
	let length = input.length;
	let vocales = "aAeEiIoOuUnN";
	let nombre = "";
	for(let i = 0; i<length; i++){
			if( !vocales.includes(input[i]) && !vocales.includes(input[i + 1]) && input[i] != " "){
				nombre += input.charAt(i)+"u";
			}
			else{
				nombre += input.charAt(i);
			}
	}
	return nombre;
}

let quantity;
let input;
quantity = parseInt(prompt("Ingrese la cantidad de nombres a japonizar: ",""));
for(let i = 0; i<quantity; i++){
	input = prompt("ingrese un nombre: ","");
	document.write(japonizer(input)+"-san<br>");
}