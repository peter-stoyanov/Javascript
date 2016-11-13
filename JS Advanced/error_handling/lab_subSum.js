// //let arr = new Array(-1);
//
// let d = new Date(2016,1,22);
// console.log(d.getDay());

function subsum(arr, startIndex, endIndex) {

     //explicit error handling
     //special case handling

  if (!Array.isArray(arr))
     return NaN;
  if (startIndex < 0)
    startIndex = 0;
  if (endIndex > arr.length - 1)
    endIndex = arr.length - 1;
// end of error handling =================

  let sum = 0;
  for (let i = startIndex; i <= endIndex; i++)
    sum += Number(arr[i]);
  return sum;
}

console.log(subsum([1,2,3,4], 2, 2));
