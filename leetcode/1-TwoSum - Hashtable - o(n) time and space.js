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

function twoSumSorted(nums, target) {
    nums.sort(function(a,b){return a - b});
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let sum = nums[left] + nums[right];
        if(sum > target) {
            right--;
        } else if(sum < target) {
            left++;
        } else {
            return [left, right];
        }
    }
    return [];
}

testarr = [2, 7, 11, 15];
target = 26;
console.log(twoSum(testarr, target));
console.log(twoSumSorted(testarr, target));