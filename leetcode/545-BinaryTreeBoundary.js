
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
    let res = [];
    if(root == null) {
        return res;
    }
    if(!isLeaf(root)) {
        res.push(root.val);
    }
    let t = root.left;
    while(t != null) {
        if(!isLeaf(t)) {
            res.push(t.val);
        }
        if(t.left) {
            t = t.left;
        } else {
            t = t.right;
        }
    }
    addLeaves(res, root);
    let stack = []; //because right boundary you need to add in reverse to maintain anti-clockwise
    t = root.right;
    while(t != null) {
        if(!isLeaf(t)) {
            stack.push(t.val);
        }
        if(t.right) {
            t = t.right;
        } else {
            t = t.left;
        }
    }
    while(stack.length > 0) {
        res.push(stack.pop());
    }
    return res;
};

function isLeaf(t) {
    return t.left == null && t.right == null;
}

function addLeaves(list, root) {
    if(isLeaf(root)) {
        list.push(root.val);
    } else {
        if(root.left != null) {
            addLeaves(list, root.left);
        }
        if(root.right != null) {
            addLeaves(list, root.right);
        }
    }
}

//creating a sample tree
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

console.log(boundaryOfBinaryTree(sampleTreeRoot));