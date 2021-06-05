/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const stk = [];
  let temp = head;
  while (temp) {
    stk.push(temp.val);
    temp = temp.next;
  }
  let i = 0;
  let j = stk.length - 1;

  while (i < j) {
    if (stk[i] !== stk[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
