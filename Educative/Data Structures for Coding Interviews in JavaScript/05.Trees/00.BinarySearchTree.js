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

BinarySearchTree.prototype.delete = function (currentNode, value) {
  // Empty tree
  if (currentNode === null) return false;

  // Search for node in tree
  let parentNode;
  while (currentNode && currentNode.val !== value) {
    parentNode = currentNode;
    if (value < currentNode.val) {
      currentNode = currentNode.leftChild;
    } else {
      currentNode = currentNode.rightChild;
    }
  }

  // if node is not present
  if (currentNode === null) return false;
  // Leaf Node
  else if (currentNode.leftChild === null && currentNode.rightChild === null) {
    // check if node is a left or a right child of its parent or if it's the root
    if (currentNode.val === this.root.val) {
      this.root = null;
      return true;
    } else if (currentNode.val < parentNode.val) {
      parentNode.leftChild = null;
      return true;
    } else {
      parentNode.rightChild = null;
      return true;
    }
  }
  // if the node to be deleted has a left child only
  else if (currentNode.rightChild === null) {
    if (currentNode.val === this.root.val) {
      this.root = this.root.leftChild;
      return true;
    } else if (currentNode.leftChild.val < parentNode.val) {
      parentNode.leftChild = currentNode.leftChild;
      return true;
    } else {
      parentNode.rightChild = currentNode.leftChild;
      return true;
    }
  }
  // if the node to be deleted has a right child only
  else if (currentNode.leftChild === null) {
    if (currentNode.val === this.root.val) {
      this.root = this.root.rightChild;
      return true;
    } else if (currentNode.rightChild.val < parentNode.val) {
      parentNode.leftChild = currentNode.rightChild;
      return true;
    } else {
      parentNode.rightChild = currentNode.rightChild;
      return true;
    }
  }
  // node to be deleted has 2 children
  else {
    // find the left most node in the right subtree
    let minRight = currentNode.rightChild;
    while (minRight.leftChild) {
      minRight = minRight.leftChild;
    }
    var temp = minRight.val;
    this.delete(this.root, minRight.val);
    currentNode.val = temp;
  }
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
