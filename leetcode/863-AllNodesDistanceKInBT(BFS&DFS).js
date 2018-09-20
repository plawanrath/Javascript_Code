class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

//Run DFS to find all parents of all nodes. 
//Then use BFS from target to get nodes k levels from target
let parent = null;
function dfs(node, parentNode) {
    if(node != null) {
        parent[node] = parentNode;
        dfs(node.left, node);
        dfs(node.right, node);
    }
}

function distancek(root, target, k) {
    parent = new Map();
    dfs(root, null);

    let q = [];
    q.unshift(null);
    q.unshift(target);
    let seen = new Set();
    seen.add(target);
    seen.add(null);
    let distance = 0;
    while(q.length > 0) {
        let node = q.pop();
        if(node == null) {
            if(distance == k) {
                let output = [];
                for(let val of q) {
                    output.push(val);
                }
                return output;
            } 
            q.unshift(null);
            distance++;
        } else {
            if(!seen.has(node.left)) {
                seen.add(node.left);
                q.unshift(node.left);
            }
            if(!seen.has(node.right)) {
                seen.add(node.right);
                q.unshift(node.right);
            }
            let par = parent[node];
            if(!seen.has(par)) {
                seen.add(par);
                q.unshift(par);
            }
        }
    }
    return [];
}