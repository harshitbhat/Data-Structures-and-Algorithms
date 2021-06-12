// O(n logn) - for sort
/*
function checkAnagram(s1, s2) {
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');
  return s1 === s2;
}
*/

// use extra space
function checkAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  const hash = {};
  for (const ch of s1) {
    if (hash[ch]) hash[ch]++;
    else hash[ch] = 1;
  }
  for (const ch of s2) {
    if (hash[ch]) hash[ch]--;
  }
  for (const key in hash) {
    if (hash[key] !== 0) return false;
  }
  return true;
}

console.log(checkAnagram('listen', 'silent'));
console.log(checkAnagram('aaabc', 'cabaa'));
console.log(checkAnagram('aab', 'bab'));
