/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    levelOrderTraversal(root, 0, res);
    console.log(res);
};

function levelOrderTraversal(root, level, res) {
    if(!root) {
        return;
    }
    if(!res[level]) {
        res[level] = [];
    }
    res[level].push(root.val);
    levelOrderTraversal(root.left, level+1, res);
    levelOrderTraversal(root.right, level+1, res);
}