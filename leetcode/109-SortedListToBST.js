class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function sortedListToBST(root) {
    if(root === null) {
        return null;
    }
    return toBST(root, null);
}

function toBST(head, tail) {
    let slow = head;
    let fast = head;
    if(head === tail) {
        return null;
    }
    while(fast !== tail && fast.next !== tail) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let thead = new Node(slow.val);
    thead.left = toBST(head, slow);
    thead.right = toBST(slow.next, tail);
    return thead;
}