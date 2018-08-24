class TreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

//Iterative BFS
function BFS(root) {
    let que = [];
    let res = [];
    if(root === null) {
        return res;
    }
    que.unshift(root);
    while(que.length > 0) {
        let item = que.pop();
        res.push(item.value);
        if(item.left !== null) {
            que.unshift(item.left);
        }
        if(item.right !== null) {
            que.unshift(item.right);
        }
    }
    return res;
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

console.log(BFS(sampleTreeRoot));