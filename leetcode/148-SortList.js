function sortList(head) {
    if(head === null) {
        return null;
    }
    if(head.next === null) {
        return head;
    }
    let mid = getMiddle(head);
    let rightHead = mid.next;
    return merge(sortList(head), sortList(rightHead));
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

function getMiddle(head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
