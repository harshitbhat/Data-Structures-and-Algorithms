// Question Link: https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1/

class Solution {
  /* Should return data of middle node. If linked list is empty, then  -1*/
  getMiddle(node) {
    let first = node;
    let second = node;

    while (second && second.next) {
      second = second.next.next;
      first = first.next;
    }
    return first.data;
  }
}
