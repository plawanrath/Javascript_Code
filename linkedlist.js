function LinkedList() {
    this.head = null;
}

function Node(value, next) {
    this.value = value;
    this.next = next;
}

LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head);
    this.head = newNode;
}

var list = new LinkedList();
list.addToHead(10);
list.addToHead(12);
list.addToHead(14);
console.log(list);
console.log(list.head.next.next.value);