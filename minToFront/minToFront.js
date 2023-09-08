const arr = [4,2,1,3,5]
const arrTwo = [6,100,11222,2,3,1,4,5]

function minToFront(array){

    array.sort(function(a,b){
        return a - b;
    })
    return array;
}

console.log(minToFront(arr))

