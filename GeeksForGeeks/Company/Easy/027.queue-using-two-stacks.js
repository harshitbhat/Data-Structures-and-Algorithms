class StackQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  /**
   * @param {number} B
   */

  //Function to push an element in queue by using 2 stacks.
  push(B) {
    this.s1.push(B);
  }

  /**
   * @returns {number}
   */

  //Function to pop an element from queue by using 2 stacks.
  pop() {
    if (this.s1.empty()) {
      return -1;
    }

    while (!this.s1.empty()) {
      const removed = this.s1.front();
      this.s2.push(removed);
      this.s1.pop();
    }

    const ans = this.s2.front();
    this.s2.pop();

    while (!this.s2.empty()) {
      const removed = this.s2.front();
      this.s1.push(removed);
      this.s2.pop();
    }

    return ans;
  }
}
