//Given a numerical array, reverse the order of values, in-place. 
//The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. 
//Working 'in-place' means that you cannot use a second 
//array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(array) {
    var i = 0,
      n = array.length,
      middle = Math.floor(n / 2),
      temp = null;
    for (; i < middle; i += 1) {
      temp = array[i];
      array[i] = array[n - 1 - i];
      array[n - 1 - i] = temp;
    }
    return array
  }

console.log(reverse([1,2,3,4,5]))

function rotateArr(arr, shiftBy) {
    // handle edge cases
    if (!arr || !arr.length || !shiftBy) return;
    // normalize shiftBy to be within range [-n + 1 , n -1]
    let n = arr.length;
    shiftBy = shiftBy % n;
    if (shiftBy < 0) shiftBy += n;
    // reverse helper function
    function reverse(start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    // reverse entire array
    reverse(0, n - 1);
    // reverse sub-sections
    reverse(0, shiftBy - 1);
    reverse(shiftBy , n - 1);
}

console.log(rotateArr([1,2,3,4,5], -2))