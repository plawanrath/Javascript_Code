/**
 * Prim's algorithm is used to find the minimum spanning tree.
 * It has s running time of O(n2) but can be optimized using a min heap to O(n log n)
 */

function prims(graph) {
      
    // arbitrarily choose initial vertex from graph
    let vertex = 0;
    
    // initialize empty edges array and empty MST
    let MST = [];
    let edges = [];
    let visited = [];
    let minEdge = [null,null,Number.MAX_VALUE];
    
    // run prims algorithm until we create an MST
    // that contains every vertex from the graph
    while (MST.length !== graph.length-1) {
      
      // mark this vertex as visited
      visited.push(vertex);
      
      // add each edge to list of potential edges
      for (let r = 0; r < graph.length; r++) {
        if (graph[vertex][r] !== 0) { 
          edges.push([vertex,r,graph[vertex][r]]); 
        }
      }
  
      // find edge with the smallest weight to a vertex
      // that has not yet been visited
      for (let e = 0; e < edges.length; e++) {
        if (edges[e][2] < minEdge[2] && visited.indexOf(edges[e][1]) === -1) { 
          minEdge = edges[e]; 
        }
      }
  
      // remove min weight edge from list of edges
      edges.splice(edges.indexOf(minEdge), 1);
  
      // push min edge to MST
      MST.push(minEdge);
        
      // start at new vertex and reset min edge
      vertex = minEdge[1];
      minEdge = [null,null,Number.MAX_VALUE];
      
    }
    return MST;
  }
  
let graph = [[0, 3, 4], [3, 0, 2], [4, 2, 0]];
console.log(prims(graph));