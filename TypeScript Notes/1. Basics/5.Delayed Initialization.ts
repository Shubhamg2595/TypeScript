//! delayed initialization : declaring a variable and then initializing it later

// // issue
// let words = ['red','green']

// let foundWord; //type: any

// for(let i=0;i<words.length;i++){
//     if(words[i] === 'greem'){
//         foundWord = true;
//     }
// }


// solution
let words = ['red','green']

let foundWord: boolean; //type: any

for(let i=0;i<words.length;i++){
    if(words[i] === 'greem'){
        foundWord = true;
    }
}