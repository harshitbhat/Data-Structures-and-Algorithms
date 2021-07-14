function reverse(list) {
  if (!list.head || !list.head.nextElement) {
    return list;
  }

  let prev = null;
  let curr = list.head;
  let next = curr.nextElement;

  while (curr) {
    curr.nextElement = prev;
    prev = curr;
    curr = next;
    next = curr && curr.nextElement;
  }
  list.head = prev;
  return list;
}
