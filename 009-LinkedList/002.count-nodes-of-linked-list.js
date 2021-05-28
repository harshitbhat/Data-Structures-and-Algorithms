/**
 * @param {Node} head
 * @returns {number}
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
  //Function to count nodes of a linked list.
  getCount(head) {
    //your code here
    let ans = 0;
    let temp = head;
    while (temp) {
      temp = temp.next;
      ans++;
    }
    return ans;
  }
}
