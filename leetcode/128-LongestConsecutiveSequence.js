//O(n)
function longestConsecutive(nums) {
    let numSet = new Set(nums);
    let largest = 0;
    for(let i=0;i<nums.length;i++) {
        if(!numSet.has(nums[i] - 1)) {
            let currNum = nums[i];
            let currLen = 1;
            while(numSet.has(currNum + 1)) { //in the worst case this inner loop can only run constant time less than n
                currNum++;
                currLen++;
            }
            largest = Math.max(largest, currLen);
        }
    }
    return largest;
}

arr = [100, 4, 200, 1, 3, 2]
console.log(longestConsecutive(arr));

