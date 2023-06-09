function merge(direction){
	if(direction == "up"){
		for(let i = 3; i >= 0; i--){
			for(let j = 0; j < 4; j++){
				if(i > 0 && tableGame[i-1][j] == 0){
					tableGame[i-1][j] = tableGame[i][j];
					tableGame[i][j] = 0;
				}
				else if(i > 0 && tableGame[i][j] != 0 &&tableGame[i-1][j] == tableGame[i][j] ){
					tableGame[i-1][j] += tableGame[i][j];
					tableGame[i][j] = 0;

				}
			}
		}
	}
	if(direction == "down"){
		for(let i = 0; i <= 3; i++){
			for(let j = 0; j < 4; j++){
				if(i <= 2 && tableGame[i+1][j] == 0){
					tableGame[i+1][j] = tableGame[i][j];
					tableGame[i][j] = 0;
				}
				else if(i <= 2 && tableGame[i][j] != 0 &&tableGame[i+1][j] == tableGame[i][j] ){
					tableGame[i+1][j] += tableGame[i][j];
					tableGame[i][j] = 0;

				}
			}
		}
	}
	else if(direction == "left"){
		for(let i = 0; i < 4; i++){
			for(let j = 3; j > 0; j--){
				if(j > 0 && tableGame[i][j-1] == 0){
					tableGame[i][j-1] = tableGame[i][j];
					tableGame[i][j] = 0;
				}
				else if(j > 0 && tableGame[i][j] != 0 &&tableGame[i][j-1] == tableGame[i][j] ){
					tableGame[i][j-1] += tableGame[i][j];
					tableGame[i][j] = 0;

				}
			}
		}
	}
	else if(direction == "right"){
		for(let i = 0; i < 4; i++){
			for(let j = 0; j < 4; j++){
				if(j < 4 && tableGame[i][j+1] == 0){
					tableGame[i][j+1] = tableGame[i][j];
					tableGame[i][j] = 0;
				}
				else if(j > 0 && tableGame[i][j] != 0 &&tableGame[i][j+1] == tableGame[i][j] ){
					tableGame[i][j+1] += tableGame[i][j];
					tableGame[i][j] = 0;

				}
			}
		}
	}
	console.log(tableGame)

}

/*
let tableGame = [
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
]
*/