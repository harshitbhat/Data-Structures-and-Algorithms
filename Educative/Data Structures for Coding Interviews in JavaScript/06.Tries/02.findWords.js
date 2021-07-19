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
* Insert a Word => trie.insert(key, value) where key is string, and value is int
* Search a Word => trie.search(key) return true or false
* Delete a Word => trie.delete(key)

* Note: the structure of TrieNode and Trie class is the same 
* as we learnt in the first two lessons. All members and methods 
* are available for use in this challenge
*/

function getWords(root, result, level, string) {
  if (root.isEndWord) {
    let temp = '';
    for (let i = 0; i < level; i++) {
      temp += string[i];
    }
    result.push(temp);
  }
  for (let i = 0; i < 26; i++) {
    if (root.children[i] !== null) {
      string[level] = String.fromCharCode(i + 'a'.charCodeAt(0));
      getWords(root.children[i], result, level + 1, string);
    }
  }
}

function findWords(root) {
  let result = [];
  let charArr = new Array(100).fill(null);

  getWords(root, result, 0, charArr);

  return result;
}
