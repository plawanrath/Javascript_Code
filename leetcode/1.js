function twoSum(nums, target) {
    var res = [];
    for(var i=0;i<nums.length;i++) {
        var index = nums.indexOf(target-nums[i]);
        if( index >= 0 && index !== i) {
            res.push(i);
            res.push(index);
            return res;
        }
    }
    return -1;
}

testarr = [2, 7, 11, 15];
target = 26;
console.log(twoSum(testarr, target));