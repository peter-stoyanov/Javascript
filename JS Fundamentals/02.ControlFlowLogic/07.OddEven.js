function isNumberOddEvenOrInvalid([number]) {

    //Write a JS function to check if a number is odd or even or invalid (fractions are neither odd nor even).

    number = Number(number);
    let result = number % 2;
    if (result == 0) {
        return 'even';
    }

    //check if a result is integer by compaing it to its rounded value
    if (result != 0 && result == Math.round(result)) {
        return 'odd';
    }

    return 'invalid';
}

console.log(isNumberOddEvenOrInvalid(['5'])); // odd
console.log(isNumberOddEvenOrInvalid(['8'])); // even
console.log(isNumberOddEvenOrInvalid(['1.5'])); // invalid