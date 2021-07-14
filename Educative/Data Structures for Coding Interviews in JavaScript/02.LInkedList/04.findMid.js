function findMid(list) {
  if (list.isEmpty()) {
    return null;
  }

  if (list.head.nextElement === null) {
    return list.head;
  }

  let first = list.head;
  let second = list.head;
  while (second && second.nextElement && second.nextElement.nextElement) {
    first = first.nextElement;
    second = second.nextElement.nextElement;
  }
  return first;
}
