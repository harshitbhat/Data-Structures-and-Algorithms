function findMin(rootNode) {
  // your code goes here
  if (rootNode === null) {
    return -1;
  }
  let currentNode = rootNode;
  while (currentNode.leftChild) {
    currentNode = currentNode.leftChild;
  }
  return currentNode.val;
}
