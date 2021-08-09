/*

mapped_arr = [
  { 'AB' : ['B', 'C', 'D'] }, // from 'A'
  { 'AC' : ['B', 'C', 'D'] }, // from 'A'
  { 'AD' : ['B', 'C', 'D'] }, // from 'A'
  { 'AB' : ['A', 'D'] }, // from 'B'
  { 'BD' : ['A', 'D'] }, // from 'B'
  { 'AC' : ['A'] }, // from 'C'
  { 'AD' : ['A', 'B'] }, // from 'D'
  { 'BD' : ['A', 'B'] }, // from 'D'
];

to 

// output object
var grouped_friends = {
  'AB' : [['B', 'C', 'D'], ['A', 'D']],
  'AC' : [['B', 'C', 'D'], ['A']],
  'AD' : [['B', 'C', 'D'], ['A', 'B']],
  'BD' : [['A', 'D'], ['A', 'B']],
};

*/

function group(mapped_arr) {
  var obj = {};
  for (const pair of mapped_arr) {
    for (const [key, val] of Object.entries(pair)) {
      if (obj[key]) {
        obj[key].push(val);
      } else {
        obj[key] = [];
        obj[key].push(val);
      }
    }
  }
  return obj;
}

// const mapped_arr = [
//   { AB: ['B', 'C', 'D'] }, // from 'A'
//   { AC: ['B', 'C', 'D'] }, // from 'A'
//   { AD: ['B', 'C', 'D'] }, // from 'A'
//   { AB: ['A', 'D'] }, // from 'B'
//   { BD: ['A', 'D'] }, // from 'B'
//   { AC: ['A'] }, // from 'C'
//   { AD: ['A', 'B'] }, // from 'D'
//   { BD: ['A', 'B'] }, // from 'D'
// ];

// group(mapped_arr);
