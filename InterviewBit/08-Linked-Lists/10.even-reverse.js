// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  solve: function (head) {
    const even = [];
    let k = 1;
    let temp = head;
    while (temp) {
      if (k % 2 === 0) {
        even.push(temp.data);
      }
      temp = temp.next;
      k++;
    }
    if (even.length > 0) {
      k = 1;
      temp = head;
      let idx = even.length - 1;
      while (temp) {
        if (k % 2 === 0) {
          temp.data = even[idx];
          idx--;
        }
        temp = temp.next;
        k++;
      }
    }
    return head;
  },
};
