/*  Queremos:

    recorrer los puntajes

    clasificar cada uno como:

    "Reprobado" si es menor a 60

    "Aprobado" si es 60 o más

    devolver un nuevo arreglo de strings */

const scores = [45, 82, 67, 90, 38, 100];

let lableScores = [];

scores.forEach(score => {
    if(score >= 60){
        lableScores.push('Aprobado');
    }else{
        lableScores.push('Reprobado');
    }
})


console.log(lableScores)