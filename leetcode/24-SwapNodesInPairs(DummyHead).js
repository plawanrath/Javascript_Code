/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
    if(head == null || head.next == null) {
        return head;
    }
    let newHead = new ListNode(0);
    newHead.next = head;
    let prev = newHead;
    while(head != null && head.next != null) {
        prev.next = head.next;
        head.next = head.next.next;
        prev.next.next = head;

        head = head.next;
        prev = prev.next.next;
    }
    return newHead.next;
}