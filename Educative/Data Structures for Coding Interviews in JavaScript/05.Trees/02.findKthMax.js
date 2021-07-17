function inOrder(root, arr) {
  if (!root) return;
  inOrder(root.leftChild, arr);
  arr.push(root.val);
  inOrder(root.rightChild, arr);
}

function findKthMax(rootNode, k) {
  const arr = [];
  inOrder(rootNode, arr);
  const n = arr.length;
  return arr[n - k];
}
