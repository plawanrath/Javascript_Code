/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
let map = null;
var cloneGraph = function(graph) {
    map = new Map();
    return copy(graph);
};

function copy(node) {
    if(node == null) {
        return null;
    }
    if(map[node.label]) {
        return map[node.label];
    }
    let clone = new UndirectedGraphNode(node.label);
    map[clone.label] = clone;
    for(let n of node.neighbors) {
        clone.neighbors.push(copy(n));
    }
    return clone;
}