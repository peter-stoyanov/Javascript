function calculateTriangleArea([sideA, sideB, sideC]) {

    //Write a JS function that calculates a triangle’s area by its 3 sides
    //Heron formula

    [sideA, sideB, sideC] = [sideA, sideB, sideC].map(Number);
    let semiPerimeter = (sideA + sideB + sideC) / 2;

    return Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
}

console.log(calculateTriangleArea(['2', '3.5', '4'])); // 3.4994419197923547