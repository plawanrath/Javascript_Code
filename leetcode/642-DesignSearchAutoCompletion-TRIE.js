/**
 * To solve this problem optimally in O(n2) time you will need to create the trie. The Trie will store the sentence and counts
 * Once we have the Trie, the next step would be to go over the prefix and for each prefix item entered, keep going down the
 * Trie and if youa are able to get to the end of the Trie, look at all the sentences at the end of the Trie and put them 
 * in a Max Heap. This way you can safely remove the top 3 elements from the Max Heap which give you your 3 most frequently used
 * values.
 * 
 * NOTE:::: copies of complete sentences are stored at every TrieNode 
 * along its path down, which has pretty high memory overhead
 */
function heap() {
    this.value = [];
}

heap.prototype.swap = function(i, j) {
    var temp = this.value[i];
    this.value[i] = this.value[j];
    this.value[j] = temp;
}

function getParentIndex(index) {
    return Math.floor((index-1)/2);
}

function getLeftChildIndex(index) {
    return (2*index)+1;
}

function getRightChildIndex(index) {
    return (2*index)+2;
}

heap.prototype.add = function(item) {
    this.value.push(item);
    if(this.value.length === 1) {
        return;
    }
    this.heapifyUp();
}

heap.prototype.remove = function() {
    if(this.value.length === 0) {
        return NaN;
    }
    if(this.value.length === 1) {
        return this.value.pop();
    }
    this.swap(0, this.value.length-1);
    var ret = this.value.pop();
    this.heapifyDown();
    return ret;
}

heap.prototype.heapifyUp = function() {
    var index = this.value.length-1;
    var parent = getParentIndex(index);
    while(index >= 0 && this.isGreater(this.value[index], this.value[parent])) {
        this.swap(index, parent);
        index = parent;
        parent = getParentIndex(index);
    }
}

heap.prototype.heapifyDown = function() {
    var index = 0;
    var lchildInd = getLeftChildIndex(index);
    var rchildInd = getRightChildIndex(index);
    while(index < this.value.length && (isGreater(this.value[lchildInd],this.value[index]) || this.isGreater(this.value[rchildInd],this.value[index]))) {
        if(isGreater(this.value[lchildInd],this.value[rchildInd])) {
            this.swap(index, lchildInd);
            index = lchildInd;
        } else {
            this.swap(index, rchildInd);
            index = rchildInd;
        }
        lchildInd = getLeftChildIndex(index);
        rchildInd = getRightChildIndex(index);
    }
}

heap.prototype.isGreater = function(a, b) {
    if(a.count === b.count) {
        return a.sentence > b.sentence;
    }
    if(a.count > b.count) {
        return true;
    }
    return false;    
}

class TrieNode {
    constructor() {
        this.children = new Map();
        this.counts = new Map();
        this.isWord = false;
    }
}

class Pair {
    constructor(sentence, count) {
        this.sentence = sentence;
        this.count = count;
    }
}

let root = undefined;
let prefix = '';
function addToTrie(sentence, count) {
    let curr = root;
    for(let i=0;i<sentence.length;i++) {
        let c = sentence[i];
        let next = curr.children[c];
        if(next === undefined) {
            next = new TrieNode();
            curr.children[c] = next;
        }
        curr = next;
        if(curr.counts[sentence] === undefined) {
            curr.counts[sentence] = 0;
        } else {
            curr.counts[sentence] + count;
        }
    }
    curr.isWord = true;
}

class Autocomplete {
    constructor(sentences, times) {
        root = new TrieNode();
        prefix = '';
        for(let i=0;i<sentences.length;i++) {
            addToTrie(sentences[i], times[i]);
        }        
    }
}

Autocomplete.prototype.input = function(c) {
    let res = [];
    if(c === '#') {
        addToTrie(prefix, 1);
        prefix = '';
        return res;
    }
    prefix = prefix + c;
    let curr = root;
    for(let i=0;i<prefix.length;i++) {
        let c = prefix[i];
        let next = curr.children[c];
        if(next == null) {
            return new Array();
        }
        curr = next;
    }
    let pq = new heap();
    for(let s in curr.counts) {
        let pair = new Pair(s, curr.counts[s]);
        pq.add(pair);
    }
    res = [];
    for(let i=0;i< 3 && pq.value.length >= 0;i++) {
        res.push(pq.remove().sentence);
    }
    return res;
}