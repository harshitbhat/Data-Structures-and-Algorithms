/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const calculateLength = (head) => {
  let temp = head;
  let ct = 0;
  while (temp) {
    ct++;
    temp = temp.next;
  }
  return ct;
};

var swapNodes = function (head, k) {
  let ct = 1;
  let firstNode;
  let secondNode;
  let temp = head;
  const n = calculateLength(head);
  while (temp) {
    if (ct === k) {
      firstNode = temp;
    }
    if (ct === n - k + 1) {
      secondNode = temp;
    }
    ct++;
    temp = temp.next;
  }
  [firstNode.val, secondNode.val] = [secondNode.val, firstNode.val];
  return head;
};
