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
var deleteDuplicatesUnsorted = function (head) {
  const ctHash = {};
  let temp = head;
  while (temp) {
    if (ctHash[temp.val]) {
      ctHash[temp.val]++;
    } else {
      ctHash[temp.val] = 1;
    }
    temp = temp.next;
  }
  temp = head;
  while (temp && ctHash[temp.val] !== 1) {
    temp = temp.next;
  }
  head = temp;
  while (temp && temp.next) {
    if (ctHash[temp.next.val] !== 1) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
};
