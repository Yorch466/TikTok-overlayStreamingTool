

const divisors = (num) => {
    let numbers = []
    for(let i=2; i < num-1;i++){
        if(num % i === 0){
            numbers.push(i)
        }
    }
    if(numbers.length ===  0){
        return `${num} is prime`
    }else{
        return numbers;
    }
}


const nums = 13;

console.log(divisors(nums));