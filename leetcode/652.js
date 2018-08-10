/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

//Using DFS

//Serialize using DFS and check count from map
function dfs(node) {
    if(node == null) {
	    return '#';
    }
    let serial = node.val + ',' + dfs(node.left) + ',' + dfs(node.right);
    if(map[serial] === undefined) {
	    map[serial] = 1;
    } else {
	    map[serial]++;
    }
    if(map[serial] === 2) {
	    result.push(node);
    }
    return serial;
}

let map = new Map();
let result = [];
var findDuplicateSubtrees = function(root) {
    dfs(root);
    return result;
};

testMap = new Map();
testMap["test"] = 2;
console.log(typeof testMap["test"]);