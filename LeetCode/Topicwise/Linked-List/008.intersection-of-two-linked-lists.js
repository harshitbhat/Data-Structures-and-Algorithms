/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// O(n^2)

var getIntersectionNode = function (headA, headB) {
  for (let t1 = headA; t1 != null; t1 = t1.next) {
    for (let t2 = headB; t2 != null; t2 = t2.next) {
      if (t1 === t2) {
        return t1;
      }
    }
  }
  return null;
};

// Two Pointers

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let temp1 = headA;
  let temp2 = headB;

  while (temp1 !== temp2) {
    temp1 = temp1.next;
    temp2 = temp2.next;

    if (temp1 === temp2) return temp1;

    if (temp1 === null) temp1 = headB;
    if (temp2 === null) temp2 = headA;
  }

  return temp1;
};
