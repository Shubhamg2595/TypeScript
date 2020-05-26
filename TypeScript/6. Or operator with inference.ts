// when inference doesn't work

// // issue
// let numbers = [-10,-1,12];
// let numberAboveZero = false;

// // WAC to update value of numberAboveZero variable

// for(let num of numbers){
//     if(num>0){
//         numberAboveZero = num
//     }
// }

// solution

let numbers = [-10,-1,12];
let numberAboveZero: boolean | number = false;

// WAC to update value of numberAboveZero variable

for(let num of numbers){
    if(num>0){
        numberAboveZero = num
    }
}