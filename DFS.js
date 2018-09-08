class TreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

//Iterative DFS
function dfs(root) {
    let stack = [];
    let res = [];
    if(root === null) {
        return res;
    }    
    stack.push(root);
    while(stack.length > 0) {
        let item = stack.pop();
        res.push(item.value);
        if(item.left !== null) {
            stack.push(item.left);
        }
        if(item.right !== null) {
            stack.push(item.right);
        }
    }
    return res;
}

//Recursive DFS Preorder
function recDFSPreorder(root, res) {
    if(root === null) {
        return res;
    }
    res.push(root.value);
    recDFSPreorder(root.left, res);
    recDFSPreorder(root.right, res);
    return res;
}

//Recursive DFS PostOrder
function recDFSPostorder(root, res) {
    if(root === null) {
        return res;
    }
    recDFSPostorder(root.left, res);
    recDFSPostorder(root.right, res);
    res.push(root.value);
    return res;
}

//Recursive DFS Inorder
function recDFSInorder(root, res) {
    if(root === null) {
        return res;
    }
    recDFSInorder(root.left, res);
    res.push(root.value);
    recDFSInorder(root.right, res);
    return res;
}

function BFSUsingDFS(root) {
    let result = [];
    if(root == null) {
        return result;
    }
    let stack = [];
    stack.push(root);
    result.push(root.val);
    while(stack.length > 0) {
        let n = stack.pop();
        if(n.left !== null || n.right !== null) {
            if(n.left !== null) {
                stack.push(n.left);
                result.push(n.left.val);
            }
            if(n.right !== null) {
                stack.push(n.right);
                result.push(n.right.val);
            }         
        }
    }
    return result;
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

console.log(dfs(sampleTreeRoot));
console.log(recDFSPreorder(sampleTreeRoot, []));
console.log(recDFSPostorder(sampleTreeRoot, []));
console.log(recDFSInorder(sampleTreeRoot, []));