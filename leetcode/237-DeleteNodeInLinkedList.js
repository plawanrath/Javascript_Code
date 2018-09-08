/**
 * Write a function to delete a node (except the tail) in a singly linked list, 
 * given only access to that node.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

//The idea is since you have access to only that node, you replace the value
//of the node you want given with that of the next node and then point the
//next pointer to the next->next node that essentially replaces the given node with next.
//This will not work if the given node to delete is the tail node.
function deleteNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};