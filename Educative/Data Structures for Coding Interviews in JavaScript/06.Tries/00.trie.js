class TrieNode {
  constructor(char) {
    this.children = new Array(26).fill(null); // Total English Alphabets
    this.isEndWord = false; //true if it is end of word.
    this.char = char; // To store value of a particular key
  }
  // Method to mark current node as leaf
  markAsLeaf() {
    this.isEndWord = true;
  }
  // Method to unMark the currentNode as Leaf
  unMarkAsLeaf() {
    this.isEndWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(''); // root Node
  }
  getIndex(t) {
    return t.charCodeAt(0) - 'a'.charCodeAt(0);
  }
}

// More Methods

//  insert
Trie.prototype.insert = function (key, value) {};

// search
Trie.prototype.search = function (key) {};

// delete
Trie.prototype.delete = function (key) {};

/* -------------------------------------------------------------------------- */
/*                                    Test                                    */
/* -------------------------------------------------------------------------- */
const trieNode = new TrieNode('a');
console.log(trieNode);
