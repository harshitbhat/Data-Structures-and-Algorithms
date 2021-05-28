class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // Traversing a linked List
  traverse() {
    let temp = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
  // Recursive traversal
  traverseRec(node) {
    if (node == null) return;
    console.log(node.val);
    this.traverseRec(node.next);
  }
  // insert at beginning
  insertAtBeginning(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }
  // insert at end
  insertAtEnd(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
}

const head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(30);
head1.next.next.next = new Node(40);

const head2 = new Node(10);

const head3 = null;

const list = new LinkedList();
list.head = head3;
list.insertAtEnd(50);
list.traverse(list.head);
