class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Check if list is empty
LinkedList.prototype.isEmpty = function () {
  return this.head === null;
};

// Get Head
LinkedList.prototype.addHead = function () {
  return this.head;
};

// Print List
LinkedList.prototype.printList = function () {
  if (this.isEmpty()) {
    console.log('Empty List');
    return false;
  }
  let temp = this.head;
  while (temp !== null) {
    process.stdout.write(String(temp.data));
    process.stdout.write(' -> ');
    temp = temp.next;
  }
  console.log(null);
  return true;
};

// Get List str
LinkedList.prototype.getListStr = function () {
  if (this.isEmpty()) {
    console.log('Empty List');
    return 'null';
  }
  let st = '';
  let temp = this.head;
  while (temp != null) {
    st += String(temp.data);
    st += ' -> ';
    temp = temp.next;
  }
  st += 'null';
  return st;
};

// Insert at head - Time Complexity: O(1)
LinkedList.prototype.insertAtHead = function (data) {
  const temp = new Node(data);
  temp.next = this.head;
  this.head = temp;
  return this;
};

// Insert at tail - Time Complexity: O(n), could be O(1) if tail pointer is maintained
LinkedList.prototype.insertAtTail = function (newData) {
  const newNode = new Node(newData);

  if (this.isEmpty()) {
    this.head = newNode;
    return this;
  }

  let temp = this.head;
  // traverse, till next of temp is not null and insert there
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = newNode;
  return this;
};

// Search if value is present
LinkedList.prototype.search = function (value) {
  if (this.isEmpty()) {
    return false;
  }

  let temp = this.head;
  while (temp) {
    if (temp.data === value) {
      return true;
    }
    temp = temp.next;
  }

  return false;
};

// Delete at head
LinkedList.prototype.deleteAtHead = function (value) {
  if (this.isEmpty()) {
    return this;
  }
  this.head = this.head.next;
  return this;
};

/* -------------------------------------------------------------------------- */
/*                                    Test                                    */
/* -------------------------------------------------------------------------- */
let list = new LinkedList();

for (let i = 10; i >= 1; i--) {
  list = list.insertAtHead(i);
}

list.printList();

list = list.insertAtTail(11);

list.printList();

list.deleteAtHead();
list.deleteAtHead();

list.printList();
