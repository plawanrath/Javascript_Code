function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 
function inorderSuccessor(root, p) {
    if(root == null) {
        return root;
    }
    if(root.val <= p.val) {
        return inorderSuccessor(root.right, p);
    } else {
        left = inorderSuccessor(root.left, p);
        if(left !== null) {
            return left;
        } else {
            return root;
        }
    }
}