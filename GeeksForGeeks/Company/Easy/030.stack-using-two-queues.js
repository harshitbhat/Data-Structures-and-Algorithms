/*
class Queue{
    constructor(){
        this.arr = [];
        this.front = 0;
    }
    
    push(a){
        this.arr.push(a);
    }
    
    pop(){
        if(this.arr.length != this.front){
            let x = this.arr[this.front];
            this.front++;
            return x;
        }
        else
            return -1;
    }
    
    front_ele(){
        return this.arr[this.front];
    }
    
    empty(){
        if(this.arr.length != this.front)
            return false;
        else
            return true;
    }
}
*/

class QueueStack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  /**
   * @param {number} x
   */

  //Function to push an element into stack using two queues.
  push(x) {
    this.q1.push(x);
  }

  /**
   * @returns {number}
   */

  //Function to pop an element from stack using two queues.
  pop() {
    if (this.q1.empty()) {
      return -1;
    }
    let removed;
    while (!this.q1.empty()) {
      const temp = this.q1.pop();
      if (this.q1.empty()) {
        removed = temp;
      } else {
        this.q2.push(temp);
      }
    }

    while (!this.q2.empty()) {
      this.q1.push(this.q2.pop());
    }

    return removed;
  }
}
