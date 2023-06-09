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
square[0][0] = document.querySelector(".aa");
square[0][1] = document.querySelector(".ab");
square[0][2] = document.querySelector(".ac");
square[0][3] = document.querySelector(".ad");

square[1][0] = document.querySelector(".ba");
square[1][1] = document.querySelector(".bb");
square[1][2] = document.querySelector(".bc");
square[1][3] = document.querySelector(".bd");

square[2][0] = document.querySelector(".ca");
square[2][1] = document.querySelector(".cb");
square[2][2] = document.querySelector(".cc");
square[2][3] = document.querySelector(".cd");

square[3][0] = document.querySelector(".da");
square[3][1] = document.querySelector(".db");
square[3][2] = document.querySelector(".dc");
square[3][3] = document.querySelector(".dd");

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
			if (tableGame[i][j] == 0) {
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
		if(tableGame[pos[0]][pos[1]] === 0){
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
