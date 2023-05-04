var rotate = function(nums, k) {
    let newArray = [];
    let key = nums.length - k; // 7 - 3 = 4 => nums[4] is 5 ya?
    for (let i = 0; i < nums.length; i++){
        let temp = nums[i];
        nums[i] = nums[key];
        key -= 1;
        nums[key] = temp;
    }

    
    for (let i = key; i < nums.length; i++){
        // push them inside a new array
        newArray.push(nums[i]);
    }
    // remove k number of items from original array
    for (let i = 0; i < k; i++){
        newArray.push(nums[i]);
    }
    console.log("newArray: ", newArray);
    return newArray;
};

