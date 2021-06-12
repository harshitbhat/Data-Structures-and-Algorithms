/**
 * @param {Node} head
 * @param {number} x
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  //Function to insert a node in the middle of the linked list.
  insertInMiddle(head, x) {
    let first = head;
    let second = head;
    while (second) {
      if (second.next && second.next.next) {
        first = first.next;
        second = second.next.next;
      } else {
        break;
      }
    }
    const newNode = new Node(x);
    newNode.next = first.next;
    first.next = newNode;
    return head;
  }
}
