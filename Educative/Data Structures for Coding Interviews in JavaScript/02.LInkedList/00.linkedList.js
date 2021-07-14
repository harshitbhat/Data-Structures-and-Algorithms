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
