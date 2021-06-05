/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function (head, m, n) {
  let temp = head;
  while (temp) {
    let i = 1;
    while (temp && i < m) {
      i++;
      temp = temp.next;
    }
    i = 0;
    while (temp && temp.next && i < n) {
      i++;
      temp.next = temp.next.next;
    }
    if (temp) {
      temp = temp.next;
    }
  }
  return head;
};
