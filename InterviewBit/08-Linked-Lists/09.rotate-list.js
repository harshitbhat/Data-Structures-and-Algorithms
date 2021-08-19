// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

const length = (head) => {
  let l = 0;
  let temp = head;
  while (temp) {
    l++;
    temp = temp.next;
  }
  return l;
};

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return the head node in the linked list
  rotateRight: function (A, B) {
    const n = length(A);
    if (n === 1) {
      return A;
    }

    if (B >= n) {
      B = B % n;
    }

    if (B % n === 0) {
      return A;
    }

    const k = n - B;

    let t = 1;
    let temp = A;
    while (temp && t !== k) {
      t++;
      temp = temp.next;
    }

    const newHead = temp.next;
    temp.next = null;

    let pointer = newHead;

    while (pointer.next !== null) {
      pointer = pointer.next;
    }

    pointer.next = A;

    return newHead;
  },
};
