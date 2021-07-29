// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : head node of linked list
  //return the head node in the linked list
  addTwoNumbers: function (A, B) {
    let pointerA = A;
    let pointerB = B;
    let ans = new Node(null);
    let temp = ans;
    let carry = 0;
    while (pointerA && pointerB) {
      let sum = pointerA.data + pointerB.data + carry;
      carry = Math.floor(sum / 10);
      sum = sum < 10 ? sum : sum % 10;
      temp.next = new Node(sum);
      temp = temp.next;
      pointerA = pointerA.next;
      pointerB = pointerB.next;
    }
    while (pointerA) {
      let sum = pointerA.data + carry;
      carry = Math.floor(sum / 10);
      sum = sum < 10 ? sum : sum % 10;
      temp.next = new Node(sum);
      temp = temp.next;
      pointerA = pointerA.next;
    }
    while (pointerB) {
      let sum = pointerB.data + carry;
      carry = Math.floor(sum / 10);
      sum = sum < 10 ? sum : sum % 10;
      temp.next = new Node(sum);
      temp = temp.next;
      pointerB = pointerB.next;
    }
    if (carry !== 0) {
      temp.next = new Node(carry);
    }
    return ans.next;
  },
};
