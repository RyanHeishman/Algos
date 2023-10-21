const rollOne = () => {
    let roll = Math.floor(Math.random() * 7)
    return roll
}

// console.log(rollOne())

// const playFives = (num) => {
    
//     for(let i = 0; i < num; i++){
//         let result = rollOne();
//         console.log(result)
//         if(result == 5){
//             console.log('Thats good luck!')
//         }
//     }

// }

// console.log(playFives(5))

// const playStatistics = () => {
//     let arr = []

//     for(let i = 0; i < 8; i++){
//         let result = rollOne();
//         arr.push(result)
//     }

//     const lowVal = Math.min(...arr)
//     const HighVal = Math.max(...arr)

//     return ('arr: ' + arr + ' low: ' + lowVal + ' high: ' + HighVal)
// }

// console.log(playStatistics())

// const playStatistics2 = () => {
//     let arr = []
//     let sum = 0
//     for(let i = 0; i < 8; i++){
//         let result = rollOne();
//         arr.push(result)
//         sum += arr[i]
//     }

//     const lowVal = Math.min(...arr)
//     const HighVal = Math.max(...arr)

//     return ('arr: ' + arr + ' low: ' + lowVal + ' high: ' + HighVal + ' sum: ' + sum)
// }

// console.log(playStatistics2())

// const playStatistics3 = (rolls) => {
//     let arr = []
//     let sum = 0
//     for(let i = 0; i < rolls; i++){
//         let result = rollOne();
//         arr.push(result)
//         sum += arr[i]
//     }

//     const lowVal = Math.min(...arr)
//     const HighVal = Math.max(...arr)

//     return ('arr: ' + arr + ' low: ' + lowVal + ' high: ' + HighVal + ' sum: ' + sum)
// }

// console.log(playStatistics3(100000))

// const playStatistics3 = (rolls) => {
//     let arr = []
//     let sum = 0
//     let avg = 0
//     for(let i = 0; i < rolls; i++){
//         let result = rollOne();
//         arr.push(result)
//         sum += arr[i]
//         avg = sum/arr.length
//     }

//     const lowVal = Math.min(...arr)
//     const HighVal = Math.max(...arr)

//     return ('arr: ' + arr + ' low: ' + lowVal + ' high: ' + HighVal + ' sum: ' + sum + ' avg: ' + avg)
// }

// console.log(playStatistics3(5))\

// const roll = () => {
//     return Math.floor(Math.random()*21)
// }

// const average = (array) => {
//     let sum = 0;
//     for(let num of array){
//         sum += num
//     }
//     return (sum/array.length.toFixed(2))
// }

// const rollTwice = () => {
//     let results = [];
//     let prev = null;

//     do{
//         let current = roll();
//         results.push(current);

//         if(current === prev){
//             break;
//         }
//         else{
//             prev = current;
//         }
//     }while(true);
//     return ('Number of rolls: ' + results.length + ' Average: ' + average(results) + ' Min:' + Math.min(...results) + ' Max: ' + Math.max(...results))
// }

// console.log(rollTwice())

function reset() {
    var x = 0;
    var y = 0;
}

function moveBy(xOffset, yOffset) {
    var x = x + xOffset;
    var y = y + yOffset;
}

function xLocation(){
    return moveBy(xOffset);
}

function yLocation(){
    return moveBy(yOffset);
}

reset();
moveBy(1, -2)
moveBy(3, 1)
console.log("Claire's location: ", `(${xLocation()}, ${yLocation()})`)