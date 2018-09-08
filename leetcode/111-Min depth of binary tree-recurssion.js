//Min Depth of Binary Tree
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function minDepth(root) {
    if(root === null) {
        return 0;
    }
    var left = minDepth(root.left);
    var right = minDepth(root.right);
    if(left === 0 || right === 0) { 
        return left + right + 1;
    } else {
        return 1 + Math.min(left, right);      
    }
}