class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function mergeTrees(t1, t2) {
    if(t1 == null) {
        return t2;
    }
    if(t2 == null) {
        return t1;
    }
    t1.value += t2.value;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
}