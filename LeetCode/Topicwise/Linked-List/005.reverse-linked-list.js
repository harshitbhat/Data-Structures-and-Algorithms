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
