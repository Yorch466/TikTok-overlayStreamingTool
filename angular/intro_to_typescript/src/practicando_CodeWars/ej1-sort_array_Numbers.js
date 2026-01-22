//  *Finish the solution so that it sorts the passed in array of numbers.


function solution(nums){
    if(nums === null || nums === undefined){
        return [];
    }else {
    return nums.sort((a,b)=> a-b);
    }
}
const array = [12,3,5,6,7,8,-5,-8,-6]

console.log(solution(array))

