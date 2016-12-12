function gradsToDegrees([gon]) {

    //write a JS function that converts from grads to degrees. In addition, your program needs
    // to constrain the results within the range 0°≤x<360°, so if you arrive at a value like -15°,
    // it needs to be converted to 345° and 420° becomes 60°.

    gon = Number(gon) % 400;
    //For instance, n % 10 will return 3 with values for n 3, 13, 23, 243, 1003 and so on.

    gon = gon < 0 ? 400 + gon : gon;
    gon = 400 / gon;

    return 360 / gon;
}

console.log(gradsToDegrees([100])); // 90
console.log(gradsToDegrees([400])); // 0
console.log(gradsToDegrees([850])); // 45
console.log(gradsToDegrees([-50])); // 315