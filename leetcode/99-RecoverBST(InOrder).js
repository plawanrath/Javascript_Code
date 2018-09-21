/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
let prev = null;
let first = null;
let second = null;
var recoverTree = function(root) {
    prev = null, first = null, second = null;
    inorder(root);
    
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
};

function inorder(root) {
    if(root == null) {
        return;
    }
    inorder(root.left);
    if(first == null && prev != null && prev.val >= root.val) {
        first = prev;
    }
    if(first != null && prev != null && prev.val >= root.val) {
        second = root;
    }
    prev = root;
    inorder(root.right);
}