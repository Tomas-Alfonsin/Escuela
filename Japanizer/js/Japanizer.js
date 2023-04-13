/*
Entrada
La entrada consiste en una l ́ınea con un n  ́umero n entre 1 y 1000, seguido de n l ́ıneas,
cada una de las cuales contiene un nombre. Un nombre es una o m  ́as palabras formadas
unicamente por letras del alfabeto ingl ́es (min  ́usculas y may  ́usculas, sin acentuar). Las pal-
abras est  ́an separadas entre ellas por un espacio. Una palabra tiene como mucho 40 letras, y
un nombre nunca tendr  ́a m  ́as de 10 palabras.
Vuestro programa debe resolver 3 entradas como las descritas en un tiempo de un segundo.

Salida
La salida consiste en n l ́ıneas siguiendo el formato “Konnichi wa, NOMuBuRE-san”, donde
NOMuBuRE es la japonizaci  ́on del NOMBRE le ́ıdo. Hay que respetar la capitalizaci  ́on del
nombre le ́ıdo, pero las letras ‘u’ que se a  ̃nadan deben ser siempre min  ́usculas.
*/
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