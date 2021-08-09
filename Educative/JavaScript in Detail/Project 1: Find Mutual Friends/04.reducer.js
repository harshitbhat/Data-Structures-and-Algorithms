function reducer(grouped_obj) {
  const reduced_obj = {};
  for (const [key, val] of Object.entries(grouped_obj)) {
    reduced_obj[key] = [];
    for (const el1 of val[0]) {
      for (const el2 of val[1]) {
        if (el1 === el2) {
          reduced_obj[key].push(el1);
        }
      }
    }
  }
  return reduced_obj;
}

reducer({
  AB: [
    ['B', 'C', 'D'],
    ['A', 'D'],
  ],
  AC: [['B', 'C', 'D'], ['A']],
  AD: [
    ['B', 'C', 'D'],
    ['A', 'B'],
  ],
  BD: [
    ['A', 'D'],
    ['A', 'B'],
  ],
});

/*

grouped_obj = {
  'AB' : [['B', 'C', 'D'], ['A', 'D']],
  'AC' : [['B', 'C', 'D'], ['A']],
  'AD' : [['B', 'C', 'D'], ['A', 'B']],
  'BD' : [['A', 'D'], ['A', 'B']],
};

var reduced_obj = {
  'AB' : ['D'],
  'AC' : [],
  'AD' : ['B'],
  'BD' : ['A'],
};


*/
