/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2  capacity  );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/ 

function ListNode(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
}

function LinkedList() {
    this.head = new ListNode(null);
    this.tail = new ListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

LinkedList.prototype.addTohead = function(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
}

LinkedList.prototype.removeFromTail = function() {
    if(this.tail.prev === this.head) {
        return -1;
    }
    this.tail.prev.prev.next = this.tail;
    this.tail.prev = this.tail.prev.prev;
    return this.tail.prev;
}

function LRUCache(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.list = new LinkedList();
}

LRUCache.prototype.get = function(key) {
    var keys = Object.keys(this.map);
    var numKeys = [];
    for(var i=0;i<keys.length;i++) {
        numKeys.push(parseInt(keys[i], 10));
    }
    if(numKeys.indexOf(key) >= 0) {
        return this.map[key].value;
    }
    return -1;
}

LRUCache.prototype.put = function(key, value) {
    var keys = Object.keys(this.map);
    if(keys.indexOf(key) >= 0) {
        this.map[key].value = value;
        return;
    }
    var node = new ListNode(value);
    if(keys.length === this.capacity) {
        var rem = this.list.removeFromTail();
        this.list.addTohead(node);
        for(var item in this.map) {
            if(this.map[item] === rem) {
                this.map.delete(item);
                break;
            }
        }
        this.map[key] = node;
    } else {
        this.map[key] = node;
        this.list.addTohead(node);
    }
}

var cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
console.log(cache.get(2));
cache.put(3, 3);
console.log(cache.list);