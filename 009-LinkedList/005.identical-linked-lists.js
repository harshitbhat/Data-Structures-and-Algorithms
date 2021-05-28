/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {boolean}
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
  //Function to check whether two linked lists are identical or not.
  areIdentical(head1, head2) {
    let temp1 = head1;
    let temp2 = head2;
    while (temp1 && temp2) {
      if (temp1.data !== temp2.data) return false;
      temp1 = temp1.next;
      temp2 = temp2.next;
    }
    return true;
  }
}
