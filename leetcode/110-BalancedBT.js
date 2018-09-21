/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function isBalanced(root) {
    return levelDiff(root) != -1;
}

function levelDiff(root) {
    if(root == null) {
        return 0;
    } 
    let left = levelDiff(root.left);
    let right = levelDiff(root.right);
    if(left == -1 || right == -1 || Math.abs(left - right) > 1) {
        return -1;
    }
    return Math.max(left, right) + 1;
}