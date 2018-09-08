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
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function zigzagLevelOrder(root) {
    let res = [];
    levelOrderMod(root, 0, res);
    return res;
}

function levelOrderMod(root, level, res) {
    if(root == null) {
        return;
    }
    if(!res[level]) {
        res[level] = [];
    }
    (level % 2) != 0 ? res[level].unshift(root.val) : res[level].push(root.val);
    levelOrder(root.left, level+1, res);
    levelOrder(root.right, level+1, res);
}

let sampleTreeRoot = new TreeNode(1);
let left1 = new TreeNode(2);
let right1 = new TreeNode(3);
let left2 = new TreeNode(4);
let right2 = new TreeNode(5);
let left3 = new TreeNode(6);
let right3 = new TreeNode(7);
right1.left = left3;
right1.right = right3;
left1.left = left2;
left1.right = right2;
sampleTreeRoot.left = left1;
sampleTreeRoot.right = right1;

console.log(zigzagLevelOrder(sampleTreeRoot));