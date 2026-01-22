// *Crear una función que devuelva un nuevo arreglo con solo los números mayores a 10

const numbers = [2, 5, 12, 8, 20, 3];

const newArray = (array) => {
    let newarray = [];
    for(let i =0; i <    array.length; i++){
        if(array[i] > 10){
            newarray.push(array[i]);
        }
    }
    return newarray;
}

console.log(newArray(numbers));