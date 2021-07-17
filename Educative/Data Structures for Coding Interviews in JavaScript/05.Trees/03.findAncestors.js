function findAncestors(rootNode, k) {
  // your code goes here
  const ans = [];

  let curr = rootNode;

  while (curr) {
    if (curr.val === k) {
      break;
    } else if (k < curr.val) {
      ans.push(curr.val);
      curr = curr.leftChild;
    } else {
      ans.push(curr.val);
      curr = curr.rightChild;
    }
  }
  return curr === null ? [] : ans.reverse();
}
