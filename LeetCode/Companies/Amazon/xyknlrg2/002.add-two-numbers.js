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
var addTwoNumbers = function (l1, l2) {
  let carry = 0;

  let temp1 = l1;
  let temp2 = l2;

  let temp = new ListNode(null);
  const head = temp;

  while (temp1 && temp2) {
    let sum = temp1.val + temp2.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    temp.next = new ListNode(sum);
    temp = temp.next;
    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  // check if first list remains
  while (temp1) {
    let sum = temp1.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    temp.next = new ListNode(sum);
    temp = temp.next;
    temp1 = temp1.next;
  }
  // check if second list remains
  while (temp2) {
    let sum = temp2.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    temp.next = new ListNode(sum);
    temp = temp.next;
    temp2 = temp2.next;
  }

  if (carry !== 0) {
    temp.next = new ListNode(carry);
  }

  return head.next;
};
