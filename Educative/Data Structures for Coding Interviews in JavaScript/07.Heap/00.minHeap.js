class MinHeap {
  constructor() {
    this.heap = [];
    this.elements = 0;
  }
}

MinHeap.prototype.insert = function (val) {
  if (this.elements >= this.heap.length) {
    this.elements = this.elements + 1;
    this.heap.push(val);
    this.__percolateUp(this.heap.length - 1);
  } else {
    this.heap[this.elements] = val;
    this.elements = this.elements + 1;
    this.__percolateUp(this.elements - 1);
  }
};

MinHeap.prototype.getMin = function () {
  if (this.heap.length != 0) return this.heap[0];
  return null;
};

MinHeap.prototype.removeMin = function () {
  if (this.elements > 1) {
    var min = this.heap[0];
    this.heap[0] = this.heap[this.elements - 1];
    this.elements = this.elements - 1;
    this.__minHeapify(0);
    return min;
  } else if (this.elements == 1) {
    var min = this.heap[0];
    this.elements = this.elements - 1;
    return min;
  } else {
    return null;
  }
};

MinHeap.prototype.__percolateUp = function (index) {
  var parent = Math.floor((index - 1) / 2);
  if (index <= 0) return;
  else if (this.heap[parent] > this.heap[index]) {
    var tmp = this.heap[parent];
    this.heap[parent] = this.heap[index];
    this.heap[index] = tmp;
    this.__percolateUp(parent);
  }
};

MinHeap.prototype.__minHeapify = function (index) {
  var left = index * 2 + 1;
  var right = index * 2 + 2;
  var smallest = index;
  if (this.elements > left && this.heap[smallest] > this.heap[left]) {
    smallest = left;
  }
  if (this.elements > right && this.heap[smallest] > this.heap[right])
    smallest = right;
  if (smallest != index) {
    var tmp = this.heap[smallest];
    this.heap[smallest] = this.heap[index];
    this.heap[index] = tmp;
    this.__minHeapify(smallest);
  }
};

MinHeap.prototype.buildHeap = function (arr) {
  this.heap = arr;
  this.elements = this.heap.length;
  for (var i = this.heap.length - 1; i >= 0; i--) {
    this.__minHeapify(i);
  }
};
