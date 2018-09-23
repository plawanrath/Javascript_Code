function sortList(head) {
    if (head == null || head.next == null) return head;
    let slow = head;
    let fast = head.next;
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    fast = slow;
    slow = slow.next;
    fast.next = null;
    let first = sortList(head);
    let second = sortList(slow);
    return merge(first, second);  
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
