/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// Mine - O(n)

var deleteNode = function (node) {
  let temp = node;
  let prev = null;
  while (temp.next) {
    temp.val = temp.next.val;
    prev = temp;
    temp = temp.next;
  }
  prev.next = null;
};

// Better O(1)

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
