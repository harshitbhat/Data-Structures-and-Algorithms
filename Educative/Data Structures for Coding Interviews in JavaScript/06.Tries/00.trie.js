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
Trie.prototype.search = function (key) {
  if (key === null) return false;

  key = key.toLowerCase();
  let currentNode = this.root;
  let index = 0;
  // for traversing and checking if a character is not present, then return false
  for (let i = 0; i < key.length; i++) {
    index = this.getIndex(key[i]);
    if (currentNode.children[index] === null) {
      return false;
    }
    currentNode = currentNode.children[index];
  }
  // is end word and currentNode is there - return true
  if (currentNode !== null && currentNode.isEndWord) {
    return true;
  }
  // word found but is not end word
  return false;
};

// delete
Trie.prototype.hasNoChildren = function (currentNode) {
  return currentNode.children.every((child) => child === null);
};

Trie.prototype.deleteHelper = function (key, currentNode, length, level) {
  let deletedSelf = false;

  if (currentNode === null) {
    console.log('Node does not exist');
    return deletedSelf;
  }

  // If we have reached at the node which points to the alphabet at the end of the key.
  if (level === length) {
    if (this.hasNoChildren(currentNode)) {
      currentNode = null;
      deletedSelf = true;
    } else {
      currentNode.unMarkAsLeaf();
      deletedSelf = false;
    }
  } else {
    let childNode = currentNode.children[this.getIndex(key[level])];
    let childDeleted = this.deleteHelper(key, childNode, length, level + 1);
    if (childDeleted) {
      currentNode.children[this.getIndex(key[level])] = null;
      if (currentNode.isEndWord) {
        deletedSelf = false;
      } else if (this.hasNoChildren(currentNode) === false) {
        deletedSelf = false;
      } else {
        currentNode = null;
        deletedSelf = true;
      }
    } else {
      deletedSelf = false;
    }
  }
  return deletedSelf;
};

Trie.prototype.delete = function (key) {
  if (this.root === null || key === null) return;
  this.deleteHelper(key, this.root, key.length, 0);
};

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
