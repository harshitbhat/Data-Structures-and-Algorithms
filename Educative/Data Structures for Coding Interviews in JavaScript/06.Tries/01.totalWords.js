'use strict';
const TrieNode = require('./TrieNode.js');
const Trie = require('./Trie.js');

/**
* Create Trie => let trie = new Trie()
*
* TrieNode => {children, isEndWord, char, 
* markAsLeaf(), unMarkAsLeaf()}
*
* access root => trie.root
* getIndex of character 't' => trie.getIndex(t)
* t.charCodeAt(0) => The charCodeAt() function returns 
                     the order of a given character
* Insert a Word => trie.insert(key) where key is string, and value is int
* Search a Word => trie.search(key) return true or false
* Delete a Word => trie.delete(key)

* Note: the structure of TrieNode and Trie class is the same 
* as we learnt in the first two lessons. All members and methods 
* are available for use in this challenge
*/

function hasChildren(currentNode) {
  return currentNode.children.some((child) => child !== null);
}

function totalWords(rootN) {
  let result = 0;

  let currentNode = rootN;

  if (currentNode !== null) {
    if (hasChildren(currentNode)) {
      for (const child of currentNode.children) {
        if (child !== null) {
          if (child.isEndWord) {
            result += 1 + totalWords(child);
          } else {
            result += totalWords(child);
          }
        }
      }
    }
  }

  return result;
}
