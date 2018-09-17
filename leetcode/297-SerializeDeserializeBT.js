class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function serialize(root) {
    console.log(buildString(root, ''));
}

function buildString(root, s) {
    if(root == null) {
        s += 'null,';
    } else {
        s += root.val + ',';
        s = buildString(root.left, s);
        s = buildString(root.right, s);
    }
    return s;
}


function deserialize(str) {
    let nodes = str.split(',');
    return buildTree(nodes);
}

function buildTree(nodes) {
    let val = nodes.shift();
    let root = null;
    if(val != 'null') {
        root = new TreeNode(parseInt(val));
        root.left = buildTree(nodes);
        root.right = buildTree(nodes);
        return root;
    } 
    return null;
}

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(5);

serialize(tree);
console.log(deserialize("1,2,null,null,3,4,null,null,5,null,null,"));