/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let sumToCount, maxCount;
function findFrequentTreeSum(root) { 
    maxCount = 0;
    sumToCount = new Map();
    let res = [];
    postOrder(root);

    for(let key in sumToCount) {
        if(sumToCount[key] == maxCount) {
            res.push(parseInt(key));
        }
    }
    return res;
}

function postOrder(root) {
    if(root == null) {
        return 0;
    }
    let left = postOrder(root.left);
    let right = postOrder(root.right);
    let sum = left + right + root.val;
    let count = !sumToCount[sum] ? 0 : sumToCount[sum];
    count++;
    sumToCount[sum] = count;
    maxCount = Math.max(maxCount, count);

    return sum;
}