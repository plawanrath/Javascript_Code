function dfs(matrix, source) {
    let stack = [];
    let noNodes = matrix[source].length - 1;
    let visited = new Array(noNodes + 1).fill(false);
    let element = source;
    let i = source;
    visited[source] = true;
    stack.push(source);
    while(stack.length > 0) {
        element = stack.pop();
        i = element;
        while(i <= noNodes) {
            if(matrix[element][i] === '1' && visited[i] === false) {
                stack.push(i);
                visited[i] = true;
                element = i;
                i = 1;
                continue;
            }
            i++;
        }
        stack.pop();
    }
}