// const threesAndFives = () => {

//     let sum = 0;

//     for(let i = 100; i <= 4000000; i++){
//         sum += i;
//     }
//     if(sum % 3 === 0){
//     return ('Divisible by 3: ' + sum)
//     }
//     if(sum % 5 === 0){
//         return ('Divisible by 5: ' + sum)
//         }
// }
// console.log(threesAndFives())

//----------------------------------------------

// const betterThreesAndFives = (start, end) => {

//     let sum = 0;

//     for(let i = start; i <= end; i++){
//         sum += i;
//     }
//     if(sum % 3 === 0){
//     return ('Divisible by 3: ' + sum)
//     }
//     if(sum % 5 === 0){
//         return ('Divisible by 5: ' + sum)
//         }
// }
// console.log(betterThreesAndFives(10,4022))

//----------------------------------------------

// const generateCoinChange = (cents) => {
    
//     let coins = [25,10,5,1]

//     const change = []

//     for(let coin of coins){
//         let count = Math.floor(cents / coin)
//         change.push(count);
//         cents -= count * coin
//     }

//     return change;

// }
// console.log(generateCoinChange(94))

//----------------------------------------------

// const messyMath = (num) => {

//     let sum = 0;

//     for(let i = 0; i <= num; i++){
//         if(i % 3 === 0){
//             continue;
//         }
//         if(i % 7 === 0){
//             sum += i;
//         }
//         if(i === num/3){
//             return -1;
//         }
//         sum += i;
//     }
//     return sum;
// }

// console.log(messyMath(8))

//----------------------------------------------

// const twelveBarBlues = () => {

//     for(let i = 0; i <= 12; i++){
//         console.log(i);
//         console.log('chick');
//         console.log('boom');
//         console.log('chick')
//     }

// }
// console.log(twelveBarBlues())

//----------------------------------------------

// const fib = (n) => {
    
//     let a = 0;
//     let b = 1;
//     let c;

//     if(n === 0){
//         return a;
//     }
//     if(n === 1){
//         return b;
//     }

//     for(let i = 2; i <= n; i++){
//         c = a + b;
//         a = b;
//         b = c;
//     }

//     return c;
// }
// console.log(fib(7))

//----------------------------------------------

// const sumToOneDigit = (num) => {
    
//     let sum = 0;
    
//     let digits = String(num).split('')
    
//     for(let digit of digits){
//         sum += Number(digit)
//     }

//     return sum;
// }
// console.log(sumToOneDigit(928))