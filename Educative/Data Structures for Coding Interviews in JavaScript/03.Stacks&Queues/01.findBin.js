function findBin(n) {
  let result = [];

  let queue = [];
  let s1, s2;

  queue.push('1');
  for (let i = 0; i < n; i++) {
    result.push(queue.shift());

    s1 = result[i] + '0';
    s2 = result[i] + '1';

    queue.push(s1);
    queue.push(s2);
  }
  return result;
}
