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

let input;
let quantity = 0;
let canEnd = 0;
let multiples = [0,0,0,0];

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
