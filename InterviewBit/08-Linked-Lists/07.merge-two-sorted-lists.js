// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : head node of linked list
  //return the head node in the linked list
  mergeTwoLists: function (A, B) {
    const head = new Node(null);
    let temp = head;
    let tempA = A;
    let tempB = B;
    while (tempA && tempB) {
      if (tempA.data < tempB.data) {
        temp.next = new Node(tempA.data);
        temp = temp.next;
        tempA = tempA.next;
      } else {
        temp.next = new Node(tempB.data);
        temp = temp.next;
        tempB = tempB.next;
      }
    }
    while (tempA) {
      temp.next = new Node(tempA.data);
      temp = temp.next;
      tempA = tempA.next;
    }
    while (tempB) {
      temp.next = new Node(tempB.data);
      temp = temp.next;
      tempB = tempB.next;
    }
    return head.next;
  },
};
