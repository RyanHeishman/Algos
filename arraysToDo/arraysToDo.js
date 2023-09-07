// PushFront
const arr = [99]

arr.unshift(7)
console.log(arr)

// PopFront
const arrOne = [4,5,7,9]
const arrTwo = [0,5,10,15]

function popFront(num) {
    remove = num.shift()
    return remove + ' | ' + num;
}

console.log(popFront(arrOne))
console.log(popFront(arrTwo))

// InsertAt
const arrThree = [100,200,5]
const arrFour = [9,33,7]

function insertAt(numTwo, idx, val) {
    numTwo.splice(idx,0,val)
    return numTwo
}

console.log(insertAt(arrThree,2,311))
console.log(insertAt(arrFour,1,42))

// RemoveAt
const arrFive = [1000,3,204,77]
const arrSix = [8,20,55,44,98]

function removeAt(numThree, idx) {
    removed = numThree.splice(idx,1);
    return numThree + ' | ' + removed;
}

console.log(removeAt(arrFive,1))
console.log(removeAt(arrSix,3))

// SwapPairs
const arrSeven = [1,2,3,4];

function swapPairs(array) {

    for (let i = 0; i <= array.length; i++) {
        [array[0], array[1]] = [array[1], array[0]]
    }
    return array;
}

console.log(swapPairs(arrSeven))


