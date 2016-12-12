function findBiggestNumber(input) {

    //Write a JS function that finds the biggest of 3 numbers.

    let [numA, numB, numC] = input.map(Number);

    return Math.max(numA, numB, numC);
}

console.log(findBiggestNumber([130, 5, 99])); // 130