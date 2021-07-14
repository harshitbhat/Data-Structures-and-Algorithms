function union(list1, list2) {
  if (!list1.head) {
    return list2;
  }
  if (!list2.head) {
    return list1;
  }

  let temp = list1.head;

  while (temp.nextElement) {
    temp = temp.nextElement;
  }

  temp.nextElement = list2.head;
  list1.removeDuplicates();
  return list1;
}

//Returns a list containing the intersection of list1 and list2
function intersection(list1, list2) {
  let result = new LinkedList();
  // Write your code here
  let one = list1.head;
  while (one) {
    let two = list2.head;
    while (two) {
      if (one.data === two.data) {
        result.insertAtHead(one.data);
      }
      two = two.nextElement;
    }
    one = one.nextElement;
  }
  result.removeDuplicates();
  return result;
}
