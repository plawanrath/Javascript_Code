/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let set = new Set();
    for(let i=0;i<nums.length;i++) {
        set.add(nums[i]);
    }
    let min = 0;
    let found = false;
    while(!found) {
        if(!set.has(min)) {
            found = true;
        } else {
            min++;
        }
    }
    return min;    
};

/**
 * XOR approach
 * We can harness the fact that XOR is its own inverse to find the missing element in linear time. 
 * 
 * Algorithm 
 * Because we know that nums contains nn numbers and that it is missing exactly one number 
 * on the range [0..n-1][0..n−1], we know that nn definitely replaces the missing number in nums. 
 * Therefore, if we initialize an integer to nn and XOR it with every index and value, we will be 
 * left with the missing number. 
 */


//THis will not work if there are negative numbers in the array in which case stick to hash set.
function smallestMising2(nums) {
    let missing = nums.length;
    for(let i=0;i<nums.length;i++) {
        missing = missing ^ i ^ nums[i];
    }
    return missing;
}
