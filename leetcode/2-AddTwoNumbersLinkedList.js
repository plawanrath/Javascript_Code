/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let carry = 0;
    let res = new ListNode(null);
    let head = res;
    while(l1 != null && l2 != null) {
        let val = l1.val + l2.val + carry;
        if(val >= 10) {
            carry = 1;
            val = val % 10;
        } else {
            carry = 0;
        }
        res.next = new ListNode(val);
        res = res.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while(l1 != null) {
        let l1v = l1.val + carry;
        if(l1v >= 10) {
            carry = 1;
            l1v = l1v % 10;
        } else {
            carry = 0;
        }        
        res.next = new ListNode(l1v);
        res = res.next;
        l1 = l1.next;
    }
    while(l2 != null) {
        let l2v = l2.val + carry;
        if(l2v >= 10) {
            carry = 1;
            l2v = l2v % 10;
        } else {
            carry = 0;
        }
        res.next = new ListNode(l2v);
        res = res.next;
        l2 = l2.next;
    }
    if(carry == 1) {
        res.next = new ListNode(carry);
        res = res.next;
    }
    return head.next;
};