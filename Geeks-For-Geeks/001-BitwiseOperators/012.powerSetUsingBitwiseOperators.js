const powerSet = (str) => {
  const n = str.length;
  const size = 2 ** n;
  const allSet = [];
  for (let i = 0; i < size; i++) {
    let subSet = '';
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) != 0) {
        subSet += str[j];
      }
    }
    allSet.push(subSet);
  }
  console.log(allSet);
  return allSet;
};

powerSet('abc');
