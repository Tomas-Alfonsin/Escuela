/*Generar dos vectores  con  números aleatorios de N cantidad ingresada por el usuario
Hacer una funcion que devuelva un vector que devuelva la verificación del problema planteado en el pdf.
Mostrar los 3 vectores . Utilizar procedimiento*/

let n = prompt("Digite la cantidad de elementos del vector: ");

vectorA = new Array(n);
vectorB = new Array(n);

for(let i = 0; i<n; i++){
    vectorA[i] = getRandomNumber(0,100);
    vectorB[i] = getRandomNumber(0,100);
}
console.log(vectorA,vectorB);

let houston = getHouston(vectorA, vectorB);

document.write(`${vectorA}<br>${vectorB}<br>${houston}`);

