//Write a JS function that prints the elements at odd positions from the array, doubled and in reverse order.

let f = arr => arr
    .filter((e, i) => i % 2 != 0)
    .map(e => e * 2)
    .reverse()
    .join(' ');

console.log(f(['10', '15', '20', '25']));