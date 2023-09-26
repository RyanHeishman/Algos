// function countdown(num){
//     const arr = [];
//     for(let i = num; i >= 0; i--){
//         arr.push(i)
//     }
//     return arr;
// }

// console.log(countdown(100))

//-------------------------------------------

// function printReturn(arr){
//     console.log('first: ' + arr[0]);
//     return arr[1];
// }

// console.log(printReturn([1,2]))

//-------------------------------------------

// function firstPlusLength(arr){
//     sum = arr[0] + arr.length;
//     return sum;
// }

// console.log(firstPlusLength([1,2,3,4,5,6,7,8]))

//-------------------------------------------

// arr = [1,2,3,5,7,9,13]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > arr[2]){
//         console.log(arr[i])
//     }
// }

//-------------------------------------------

// function vGSG(arr){
//     newArr = [];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > arr[2]){
//             newArr.push(arr[i])
//         }
//         if(arr.length === 1){
//             console.log('only one value')
//         }
//     }
//     return newArr;
// }

// console.log(vGSG([1]))

//-------------------------------------------

// function tLTV(num1, num2){
//     arr = [];
//     length = num1;

//     if (num1 === num2){
//         return 'Jinx!';
//     }
    
//     for (let i = 0; i < length; i++){
//         arr.push(num2)
//     }

//     return arr;
// }

// console.log(tLTV(5,4))

//-------------------------------------------

// function fFV(arr){
//     if(arr[0] > arr.length){
//         console.log("Too big!")
//     }
//     else if(arr[0] < arr.length){
//         console.log("Too small!")
//     }
//     else{
//         console.log("Just right!")
//     }
// }

// console.log(fFV([1,3,4,5]))

//-------------------------------------------

// function farenheitToCelsius(fDegrees){
//     celcius = 0;
//     celcius = ((fDegrees - 32) * 5/9);
//     return celcius;
// }

// console.log(farenheitToCelsius(32))

//-------------------------------------------

// function celciusToFarenheit(cDegrees){
//     farenheit = 0;
//     farenheit = ((cDegrees * 9/5) + 32);
//     return farenheit;
// }

// console.log(celciusToFarenheit(0))