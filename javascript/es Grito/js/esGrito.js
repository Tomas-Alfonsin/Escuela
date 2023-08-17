/*
Entrada
El programa deber ́a leer, de la entrada est ́andar, los mensajes recibidos desde el servidor por la
aplicaci ́on de mensajer ́ıa instant ́anea, cada uno en una l ́ınea. Estar ́an compuestos de entre 1 y 1.000
caracteres, formados  ́unicamente por letras del alfabeto ingl ́es, espacios, signos de exclamaci ́on (solo de
cierre, por supuesto), y otros signos ortogr ́aficos.

Salida
Por cada l ́ınea de la entrada, el programa escribir ́a ESGRITO si el texto tiene m ́as signos de exclamaci ́on
que letras (del abecedario ingl ́es), y escrito en caso contrario.
*/
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
