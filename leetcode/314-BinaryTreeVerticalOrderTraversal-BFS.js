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
function verticalOrder(root) {
    let map = new Map();
    let res = new Array();
    let q = [];
    let cols = [];
    let min = 0, max = 0;
    if(root == null) {
        return res;
    }
    q.unshift(root);
    cols.unshift(0);
    while(q.length > 0) {
        let node = q.pop();
        let col = col.pop();
        if(!map[col]) {
            map[col] = new Array();
        }
        map[col].push(node.val);

        if(node.left != null) {
            q.unshift(node.left);
            cols.unshift(col - 1);
            min = Math.min(min, col - 1);
        }
        if(node.right != null) {
            q.unshift(node.right);
            cols.unshift(col + 1);
            max = Math.max(max, col + 1);
        }
    }

    for(let i=min;i<max;i++) {
        res.push(map[i]);
    }
    return res;
};