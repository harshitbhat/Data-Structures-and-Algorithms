class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  // Traverse
  traverse() {
    let temp = this.head;
    console.log('='.repeat(20));
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
    console.log('='.repeat(20));
  }
  // insert at beginning
  insertAtBeginning(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
  }
  // insert at end
  insertAtEnd(val) {
    const newNode = new Node(val);
    let temp = this.head;
    if (temp) {
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
      newNode.prev = temp;
    }
    // If there is no node in list
    else {
      this.head = newNode;
    }
  }
  // Reversing a doubly linked list
  reverse() {
    let temp = this.head;
    if (temp === null || temp.next === null) {
      return;
    }
    let prev = null;
    let curr = this.head;
    while (curr != null) {
      prev = curr.prev;
      curr.prev = curr.next;
      curr.next = prev;
      curr = curr.prev;
    }
    this.head = prev.prev;
  }
  // Deleting first node of a doubly linked list.
  deleteAtBeginning() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head === null;
      return;
    }
    this.head = this.head.next;
    this.head.prev = null;
  }
  // Delete Last Node
  deleteLastNode() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
    }
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.prev.next = null;
  }
}

const head = new Node(10);
const temp1 = new Node(20);
const temp2 = new Node(30);

head.next = temp1;

temp1.next = temp2;
temp1.prev = head;

temp2.prev = temp1;

const dll = new DoublyLinkedList();
dll.head = head;
dll.insertAtBeginning(1);
dll.insertAtBeginning(0);
dll.insertAtEnd(40);
dll.insertAtEnd(50);
dll.traverse();
// dll.reverse();
// dll.traverse();
dll.deleteAtBeginning();
dll.traverse();
dll.deleteLastNode();
dll.traverse();
