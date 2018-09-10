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

 function reverseList(head) {
     if(head == null || head.next == null) {
         return head;
     }
     let p = reverseList(head.next);
     head.next.next = head;
     head.next = null;
     return p;
 }