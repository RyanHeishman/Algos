const extractDigit = (num, digitNum) => {
    let numStr = num.toString()

    let index = numStr.length - 1 - digitNum;

    let digitChar = numStr.charAt(index)

    let digit = parseInt(digitChar)

    return digit;
}

console.log(extractDigit(1824,2))

///////////////////////////////////////////////

function mostSignificantDigit(num) {
    // Make sure the number is positive
    num = Math.abs(num);

    // If the number is less than 1, multiply it by 10 until it is greater than or equal to 1
    while (num < 1) {
        num = num * 10;
    }

    // If the number is greater than 10, divide it by 10 until it is less than 10
    while (num >= 10) {
        num = num / 10;
    }

    // Use the modulus operator to get the integer part of the number
    let digit = Math.floor(num) % 10;

    // Return the most significant digit
    return digit;
}

console.log(mostSignificantDigit(12345))