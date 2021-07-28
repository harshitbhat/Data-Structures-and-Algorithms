// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  solve: function (head) {
    let temp = head;
    let countZero = 0;
    while (temp) {
      if (temp.data === 0) {
        countZero++;
      }
      temp = temp.next;
    }
    temp = head;
    while (temp) {
      if (countZero > 0) {
        temp.data = 0;
        countZero--;
      } else {
        temp.data = 1;
      }
      temp = temp.next;
    }
    return head;
  },
};
