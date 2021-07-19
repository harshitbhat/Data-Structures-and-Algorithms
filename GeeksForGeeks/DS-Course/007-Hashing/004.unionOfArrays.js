// Union of arrays

// Set

function union(a, b) {
  const unionEls = [];
  const mySet = new Set([...a, ...b]);
  for (const el of mySet) {
    unionEls.push(el);
  }
  console.log(unionEls);
}

const a = [1, 2, 3, 4, 5, 6, 6, 6];
const b = [2, 2, 4, 4, 4, 6, 10, 600];

union(a, b);
