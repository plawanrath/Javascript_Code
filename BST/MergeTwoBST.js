/**
 * Merge Two BSTs
 * 1. Inorder traverse to get SOrted List - O(n)
 * 2. Merge the 2 sorted List - O(n)
 * 3. Convert Merged Sorted List to BST - O(n log n)
 * 
 * O(n log n)
 */
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function merge2BST(list1, list2) {
    let head1 = null;
    let prev1 = null;
    let head2 = null;
    let prev2 = null;
    getSortedList(list1, prev1, head1);
    getSortedList(list2, prev2, head2);
    let res = merge(head1, head2);
    return sortedListToBST(res);
}

function getSortedList(node, prev, head) {
    if(node === null) {
        return;
    }
    sortedList(node.left, prev, head);

    node.left = prev;
    if(prev !== null) {
        prev.right = node;
    } else {
        head = node;
    }
    prev = node;

    sortedList(node.right, prev, head);
}

function merge(head1, head2) {
    let dummy = new ListNode(null);
    let curr = dummy;
    while(head1 !== null && head2 !== null) {
        if(head1.val < head2.val) {
            curr.next = head1;
            head1 = head1.next;
        } else {
            curr.next = head2;
            head2 = head2.next;
        }
    }
    if(head1 === null) {
        curr.next = head2;
    } else {
        curr.next = head1;
    }
    return dummy.next;
}

function sortedListToBST(root) {
    if(root === null) {
        return null;
    }
    return toBST(root, null);
}

function toBST(head, tail) {
    if(head === tail) {
        return null;
    }
    let mid = getMiddle(head, tail);
    let thead = new Node(mid.val);
    thead.left = toBST(head, mid);
    thead.right = toBST(mid.next, tail);
    return thead;
}

function getMiddle(head, tail) {
    let slow = head;
    let fast = head;
    while(fast !== tail && fast.next !== tail) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
