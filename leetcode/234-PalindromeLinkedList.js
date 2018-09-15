/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
let front;
function isPalindrome(head) {
    front = head;
    return checkPalindrome(head);
}

function checkPalindrome(tail) {
    if(tail == null) {
        return true;
    }
    if(checkPalindrome(tail.next) && front.val == tail.val) {
        front = front.next;
        return true;
    }
    return false;
}