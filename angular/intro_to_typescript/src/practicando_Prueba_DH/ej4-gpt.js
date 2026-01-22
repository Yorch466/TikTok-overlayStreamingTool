/*  

Crear una función que reciba un número y:

si es negativo → devuelva "Número inválido"

si es 0 → devuelva "Sin puntos"

si es mayor a 0 y menor a 50 → "Bajo"

si es 50 o más → "Alto"


*/

const comparator = (y) => {
    if(y < 0){
        return 'Numero inválido'
    }
    if(y === 0){
        return 'Sin puntos'
    }
    if( y > 0 && y < 50) {
        return 'Bajo'
    }
    if( y >= 50){
        return 'Alto'
    }
}

console.log(comparator(-1))
console.log(comparator(0))
console.log(comparator(45))
console.log(comparator(50))
