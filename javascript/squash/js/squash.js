let points = prompt("Ingrese A o B para cada puntos de cada equipo: ");

function isRealMatch(input){
    let realMatch = false;
    let totalA = 0;
    let totalB = 0;
    for(let i = 0; i<input.length; i++){
        if(input[i] == "a" || input[i] == "A"){
            totalA++;
        }
        else if(input[i] == "b" || input[i] == "B"){
            totalB++;
        }
    }
    if(totalA == 9 && totalB == 9){
        realMatch = true;
    }
    else if(totalA >= 10 || totalB >= 10){
        realMatch = true;
    }
    return realMatch;
}
function isTie(pointsA,pointsB){
    if(pointsA >= 9 && pointsB >= 9){
        return true;
    }
}
function squash(input){
    let pointsA = 0;
    let pointsB = 0;
    
    if(isRealMatch(input) == true){
        for(let i = 0; isTie(pointsA,pointsB) != true || pointsA >= 10 || pointsB >= 10; i++){
            if(points[i] == "A" || points[i] == "a"){
                pointsA++;
            }
            else if(points[i] == "B" || points[i] == "b"){
                pointsB++;
            }
        }
    }
    document.write(`${pointsA}-${pointsB} <br>`);
    if(isTie(pointsA,pointsB)){
        squash(points);
        document.write(`${pointsA}-${pointsB} <br>`);
    }
}
squash(points);