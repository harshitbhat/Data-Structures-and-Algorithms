class Solution {
  //Function to check if the linked list has a loop.
  detectLoop(head) {
    let first = head;
    let second = head;

    while (second && second.next) {
      first = first.next;
      second = second.next.next;
      if (first === second) return true;
    }

    return false;
  }
}
