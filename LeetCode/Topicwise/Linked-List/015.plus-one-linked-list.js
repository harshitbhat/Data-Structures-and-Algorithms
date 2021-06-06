/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  let cur = head;
  let fut = null;
  let prev = null;
  while (cur) {
    fut = cur.next;
    cur.next = prev;
    prev = cur;
    cur = fut;
  }
  head = prev;
  return head;
};

var plusOne = function (head) {
  const reverse = reverseList(head);
  let carry = 1;
  let temp = reverse;
  let lastNode;
  while (temp) {
    temp.val += carry;
    carry = Math.floor(temp.val / 10);
    temp.val = temp.val % 10;
    if (temp.next === null) {
      lastNode = temp;
    }
    temp = temp.next;
  }
  if (carry !== 0) {
    lastNode.next = new ListNode(carry);
  }
  return reverseList(reverse);
};
