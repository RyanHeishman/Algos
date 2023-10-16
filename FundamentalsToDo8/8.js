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

// console.log(playStatistics3(5))