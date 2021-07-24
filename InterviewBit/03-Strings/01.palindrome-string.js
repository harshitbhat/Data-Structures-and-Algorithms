const isAplhanumeric = (ch) => {
  return ch.match(/^[a-z0-9]+$/i) !== null;
};

module.exports = {
  //param A : string
  //return an integer
  isPalindrome: function (str) {
    str = str.split(' ').join('').toLowerCase();
    let i = 0;
    let j = str.length - 1;
    while (i <= j) {
      if (isAplhanumeric(str[i]) && isAplhanumeric(str[j])) {
        if (str[i] !== str[j]) {
          return 0;
        }
        i++;
        j--;
      } else if (isAplhanumeric(str[i])) {
        j--;
      } else if (isAplhanumeric(str[j])) {
        i++;
      } else {
        i++;
        j--;
      }
    }
    return 1;
  },
};

function solve(str) {
  str = str.split(' ').join('').toLowerCase();
  console.log(str);
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    console.log(str[i], ' ', str[j]);
    console.log(isAplhanumeric(str[i]), ' ', isAplhanumeric(str[j]));
    if (isAplhanumeric(str[i]) && isAplhanumeric(str[j])) {
      if (str[i] !== str[j]) {
        return 0;
      }
      i++;
      j--;
    } else if (isAplhanumeric(str[i])) {
      j--;
    } else if (isAplhanumeric(str[j])) {
      i++;
    } else {
      i++;
      j--;
    }
  }
  return 1;
}

console.log(solve('A man, a plan, a canal: Panama'));
