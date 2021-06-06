/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeInBetween = function (list1, a, b, list2) {
  let temp = list1;
  let ct = 1;
  while (ct < a) {
    ct++;
    temp = temp.next;
  }
  const start = temp;

  ct = 0;
  temp = list1;
  while (ct < b) {
    ct++;
    temp = temp.next;
  }
  const end = temp;

  temp = list2;

  start.next = temp;

  while (temp.next != null) {
    temp = temp.next;
  }

  temp.next = end.next;
  end.next = null;

  return list1;
};
