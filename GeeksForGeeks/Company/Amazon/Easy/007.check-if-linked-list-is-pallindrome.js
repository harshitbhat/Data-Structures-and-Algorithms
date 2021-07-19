class Solution {
  //Function to check whether the list is palindrome.
  isPalindrome(head) {
    const stack = [];
    let temp = head;
    while (temp) {
      stack.push(temp.data);
      temp = temp.next;
    }
    temp = head;
    while (temp) {
      const el = stack.pop();
      if (el !== temp.data) {
        return false;
      }
      temp = temp.next;
    }
    return true;
  }
}
