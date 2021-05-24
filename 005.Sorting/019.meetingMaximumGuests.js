function maxGuests(arrival, departure) {
  const n = arrival.length;
  arrival.sort((a, b) => a - b);
  departure.sort((a, b) => a - b);
  let i = 1;
  let j = 0;
  let ans = 1;
  let curr = 1;
  while (i < n && j < n) {
    if (arrival[i] <= departure[j]) {
      curr++;
      i++;
    } else {
      curr--;
      j++;
    }
    ans = Math.max(ans, curr);
  }
  console.log(ans);
  return ans;
}

const a = [900, 600, 700];
const d = [1000, 800, 730];
maxGuests(a, d);
