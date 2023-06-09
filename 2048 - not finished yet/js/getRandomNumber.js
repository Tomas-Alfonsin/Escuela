function getRandomNumber(min,max) {
	let value = 0;
	min = Math.ceil(min);
    max = Math.floor(max);
    value = Math.floor(Math.random() * (max - min) + min + 1);
    return value;
    console.log("randomNum:"+value)
}
