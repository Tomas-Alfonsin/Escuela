function getHouston(vectorA, vectorB){
    let houston = new Array(vectorA.length);
    houston.fill(0);

    let escalado = 0;
    
    for(let i = 0; i<vectorA.length; i++){
        houston[i] = vectorA[i] * vectorB[i];
    }
    
    for(let i = 0; i<houston.length; i++){
        escalado += houston[i];
    }
    return escalado;
}