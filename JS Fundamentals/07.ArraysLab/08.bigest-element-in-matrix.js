let f = arr => arr
    .map(r => r.split(' ')
        .sort((a, b) => b - a)
        .reduce((a, b) => Math.max(a, b)))
        .map(Number)

console.log(f(['20 50 10', '8 33 145']));