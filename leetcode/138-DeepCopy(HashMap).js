/**
 * A linked list is given such that each node contains an additional random 
 * pointer which could point to any node in the list or null. Return a deep copy of the 
 * list.
 */

 /**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

 //O(n)
 function copyRandomList(head) {
    if(head === null) {
        return null;
    }
    let map = new Map();
    let node = head;
    while(node !== null) {
        map[node] = new RandomListNode(node.label);
        node = node.next;
    }

    node = head;
    while(node !== null) {
        map[node].next = map[node.next];
        map[node].random = map[node.random];
        node = node.next; 
    }
    return map[head];
 }