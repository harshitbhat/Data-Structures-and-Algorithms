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

console.log(bst);
