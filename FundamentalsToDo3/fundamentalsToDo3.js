// function biggieSize(arr){
//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i] > -1){
//             arr[i] = "big"
//         }
//     }
//     return arr;
// }

// console.log(biggieSize([-1,3,4,-5]))

//-------------------------------------------------

// function printLowReturnHigh(arr){
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)

//     console.log("print: ", min)
//     return "return: " + max

// }

// console.log(printLowReturnHigh([1,2,3,4,5,6,7,8,9]))

//-------------------------------------------------

// function printOneReturnAnother(arr){

//         console.log(arr[arr.length - 2]);

//         for(let i = 0; i <= arr.length; i++){
//             if(arr[i] % 2 !== 0){
//                 return arr[i]
//             }
//         }

// }

// console.log(printOneReturnAnother([2,4,3,2,3,4,5,6,7,8,9,100]))

//-------------------------------------------------

// function doubleVision(arr){
//     newArr = []
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i]*2);
//     }
//     return newArr;
// }

// console.log(doubleVision([1,2,3]))

//-------------------------------------------------

// function countPositives(arr){
//     let zero = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             zero++
//         }
//     }
//     arr[arr.length - 1] = zero
//     return arr;
// }

// console.log(countPositives([-1,1,1,1]))

//-------------------------------------------------
