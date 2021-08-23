// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

// Have to do it in place

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  reorderList: function (A) {
    let temp = A;
    const arr = [];
    while (temp) {
      arr.push(temp.data);
      temp = temp.next;
    }
    let i = 0;
    let j = arr.length - 1;

    if (arr.length === 1) {
      return A;
    }

    const head = new Node(null);
    let temp2 = head;

    while (i < arr.length && j >= 0 && i <= j) {
      temp2.next = new Node(arr[i]);
      temp2 = temp2.next;
      temp2.next = new Node(arr[j]);
      temp2 = temp2.next;
      i += 1;
      j -= 1;
    }
    if (arr.length % 2 === 0) {
      return head.next;
    } else {
      let temp = head.next;
      while (temp.next.next) {
        temp = temp.next;
      }
      temp.next = null;
    }
    return head.next;
  },
};
