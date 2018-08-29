function flatten(root) {
    if (root == null) {
        return;
    } 
    
    let left = root.left;
    let right = root.right;
    
    root.left = null;
    
    flatten(left);
    flatten(right);
    
    root.right = left;
    let cur = root;
    while (cur.right != null) {
        cur = cur.right;
    } 
    cur.right = right;
}