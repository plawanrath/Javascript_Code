class ListNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(null);
        this.tail = new ListNode(null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
}

LinkedList.prototype.addToHead = function(n) {
    n.prev = this.head;
    n.next = this.head.next;
    this.head.next.prev = n;
    this.head.next = n;
}

LinkedList.prototype.removeFromTail = function() {
    let item = this.tail.prev;
    if(item === this.head) {
        return -1;
    }
    this.tail.prev = this.tail.prev.prev;
    this.tail.prev.next = this.tail;
    return item;
}

LinkedList.prototype.removeAndAddTOHead = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.list = new LinkedList();
    }
}

LRUCache.prototype.get = function(key) {
    if(this.map[key] !== undefined) {
        let nd = this.map[key];
        this.list.removeAndAddTOHead(nd);
        return nd.value;
    }
    return -1;
}

LRUCache.prototype.put = function(key, value) {
    if(this.map[key] !== undefined) {
        let nd = this.map[key];
        nd.value = value;
        this.list.removeAndAddTOHead(nd);
    } else {
        if(Object.keys(this.map).length === this.capacity) {
            let nd = this.list.removeFromTail();
            for(let i in this.map) {
                if(this.map[i].value == nd.value) {
                    delete this.map[i]
                }
            }
        }
        let item = new ListNode(value);
        this.list.addToHead(item);
        this.map[key] = item;
    }
}

let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
// console.log(cache.list);
// console.log(cache.map);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.list);
