/**
 * Obtener una lista con numeros primos hasta la posicion { input }.
 * @param { number } input
 * @returns void
 */

let primeNumberStore = {
	primeNumbers: new Array(256),

	init: function() {
		this.primeNumbers.fill(-1);
		this.primeNumbers[0] = 2;
	},

	getPrimeNumbers: function (input){
		let p;
		for( let n = 3; n<input; n++){
			let isPrime = true;
			for(p = 0; this.primeNumbers[p] != -1; p++){
				if(n%this.primeNumbers[p] == 0){
					isPrime = false;
				}
			}
			if(isPrime != false){
				this.primeNumbers[p] = n;
			}	
		}
	}
}
primeNumberStore.init();
