function length(list) {
  let length = 0;
  let temp = list.head;
  while (temp) {
    length++;
    temp = temp.nextElement;
  }
  return length;
}

function findNth(list, n) {
  let l = length(list);
  if (n > l) {
    return null;
  }
  let i = 1;
  let temp = list.head;
  while (i < l - n + 1) {
    temp = temp.nextElement;
    i++;
  }
  return temp;
}
