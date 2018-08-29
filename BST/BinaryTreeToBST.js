/**
 * Binary Tree to BST
 * 1. Flatten To Linked List - O(n)
 * 2. Sort Linked List using Merge Sort - O(n log n)
 * 3. Convert Sorted List to BST - O(n log n)
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

function BTreeToBST(root) {
    flattenBTToList(root);
    sortList(root);
    return sortedListToBST(root);
}

function flattenBTToList(root) {
    if (root == null) {
        return;
    } 
    
    let left = root.left;
    let right = root.right;
    
    root.left = null;
    
    flatten(left);
    flatten(right);
    
    root.right = left;
    let cur = root;
    while (cur.right != null) {
        cur = cur.right;
    } 
    cur.right = right;
}

function sortList(head) {
    if(head === null) {
        return null;
    }
    if(head.next === null) {
        return head;
    }
    let mid = getMiddle(head, null);
    let rightHead = mid.next;
    return merge(sortList(head), sortList(rightHead));
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
