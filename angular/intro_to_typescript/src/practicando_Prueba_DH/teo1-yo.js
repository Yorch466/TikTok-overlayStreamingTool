const numbers = [12,3,67,8,9,0,1,23,56];

// const mayores = numbers.filter(num => num >10);

// console.log(mayores);



let mayores = [];

numbers.forEach(num => {
    if(num > 10){
        mayores.push(num);
    }
})

console.log('Ej con foreach', mayores);