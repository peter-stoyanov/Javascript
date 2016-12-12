function findOddNumbers([maxNumber]) {

    //Write a JS function that reads an integer n and prints all odd numbers from 1 to n.

    maxNumber = Number(maxNumber);
    for (let i = 1; i <= maxNumber; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

findOddNumbers(['7']);