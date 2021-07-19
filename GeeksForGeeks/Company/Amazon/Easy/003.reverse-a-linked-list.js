// Question Link: https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1/

class Solution {
  //Function to reverse a linked list.
  reverseList(head) {
    let currentNode = head;
    let previousNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    head = previousNode;
    return head;
  }
}
