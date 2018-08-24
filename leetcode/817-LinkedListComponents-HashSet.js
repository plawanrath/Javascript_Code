function ListNode(val) {
    this.val = val;
    this.next = null;
}

function numComponnents(head, G) {
    let set = new Set();
    for(let i=0;i<G.length;i++) {
	set.add(G[i]);
    }
    let curr = head;
    let res = 0;
    while(curr != null) {
	if(set.has(curr.val) && (curr.next == null || !set.has(curr.next.val) )) {
	    res++;
	}
	curr = curr.next;
    }
    return res;
}


