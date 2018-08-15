var mergeKLists = function(lists) {
    return mergeKListsRec(lists, 0, lists.length-1)    
}

var mergeKListsRec = function(lists, start, end) {
    if(lists == null || lists.length <= 0) {
        return lists;
    }
    if(start == end) {
        return lists[start];
    }
    let mid = Math.floor((start+end)/2);
    let left = mergeKListsRec(lists, start, mid);
    let right = mergeKListsRec(lists, mid+1, end);
    return merge2(left, right);
};

function merge2(list1, list2) {
    if(list1 == null) {
        return list2;
    }
    if(list2 == null) {
        return list1;
    }
    if(list1.val < list2.val) {
        list1.next = merge2(list1.next, list2);
        return list1;
    } else {
        list2.next = merge2(list1, list2.next);
        return list2;
    }
}