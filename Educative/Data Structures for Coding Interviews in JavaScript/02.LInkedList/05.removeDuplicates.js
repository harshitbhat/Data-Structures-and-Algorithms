function removeDuplicates(list) {
  //Write your code here
  if (!list.head || !list.head.nextElement) {
    return list;
  }

  //   Brute Force

  let outer = list.head;
  while (outer) {
    let inner = outer;
    while (inner) {
      if (inner.nextElement && outer.data === inner.nextElement.data) {
        inner.nextElement = inner.nextElement.nextElement;
      } else {
        inner = inner.nextElement;
      }
    }
    outer = outer.nextElement;
  }
  return list; //return the updated list here
}
