// Naive Solution - Traverse both the arrays, O(m * n)

function interectionN(a, b) {
  const m = a.length;
  const n = b.length;

  for (let i = 0; i < m; i++) {
    // To check for duplicates
    if (i > 0 && a[i] == a[i - 1]) continue;
    for (j = 0; j < n; j++) {
      if (a[i] === b[j]) {
        console.log(a[i]);
        break;
      }
    }
  }
}

// Efficient - using merge function

function intersection(a, b) {
  const m = a.length;
  const n = b.length;
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (i > 0 && a[i] === a[i - 1]) {
      i++;
      continue;
    }
    if (a[i] === b[j]) {
      console.log(a[i]);
      i++;
      j++;
    } else if (a[i] < b[j]) {
      i++;
    } else {
      j++;
    }
  }
}

a = [1, 2, 20, 20, 40, 60];
b = [2, 20, 20, 20, 20, 60];

intersection(a, b);
