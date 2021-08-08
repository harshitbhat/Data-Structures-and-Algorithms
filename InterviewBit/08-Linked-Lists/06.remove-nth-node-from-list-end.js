// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return the head node in the linked list
  removeNthFromEnd: function (head, k) {
    let n = 0;
    let temp = head;

    while (temp) {
      n++;
      temp = temp.next;
    }
    if (k >= n) {
      head = head.next;
      return head;
    }

    let first = head;
    let second = head;

    for (let i = 0; i < k; i++) {
      if (second.next == null) {
        if (i == k - 1) head = head.next;
        return head;
      }
      second = second.next;
    }

    while (second.next != null) {
      first = first.next;
      second = second.next;
    }
    first.next = first.next.next;
    return head;
  },
};
