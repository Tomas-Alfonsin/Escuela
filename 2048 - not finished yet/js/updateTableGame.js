let tableGame = [
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
]
let square = [
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
]
let abcd = "abcd";
for(let i = 0; i<4; i++){
	for(let j = 0; j<4; j++){
		square[i][j] = document.querySelector(`.${abcd[i]}${abcd[j]}`);
	}
}

function syncTable(){
	for(let i = 0; i < 4; i++){
		for(let j = 0; j < 4; j++){
			if(tableGame[i][j] != 0){
				square[i][j].innerHTML = `${tableGame[i][j]}`;
			}
			else{
				square[i][j].innerHTML = " ";
			}
		}
	}
}


let pos = new Array(2);
let gameOver = false;

function getRandomPos(){
    pos[0] = getRandomNumber(-1,3);
    pos[1] = getRandomNumber(-1,3);
}
function canGenerate(){
	let canGenerate = false;
	for(let i = 0; i < 4; i++){
		for(let j = 0; j < 4; j++){
			if (tableGame[i][j] == 0 || tableGame[i][j] == " ") {
				canGenerate = true;
			}
		}
		return canGenerate;
	}
	return canGenerate;
}
function updateTableGame(){
	syncTable();
	if(gameOver == false){
		getRandomPos();
		if(tableGame[pos[0]][pos[1]] == 0){
			tableGame[pos[0]][pos[1]] = getRandomNumber(0,2)*2;
			console.log("Pos: "+pos) 
			syncTable();
			canGenerate();
		}
		else if(canGenerate() == true){
			updateTableGame();
		}
		else{
			gameOver = true;
			console.log(gameOver)
		}
	}
}
