// Naive: two loops, checking for one element for each element in other array

// Use set.

function intersection(a, b) {
  const mySet = new Set(a);
  const interElems = [];
  for (const el of b) {
    if (mySet.has(el)) {
      interElems.push(el);
      mySet.delete(el);
    }
  }
  console.log(interElems);
}

const a = [1, 2, 3, 4, 5, 6, 6, 6, 6];
const b = [2, 2, 4, 4, 4, 6];

intersection(a, b);
