/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  const head = new ListNode();
  let temp1 = l1;
  let temp2 = l2;
  let temp = head;

  while (temp1 && temp2) {
    if (temp1.val < temp2.val) {
      temp.next = new ListNode(temp1.val);
      temp1 = temp1.next;
    } else {
      temp.next = new ListNode(temp2.val);
      temp2 = temp2.next;
    }
    temp = temp.next;
  }
  while (temp1) {
    temp.next = new ListNode(temp1.val);
    temp1 = temp1.next;
    temp = temp.next;
  }
  while (temp2) {
    temp.next = new ListNode(temp2.val);
    temp2 = temp2.next;
    temp = temp.next;
  }

  return head.next;
};
