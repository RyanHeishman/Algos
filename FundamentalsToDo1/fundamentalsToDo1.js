// var myNumber = 42
// var myName = 'Ryan'
// var myNumber = 'Ryan'
// var myName = 42

// console.log('name: ' + myName)
// console.log('number: ' + myNumber)

//--------------------------------------------------

// for (let i = -52; i <= 1066; i++) {
//     console.log([i])
// }

//--------------------------------------------------

// for (let i = -300; i < 0; i++) {
//     if (i == -3 || i == -6){
//         continue;
//     }
//     if (i % 3 == 0){
//         console.log(i)
//     }
// }

//--------------------------------------------------

// i = 1999;

// while (i < 5280) {
//     i++;
//     console.log(i)
// }

//--------------------------------------------------

// const currentMonth = new Date().getMonth() + 1;
// const currentDay = new Date().getDate();
// const givenNumber1 = 22;
// const givenNumber2 = 9;

// if ((givenNumber1 === currentMonth && givenNumber2 === currentDay) || (givenNumber1 === currentDay && givenNumber2 === currentMonth)) {
//     console.log('How did you know?')
// }
// else{
//     console.log('Just another day...')
// }

//--------------------------------------------------

// function leap(num){
//     if (num % 4 === 0 && num % 100 !== 0 || num % 400 === 0) {
//         console.log(num + ' is a leap year!')
//     }
//     else{
//         console.log(num + ' is not a leap year')
//     }
// }
// leap(1952)
// console.log(leap)

//--------------------------------------------------

// i = 0
// while (i < 60000) {
//     i++;
//     if(i % 6 === 0){
//         console.log(i)
//     }
// }

//--------------------------------------------------

// i = 0
// while (i < 100) {
    
//     if(i % 10 === 0){
//         console.log('Coding Dojo')
//     }
//     else if(i % 5 === 0){
//         console.log('Coding')
//     }
//     else{
//         console.log(i)
//     }
//     i++;
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 10 === 0) {
//         console.log("Coding Dojo");
//     } else if (i % 5 === 0) {
//         console.log("Coding");
//     } else {
//         console.log(i);
//     }
// }

//--------------------------------------------------

// function wdyk(incoming){
//     return incoming
// }

// console.log(wdyk(3))

//--------------------------------------------------

// sum = 0

// for (let i = -300000; i <= 300000; i++) {
//     if (i % 2 === 1){
//         sum = sum + i
//     }
// }
// console.log(sum)

//--------------------------------------------------

// i = 2016
// while (i > 0) {
//     console.log(i)
//     i -= 4;
// }

//--------------------------------------------------

// function count(lowNum, highNum, mult){
//     const arr = []
//     for (let i = lowNum; i <= highNum; i++){
//         if (i % mult === 0){
//             arr.push(i)
//         }
//     }
//     return arr.reverse();
// }
// console.log(count(2,9,3))

//--------------------------------------------------

// let i = 2;
// const arr = []
// do{
//     i++;
//     if(i === 9){
//         continue;
//     }
//     if(i % 3 === 0){
//         arr.push(i);
//     }
// }
// while(i <= 9);
// console.log(arr)

function finalCount(param1, param2, param3, param4) {
    
    let i = param2;
    const arr = [];

    do{
        i++;
        if(i === param4){
            continue;
        }
        if(i % param1 === 0){
            arr.push(i);
        }
    }
    while(i <= param3);
    return arr;
}

console.log(finalCount(3,5,17,9))

function finalCountTwo(param1, param2, param3, param4){

    let i = param2;

    while(i <= param3){
        if(i % param1 === 0 && i !== param4){
            console.log(i);
        }
        i++;
    }
}

finalCountTwo(3, 5, 17, 9)