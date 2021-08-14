/**
 * @param {Node} node
 * @return {Node} node
 */

/*
  Pairwise swap a linked list
  The input list will have at least one element
  node is defined as

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
  pairWiseSwap(head) {
    if (!head.next) {
      return head;
    }

    let first = head;
    let second = null;
    let prev = null;
    head = first.next;

    while (first && first.next) {
      second = first.next;
      let temp = second.next;
      second.next = first;
      first.next = temp;
      if (prev) {
        prev.next = second;
      }
      prev = first;
      first = temp;
    }

    return head;
  }
}
