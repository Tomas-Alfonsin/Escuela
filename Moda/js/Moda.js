/*
Ingresar un valor N
generar un vector de números aleatorios (menores a 600) llamado A de N elementos.
Ordenar el vector
Realizar una función que calcule la moda del vector (el valor que más se repite)
Mostrar vector y moda
*/
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function Voider(input,length){
  for(let i = 0; i<length; i++){
    input[i] = 0;
  }
}
function getMostRepeatedNumber(input){
  let length = input.length;
  let mostRepeated = new Array(length);
  let max = 0;
  Voider(mostRepeated,length);
  for(let i = 0; i < length; i++){
    for(let j = 0; j < length; j++){
      if(input[i] == input[j]){
        mostRepeated[i]++;
      }
    }
  }
  for(let i = 0; i < length; i++){
    if(mostRepeated[i] > mostRepeated[i+1] && i+1 <= length){
      max = i;
    }
    else if(mostRepeated[i] == mostRepeated[i+1] && i+1 <= length){
      max = 
    }
  }
  return input[max];
}
let input;
let moda = 0;
input = prompt("Ingrese la cantidad de numeros: ","");
let vector = new Array(input);
for(let i = 0; i < input; i++){
  if(input != null){
    vector[i] = getRandomNumber(0,5)
  }
}

moda = getMostRepeatedNumber(vector);
console.log(vector)
console.log(moda);