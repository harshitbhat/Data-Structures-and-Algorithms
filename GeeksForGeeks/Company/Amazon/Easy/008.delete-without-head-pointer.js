class Solution {
  deleteNode(del) {
    let nextNode = del.next;
    let currentNode = del;
    let prevNode = null;
    while (nextNode) {
      currentNode.data = nextNode.data;
      prevNode = currentNode;
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
    prevNode.next = null;
  }
  // better
  deleteNode(del) {
    if (!del.next) {
      del = null;
    } else {
      del.data = del.next.data;
      del.next = del.next.next;
    }
  }
}
