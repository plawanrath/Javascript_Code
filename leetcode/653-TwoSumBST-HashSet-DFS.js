/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
//O(n) time and space
function findTarget(root, k) {
    let set = new Set();
    return dfs(root, set, k);
}

function dfs(root, set, k) {
    if(root === null) {
        return false;
    }
    if(set.has(k - root.val)) {
        return true;
    }
    set.add(root.val);
    return dfs(root.left, set, k) || dfs(root.right, set, k);
}