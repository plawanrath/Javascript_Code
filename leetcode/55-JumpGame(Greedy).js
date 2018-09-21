function canJump(nums) {
    let lastPos = nums.length - 1;
    for(let i=nums.length-1;i>=0;i--) {
        if(i + nums[i] >= lastPos) {
            lastPos = i;
        }
    }
    return lastPos == 0;
}

arr = [2,3,1,1,4];
console.log(canJump(arr));