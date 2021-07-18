function balanced(str, startIndex = 0, currentIndex = 0) {
  if (startIndex === str.length) {
    return currentIndex === 0;
  }
  if (currentIndex < 0) {
    return false;
  }
  if (str[startIndex] === '(') {
    return balanced(str, startIndex + 1, currentIndex + 1);
  } else if (str[startIndex] === ')') {
    return balanced(str, startIndex + 1, currentIndex - 1);
  } else {
    return false;
  }
}
