class MaxHeap {
  constructor() {
    this.heap = [];
    this.elements = 0;
  }
}

// Insert
MaxHeap.prototype.insert = function (val) {
  if (this.elements >= this.heap.length) {
    this.elements = this.elements + 1;
    this.heap.push(val);
    this.__percolateUp(this.elements - 1);
  } else {
    this.heap[this.elements] = val;
    this.elements = this.elements + 1;
    this.__percolateUp(this.elements - 1);
  }
};

//Get Max
MaxHeap.prototype.getMax = function () {
  if (this.elements !== 0) {
    return this.heap[0];
  }
  return null;
};

// Remove Maximum element
MaxHeap.prototype.removeMax = function () {
  if (this.elements > 1) {
    let max = this.heap[0];
    this.heap[0] = this.heap[this.elements - 1];
    this.elements = this.elements - 1;
    this.__maxHeapify(0);
    return max;
  } else if (this.elements === 1) {
    let max = this.heap[0];
    this.elements = this.elements - 1;
    return max;
  } else {
    return null;
  }
};

// restores the heap property
MaxHeap.prototype.__percolateUp = function (index) {
  if (index <= 0) {
    return;
  }
  let parent = Math.floor((index - 1) / 2);
  if (this.heap[parent] < this.heap[index]) {
    var tmp = this.heap[parent];
    this.heap[parent] = this.heap[index];
    this.heap[index] = tmp;
    this.__percolateUp(parent);
  }
};

MaxHeap.prototype.__maxHeapify = function (index) {
  var left = index * 2 + 1;
  var right = index * 2 + 2;
  var largest = index;
  if (this.elements > left && this.heap[largest] < this.heap[left]) {
    largest = left;
  }
  if (this.elements > right && this.heap[largest] < this.heap[right])
    largest = right;
  if (largest != index) {
    var tmp = this.heap[largest];
    this.heap[largest] = this.heap[index];
    this.heap[index] = tmp;
    this.__maxHeapify(largest);
  }
};

MaxHeap.prototype.buildHeap = function (arr) {
  this.heap = arr;
  this.elements = this.heap.length;
  for (var i = this.heap.length - 1; i >= 0; i--) {
    this.__maxHeapify(i);
  }
};

module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  nchoc: function (A, B) {
    const mod = 10 ** 9 + 7;
    let ans = 0;
    const myHeap = new MaxHeap();
    myHeap.buildHeap(B);
    while (A > 0) {
      A--;
      const maxEl = myHeap.getMax();
      ans = ((ans % mod) + (maxEl % mod)) % mod;
      myHeap.removeMax();
      myHeap.insert(Math.floor(maxEl / 2));
    }
    return ans;
  },
};
