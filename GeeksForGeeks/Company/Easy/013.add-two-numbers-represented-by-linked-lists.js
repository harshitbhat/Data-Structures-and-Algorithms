/**
 * @param {Node} first
 * @param {Node} second
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  length(head) {
    let l = 0;
    let temp = head;
    while (temp) {
      l++;
      temp = temp.next;
    }
    return l;
  }
  addTwoLists(first, second) {
    let l1 = this.length(first) - 1;
    let l2 = this.length(second) - 1;

    let temp = first;
    let num1 = 0;
    while (temp) {
      num1 += temp.data * 10 ** l1;
      l1--;
      temp = temp.next;
    }

    temp = second;
    let num2 = 0;
    while (temp) {
      num2 += temp.data * 10 ** l2;
      l2--;
      temp = temp.next;
    }

    let sum = num1 + num2 + '';
    sum = sum.split('').reverse().join('');
    temp = new Node(null);
    let head = temp;
    while (sum) {
      temp.next = new Node(sum[sum.length - 1]);
      sum = sum.slice(0, sum.length - 1);
      temp = temp.next;
    }
    return head.next;
  }
}
