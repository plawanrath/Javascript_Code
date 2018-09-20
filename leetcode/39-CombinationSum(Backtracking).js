/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort();
    let temp = new Array();
    let res = new Array();
    backtrack(res, temp, candidates, target, 0);
    return res;
};

function backtrack(list, tempList, nums, remain, start) {
    if(remain < 0) {
        return;
    }
    if(remain == 0) {
        list.push(tempList);
    } else {
        for(let i=start;i<nums.length;i++) {
            tempList.push(nums[i]);
            backtrack(list, tempList, nums, remain - nums[i], i);
            tempList.pop();
        }
    }
}

candidates = [2,3,6,7], target = 7
console.log(combinationSum(candidates, target));