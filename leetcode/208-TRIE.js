/**
 * Initialize your data structure here.
 */
class Trie {
    constructor() {
        this.nodes = new Map();
        this.isWord = false;
    }

    /**
     * Inserts a word into the trie
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let trnode = this;
        for(let i=0;i<word.length;i++) {
            if(!trnode.nodes[word[i]]) {
                trnode.nodes[word[i]] = new Trie();
            }
            trnode = trnode.nodes[word[i]];
        }
        trnode.isWord = true;
    }

    /** Returns if the word is on the Trie
     *  @param {string} word
     *  @return {boolean}
     */
    search(word) {
        let trnode = this;
        for(let i=0;i<word.length;i++) {
            if(!trnode.nodes[word[i]]) {
                return false;
            }
            trnode = trnode.nodes[word[i]];
        }
        return trnode.isWord;
    }

    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @param {boolean}
     */
    startsWith(prefix) {
        let trnode = this;
        for(let i=0;i<prefix.length;i++) {
            if(!trnode.nodes[prefix[i]]) {
                return false;
            }
            trnode = trnode.nodes[prefix[i]];
        }
        return true;
    }
}

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
console.log(tobj.startsWith("t"));
console.log(tobj.search("test"));