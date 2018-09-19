class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function serialize(root) {
    let res = '';
    return buildString(root, res);
}

function buildString(root, res) {
    if(root == null) {
        res += 'null,';
    } else {
        res += root.val + ',';
        res = buildString(root.left, res);
        res = buildString(root.right, res);
    }
    return res;
}

function deserialize(s) {
    let nodes = s.split(',');
    return buildTree(nodes);
}

function buildTree(nodes) {
    let val = nodes.shift();
    let root = null;
    if(val != 'null') {
        root = new TreeNode(parseInt(val));
        root.left = buildTree(nodes);
        root.right = buildTree(nodes);
    }
    return root;
}