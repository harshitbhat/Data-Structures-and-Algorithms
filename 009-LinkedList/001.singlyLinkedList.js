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
  traverse() {
    let temp = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
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
list.traverse();
