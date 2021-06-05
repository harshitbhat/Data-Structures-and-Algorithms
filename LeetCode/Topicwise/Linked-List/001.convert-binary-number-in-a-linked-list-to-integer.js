/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let temp = head;
  let len = 0;
  while (temp) {
    len++;
    temp = temp.next;
  }
  let ans = 0;
  let idx = len - 1;
  temp = head;
  while (temp) {
    ans += temp.val * 2 ** idx;
    idx--;
    temp = temp.next;
  }
  return ans;
};
