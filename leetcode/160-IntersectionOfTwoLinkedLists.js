/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//O(n) time and O(1) space
function getIntersectionNode(headA, headB) {
    let a = headA;
    let b = headB;
    while(a != b) {
        a = a == null ? headB : a.next;
        b = b == null ? headA : b.next;
    }
    return a;
}

//O(n) space and time
function getIntersectionNode(headA, headB) {
    let set = new Set();
    let t1 = headA, t2 = headB;
    if(t1 == t2) {
        return t1;
    }
    while(t1 != null || t2 != null) {
        if(t1 == t2) {
            return t1;
        }
        if(t1) {
            if(set.has(t1)) {
                return t1;
            } else {
                set.add(t1);
                t1 = t1.next;
            }
        }
        if(t2) {
            if(set.has(t2)) {
                return t2;
            } else {
                set.add(t2);
                t2 = t2.next;
            }
        }
    }
    return null;
};