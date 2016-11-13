function sum(arr) {
  let sum = 0;
  var num = 0;
  for (num of arr)
    sum += Number(num);
  return sum;
}

module.exports = {sum};
