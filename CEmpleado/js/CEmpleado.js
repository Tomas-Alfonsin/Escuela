/*
Escriba un programa que imprima la información (nombre, año de ingreso, salario, dirección)   creando una clase llamada 'CEmpleado'. La salida debe ser la siguiente:

Name        Year of joining        Address

Robert        2014                       64C- WallStreet

Imprimir los años de antigüedad
Imprimir si el empleado vive en la calle Wall Street
*/

class CEmpleado{
    constructor(name,yoj,address){
        this.name = name;
        this.yoj = yoj;
        this.address = address;
    }
    
    show(){
        document.write(
        `Name: ${this.name}<br>
        Year of joining: ${this.yoj}<br>
        Address: ${this.address}<br>
        Antiguaty: ${this.getAntiguaty()}<br>
        `)
        if(this.address == "wall street"){
            document.write("Lives in wall street");
        }
    }
    getAntiguaty(){
        const date = new Date();
        let year = date.getFullYear();
        return year - this.yoj;
    }
}

const empleado = new CEmpleado("john",2004,"wall street");
empleado.show();
