function isSubset(list1, list2) {
  const myHash = {};
  for (const el of list1) {
    myHash[el] = true;
  }
  for (const el of list2) {
    if (!myHash[el]) {
      return false;
    }
  }

  return true; //Return true or false
}
