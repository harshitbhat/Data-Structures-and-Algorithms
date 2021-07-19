function findSymmetric(my_list) {
  const res = [];

  const myHash = {};

  for (const el of my_list) {
    myHash[el[0]] = el[1];
  }

  for (const el of my_list) {
    if (myHash[el[1]] && myHash[el[1]] === el[0]) {
      res.push(el);
    }
  }

  return res;
}
