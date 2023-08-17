/*
HACER UNA FUNCION PARA CADA NUMERO:
int ContarMultiplosde2(int n)
int ContarMultiplosde3(int n)
int ContarMultiplosde4(int n)
int ContarMultiplosde5(int n)

El desafío de Bino
Bino y Cino son amigos cercanos. A Bino le gusta crear desafíos matemáticos para que
Cino los resuelva. Esta vez, Bino creó una lista de números y le preguntó a Cino: ¿Cuantos
números son múltiplos de 2, 3, 4 y 5?
Este desafío parece simple, pero si la lista contiene muchos números, Cino cometerá
algunos errores de cálculo. Para ayudar a Cino, haga un programa que resuelva el Desafío
de Bino.
Entrada
La primera línea de entrada consiste de un entero N (1 ≤ N ≤1000), que representa la
cantidad de números en la lista de Bino.
La segunda línea contiene N enteros Li (1 ≤ Li ≤ 100), que representan los números en la
lista de Bino.
Salida
Mostrar la cantidad de múltiplos de 2, 3, 4 y 5 en la lista. Nótese que el formato de la salida
mostrado en el ejemplo debe ser seguido estrictamente.

*/
function contarMultiplosde2(input){
	let counter = 0;
      
	if(input%2 == 0){
		counter++;
	}
	return counter;
}
function contarMultiplosde3(input){
	let counter = 0;

	if(input%3 == 0){
		counter++;
	}
	return counter;
}
function contarMultiplosde4(input){
	let counter = 0;

	if(input%4 == 0){
		counter++;
	}
	return counter;
}
function contarMultiplosde5(input){
	let counter = 0;

	if(input%5  == 0){
		counter++;
	}
	return counter;
}

function Voider(input,length){
	for(let i = 0; i<length; i++){
		input[i] = 0;
	}
}

let input;
let quantity = 0;
let canEnd = 0;
let multiples = new Array(4);

Voider(multiples,4);	

quantity = prompt("¿Cuantos numeros quiere ingresar?: ","")

for(let i = 0; i<quantity; i++){
	input = parseInt(prompt("Ingrese un número: ",""));
	if(quantity != null && input != null){
		multiples[0] += contarMultiplosde2(input);
		multiples[1] += contarMultiplosde3(input);
		multiples[2] += contarMultiplosde4(input);
		multiples[3] += contarMultiplosde5(input);
	}
	else{
		canEnd = 1;
	}
}
for(let i = 0; i<=3; i++){
	document.write(`Multiplos de ${ i + 2 }: ${ multiples[ i ] }<br/>`);
}
