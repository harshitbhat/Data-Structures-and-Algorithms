class twoStacks {
  constructor(s) {
    this.array = new Array(100).fill(null);
    this.top1 = -1;
    this.top2 = 100;
  }

  push1(value) {
    if (this.top1 === this.top2 - 1) {
      return;
    }
    this.top1++;
    this.array[this.top1] = value;
  }

  push2(value) {
    if (this.top1 === this.top2 - 1) {
      return;
    }
    this.top2--;
    this.array[this.top2] = value;
  }

  pop1() {
    if (this.top1 === -1) {
      return;
    }
    const popped = this.array[this.top1];
    this.top1--;
    return popped;
  }

  pop2() {
    if (this.top2 === 100) {
      return;
    }
    const popped = this.array[this.top2];
    this.top2++;
    return popped;
  }
}
