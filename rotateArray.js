var rotate = function(nums, k) {
    // create new array with k items
    const kItems = nums.slice(-k)
    // create new array with items before k
    const itemsBeforeK = nums.slice(0, nums.length - k)
    // empty the nums array
    nums.length = 0
    // push kItems and itemsBeforeK to nums array
    nums.push(...kItems, ...itemsBeforeK)
    
    return nums
};

console.log(rotate([1,2,3,4,5,6,7], 3))
