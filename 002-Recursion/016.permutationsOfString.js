function permutations(s, i = 0) {
  if (i === s.length) {
    console.log(s.join(''));
    return;
  }
  for (let j = i; j < s.length; j++) {
    [s[i], s[j]] = [s[j], s[i]];
    permutations(s, i + 1);
    [s[j], s[i]] = [s[i], s[j]];
  }
}

permutations('ABC'.split(''));
