function mapper(setup_arr) {
  var arr = [];
  for (const [key, val] of Object.entries(setup_arr)) {
    for (const friend of val) {
      const pair = (key + friend).split('').sort().join('');
      arr.push({
        [pair]: val,
      });
    }
  }
  return arr;
}
