function isVowel(ch) {
  return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u';
}

// Flawed Logic - little change needed - traverse from end rather than beginning to fill the array, the solution would work...
/*
module.exports = {
  //param A : string
  //return an integer
  solve: function (str) {
    const n = str.length;
    const consonants = new Array(n).fill(0);
    const vowels = new Array(n).fill(0);
    const MOD = 10 ** 9 + 7;

    consonants[0] = isVowel(str[0]) ? 0 : 1;
    vowels[0] = isVowel(str[0]) ? 1 : 0;
    for (let i = 1; i < n; i++) {
      if (isVowel(str[i])) {
        consonants[i] = consonants[i - 1];
        vowels[i] = vowels[i - 1] + 1;
      } else {
        consonants[i] = 1 + consonants[i - 1];
        vowels[i] = vowels[i - 1];
      }
    }

    consonants.reverse();
    vowels.reverse();

    let ans = 0;
    for (let i = 0; i < n; i++) {
      if (isVowel(str[i])) {
        ans = ((ans % MOD) + (consonants[i] % MOD)) % MOD;
      } else {
        ans = ((ans % MOD) + (vowels[i] % MOD)) % MOD;
      }
    }

    return ans;
  },
};

*/

module.exports = {
  //param A : string
  //return an integer
  solve: function (str) {
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
      if (isVowel(str[i])) {
        vowels++;
      }
    }
    return (vowels * (str.length - vowels)) % (10 ** 9 + 7);
  },
};
