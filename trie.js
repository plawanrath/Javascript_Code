/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.value = "";
    this.array = new Array(26).fill(null);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    word = word.toLowerCase();
    trnode = this;
    for(var i=0;i<word.length;i++) {
        var letter = word.charCodeAt(i) - 97;
        if(trnode.array[letter] === null) {
            var lt = new Trie();
            trnode.array[letter] = lt;            
        }
        trnode = trnode.array[letter];
    }
    trnode.value = word;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    word = word.toLowerCase();
    var trnode = this;
    for(var i=0;i<word.length;i++) {
        var index = word.charCodeAt(i) - 97;
        if(trnode.array[index] === null) {
            return false;
        }
        trnode = trnode.array[index];
    }
    if(trnode.value === word) {
        return true;
    }
    return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    prefix = prefix.toLowerCase();
    var trnode = this;
    for(var i=0;i<prefix.length;i++) {
        var index = prefix.charCodeAt(i) - 97;
        if(trnode.array[index] === null) {
            return false;
        }
        trnode = trnode.array[index];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

 tobj = new Trie();
 tobj.insert("test");
//  console.log(tobj);
console.log(tobj.startsWith("e"));
console.log(tobj.search("test"));