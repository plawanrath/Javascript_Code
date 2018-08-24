/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */

var closestValue = function(root, target) {
    var minVal = Number.MAX_VALUE;
    if(root === null) {
        return minVal;
    }
    while(root !== null) {
        if(Math.abs(target-root.val) < Math.abs(target-minVal)) {
            minVal = root.val;
        }
        if(root.val > target) {
            root = tiir.left;
        } else {
            root = root.right;
        }
    }
    return minVal;
};
