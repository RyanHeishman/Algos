// function shortenArray(arr, x){

//     if (isNaN(x) || x > arr.length){
//         return "Invalid Input";
//     }


//     arr.length = arr.length - (arr.length - x);
//     return arr;
// }
// test = [2,4,6,8,10]
// console.log(shortenArray(test,3))

//-----------------------------------------------------

// const mathHelp = (m,b) => {
//     if ( m !== 0){
//         return -b/m;
//     }
//     else{
//         return "no x-intercept";
//     }
// }

// console.log(mathHelp(2,4))

//-----------------------------------------------------

// const whatHappensToday = () => {
//     let random = Math.floor(Math.random() * 100)

//     if(random < 10){
//         return 'volcano'
//     }
//     else if(random < 25){
//         return 'tsunami'
//     }
//     else if(random < 45){
//         return 'earthquake'
//     }
//     else if(random < 70){
//         return 'blizzard'
//     }
//     else{
//         return 'meteor'
//     }
// }

// console.log(whatHappensToday())
// console.log(whatHappensToday())

//-----------------------------------------------------

// const whatReallyHappensToday = () => {
//     let disaters = [
//         {name: 'volcano', probability: 0.1},
//         {name: 'Tsunami', probability: 0.15},
//         {name: 'Earthquake', probability: 0.2},
//         {name: 'BLizzard', probability: 0.25},
//         {name: 'Meteor', probability: 0.3},
//     ];

//     let count = 0;

//     for(let disater of disaters){
//         let random = Math.random();

//         if(random <= disater.probability){
//             console.log(disater.name);
//             count++;
//         };
//         if(count === 0){
//             console.log("No disaters today!");
//         }
//     }
// }

// console.log(whatReallyHappensToday())

//-----------------------------------------------------

// const iq = (weeks) => {
//     let iq = 101;
//     let sum = weeks * .07;
    
//     return (iq + sum)

// }
// console.log(iq(14))

//-----------------------------------------------------

// const letterGrade = () => {
//     grade = Math.floor(Math.random() * 100);

//     if (grade <= 60){
//         return ('Score: ' + grade + ' Grade: F')
//     }
//     if (grade > 60 && grade <= 69){
//         return ('Score: ' + grade + ' Grade: D')
//     }
//     if (grade > 69 && grade <= 79){
//         return ('Score: ' + grade + ' Grade: C')
//     }
//     if (grade > 79 && grade <= 89){
//         return ('Score: ' + grade + ' Grade: B')
//     }
//     if (grade > 89 && grade <= 100){
//         return ('Score: ' + grade + ' Grade: A')
//     }
// }

// console.log(letterGrade())
// console.log(letterGrade())

//-----------------------------------------------------

// const letterGrade = (grade) => {
//     // grade = Math.floor(Math.random() * 100);

//     if (grade <= 60){
//         return ('Score: ' + grade + ' Grade: F')
//     }
//     if (grade > 60 && grade <= 69){
//         return ('Score: ' + grade + ' Grade: D')
//     }
//     if (grade > 69 && grade <= 79){
//         return ('Score: ' + grade + ' Grade: C')
//     }
//     if (grade > 79 && grade <= 89){
//         return ('Score: ' + grade + ' Grade: B')
//     }
//     if (grade > 89 && grade <= 94){
//         console.log('Score: ' + grade + ' Grade: A');
//     }
//     if(grade >= 95){
//         console.log('Score: ' + grade + ' Grade: A+')
//     }
// }

// console.log(letterGrade(99))
// // console.log(letterGrade())