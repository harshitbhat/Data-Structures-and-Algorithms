function subsets(s, curr, idx) {
  if (idx == s.length) {
    console.log(curr);
    return;
  }
  subsets(s, curr, idx + 1);
  subsets(s, curr + s[idx], idx + 1);
}

const s = 'abc';
subsets(s, '', 0);
