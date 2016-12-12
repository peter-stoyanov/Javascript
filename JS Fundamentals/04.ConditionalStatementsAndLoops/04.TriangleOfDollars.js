function printTriangleOfDollars([size]) {

    //Write a JS function that prints a triangle of n lines of “$” characters

    size = Number(size);
    for (let i = 1; i <= size; i++) {
        console.log('$'.repeat(i));
    }
}

printTriangleOfDollars(['3']);