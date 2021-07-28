// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  swapPairs: function (head) {
    let curr = head;
    while (curr && curr.next) {
      let temp = curr.data;
      curr.data = curr.next.data;
      curr.next.data = temp;
      curr = curr.next.next;
    }
    return head;
  },
};
