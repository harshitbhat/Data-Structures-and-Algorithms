// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

const calculateLength = (head) => {
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
  //return an integer
  solve: function (A, B) {
    const l = calculateLength(A);
    const middle = Math.floor(l / 2) + 1;
    const pos = middle - B;
    console.log(l, middle, pos);
    if (pos <= 0) {
      return -1;
    }
    let k = 1;
    let temp = A;
    while (k !== pos) {
      k++;
      temp = temp.next;
    }
    return temp.data;
  },
};
