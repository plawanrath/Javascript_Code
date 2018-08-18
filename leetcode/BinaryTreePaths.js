/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let answer = [];
    if(root != null) {
        preorder(root, '', answer);
    }
    return answer;
};

function preorder(root, path, answer) {
    if(root.left === null && root.right === null) {
        answer.push(path + root.val);
    }
    if(root.left != null) {
        preorder(root.left, path + root.val + '->', answer);
    }
    if(root.right != null) {
        preorder(root.right, path + root.val + '->', answer);
    }
}