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
Trie.prototype.insert = function (key) {
  if (key === null) return;

  key = key.toLowerCase();

  let currentNode = this.root;
  let index = 0;

  for (let i = 0; i < key.length; i++) {
    index = this.getIndex(key[i]);
    if (currentNode.children[index] === null) {
      currentNode.children[index] = new TrieNode(key[i]);
    }
    currentNode = currentNode.children[index];
  }

  currentNode.markAsLeaf();
};

// search
Trie.prototype.search = function (key) {};

// delete
Trie.prototype.delete = function (key) {};

/* -------------------------------------------------------------------------- */
/*                                    Test                                    */
/* -------------------------------------------------------------------------- */

const trie = new Trie();

// trie.insert('the');
// console.log(trie);
// console.log(trie.root.children['t'.charCodeAt(0) - 'a'.charCodeAt(0)]);

let keys = ['the', 'a', 'there', 'answer', 'any', 'by', 'bye', 'their', 'abc'];

for (const key of keys) {
  trie.insert(key);
}

console.log(trie.root.children);
