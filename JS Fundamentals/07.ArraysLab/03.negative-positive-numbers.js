function reorderArray(nums) {
    nums = nums.map(Number);
    let res = [];
    for (let num of nums) {
        if (num < 0) {
            res.unshift(num);
        } else {
            res.push(num);
        }
    }
    
    return res.join('\n');
}

console.log(reorderArray(['8', '-2', '7', '9']));