function round([number, precision]) {

    //Write a JS function that rounds numbers to specific precision

    [number, precision] = [number, precision].map(Number);
    precision = precision <= 15 ? precision : 15;
    precision = '1' + '0'.repeat(precision);

    return (Math.round(number * precision) / precision).toString();
}

console.log(round([3.1415926535897932384626433832795, 7])); // 3.14
console.log(round([10.5, 3])); // 10.5