// Naive: O(n^2) - check forevery element and check if it has appeared

// O(nlogn) sort and traverse once

// O(n) use extra space
function countFreq(arr) {
  const myMap = new Map();
  for (const el of arr) {
    if (myMap.has(el)) {
      myMap.set(el, myMap.get(el) + 1);
    } else myMap.set(el, 1);
  }

  for (let [key, val] of myMap) {
    console.log(`${key} : ${val}`);
  }
}

const arr = [1, 2, 2, 3, 3, 5, 4, 4, 1, 1, 6];
countFreq(arr);
