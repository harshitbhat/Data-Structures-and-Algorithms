function detectLoop(list) {
  let first = list.head;
  let second = list.head;

  while (second && second.nextElement) {
    first = first.nextElement;
    second = second.nextElement.nextElement;
    if (first === second) {
      return true;
    }
  }

  return false;
}
