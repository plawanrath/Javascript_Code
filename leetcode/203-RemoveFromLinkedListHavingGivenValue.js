//Remove LinkedList Elements
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function removeElements(head, item) {
    if(head == null) {
        return head;
    }
    while(head !== null  && head.val === item) {
        head = head.next;
    }
    var temp = head;
    while(temp !== null || temp.next !== null) {
        if(temp.next.val === item) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return head;
}