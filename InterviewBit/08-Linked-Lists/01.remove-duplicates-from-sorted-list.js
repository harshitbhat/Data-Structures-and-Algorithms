// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  deleteDuplicates: function (head) {
    let temp = head;
    while (temp && temp.next) {
      if (temp.next.data === temp.data) {
        temp.next = temp.next.next;
      } else {
        temp = temp.next;
      }
    }
    return head;
  },
};
