// *This is the large way of the same excercise without .endsWith()


const endArray = (STR, ending) => {
    if(ending.length > STR.length) return false;
    
    return STR.slice(-ending.length) === ending;
}


console.log(endArray("abc", "bc"));