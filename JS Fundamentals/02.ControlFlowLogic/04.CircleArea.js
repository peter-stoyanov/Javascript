function calculateCircleArea([radius]) {

    //Write a JS function that calculates circle area by given radius.
    // Print the area as it is calculated and then print it rounded to two decimal places.

    radius = Number(radius);
    let area = Math.PI * radius * radius;
    console.log(Math.round(area));
    //debugger;
    return `${area.toString()}\n${Math.round(area * 100) / 100}`;
}

console.log(calculateCircleArea([5])); 
// 78.53981633974483 
// 78.54
