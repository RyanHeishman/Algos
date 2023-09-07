// Remove Blanks

function removeBlanks(string) {
    return string.replace(/\s/g, "")
}

const spaceString = "Pl ayTha tF u nkyM usi c"
const spaceStringTwo = "I can not BELIEVE it's not BUTTER"
console.log(removeBlanks(spaceString))
console.log(removeBlanks(spaceStringTwo))

// Get Digits

function getDigits(stringThree) {
    var txt = stringThree.match(/\d/g);
    txt = txt.join('')
    return txt
}
console.log(getDigits("abc8c0d1ngd0j0!8"))
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

// Acronyms

// let text = "there's no free lunch - gotta pay yer way."
// const myArray = text.split(" ")
// let word = myArray[0]
// let letter = word[0]
// console.log(myArray)

const str = "There's No Free Lunch - Gotta Pay Yer Way.";
const strTwo = 'Live from New York, its Saturday Night Live!'
function acronym (str) {
    const strArr = str.split(" ");
    res = []
    for (let i = 0; i < strArr.length; i++) {
        res.push(strArr[i][0])
        // console.log(res)
        
    }
    return res.join('');
};

console.log(acronym(str));
console.log(acronym(strTwo.toUpperCase()));

// Count non Spaces

function countNonSpaces(string) {
    word = string.replace(/\s/g, "")
    return word.length
}

console.log(countNonSpaces("Hello World!"))
console.log(countNonSpaces("Honey pie, you are driving me crazy"))

const array = ['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello']
// const newArr = []
// for (let i = 0; i < array.length; i++){
//     if (array[i].length >= 4){
//         newArr.push(array[i])
//     }
//     // return newArr
//     console.log(newArr)
// }

function removeShorterStrings(arr, num) {
    const newArr = []
    for (let i = 0; i < arr.length; i++){
        if(arr[i].length >= num){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(removeShorterStrings(array,4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))