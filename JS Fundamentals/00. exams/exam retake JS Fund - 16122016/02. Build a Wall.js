function Wall(input) {
    let heights = input.map(Number);

    let progress = [];
    let sum = heights.reduce(add, 0);
    let expectedTotal = heights.length * 30;
    while (sum < expectedTotal) {
        let steps = 0;
        for (let i = 0; i < heights.length; i++) {

            if (heights[i] < 30) {
                steps++;
                heights[i] = heights[i] + 1;
            }
        }
        //end of day of work
        progress.push(steps);
        sum = heights.reduce(add, 0);
    }

    function add(a, b) {
        return a + b;
    }

    let concrete = progress.map((e) => e * 195);

    let cost = concrete.map((e) => e * 1900);

    let pesos = cost.reduce(add,0);

    console.log(concrete.join(', '));
    console.log(pesos + ' pesos');
}

//Wall(['21', '25', '28']);
//Wall(['17']);
Wall(['17', '22', '17', '19', '17']);