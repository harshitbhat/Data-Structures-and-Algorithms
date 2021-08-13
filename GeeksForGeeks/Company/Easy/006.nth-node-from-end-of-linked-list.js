// Question Link:https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1/

class Solution {
  //Function to find the data of nth node from the end of a linked list
  getNthFromLast(head, n) {
    let l = 0;
    let temp = head;
    while (temp) {
      l++;
      temp = temp.next;
    }
    let k = 0;
    temp = head;
    while (k !== l - n + 1) {
      k++;
      temp = temp.next;
    }
    return temp;
  }
}
