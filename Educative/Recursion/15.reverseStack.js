import Stack from './stack.js';

function insertAtBottom(stack, item) {
  if (stack.isEmpty()) {
    stack.push(item);
  } else {
    const temp = stack.pop();
    insertAtBottom(stack, item);
    stack.push(temp);
  }
}

function reverse(stack) {
  if (stack.isEmpty()) {
    return;
  }
  const top = stack.pop();
  reverse(stack);
  insertAtBottom(stack, top);
}
