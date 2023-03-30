/**
Entrada
	La entrada estar ́a compuesta por m ́ultiples casos de prueba. Cada caso de prueba es una  ́unica l ́ınea
	con una palabra o frase de no m ́as de 100 caracteres. En ella puede haber tanto letras may ́usculas como
	min ́usculas del alfabeto ingl ́es y uno o varios espacios separando palabras (eso s ́ı, las l ́ıneas empezar ́an y
	terminar ́an siempre con letra, nunca con espacios). A riesgo de comprometer la ortograf ́ıa y la sem ́antica,
	las palabras no contendr ́an tildes y los signos de puntuaci ́on se omiten.
	El  ́ultimo caso de prueba va seguido de una l ́ınea con XXX que marca el final y no debe ser procesada.

Salida
	Por cada caso de prueba se escribir ́a SI si la palabra o frase es pal ́ındroma y NO en caso contrario.
*/
function palindromo(input){
	let length = input.length;
	let inputReversed;
	input = input.replaceAll(" ", "");		// Removes spaces

	inputReversed = input.split('');              // 
	inputReversed = inputReversed.reverse();	 //	Creates a reversed input
	inputReversed = inputReversed.join("");		//
	/*inputReversed = input.split( '' )
						 .reverse()
						 .join("")
	*/
	input = input.toLowerCase();					// Lower case the strings
	inputReversed = inputReversed.toLowerCase();

	if(inputReversed == input){		// Compares if they are equals
		return true;
	}
	else{
		return false;
	}
}

let input;
let canEnd = 0;

while(canEnd != 1){
	input = prompt("Ingrese un texto: ","")

	if(input != null){
		if(palindromo(input) && input){
			document.write(input+" -Es palindromo<br>");
		}
		else{
			document.write(input+" -No es palindromo<br>")
		}
	}
	if(input == null){
		canEnd = 1;
	}

}
document.write("XXX");