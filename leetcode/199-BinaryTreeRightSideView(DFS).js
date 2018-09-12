function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


function rightSideView(root) {
    let res = [];
    dfs(root, res, 1);
    return res;
}

function dfs(root, res, level) {
    if(root == null) {
        return;
    }
    if(res.length < level) {
        res.push(root.val);
    }

    dfs(root.right, res, level+1);
    dfs(root.left, res, level+1);
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

console.log(rightSideView(sampleTreeRoot));