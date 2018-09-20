/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    if(head == null || head.next == null || k < 2) {
        return head;
    }
    let dummy = new ListNode(0);
    let count;
    dummy.next = head;
    let tail = dummy, prev = dummy, temp, count;
    while(true) {
        count = k;
        while(count > 0 && tail != null) {
            count--;
            tail = tail.next;
        }
        if(tail == null) {
            break;
        }
        head = prev.next;
        while(prev.next != tail) {
            temp = prev.next;
            prev.next = temp.next;
            temp.next = tail.next;
            tail.next = temp;
        }
        tail = head;
        prev = head;
    }
    return dummy.next;
}