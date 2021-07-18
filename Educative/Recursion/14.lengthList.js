import LinkedList from './linkedList.js';

function length(list, head) {
  if (head === null) {
    return 0;
  }
  return 1 + length(list, head.next);
}
