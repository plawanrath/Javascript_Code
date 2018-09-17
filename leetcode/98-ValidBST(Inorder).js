class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//Using Iterative Inorder Traversal O(n) time and space
function isValidBST(root) {
    if(root == null) {
        return true;
    }
    let stack = [];
    let prev = null;
    while(root != null || stack.length > 0) {
        while(root != null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if(prev != null && root.val <= prev.val) {
            return false;
        }
        prev = root;
        root = root.right;
    }
    return true;
}