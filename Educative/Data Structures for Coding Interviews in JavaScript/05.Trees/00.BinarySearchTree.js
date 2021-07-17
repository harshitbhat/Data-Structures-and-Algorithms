class Node {
  constructor(value) {
    this.val = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor(rootVal) {
    this.root = rootVal ? new Node(rootVal) : null;
  }
}

// Insert Iterative
BinarySearchTree.prototype.insertIt = function (newVal) {
  if (this.root === null) {
    this.root = new Node(newVal);
    return;
  }

  let currentNode = this.root;
  let parent;

  while (currentNode) {
    parent = currentNode;
    if (newVal < currentNode.val) {
      currentNode = currentNode.leftChild;
    } else {
      currentNode = currentNode.rightChild;
    }
  }

  if (newVal < parent.val) {
    parent.leftChild = new Node(newVal);
  } else {
    parent.rightChild = new Node(newVal);
  }
};

//  Insert Recursive
BinarySearchTree.prototype.insertRec = function (currentNode, newVal) {
  if (currentNode === null) {
    currentNode = new Node(newVal);
  } else if (newVal < currentNode.val) {
    currentNode.leftChild = this.insertRec(currentNode.leftChild, newVal);
  } else {
    currentNode.rightChild = this.insertRec(currentNode.rightChild, newVal);
  }
  return currentNode;
};

//  PreOrder Traversal
BinarySearchTree.prototype.preOrder = function (node) {
  if (node === null) return;
  // Visit Node
  console.log(node.val);
  // Visit left sub tree
  this.preOrder(node.leftChild);
  // Visit right sub tree
  this.preOrder(node.rightChild);
};

// InOrder Traversal
BinarySearchTree.prototype.inOrder = function (node) {
  if (node === null) return;
  // Visit left sub tree
  this.inOrder(node.leftChild);
  // Visit Node
  console.log(node.val);
  // Visit right sub tree
  this.inOrder(node.rightChild);
};

// PostOrder Traversal
BinarySearchTree.prototype.postOrder = function (node) {
  if (node === null) return;
  // Visit left sub tree
  this.postOrder(node.leftChild);
  // Visit right sub tree
  this.postOrder(node.rightChild);
  // Visit Node
  console.log(node.val);
};

BinarySearchTree.prototype.search = function (value) {
  let currentNode = this.root;
  while (currentNode && currentNode.val !== value) {
    if (value < currentNode.value) {
      currentNode = currentNode.leftChild;
    } else {
      currentNode = currentNode.rightChild;
    }
  }
  return currentNode;
};

/* -------------------------------------------------------------------------- */
/*                                    Test                                    */
/* -------------------------------------------------------------------------- */
// 6,4,9,2,5,8,12,10,14
const bst = new BinarySearchTree();
bst.insertIt(6);
bst.insertIt(4);
bst.insertIt(9);
bst.insertIt(2);
bst.insertIt(5);
bst.insertIt(8);

bst.preOrder(bst.root);
console.log('='.repeat(20));
bst.inOrder(bst.root);
console.log('='.repeat(20));
bst.postOrder(bst.root);
