// Confeccionar un programa que requiera el módulo 'os' para recuperar el espacio libre de memoria.
// Mostrar inicialmente el epacio libre mediante el método freemem()
// Luego crear un vector y mediante el método push almacenar 1000000 de enteros.
// Mostrar luego de la creación y carga del vector la cantidad de espacio libre.
const os = require('os');

console.log("Free memory: "+os.freemem());

let vec = new Array();

vec.push(1000000)

console.log("Free memory: "+os.freemem());
