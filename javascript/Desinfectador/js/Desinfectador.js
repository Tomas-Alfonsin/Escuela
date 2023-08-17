/*
Datos de entrada
Se recibe un archivo antivirus.in
con dos líneas:
• La primera línea contiene la cantidad de
caracteres del texto infectado, seguido de
los dos caracteres elegidos por el virus,
separados por un espacio.
• La segunda línea contiene el texto
infectado.

Datos de salida
Se debe generar un archivo
antivirus.out conteniendo dos líneas:
• La primera línea contiene la cantidad de
caracteres del texto desinfectado.
• La segunda línea contiene el texto
desinfectado.
Restricciones
• Tanto los caracteres que elige el virus
como los caracteres del texto pueden ser
cualquier letra del alfabeto, excepto la ñ,
en minúsculas y sin acentos.
• La longitud máxima del texto a
desinfectar es de 255 caracteres.
*/
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
