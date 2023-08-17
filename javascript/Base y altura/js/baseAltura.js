/*
Escribir un formulario en html y un script en JS para imprimir el área 
del rectángulo  creando una clase llamada 'CRectángulo' con una función 
llamada 'CalcularArea' que devuelve el área.

La longitud y la altura se pasan como parámetros a su constructor.
*/

class CRectangulo{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    getArea(){
        return this.length * this.width;
    }
};

const input = document.getElementById("input");

input.addEventListener('submit', function(event){
    event.preventDefault();
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;

    const crectangulo = new CRectangulo(length,width);
    
    const show = document.getElementById('show');

    show.innerHTML = `El area es: ${crectangulo.getArea()}`
  }
);
  

