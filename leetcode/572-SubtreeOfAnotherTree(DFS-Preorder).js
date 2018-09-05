/**
 * Given two non-empty binary trees s and t, check whether tree t has exactly 
 * the same structure and node values with a subtree of s. A subtree of s is a 
 * tree consists of a node in s and all of this node's descendants. The tree s 
 * could also be considered as a subtree of itself.
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

//O(n2) because of string indexOf
function isSubtree(s, t) {
    let s1 = preOrder(s);
    let t1 = preOrder(t);
    return s1.indexOf(t1) >= 0;
}

function preOrder(root) {
    if(root === null) {
        return 'null';
    }
    return '#' + root.val + '#' + ' ' + preOrder(root.left) + ' ' + preOrder(root.right);
}