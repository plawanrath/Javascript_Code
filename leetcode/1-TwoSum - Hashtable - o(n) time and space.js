function twoSum(nums, target) {
    let map = new Map();
    let res = [];
    for(let i=0;i<nums.length;i++) {
        map[target-nums[i]] = i;
    }
    for(let i=0;i<nums.length;i++) {
        if(map[nums[i]] !== undefined && map[nums[i]] !== i) {
            res.push(i);
            res.push(map[nums[i]]);
            return res;
        }
    }
    return res;
}

testarr = [2, 7, 11, 15];
target = 26;
console.log(twoSum(testarr, target));