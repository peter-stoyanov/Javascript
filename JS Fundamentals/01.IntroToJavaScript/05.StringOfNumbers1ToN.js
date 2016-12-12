function stringOfNumbers(input) {
    //Write a JS function that read a number n as input and prints all numbers from 1 to n,
    // concatenated as a single string

    var num = Number(input[0]);
    let string = '1';
    for (let i = 2; i <= num; i++) {
        string += i;
    }

    console.log(string);
}

stringOfNumbers(['11']); // '1234567891011'