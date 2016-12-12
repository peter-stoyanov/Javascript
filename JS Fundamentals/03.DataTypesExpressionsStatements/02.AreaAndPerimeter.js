function calculateAreaAndPerimeter([sideA, sideB]) {

    //Write a JS function that calculates the area and perimeter of a rectangle by given two sides

    [sideA, sideB] = [sideA, sideB].map(Number);
    
    return `${sideA * sideB}\n${sideA + sideA + sideB + sideB}`;
}

console.log(calculateAreaAndPerimeter(['2.5', '3.14']));
// 7.85
// 11.28