function findHeight(rootNode) {
  if (!rootNode || (!rootNode.leftChild && !rootNode.rightChild)) return 0;
  return (
    1 +
    Math.max(findHeight(rootNode.leftChild), findHeight(rootNode.rightChild))
  );
}
