function length(list) {
  let length = 0;
  let temp = list.head;
  while (temp) {
    length++;
    temp = temp.nextElement;
  }
  return length;
}
