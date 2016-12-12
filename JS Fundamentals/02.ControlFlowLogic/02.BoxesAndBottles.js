function calculateBoxes([bottles, boxCapacity]) {

    //Write a JS function to calculate how many boxes will be needed to fit n bottles if each box fits k bottles.

    [bottles, boxCapacity] = [bottles, boxCapacity].map(Number);
    return Math.ceil(bottles / boxCapacity);
}

console.log(calculateBoxes(["20" ,"5"])); // 4