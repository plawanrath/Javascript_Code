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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let buffer = [];
    inorder(root, buffer, k);
    return buffer[k-1];
};

function inorder(root, buffer,k) {
    if(root == null || buffer.length >= k) {
        return;
    }
    inorder(root.left, buffer, k);
    buffer.push(root.val);
    inorder(root.right, buffer, k);
}