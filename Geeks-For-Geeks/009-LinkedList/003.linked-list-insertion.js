/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  //Function to insert a node at the beginning of the linked list.
  insertAtBegining(head, newData) {
    const newNode = new Node(newData);
    newNode.next = head;
    head = newNode;
    return head;
  }
  //Function to insert a node at the end of the linked list.
  insertAtEnd(head, newData) {
    const newNode = new Node(newData);
    if (head === null) {
      head = newNode;
      return head;
    }
    let temp = head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
    return head;
  }
}
