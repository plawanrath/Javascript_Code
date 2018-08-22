function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res = '';
    buildString(root, res);
    return res;
};

function buildString(node, s) {
    if(node === null) {
        s += 'null' + ',';
    } else {
        s += node.val + ',';
        buildString(node.left, s);
        buildString(node.right, s);
    }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodes = data.split(',');
    return buildTree(nodes.reverse());
};

function buildTree(nodes) {
    let val = nodes.pop();
    if(val === 'null') {
        return null;
    } else {
        let n = new TreeNode(Number.parseInt(val));
        n.left = buildTree(nodes);
        n.right = buildTree(nodes);
        return n;
    }
}
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */