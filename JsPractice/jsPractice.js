// const a1 = [5,6,7];
// const b2 = [3,6,10];

// function trip(a,b){
    
//     let arr = [0,0]
    
//     a.forEach((num1, index) => {
//       if(a[index] > b[index]){
//         arr[0]++
//       }
//       else if(a[index] < b[index]){
//         arr[1]++
//       }
//       else if(a[index] === b[index]){
//         null;
//       }
//     });
//     return arr;
// }
// console.log(trip(a1,b2))
// const array = [11, 2, 4, 4, 5, 6, 10, 8, -12]
// const diagonal = (arr) => {
//     let n = arr.length;
//     let d1 = 0;
//     let d2 = 0;

//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             if(i === j){
//                 d1 += arr[i][j];
//             }
//             if(i + j === n - 1){
//                 d2 += arr[i][j];
//             }
//         }
//     }
//     return Math.abs(d1 - d2)
// }

// console.log(diagonal(array))
const array = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr){
    let pos = 0;
    let neg = 0;
    let zero = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            pos++;
        }
        else if(arr[i] < 0){
            neg++;
        }
        else if(arr[i] === 0){
            zero++;
        }
    }
    let newPos = pos/arr.length
    let newNeg = neg/arr.length
    let newZero = zero/arr.length
    
    console.log((newPos.toFixed(6)))
    console.log((newNeg.toFixed(6)))
    console.log((newZero.toFixed(6)))

    // console.log('Negative: ', neg/arr.length)
    // console.log('Zero: ', zero/arr.length)
}
console.log(plusMinus(array))