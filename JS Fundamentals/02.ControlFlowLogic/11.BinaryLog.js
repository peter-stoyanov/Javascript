function binaryLogarithm(nums) {

    //Write a JS function that prints the binary logarithm (log2 x) for each number in the input.

    let result = '';
    for (let x of nums) {
        result += (Math.log2(x)).toString() + '\n';
    }

    return result;
}

console.log(binaryLogarithm(['1024'])); // 10
