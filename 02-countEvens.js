const countEvens = (nums) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

module.exports = countEvens;
