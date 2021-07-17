function findKNodes(rootNode, k) {
  if (!rootNode) return null;

  const queue = [];
  const ans = [];
  queue.push([rootNode, 0]);
  while (queue.length > 0) {
    const front = queue.shift();
    if (front[1] === k) {
      ans.push(front[0].val);
      while (queue.length) {
        const rem = queue.shift();
        ans.push(rem[0].val);
      }
    } else {
      if (front[0].leftChild) {
        queue.push([front[0].leftChild, front[1] + 1]);
      }
      if (front[0].rightChild) {
        queue.push([front[0].rightChild, front[1] + 1]);
      }
    }
  }
  return ans;
}
