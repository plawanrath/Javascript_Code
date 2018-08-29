class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function sortedArrToBST(arr, low, high) {
    if(low > high) {
        return null;
    }
    let mid = Math.floor((low+high)/2);
    let node = new Node(arr[mid]);
    node.left = sortedArrToBST(arr, low, mid-1);
    node.right = sortedArrToBST(arr, mid+1, high);
    return node;
}