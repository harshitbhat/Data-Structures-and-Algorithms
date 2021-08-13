/**
 * @param {Node} head
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
  //Function to remove duplicates from sorted linked list.
  removeDuplicates(head) {
    let temp = head;
    while (temp && temp.next) {
      if (temp.next.data === temp.data) {
        temp.next = temp.next.next;
      } else {
        temp = temp.next;
      }
    }
    return head;
  }
}
