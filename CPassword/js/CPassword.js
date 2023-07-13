/*Hacer una clase llamada CPassword que siga las siguientes condiciones:
Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8
Los métodos que implementa serán:  
esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe tener mas de 2 mayúsculas, mas de 1 minúscula y mas de 5 números.
o generarPassword(): genera la contraseña con caracteres aleatorios con la longitud de 8 (se debe contemplar  mayúsculas, mas de 1 minúscula y mas de 5 números).
*/

class CPassword{
    constructor(password, length = 8){
        this.length = length;
        this.password = password;
    }

    isStrong(){
        return(this.getUpperCaseQuantity() >= 2 && this.getLowerCaseQuantity() >= 1 && this.getNumberQuantity() >= 5);  
    }
    getUpperCaseQuantity(){
        let uppercase = "ABCDEFGHIJKLMÑOPQRSTUVWXYZ";
        let quantity = 0;
        for(let i = 0; i<this.password.length; i++){
            console.log(this.password[i]);
            if(uppercase.includes(this.password[i])){
                quantity++;
            }
        }
        return quantity;
    }
    getLowerCaseQuantity(){
        let lowercase = "abcdefghijklmñopqrstuvwxyz";
        let quantity = 0;
        for(let i = 0; i<this.password.length; i++){
            if(lowercase.includes(this.password[i])){
                quantity++;
            }
        }
        return quantity;
    }
    getNumberQuantity(){
        let number = "0123456789";
        let quantity = 0;
        for(let i = 0; i<this.password.length; i++){
            if(number.includes(this.password[i])){
                quantity++;
            }
        }
        return quantity;
    }
    
    generatePassword(){
        let newPassword = "????????";
        newPassword = newPassword.split("")
        let upperCase = "ABCDEFGHIJKLMÑOPQRSTUVWXYZ";
        let lowerCase = "abcdefghijklmñopqrstuvwxyz";
        let numbers = "0123456789";
        numbers = numbers.split("");
        
        fillPassword();
        writeUpperCase();
        writeNumbers();

        function writeUpperCase(){   
            for(let i = 0; i<2; i++){
                newPassword[getRandomNumber(-1,newPassword.length)] = upperCase[getRandomNumber(-1,upperCase.length-1)];
            }
        }
        function writeNumbers(){
            let numberCount = 0;
            while(numberCount < 5){
                numberCount = 0;
                for(let i = 0; i < newPassword.length; i++){
                    if(numbers.includes(newPassword[i])){
                        numberCount++;
                    }
                }   
                let randomPos = getRandomNumber(-1,newPassword.length);
                
                if(lowerCase.includes(newPassword[randomPos]) == true && numbers.includes(newPassword[randomPos]) == false){
                    newPassword[randomPos] = numbers[getRandomNumber(-1,numbers.length-1)]
                } 
            }
        }
    
        console.log(newPassword)
        function getRandomNumber(min,max) {
            let value = 0;
            min = Math.ceil(min);
            max = Math.floor(max);
            value = Math.floor(Math.random() * (max - min) + min + 1);
            return value;
        }
        function fillPassword(){
            if(newPassword.includes("?")){
                newPassword[getRandomNumber(-1,newPassword.length-1)] = lowerCase[getRandomNumber(-1,lowerCase.length-1)];

                return fillPassword();
            }
            else{
                return newPassword;
            }
            
        }
        return newPassword;
    }
}

const password = new CPassword("ASa12345",8);

console.log(password.isStrong());
console.log(password.generatePassword());
